---
stackbit_url_path: >-
  posts/使用-nmap-工具扫描指定主机支持哪些-IP-协议
title: '使用 nmap 工具扫描指定主机支持哪些 IP 协议'
date: '2010-01-30 13:39:04'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/01/30/使用-nmap-工具扫描指定主机支持哪些-IP-协议
template: post
---

        <div style="text-indent: 2em;">
<p>以下是使用 nmap 工具扫描指定主机支持哪些 IP 协议（TCP、ICMP、IGMP等）的三个实例。nmap 工具可以上 <a href="http://insecure.org/nmap" title="nmap 下载" target="_blank">http://insecure.org/nmap</a> 网站下载。</p>
<p>一、</p>
<pre style="text-indent: 0; background-color: black; color: white; padding: 10px; margin-left: 4em;">D:\Program Files\nmap-5.21&gt;nmap -sO 192.168.1.12 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-01-30 21:36 中国标准时间
Skipping IPProto Scan against 192.168.1.12 because Windows does not support scan
ning your own machine (localhost) this way.
Nmap scan report for 192.168.1.12
Host is up.
PROTOCOL STATE   SERVICE
0        unknown hopopt
1        unknown icmp
2        unknown igmp
3        unknown ggp
4        unknown ip
5        unknown st
6        unknown tcp
7        unknown cbt
8        unknown egp
9        unknown igp
10       unknown bbn-rcc-mon
11       unknown nvp-ii
12       unknown pup
13       unknown argus
14       unknown emcon
15       unknown xnet
16       unknown chaos
17       unknown udp
18       unknown mux
19       unknown dcn-meas
20       unknown hmp
21       unknown prm
22       unknown xns-idp
23       unknown trunk-1
24       unknown trunk-2
25       unknown leaf-1
26       unknown leaf-2
27       unknown rdp
28       unknown irtp
29       unknown iso-tp4
30       unknown netblt
31       unknown mfe-nsp
32       unknown merit-inp
33       unknown dccp
34       unknown 3pc
35       unknown idpr
36       unknown xtp
37       unknown ddp
38       unknown idpr-cmtp
39       unknown tp++
40       unknown il
41       unknown ipv6
42       unknown sdrp
43       unknown ipv6-route
44       unknown ipv6-frag
45       unknown idrp
46       unknown rsvp
47       unknown gre
48       unknown mhrp
49       unknown bna
50       unknown esp
51       unknown ah
52       unknown i-nlsp
53       unknown swipe
54       unknown narp
55       unknown mobile
56       unknown tlsp
57       unknown skip
58       unknown ipv6-icmp
59       unknown ipv6-nonxt
60       unknown ipv6-opts
61       unknown anyhost
62       unknown cftp
63       unknown anylocalnet
64       unknown sat-expak
65       unknown kryptolan
66       unknown rvd
67       unknown ippc
68       unknown anydistribfs
69       unknown sat-mon
70       unknown visa
71       unknown ipcv
72       unknown cpnx
73       unknown cphb
74       unknown wsn
75       unknown pvp
76       unknown br-sat-mon
77       unknown sun-nd
78       unknown wb-mon
79       unknown wb-expak
80       unknown iso-ip
81       unknown vmtp
82       unknown secure-vmtp
83       unknown vines
84       unknown ttp
85       unknown nsfnet-igp
86       unknown dgp
87       unknown tcf
88       unknown eigrp
89       unknown ospfigp
90       unknown sprite-rpc
91       unknown larp
92       unknown mtp
93       unknown ax.25
94       unknown ipip
95       unknown micp
96       unknown scc-sp
97       unknown etherip
98       unknown encap
99       unknown anyencrypt
100      unknown gmtp
101      unknown ifmp
102      unknown pnni
103      unknown pim
104      unknown aris
105      unknown scps
106      unknown qnx
107      unknown a/n
108      unknown ipcomp
109      unknown snp
110      unknown compaq-peer
111      unknown ipx-in-ip
112      unknown vrrp
113      unknown pgm
114      unknown any0hop
115      unknown l2tp
116      unknown ddx
117      unknown iatp
118      unknown stp
119      unknown srp
120      unknown uti
121      unknown smp
122      unknown sm
123      unknown ptp
124      unknown isis-ipv4
125      unknown fire
126      unknown crtp
127      unknown crudp
128      unknown unknown
129      unknown unknown
130      unknown unknown
131      unknown unknown
132      unknown unknown
133      unknown unknown
134      unknown unknown
135      unknown unknown
136      unknown unknown
137      unknown unknown
138      unknown unknown
139      unknown unknown
140      unknown unknown
141      unknown unknown
142      unknown unknown
143      unknown unknown
144      unknown unknown
145      unknown unknown
146      unknown unknown
147      unknown unknown
148      unknown unknown
149      unknown unknown
150      unknown unknown
151      unknown unknown
152      unknown unknown
153      unknown unknown
154      unknown unknown
155      unknown unknown
156      unknown unknown
157      unknown unknown
158      unknown unknown
159      unknown unknown
160      unknown unknown
161      unknown unknown
162      unknown unknown
163      unknown unknown
164      unknown unknown
165      unknown unknown
166      unknown unknown
167      unknown unknown
168      unknown unknown
169      unknown unknown
170      unknown unknown
171      unknown unknown
172      unknown unknown
173      unknown unknown
174      unknown unknown
175      unknown unknown
176      unknown unknown
177      unknown unknown
178      unknown unknown
179      unknown unknown
180      unknown unknown
181      unknown unknown
182      unknown unknown
183      unknown unknown
184      unknown unknown
185      unknown unknown
186      unknown unknown
187      unknown unknown
188      unknown unknown
189      unknown unknown
190      unknown unknown
191      unknown unknown
192      unknown unknown
193      unknown unknown
194      unknown unknown
195      unknown unknown
196      unknown unknown
197      unknown unknown
198      unknown unknown
199      unknown unknown
200      unknown unknown
201      unknown unknown
202      unknown unknown
203      unknown unknown
204      unknown unknown
205      unknown unknown
206      unknown unknown
207      unknown unknown
208      unknown unknown
209      unknown unknown
210      unknown unknown
211      unknown unknown
212      unknown unknown
213      unknown unknown
214      unknown unknown
215      unknown unknown
216      unknown unknown
217      unknown unknown
218      unknown unknown
219      unknown unknown
220      unknown unknown
221      unknown unknown
222      unknown unknown
223      unknown unknown
224      unknown unknown
225      unknown unknown
226      unknown unknown
227      unknown unknown
228      unknown unknown
229      unknown unknown
230      unknown unknown
231      unknown unknown
232      unknown unknown
233      unknown unknown
234      unknown unknown
235      unknown unknown
236      unknown unknown
237      unknown unknown
238      unknown unknown
239      unknown unknown
240      unknown unknown
241      unknown unknown
242      unknown unknown
243      unknown unknown
244      unknown unknown
245      unknown unknown
246      unknown unknown
247      unknown unknown
248      unknown unknown
249      unknown unknown
250      unknown unknown
251      unknown unknown
252      unknown unknown
253      unknown unknown
254      unknown unknown
255      unknown unknown

Nmap done: 1 IP address (1 host up) scanned in 0.39 seconds
</pre>
<p>二、</p>
<pre style="text-indent: 0; background-color: black; color: white; padding: 10px; margin-left: 4em;">D:\Program Files\nmap-5.21&gt;nmap -sO 192.168.1.20 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-01-30 21:44 中国标准时间
Nmap scan report for 192.168.1.20
Host is up (0.00s latency).
All 256 scanned ports on 192.168.1.20 are open|filtered
MAC Address: 00:1D:72:2E:F7:64 (Wistron)

Nmap done: 1 IP address (1 host up) scanned in 7.38 seconds
</pre>
<p>三、</p>
<pre style="text-indent: 0; background-color: black; color: white; padding: 10px; margin-left: 4em;">D:\Program Files\nmap-5.21&gt;nmap -sO 192.168.1.1 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-01-30 21:45 中国标准时间
Nmap scan report for 192.168.1.1
Host is up (0.00s latency).
Not shown: 255 open|filtered protocols
PROTOCOL STATE SERVICE
1        open  icmp
MAC Address: 00:21:27:29:D0:F0 (Tp-link Technology Co.)

Nmap done: 1 IP address (1 host up) scanned in 6.42 seconds
</pre>
<p>第一与第二都是电脑，而第三个则是路由器。可见此路由器只支持一个ICMP协议。</p>
</div>
      