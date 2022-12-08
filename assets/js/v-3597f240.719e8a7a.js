"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71538],{611765:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-3597f240","path":"/advanced/more/switch-to-dev-branch.html","title":"Switch to the dev branch","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebar":"auto"},"excerpt":"","headers":[{"level":2,"title":"Linux","slug":"linux","link":"#linux","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"Home Assistant addon","slug":"home-assistant-addon","link":"#home-assistant-addon","children":[]}],"git":{"updatedTime":1670514679000},"filePathRelative":"advanced/more/switch-to-dev-branch.md"}')},494757:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var s=a(166252);const t=[(0,s.uE)('<h1 id="switch-to-the-dev-branch" tabindex="-1"><a class="header-anchor" href="#switch-to-the-dev-branch" aria-hidden="true">#</a> Switch to the dev branch</h1><p>The Zigbee2MQTT dev branch contains the latest features, improvements and supported devices. In case you want to try this, you can checkout the dev branch.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This branch is a development branch! It could be less stable than the release version!</p></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Stop Zigbee2MQTT and go to directory</span>\n<span class="token function">sudo</span> systemctl stop zigbee2mqtt\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Backup configuration</span>\n<span class="token function">cp</span> <span class="token parameter variable">-R</span> data data-backup\n\n<span class="token comment"># Update</span>\n<span class="token function">git</span> fetch origin dev\n<span class="token function">git</span> checkout dev <span class="token comment"># Change &#39;dev&#39; to &#39;master&#39; to switch back to the release version</span>\n<span class="token function">git</span> pull\n<span class="token function">npm</span> ci\n\n<span class="token comment"># Restore configuration</span>\n<span class="token function">cp</span> <span class="token parameter variable">-R</span> data-backup/* data\n<span class="token function">rm</span> <span class="token parameter variable">-rf</span> data-backup\n\n<span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><p>Use the Docker image with the <code>latest-dev</code> tag.</p><h2 id="home-assistant-addon" tabindex="-1"><a class="header-anchor" href="#home-assistant-addon" aria-hidden="true">#</a> Home Assistant addon</h2><p>Use the <code>edge</code> version.</p>',9)],i={},c=(0,a(983744).Z)(i,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)("div",null,t)}]])}}]);