---
stackbit_url_path: >-
  posts/使用-nmap-对局域网进行-UDP-扫描一例
title: '使用 nmap 对局域网进行 UDP 扫描一例'
date: '2010-01-30 13:26:37'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/01/30/使用-nmap-对局域网进行-UDP-扫描一例
template: post
---

        <div style="text-indent: 2em;">
<p>以下是一实例。nmap 工具可以上 <a href="http://insecure.org/nmap" title="nmap 下载" target="_blank">http://insecure.org/nmap</a> 网站下载。</p>
<pre style="text-indent: 0; margin-left: 4em; padding: 10px; background-color: black; color: white;">D:\Program Files\nmap-5.21&gt;nmap -sU 192.168.1.0/24 | more

Starting Nmap 5.21 ( http://nmap.org ) at 2010-01-30 21:30 中国标准时间
Nmap scan report for 192.168.1.1
Host is up (0.0020s latency).
Not shown: 997 open|filtered ports
PORT      STATE  SERVICE
53/udp    open   domain
1900/udp  closed upnp
17185/udp closed wdbrpc
MAC Address: 00:21:27:29:D0:F0 (Tp-link Technology Co.)

Skipping UDP Scan against 192.168.1.12 because Windows does not support scanning
 your own machine (localhost) this way.
Nmap scan report for 192.168.1.12
Host is up.
PORT      STATE   SERVICE
2/udp     unknown compressnet
3/udp     unknown compressnet
7/udp     unknown echo
9/udp     unknown discard
13/udp    unknown daytime
17/udp    unknown qotd
19/udp    unknown chargen
20/udp    unknown ftp-data
-- More  --
34555/udp unknown unknown
34570/udp unknown unknown
34577/udp unknown unknown
34578/udp unknown unknown
34579/udp unknown unknown
34580/udp unknown unknown
34758/udp unknown unknown
34796/udp unknown unknown
34855/udp unknown unknown
34861/udp unknown unknown
34862/udp unknown unknown
34892/udp unknown unknown
35438/udp unknown unknown
35702/udp unknown unknown
35777/udp unknown unknown
35794/udp unknown unknown
36108/udp unknown unknown
36206/udp unknown unknown
36384/udp unknown unknown
36458/udp unknown unknown
36489/udp unknown unknown
36669/udp unknown unknown
36778/udp unknown unknown
36893/udp unknown unknown
36945/udp unknown unknown
37144/udp unknown unknown
37212/udp unknown unknown
37393/udp unknown unknown
37444/udp unknown unknown
37602/udp unknown unknown
37761/udp unknown unknown
37783/udp unknown unknown
37813/udp unknown unknown
37843/udp unknown unknown
38037/udp unknown landesk-cba
38063/udp unknown unknown
38293/udp unknown landesk-cba
38412/udp unknown unknown
38498/udp unknown unknown
38615/udp unknown unknown
39213/udp unknown sygatefw
39217/udp unknown unknown
39632/udp unknown unknown
39683/udp unknown unknown
39714/udp unknown unknown
39723/udp unknown unknown
39888/udp unknown unknown
40019/udp unknown unknown
40116/udp unknown unknown
40441/udp unknown unknown
40539/udp unknown unknown
40622/udp unknown unknown
40708/udp unknown unknown
40711/udp unknown unknown
40724/udp unknown unknown
40732/udp unknown unknown
40805/udp unknown unknown
40847/udp unknown unknown
40866/udp unknown unknown
40915/udp unknown unknown
41058/udp unknown unknown
41081/udp unknown unknown
41308/udp unknown unknown
41370/udp unknown unknown
41446/udp unknown unknown
41524/udp unknown unknown
41638/udp unknown unknown
41702/udp unknown unknown
41774/udp unknown unknown
41896/udp unknown unknown
41967/udp unknown unknown
41971/udp unknown unknown
42056/udp unknown unknown
42172/udp unknown unknown
42313/udp unknown unknown
42431/udp unknown unknown
42434/udp unknown unknown
42508/udp unknown unknown
42557/udp unknown unknown
42577/udp unknown unknown
42627/udp unknown unknown
42639/udp unknown unknown
43094/udp unknown unknown
43195/udp unknown unknown
43370/udp unknown unknown
43514/udp unknown unknown
43686/udp unknown unknown
43824/udp unknown unknown
43967/udp unknown unknown
44101/udp unknown unknown
44160/udp unknown unknown
44179/udp unknown unknown
44185/udp unknown unknown
44190/udp unknown unknown
44253/udp unknown unknown
44334/udp unknown unknown
44508/udp unknown unknown
44923/udp unknown unknown
44946/udp unknown unknown
44968/udp unknown unknown
45247/udp unknown unknown
45380/udp unknown unknown
45441/udp unknown unknown
45685/udp unknown unknown
45722/udp unknown unknown
45818/udp unknown unknown
45928/udp unknown unknown
46093/udp unknown unknown
46532/udp unknown unknown
46836/udp unknown unknown
47624/udp unknown unknown
47765/udp unknown unknown
47772/udp unknown unknown
47808/udp unknown unknown
47915/udp unknown unknown
47981/udp unknown unknown
48078/udp unknown unknown
48189/udp unknown unknown
48255/udp unknown unknown
48455/udp unknown unknown
48489/udp unknown unknown
48761/udp unknown unknown
49152/udp unknown unknown
49153/udp unknown unknown
49154/udp unknown unknown
49155/udp unknown unknown
49156/udp unknown unknown
49157/udp unknown unknown
49158/udp unknown unknown
49159/udp unknown unknown
49160/udp unknown unknown
49161/udp unknown unknown
49162/udp unknown unknown
49163/udp unknown unknown
49165/udp unknown unknown
49166/udp unknown unknown
49167/udp unknown unknown
49168/udp unknown unknown
49169/udp unknown unknown
49170/udp unknown unknown
49171/udp unknown unknown
49172/udp unknown unknown
49173/udp unknown unknown
49174/udp unknown unknown
49175/udp unknown unknown
49176/udp unknown unknown
49177/udp unknown unknown
49178/udp unknown unknown
49179/udp unknown unknown
49180/udp unknown unknown
49181/udp unknown unknown
49182/udp unknown unknown
49184/udp unknown unknown
49185/udp unknown unknown
49186/udp unknown unknown
49187/udp unknown unknown
49188/udp unknown unknown
49189/udp unknown unknown
49190/udp unknown unknown
49191/udp unknown unknown
49192/udp unknown unknown
49193/udp unknown unknown
49194/udp unknown unknown
49195/udp unknown unknown
49196/udp unknown unknown
49197/udp unknown unknown
49198/udp unknown unknown
49199/udp unknown unknown
49200/udp unknown unknown
49201/udp unknown unknown
49202/udp unknown unknown
49204/udp unknown unknown
49205/udp unknown unknown
49207/udp unknown unknown
49208/udp unknown unknown
49209/udp unknown unknown
49210/udp unknown unknown
49211/udp unknown unknown
49212/udp unknown unknown
49213/udp unknown unknown
49214/udp unknown unknown
49215/udp unknown unknown
49216/udp unknown unknown
49220/udp unknown unknown
49222/udp unknown unknown
49226/udp unknown unknown
49259/udp unknown unknown
49262/udp unknown unknown
49306/udp unknown unknown
49350/udp unknown unknown
49360/udp unknown unknown
49393/udp unknown unknown
49396/udp unknown unknown
49503/udp unknown unknown
49640/udp unknown unknown
49968/udp unknown unknown
50099/udp unknown unknown
50164/udp unknown unknown
50497/udp unknown unknown
50612/udp unknown unknown
50708/udp unknown unknown
50919/udp unknown unknown
51255/udp unknown unknown
51456/udp unknown unknown
51554/udp unknown unknown
51586/udp unknown unknown
51690/udp unknown unknown
51717/udp unknown unknown
51905/udp unknown unknown
51972/udp unknown unknown
52144/udp unknown unknown
52225/udp unknown unknown
52503/udp unknown unknown
53006/udp unknown unknown
53037/udp unknown unknown
53571/udp unknown unknown
53589/udp unknown unknown
53838/udp unknown unknown
54094/udp unknown unknown
54114/udp unknown unknown
54281/udp unknown unknown
54321/udp unknown bo2k
54711/udp unknown unknown
54807/udp unknown unknown
54925/udp unknown unknown
55043/udp unknown unknown
55544/udp unknown unknown
55587/udp unknown unknown
56141/udp unknown unknown
57172/udp unknown unknown
57409/udp unknown unknown
57410/udp unknown unknown
57813/udp unknown unknown
57843/udp unknown unknown
57958/udp unknown unknown
57977/udp unknown unknown
58002/udp unknown unknown
58075/udp unknown unknown
58178/udp unknown unknown
58419/udp unknown unknown
58631/udp unknown unknown
58640/udp unknown unknown
58797/udp unknown unknown
59193/udp unknown unknown
59207/udp unknown unknown
59765/udp unknown unknown
59846/udp unknown unknown
60172/udp unknown unknown
60381/udp unknown unknown
60423/udp unknown unknown
61024/udp unknown unknown
61142/udp unknown unknown
61319/udp unknown unknown
61322/udp unknown unknown
61370/udp unknown unknown
61412/udp unknown unknown
61481/udp unknown unknown
61550/udp unknown unknown
61685/udp unknown unknown
61961/udp unknown unknown
62154/udp unknown unknown
62287/udp unknown unknown
62575/udp unknown unknown
62677/udp unknown unknown
62699/udp unknown unknown
62958/udp unknown unknown
63420/udp unknown unknown
63555/udp unknown unknown
64080/udp unknown unknown
64481/udp unknown unknown
64513/udp unknown unknown
64590/udp unknown unknown
64727/udp unknown unknown
65024/udp unknown unknown

Stats: 0:01:24 elapsed; 255 hosts completed (3 up), 1 undergoing UDP Scan
UDP Scan Timing: About 5.00% done; ETC: 21:32 (0:00:38 remaining)
Stats: 0:01:24 elapsed; 255 hosts completed (3 up), 1 undergoing UDP Scan
UDP Scan Timing: About 5.50% done; ETC: 21:32 (0:00:34 remaining)
Stats: 0:01:29 elapsed; 255 hosts completed (3 up), 1 undergoing UDP Scan
UDP Scan Timing: About 26.50% done; ETC: 21:32 (0:00:19 remaining)
Stats: 0:01:29 elapsed; 255 hosts completed (3 up), 1 undergoing UDP Scan
UDP Scan Timing: About 29.00% done; ETC: 21:32 (0:00:20 remaining)
Stats: 0:01:30 elapsed; 255 hosts completed (3 up), 1 undergoing UDP Scan
UDP Scan Timing: About 31.50% done; ETC: 21:32 (0:00:17 remaining)
Stats: 0:01:30 elapsed; 255 hosts completed (3 up), 1 undergoing UDP Scan
UDP Scan Timing: About 33.50% done; ETC: 21:32 (0:00:18 remaining)
Stats: 0:01:35 elapsed; 255 hosts completed (3 up), 1 undergoing UDP Scan
UDP Scan Timing: About 78.10% done; ETC: 21:32 (0:00:04 remaining)
Nmap scan report for 192.168.1.20
Host is up (0.00s latency).
Not shown: 999 open|filtered ports
PORT    STATE SERVICE
137/udp open  netbios-ns
MAC Address: 00:1D:72:2E:F7:64 (Wistron)

Nmap done: 256 IP addresses (3 hosts up) scanned in 96.05 seconds
</pre>
</div>
      