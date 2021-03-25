---
stackbit_url_path: >-
  posts/Bundle-javascripts-safely-in-ASPNET-MVC
title: 'Bundle javascripts safely in ASP.NET MVC'
date: '2014-04-01 04:01:42.796428'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - MVC
  - bundle
  - compress
  - javascript
canonical_url: https://be-net.azurewebsites.net/post/2014/04/01/Bundle-javascripts-safely-in-ASPNET-MVC
template: post
---
<h2><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_623.png" target="_blank"><img title="Bundle javascripts safely in ASP.NET MVC" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; float: left; padding-top: 0px; padding-left: 0px; margin: 0px 10px 0px 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="Bundle javascripts safely in ASP.NET MVC" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_342.png" width="176" align="left" height="190" /></a></h2>  <h2><font color="#9b00d3">Problem:</font></h2>  <p>The other day I spent a lot of time to figure out that why my web application didn’t work correctly is because of the ASP.NET MVC default JavaScript bundle renamed the function name of <strong>Canvas</strong> to <strong>e</strong>. So I need to find a way to make the javascripts get compressed and bundled safely.</p>  <p>&#160;</p>  <h2><font color="#9b00d3">Solution for ASP.NET MVC 4:</font></h2>  <pre class="brush: csharp">public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
#if DEBUG
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif

            bundles.Add(new ScriptBundle(&quot;~/Scripts/Common/js&quot;)
                .Include(&quot;~/Scripts/jquery-1.8.3.js&quot;)
                .Include(&quot;~/Scripts/zizhujy.com.js&quot;)
                .Include(&quot;~/Scripts/Globalize.js&quot;)
                .Include(&quot;~/Scripts/common.js&quot;)
                .Include(&quot;~/Scripts/requireLite/requireLite.js&quot;));

#if DEBUG
            foreach (var bundle in BundleTable.Bundles)
            {
                bundle.Transforms.Clear();
            }
#else
            foreach(var bundle in BundleTable.Bundles) {
                if (bundle is ScriptBundle)
                {
                    bundle.Transforms.Clear();
                    bundle.Transforms.Add(new SafeJsBundleTransform());
                }
            }
#endif
        }
}

    public class SafeJsBundleTransform : IBundleTransform
    {
        public void Process(BundleContext context, BundleResponse response)
        {
            if (context == null)
            {
                throw new ArgumentNullException(&quot;context&quot;);
            }

            if (response == null)
            {
                throw new ArgumentNullException(&quot;response&quot;);
            }

            if (!context.EnableInstrumentation)
            {
                var codeSetting = new CodeSettings
                {
                    // Important to make it all safe, otherwise the function grapher would 
                    // run to problems which extensively uses window.eval(&quot;some expression&quot;).
                    EvalTreatment = EvalTreatment.MakeAllSafe,
                    PreserveImportantComments = false
                };

                var min = new Minifier();
                var content = min.MinifyJavaScript(response.Content, codeSetting);

                if (min.ErrorList.Count &gt; 0)
                {
                    GenerateErrorResponse(response, min.ErrorList);
                }
                else
                {
                    response.Content = content;
                }
            }

            response.ContentType = &quot;text/javascript&quot;;
        }

        internal static void GenerateErrorResponse(BundleResponse bundle, IEnumerable&lt;object&gt; errors)
        {
            var content = new StringBuilder();
            content.Append(&quot;/* &quot;);
            content.AppendLine(&quot;MinifyError: &quot;);
            foreach (object current in errors)
            {
                content.AppendLine(current.ToString());
            }
            content.AppendLine(&quot; */&quot;);
            content.Append(bundle.Content);
            bundle.Content = content.ToString();
        }
    }

    public class MvcApplication : HttpApplication
    {
	// Inside your global.asax.cs
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);

		// MVC 4 style:
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }</pre>

<h2><font color="#9b00d3">Solution for ASP.NET MVC 3:</font></h2>

<pre class="brush: csharp">    public class SafeJsBundleTransform : IBundleTransform
    {
        public void Process(BundleContext context, BundleResponse response)
        {
            if (context == null)
            {
                throw new ArgumentNullException(&quot;context&quot;);
            }

            if (response == null)
            {
                throw new ArgumentNullException(&quot;response&quot;);
            }

            if (!context.EnableInstrumentation)
            {
                var codeSetting = new CodeSettings
                {
                    // Important to make it all safe, otherwise the function grapher would 
                    // run to problems which extensively uses window.eval(&quot;some expression&quot;).
                    EvalTreatment = EvalTreatment.MakeAllSafe,
                    PreserveImportantComments = false
                };

                var min = new Minifier();
                var content = min.MinifyJavaScript(response.Content, codeSetting);

                if (min.ErrorList.Count &gt; 0)
                {
                    GenerateErrorResponse(response, min.ErrorList);
                }
                else
                {
                    response.Content = content;
                }
            }

            response.ContentType = &quot;text/javascript&quot;;
        }

        internal static void GenerateErrorResponse(BundleResponse bundle, IEnumerable&lt;object&gt; errors)
        {
            var content = new StringBuilder();
            content.Append(&quot;/* &quot;);
            content.AppendLine(&quot;MinifyError: &quot;);
            foreach (object current in errors)
            {
                content.AppendLine(current.ToString());
            }
            content.AppendLine(&quot; */&quot;);
            content.Append(bundle.Content);
            bundle.Content = content.ToString();
        }
    }

    public class MvcApplication : HttpApplication
    {
	// Inside your global.asax.cs
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);

		// MVC 3 style:
            BundleTable.Bundles.EnableDefaultBundles();
        }

	protected void Application_BeginRequest(object source, EventArgs e)
         {
            HttpApplication app = (HttpApplication)source;
            HttpContext context = app.Context;

            // Attempt to perform first request initialization
            FirstRequestInitialization.Initialize(context);
        }

        private class FirstRequestInitialization
        {
            private static bool _initializedAlready = false;
            private readonly static object _SyncRoot = new Object();

            public static void Initialize(HttpContext context)
            {
                if (_initializedAlready) { return; }

                lock (_SyncRoot)
                {
                    if (_initializedAlready) { return; }

                    Init_BundleTable();

                    _initializedAlready = true;
                }
            }

            static void Init_BundleTable()
            {                
                BundleTable.Bundles.EnableDefaultBundles();
                BundleTable.Bundles.Clear();

                IBundleTransform jsTransform = new SafeJsBundleTransform();

                // scripts added to header not NOT deferred
                var commonJs = new Bundle(&quot;~/Scripts/Common/js&quot;, jsTransform);
                commonJs.AddFile(&quot;~/Scripts/jquery-1.8.3.js&quot;, true);
                commonJs.AddFile(&quot;~/Scripts/zizhujy.com.js&quot;, true);
                commonJs.AddFile(&quot;~/Scripts/Globalize.js&quot;, true);
                commonJs.AddFile(&quot;~/Scripts/common.js&quot;, true);
                commonJs.AddFile(&quot;~/Scripts/requireLite/requireLite.js&quot;, true);
                BundleTable.Bundles.Add(commonJs);
                BundleTable.Bundles.Add(stringCompressionJs);
            }
	}
    }</pre>