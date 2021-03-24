---
stackbit_url_path: >-
  posts/How-to-make-tracing-log-local-system-date-time-in-tracing-(C)
title: 'How to make tracing log local system date time in tracing (C#)'
date: '2013-07-23 02:56:22.2010679'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Regular Expression
  - datetime
  - listener
  - trace
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Background:</font></h2>  <p>You have a C# application, and you have enabled the tracing feature. Now you want to the tracing log to contain the local system date time along with the log entries.</p>  <h2><font color="#9b00d3">Analysis:</font></h2>  <p>Enable date time in the tracing is easy by simply add a <strong>DateTime</strong> option for the <strong>traceOutputOptions</strong> in your tracing config. But the tricky part is the tracing system always output UTC date time. Because by the implementation of the abstract class TraceListener, it hard coded the way of outputing the datetime value when detected the switch TraceOutputOptions.DateTime is open in its private method WriteFooter(eventCache), which looks like as below:</p>  <pre class="brush: csharp">if (IsEnabled(TraceOptions.DateTime))
	WriteLine(&quot;DateTime=&quot; + eventCache.DateTime.ToString(&quot;o&quot;, CultureInfo.InvariantCulture));</pre>

<p>The full code of TraceListener would be listed in the last part of this post.</p>

<p>So here provided a workaround solution by intercepting the message passing to WriteLine() method, and converting the UTC time to local system time if detected.</p>

<h2><font color="#9b00d3">Solution:</font></h2>

<p>2 steps:</p>

<p>1. In your Tracing config file, add an attribute <strong>traceOutputOptions</strong>=”<strong>DateTime</strong>” to your tracing listeners, for example:</p>

<pre class="brush: xml">&lt;add name=&quot;XmlLog&quot; type=&quot;System.Diagnostics.XmlWriterTraceListener&quot; initializeData=&quot;DebugInfo.xml&quot; traceOutputOptions=&quot;DateTime&quot;/&gt;</pre>

<p>2. In your own listener implementation code, override the abstract TraceListener’s WriteLine() method as follows:</p>

<pre class="brush: csharp">        public override void WriteLine(string value)
        {
            // The abstract class TraceListener's private method WriteFooter(eventCache)
            // hard coded the way to output the datetime value when detected 
            // the switch TraceOutputOptions.DateTime is open:
            //  if (IsEnabled(TraceOptions.DateTime))
            //      WriteLine(&quot;DateTime=&quot; + eventCache.DateTime.ToString(&quot;o&quot;, CultureInfo.InvariantCulture));
            // So it is hard to customize the datetime kind in the trace log, which is always
            // showing like this: DateTime=2013-07-22T03:34:14.1736743Z
            // Here intercepts the message who meets the above pattern, and converts it to
            // a local datetime fashion.
            string pattern = @&quot;^(DateTime=)(\d{4}-[0-1]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-6]\d.\d{7}Z)$&quot;;
            Regex regex = new Regex(pattern, RegexOptions.CultureInvariant | RegexOptions.IgnoreCase);
            
            value = regex.Replace(value, m =&gt;
            {
                DateTime dt;

                if (DateTime.TryParse(m.Groups[2].Value, out dt))
                {
                    return string.Format(&quot;{0}{1}&quot;,
                        m.Groups[1].Value,
                        dt.ToLocalTime().ToString(System.Globalization.CultureInfo.InvariantCulture));
                }
                else
                {
                    return m.Value;
                }
            });

            this.traceWriter.WriteLine(value);
        }</pre>

<h2><font color="#9b00d3">Effectiveness &amp; Screen shot:</font></h2>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_641.png"><img title="How to make tracing log local system date time in tracing (C#)" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="How to make tracing log local system date time in tracing (C#)" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_329.png" width="643" height="379" /></a></p>

<h2><font color="#9b00d3">Appendix:</font></h2>

<p>The source code of TraceListener (from <a href="http://www.dotnetframework.org/default.aspx/4@0/4@0/untmp/DEVDIV_TFS/Dev10/Releases/RTMRel/ndp/fx/src/CompMod/System/Diagnostics/TraceListener@cs/1305376/TraceListener@cs">http://www.dotnetframework.org/default.aspx/4@0/4@0/untmp/DEVDIV_TFS/Dev10/Releases/RTMRel/ndp/fx/src/CompMod/System/Diagnostics/TraceListener@cs/1305376/TraceListener@cs</a> ):</p>

<pre class="brush: csharp">//------------------------------------------------------------------------------
// <copyright company="Microsoft" file="TraceListener.cs">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------------
 
/*
 */
namespace System.Diagnostics {
    using System;
    using System.Text;
    using System.Security.Permissions;
    using System.Collections.Specialized;
    using System.Globalization;
    using System.Runtime.InteropServices;
    using System.Collections;
    using System.Configuration;
    using System.Runtime.Versioning;
  
    /// <devdoc>
    /// <para>Provides the <see langword="abstract ">base class for the listeners who
    ///    monitor trace and debug output.</see></para>
    /// </devdoc>
    [HostProtection(Synchronization=true)]
    public abstract class TraceListener : MarshalByRefObject, IDisposable {
  
        int indentLevel;
        int indentSize = 4;
        TraceOptions traceOptions = TraceOptions.None;
        bool needIndent = true;
 
        string listenerName;
        TraceFilter filter = null;
        StringDictionary attributes;
        internal string initializeData;
 
        /// <devdoc>
        /// <para>Initializes a new instance of the <see cref="System.Diagnostics.TraceListener"> class.</see></para>
        /// </devdoc>
        protected TraceListener () {
        }
 
        /// <devdoc>
        /// <para>Initializes a new instance of the <see cref="System.Diagnostics.TraceListener"> class using the specified name as the
        ///    listener.</see></para>
        /// </devdoc>
        protected TraceListener(string name) {
            this.listenerName = name;
        }
  
        public StringDictionary Attributes {
            get {
                if (attributes == null)
                    attributes = new StringDictionary();
                return attributes;
            }
        }
 
        /// <devdoc>
        /// <para> Gets or sets a name for this <see cref="System.Diagnostics.TraceListener">.</see></para>
        /// </devdoc>
        public virtual string Name {
            get { return (listenerName == null) ? &quot;&quot; : listenerName; }
  
            set { listenerName = value; }
        }
 
        public virtual bool IsThreadSafe {
            get { return false; }
        }
  
        /// <devdoc>
        /// </devdoc>
        public void Dispose() {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
 
        /// <devdoc>
        /// </devdoc>
        protected virtual void Dispose(bool disposing) {
            return;
        }
 
 
        /// <devdoc>
        ///    <para>When overridden in a derived class, closes the output stream
        ///       so that it no longer receives tracing or debugging output.</para>
        /// </devdoc>
        public virtual void Close() {
            return;
        }
 
        /// <devdoc>
        ///    <para>When overridden in a derived class, flushes the output buffer.</para>
        /// </devdoc>
        public virtual void Flush() {
            return;
        }
  
        /// <devdoc>
        ///    <para>Gets or sets the indent level.</para>
        /// </devdoc>
        public int IndentLevel {
            get {
                return indentLevel;
            }
 
            set {
                indentLevel = (value &lt; 0) ? 0 : value;
            }
        }
  
        /// <devdoc>
        ///    <para>Gets or sets the number of spaces in an indent.</para>
        /// </devdoc>
        public int IndentSize {
            get {
                return indentSize;
            }
 
            set {
                if (value &lt; 0)
                    throw new ArgumentOutOfRangeException(&quot;IndentSize&quot;, value, SR.GetString(SR.TraceListenerIndentSize));
                indentSize = value;
            }
        }
 
        [
        ComVisible(false)
        ]
        public TraceFilter Filter {
            get {
                return filter;
            }
            set {
                filter = value;
            }
        }
  
 
        /// <devdoc>
        ///    <para>Gets or sets a value indicating whether an indent is needed.</para>
        /// </devdoc>
        protected bool NeedIndent {
            get {
                return needIndent;
            }
  
            set {
                needIndent = value;
            }
        }
  
        [
        ComVisible(false)
        ]
        public TraceOptions TraceOutputOptions {
            get { return traceOptions; }
            set {
                if (( (int) value &gt;&gt; 6) != 0) {
                    throw new ArgumentOutOfRangeException(&quot;value&quot;);
                }
 
                traceOptions = value;
            }
        }
 
        internal void SetAttributes(Hashtable attribs) {
            TraceUtils.VerifyAttributes(attribs, GetSupportedAttributes(), this);
 
            attributes = new StringDictionary();
            attributes.ReplaceHashtable(attribs);
        }
 
        /// <devdoc>
        ///    <para>Emits or displays a message for an assertion that always fails.</para>
        /// </devdoc>
        public virtual void Fail(string message) {
            Fail(message, null);
        }
 
        /// <devdoc>
        ///    <para>Emits or displays messages for an assertion that always fails.</para>
        /// </devdoc>
        public virtual void Fail(string message, string detailMessage) {
            StringBuilder failMessage = new StringBuilder();
            failMessage.Append(SR.GetString(SR.TraceListenerFail));
            failMessage.Append(&quot; &quot;);
            failMessage.Append(message);
            if (detailMessage != null) {
                failMessage.Append(&quot; &quot;);
                failMessage.Append(detailMessage);
            }
 
            WriteLine(failMessage.ToString());
        }
 
        virtual protected internal string[] GetSupportedAttributes() {
            return null;
        }
 
        /// <devdoc>
        ///    <para>When overridden in a derived class, writes the specified
        ///       message to the listener you specify in the derived class.</para>
        /// </devdoc>
        public abstract void Write(string message);
  
        /// <devdoc>
        /// <para>Writes the name of the <paramref name="o"> parameter to the listener you specify when you inherit from the <see cref="System.Diagnostics.TraceListener">
        /// class.</see></paramref></para>
        /// </devdoc>
        public virtual void Write(object o) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(null, &quot;&quot;, TraceEventType.Verbose, 0, null, null, o))
                return;
 
            if (o == null) return;
            Write(o.ToString());
        }
 
        /// <devdoc>
        ///    <para>Writes a category name and a message to the listener you specify when you
        ///       inherit from the <see cref="System.Diagnostics.TraceListener">
        ///       class.</see></para>
        /// </devdoc>
        public virtual void Write(string message, string category) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(null, &quot;&quot;, TraceEventType.Verbose, 0, message))
                return;
 
            if (category == null)
                Write(message);
            else
                Write(category + &quot;: &quot; + ((message == null) ? string.Empty : message));
        }
  
        /// <devdoc>
        /// <para>Writes a category name and the name of the <paramref name="o"> parameter to the listener you
        ///    specify when you inherit from the <see cref="System.Diagnostics.TraceListener">
        ///    class.</see></paramref></para>
        /// </devdoc>
        public virtual void Write(object o, string category) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(null, &quot;&quot;, TraceEventType.Verbose, 0, category, null, o))
                return;
  
            if (category == null)
                Write(o);
            else
                Write(o == null ? &quot;&quot; : o.ToString(), category);
        }
  
        /// <devdoc>
        ///    <para>Writes the indent to the listener you specify when you
        ///       inherit from the <see cref="System.Diagnostics.TraceListener">
        ///       class, and resets the <see cref="TraceListener.NeedIndent"> property to <see langword="false">.</see></see></see></para>
        /// </devdoc>
        protected virtual void WriteIndent() {
            NeedIndent = false;
            for (int i = 0; i &lt; indentLevel; i++) {
                if (indentSize == 4)
                    Write(&quot;    &quot;);
                else {
                    for (int j = 0; j &lt; indentSize; j++) {
                        Write(&quot; &quot;);
                    }
                }
           }
        }
  
        /// <devdoc>
        ///    <para>When overridden in a derived class, writes a message to the listener you specify in
        ///       the derived class, followed by a line terminator. The default line terminator is a carriage return followed
        ///       by a line feed (\r\n).</para>
        /// </devdoc>
        public abstract void WriteLine(string message);
  
        /// <devdoc>
        /// <para>Writes the name of the <paramref name="o"> parameter to the listener you specify when you inherit from the <see cref="System.Diagnostics.TraceListener"> class, followed by a line terminator. The default line terminator is a
        ///    carriage return followed by a line feed
        ///    (\r\n).</see></paramref></para>
        /// </devdoc>
        public virtual void WriteLine(object o) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(null, &quot;&quot;, TraceEventType.Verbose, 0, null, null, o))
                return;
  
            WriteLine(o == null ? &quot;&quot; : o.ToString());
        }
  
        /// <devdoc>
        ///    <para>Writes a category name and a message to the listener you specify when you
        ///       inherit from the <see cref="System.Diagnostics.TraceListener"> class,
        ///       followed by a line terminator. The default line terminator is a carriage return followed by a line feed (\r\n).</see></para>
        /// </devdoc>
        public virtual void WriteLine(string message, string category) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(null, &quot;&quot;, TraceEventType.Verbose, 0, message))
                return;
            if (category == null)
                WriteLine(message);
            else
                WriteLine(category + &quot;: &quot; + ((message == null) ? string.Empty : message));
        }
 
        /// <devdoc>
        ///    <para>Writes a category
        ///       name and the name of the <paramref name="o">parameter to the listener you
        ///       specify when you inherit from the <see cref="System.Diagnostics.TraceListener">
        ///       class, followed by a line terminator. The default line terminator is a carriage
        ///       return followed by a line feed (\r\n).</see></paramref></para>
        /// </devdoc>
        public virtual void WriteLine(object o, string category) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(null, &quot;&quot;, TraceEventType.Verbose, 0, category, null, o))
                return;
 
            WriteLine(o == null ? &quot;&quot; : o.ToString(), category);
        }
 
  
        // new write methods used by TraceSource
 
        [
        ComVisible(false)
        ]
        public virtual void TraceData(TraceEventCache eventCache, String source, TraceEventType eventType, int id, object data) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(eventCache, source, eventType, id, null, null, data))
                return;
  
            WriteHeader(source, eventType, id);
            string datastring = String.Empty;
            if (data != null)
                datastring = data.ToString();
 
            WriteLine(datastring);
            WriteFooter(eventCache);
        }
  
        [
        ComVisible(false)
        ]
        public virtual void TraceData(TraceEventCache eventCache, String source, TraceEventType eventType, int id, params object[] data) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(eventCache, source, eventType, id, null, null, null, data))
                return;
  
            WriteHeader(source, eventType, id);
  
            StringBuilder sb = new StringBuilder();
            if (data != null) {
                for (int i=0; i&lt; data.Length; i++) {
                    if (i != 0)
                        sb.Append(&quot;, &quot;);
  
                    if (data[i] != null)
                        sb.Append(data[i].ToString());
                }
            }
            WriteLine(sb.ToString());
 
            WriteFooter(eventCache);
        }
  
        [
        ComVisible(false)
        ]
        public virtual void TraceEvent(TraceEventCache eventCache, String source, TraceEventType eventType, int id) {
            TraceEvent(eventCache, source, eventType, id, String.Empty);
        }
  
        // All other TraceEvent methods come through this one.
        [
        ComVisible(false)
        ]
        public virtual void TraceEvent(TraceEventCache eventCache, String source, TraceEventType eventType, int id, string message) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(eventCache, source, eventType, id, message))
                return;
 
            WriteHeader(source, eventType, id);
            WriteLine(message);
  
            WriteFooter(eventCache);
        }
  
        [
        ComVisible(false)
        ]
        public virtual void TraceEvent(TraceEventCache eventCache, String source, TraceEventType eventType, int id, string format, params object[] args) {
            if (Filter != null &amp;&amp; !Filter.ShouldTrace(eventCache, source, eventType, id, format, args))
                return;
  
            WriteHeader(source, eventType, id);
            if (args != null)
                WriteLine(String.Format(CultureInfo.InvariantCulture, format, args));
            else
                WriteLine(format);
  
            WriteFooter(eventCache);
        }
  
        [
        ComVisible(false)
        ]
        public virtual void TraceTransfer(TraceEventCache eventCache, String source, int id, string message, Guid relatedActivityId) {
            TraceEvent(eventCache, source, TraceEventType.Transfer, id, message + &quot;, relatedActivityId=&quot; + relatedActivityId.ToString());
        }
 
        private void WriteHeader(String source, TraceEventType eventType, int id) {
            Write(String.Format(CultureInfo.InvariantCulture, &quot;{0} {1}: {2} : &quot;, source, eventType.ToString(), id.ToString(CultureInfo.InvariantCulture)));
        }
  
        [ResourceExposure(ResourceScope.None)]
        [ResourceConsumption(ResourceScope.Machine, ResourceScope.Machine)]
        private void WriteFooter(TraceEventCache eventCache) {
            if (eventCache == null)
                return;
  
            indentLevel++;
            if (IsEnabled(TraceOptions.ProcessId))
                WriteLine(&quot;ProcessId=&quot; + eventCache.ProcessId);
 
            if (IsEnabled(TraceOptions.LogicalOperationStack)) {
                Write(&quot;LogicalOperationStack=&quot;);
                Stack operationStack = eventCache.LogicalOperationStack;
                bool first = true;
                foreach (Object obj in operationStack) {
                    if (!first)
                        Write(&quot;, &quot;);
                    else
                        first = false;
 
                    Write(obj.ToString());
                }
                WriteLine(String.Empty);
            }
  
            if (IsEnabled(TraceOptions.ThreadId))
                WriteLine(&quot;ThreadId=&quot; + eventCache.ThreadId);
 
            if (IsEnabled(TraceOptions.DateTime))
                WriteLine(&quot;DateTime=&quot; + eventCache.DateTime.ToString(&quot;o&quot;, CultureInfo.InvariantCulture));
  
            if (IsEnabled(TraceOptions.Timestamp))
                WriteLine(&quot;Timestamp=&quot; + eventCache.Timestamp);
  
            if (IsEnabled(TraceOptions.Callstack))
                WriteLine(&quot;Callstack=&quot; + eventCache.Callstack);
            indentLevel--;
        }
 
        internal bool IsEnabled(TraceOptions opts) {
            return (opts &amp; TraceOutputOptions) != 0;
        }
    }
}
 
// File provided for Reference Use Only by Microsoft Corporation (c) 2007.</pre>