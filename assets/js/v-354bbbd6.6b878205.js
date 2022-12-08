"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48474],{319389:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-354bbbd6","path":"/devices/FUT089Z.html","title":"MiBoxer FUT089Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"MiBoxer FUT089Z control via MQTT","description":"Integrate your MiBoxer FUT089Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-04-30T08:00:58.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Working principle","slug":"working-principle","link":"#working-principle","children":[]},{"level":3,"title":"Quirks","slug":"quirks","link":"#quirks","children":[]},{"level":3,"title":"Touchlink","slug":"touchlink","link":"#touchlink","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1670514679000},"filePathRelative":"devices/FUT089Z.md"}')},831735:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(166252);const o=(0,n._)("h1",{id:"miboxer-fut089z",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#miboxer-fut089z","aria-hidden":"true"},"#"),(0,n.Uk)(" MiBoxer FUT089Z")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"FUT089Z")],-1),l=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"RGB+CCT Remote")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, voltage, linkquality")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FUT089Z.jpg",alt:"MiBoxer FUT089Z"})])],-1),h=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the device, press the ON and OFF buttons simultaneously until the central red LED flashes quickly.</p><h3 id="working-principle" tabindex="-1"><a class="header-anchor" href="#working-principle" aria-hidden="true">#</a> Working principle</h3><p>The remote has 7 zone switches plus an eighth zone being controlled by the ON and OFF buttons. Each zone sends commands to a ZigBee group which is currently hardcoded. Zone 1 is mapped to ZigBee group 101, Zone 2 to 102 and so forth. This means that currently each remote controls the same ZigBee groups. To control a light, first create a ZigBee group with the correct ID (10X), then add the device you intend to control to that group. Do NOT add the remote itself.</p><p>There is no support for sending events instead of commands.</p><h3 id="quirks" tabindex="-1"><a class="header-anchor" href="#quirks" aria-hidden="true">#</a> Quirks</h3><p>The remote does not seem to respond to any ZigBee commands sent after initial configuration without taking out the battery and putting it back in. To send any command to it (like a Leave or configure command), take out the battery, send the command and quickly put it back in.</p><p>It does also not support binding its light output clusters or manually joining it to a group.</p><h3 id="touchlink" tabindex="-1"><a class="header-anchor" href="#touchlink" aria-hidden="true">#</a> Touchlink</h3><p>The remote supports Touchlink. It is unclear how the Touchlink configuration interacts with the regular group configuration so if you intend to use Touchlink it would probably best not to pair it to a network.</p>',11),c=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),p={},g=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[r,(0,n._)("tr",null,[l,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=MiBoxer"},{default:(0,n.w5)((()=>[(0,n.Uk)("MiBoxer")])),_:1})])]),d,s,u])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,n.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);