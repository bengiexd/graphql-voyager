/*!
 * GraphQL Voyager - Represent any GraphQL API as an interactive graph
 * -------------------------------------------------------------
 *   Version: "1.0.0-rc.7"
 *   Repo: https://github.com/APIs-guru/graphql-voyager
 */
//# sourceMappingURL=voyager.worker.js.mapd=c[a+(b+20)>>2]|0;if(d)if(d>>>0<(c[25059]|0)>>>0)Ja();else{c[p+20>>2]=d;c[d+24>>2]=p;break}}}else{f=c[a+(b+8)>>2]|0;e=c[a+(b+12)>>2]|0;d=100260+(g<<1<<2)|0;if((f|0)!=(d|0)){if(f>>>0<j>>>0)Ja();if((c[f+12>>2]|0)!=(q|0))Ja()}if((e|0)==(f|0)){c[25055]=c[25055]&~(1<<g);break}if((e|0)!=(d|0)){if(e>>>0<j>>>0)Ja();d=e+8|0;if((c[d>>2]|0)==(q|0))o=d;else Ja()}else o=e+8|0;c[f+12>>2]=e;c[o>>2]=f}while(0);c[t+4>>2]=h|1;c[t+h>>2]=h;if((t|0)==(c[25060]|0)){c[25057]=h;return}}else{c[d>>2]=e&-2;c[t+4>>2]=h|1;c[t+h>>2]=h}d=h>>>3;if(h>>>0<256){e=d<<1;g=100260+(e<<2)|0;f=c[25055]|0;d=1<<d;if(f&d){d=100260+(e+2<<2)|0;e=c[d>>2]|0;if(e>>>0<(c[25059]|0)>>>0)Ja();else{r=d;s=e}}else{c[25055]=f|d;r=100260+(e+2<<2)|0;s=g}c[r>>2]=t;c[s+12>>2]=t;c[t+8>>2]=s;c[t+12>>2]=g;return}d=h>>>8;if(d)if(h>>>0>16777215)g=31;else{r=(d+1048320|0)>>>16&8;s=d<<r;q=(s+520192|0)>>>16&4;s=s<<q;g=(s+245760|0)>>>16&2;g=14-(q|r|g)+(s<<g>>>15)|0;g=h>>>(g+7|0)&1|g<<1}else g=0;d=100524+(g<<2)|0;c[t+28>>2]=g;c[t+20>>2]=0;c[t+16>>2]=0;e=c[25056]|0;f=1<<g;if(!(e&f)){c[25056]=e|f;c[d>>2]=t;c[t+24>>2]=d;c[t+12>>2]=t;c[t+8>>2]=t;return}d=c[d>>2]|0;a:do if((c[d+4>>2]&-8|0)!=(h|0)){g=h<<((g|0)==31?0:25-(g>>>1)|0);while(1){e=d+16+(g>>>31<<2)|0;f=c[e>>2]|0;if(!f)break;if((c[f+4>>2]&-8|0)==(h|0)){d=f;break a}else{g=g<<1;d=f}}if(e>>>0<(c[25059]|0)>>>0)Ja();c[e>>2]=t;c[t+24>>2]=d;c[t+12>>2]=t;c[t+8>>2]=t;return}while(0);e=d+8|0;f=c[e>>2]|0;s=c[25059]|0;if(!(f>>>0>=s>>>0&d>>>0>=s>>>0))Ja();c[f+12>>2]=t;c[e>>2]=t;c[t+8>>2]=f;c[t+12>>2]=d;c[t+24>>2]=0;return}function kQ(){}function lQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;d=b-d-(c>>>0>a>>>0|0)>>>0;return (C=d,a-c>>>0|0)|0}function mQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;c=a+c>>>0;return (C=b+d+(c>>>0<a>>>0|0)>>>0,c|0)|0}function nQ(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;p=p+1|0;c[a>>2]=p;while((f|0)<(e|0)){if(!(c[d+(f<<3)>>2]|0)){c[d+(f<<3)>>2]=p;c[d+((f<<3)+4)>>2]=b;c[d+((f<<3)+8)>>2]=0;C=e;return d|0}f=f+1|0}e=e*2|0;d=hQ(d|0,8*(e+1|0)|0)|0;d=nQ(a|0,b|0,d|0,e|0)|0;C=e;return d|0}function oQ(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){C=b>>c;return a>>>c|(b&(1<<c)-1)<<32-c}C=(b|0)<0?-1:0;return b>>c-32|0}function pQ(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){C=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}C=0;return b>>>c-32|0}function qQ(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;while((f|0)<(d|0)){e=c[b+(f<<3)>>2]|0;if(!e)break;if((e|0)==(a|0))return c[b+((f<<3)+4)>>2]|0;f=f+1|0}return 0}function rQ(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return ab(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if(!e)return f|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function sQ(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;if((c|0)<(b|0)&(b|0)<(c+d|0)){e=b;c=c+d|0;b=b+d|0;while((d|0)>0){b=b-1|0;c=c-1|0;d=d-1|0;a[b>>0]=a[c>>0]|0}b=e}else rQ(b,c,d)|0;return b|0}function tQ(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;h=b&3;i=d|d<<8|d<<16|d<<24;g=f&~3;if(h){h=b+4-h|0;while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}}while((b|0)<(g|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return b-e|0}function uQ(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){C=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}C=a<<c-32;return 0}function vQ(b){b=b|0;var c=0;c=a[m+(b&255)>>0]|0;if((c|0)<8)return c|0;c=a[m+(b>>8&255)>>0]|0;if((c|0)<8)return c+8|0;c=a[m+(b>>16&255)>>0]|0;if((c|0)<8)return c+16|0;return (a[m+(b>>>24)>>0]|0)+24|0}function wQ(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;f=a&65535;e=b&65535;c=_(e,f)|0;d=a>>>16;a=(c>>>16)+(_(e,d)|0)|0;e=b>>>16;b=_(e,f)|0;return (C=(a>>>16)+(_(e,d)|0)+(((a&65535)+b|0)>>>16)|0,a+b<<16|c&65535|0)|0}function xQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;j=b>>31|((b|0)<0?-1:0)<<1;i=((b|0)<0?-1:0)>>31|((b|0)<0?-1:0)<<1;f=d>>31|((d|0)<0?-1:0)<<1;e=((d|0)<0?-1:0)>>31|((d|0)<0?-1:0)<<1;h=lQ(j^a,i^b,j,i)|0;g=C;a=f^j;b=e^i;return lQ((CQ(h,g,lQ(f^c,e^d,f,e)|0,C,0)|0)^a,C^b,a,b)|0}function yQ(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0;f=i;i=i+16|0;j=f|0;h=b>>31|((b|0)<0?-1:0)<<1;g=((b|0)<0?-1:0)>>31|((b|0)<0?-1:0)<<1;l=e>>31|((e|0)<0?-1:0)<<1;k=((e|0)<0?-1:0)>>31|((e|0)<0?-1:0)<<1;a=lQ(h^a,g^b,h,g)|0;b=C;CQ(a,b,lQ(l^d,k^e,l,k)|0,C,j)|0;e=lQ(c[j>>2]^h,c[j+4>>2]^g,h,g)|0;d=C;i=f;return (C=d,e)|0}function zQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=a;f=c;c=wQ(e,f)|0;a=C;return (C=(_(b,f)|0)+(_(d,e)|0)+a|a&0,c|0|0)|0}function AQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return CQ(a,b,c,d,0)|0}function BQ(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=i;i=i+16|0;f=g|0;CQ(a,b,d,e,f)|0;i=g;return (C=c[f+4>>2]|0,c[f>>2]|0)|0}function CQ(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;l=a;j=b;k=j;h=d;n=e;i=n;if(!k){g=(f|0)!=0;if(!i){if(g){c[f>>2]=(l>>>0)%(h>>>0);c[f+4>>2]=0}n=0;f=(l>>>0)/(h>>>0)>>>0;return (C=n,f)|0}else{if(!g){n=0;f=0;return (C=n,f)|0}c[f>>2]=a|0;c[f+4>>2]=b&0;n=0;f=0;return (C=n,f)|0}}g=(i|0)==0;do if(h){if(!g){g=(aa(i|0)|0)-(aa(k|0)|0)|0;if(g>>>0<=31){m=g+1|0;i=31-g|0;b=g-31>>31;h=m;a=l>>>(m>>>0)&b|k<<i;b=k>>>(m>>>0)&b;g=0;i=l<<i;break}if(!f){n=0;f=0;return (C=n,f)|0}c[f>>2]=a|0;c[f+4>>2]=j|b&0;n=0;f=0;return (C=n,f)|0}g=h-1|0;if(g&h){i=(aa(h|0)|0)+33-(aa(k|0)|0)|0;p=64-i|0;m=32-i|0;j=m>>31;o=i-32|0;b=o>>31;h=i;a=m-1>>31&k>>>(o>>>0)|(k<<m|l>>>(i>>>0))&b;b=b&k>>>(i>>>0);g=l<<p&j;i=(k<<p|l>>>(o>>>0))&j|l<<m&i-33>>31;break}if(f){c[f>>2]=g&l;c[f+4>>2]=0}if((h|0)==1){o=j|b&0;p=a|0|0;return (C=o,p)|0}else{p=vQ(h|0)|0;o=k>>>(p>>>0)|0;p=k<<32-p|l>>>(p>>>0)|0;return (C=o,p)|0}}else{if(g){if(f){c[f>>2]=(k>>>0)%(h>>>0);c[f+4>>2]=0}o=0;p=(k>>>0)/(h>>>0)>>>0;return (C=o,p)|0}if(!l){if(f){c[f>>2]=0;c[f+4>>2]=(k>>>0)%(i>>>0)}o=0;p=(k>>>0)/(i>>>0)>>>0;return (C=o,p)|0}g=i-1|0;if(!(g&i)){if(f){c[f>>2]=a|0;c[f+4>>2]=g&k|b&0}o=0;p=k>>>((vQ(i|0)|0)>>>0);return (C=o,p)|0}g=(aa(i|0)|0)-(aa(k|0)|0)|0;if(g>>>0<=30){b=g+1|0;i=31-g|0;h=b;a=k<<i|l>>>(b>>>0);b=k>>>(b>>>0);g=0;i=l<<i;break}if(!f){o=0;p=0;return (C=o,p)|0}c[f>>2]=a|0;c[f+4>>2]=j|b&0;o=0;p=0;return (C=o,p)|0}while(0);if(!h){k=i;j=0;i=0}else{m=d|0|0;l=n|e&0;k=mQ(m|0,l|0,-1,-1)|0;d=C;j=i;i=0;do{e=j;j=g>>>31|j<<1;g=i|g<<1;e=a<<1|e>>>31|0;n=a>>>31|b<<1|0;lQ(k,d,e,n)|0;p=C;o=p>>31|((p|0)<0?-1:0)<<1;i=o&1;a=lQ(e,n,o&m,(((p|0)<0?-1:0)>>31|((p|0)<0?-1:0)<<1)&l)|0;b=C;h=h-1|0}while((h|0)!=0);k=j;j=0}h=0;if(f){c[f>>2]=a;c[f+4>>2]=b}o=(g|0)>>>31|(k|h)<<1|(h<<1|g>>>31)&0|j;p=(g<<1|0>>>31)&-2|i;return (C=o,p)|0}function DQ(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;Cb[a&31](b|0,c|0,d|0,e|0,f|0)}function EQ(a,b){a=a|0;b=b|0;Db[a&127](b|0)}function FQ(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=+d;e=+e;return Eb[a&3](b|0,c|0,+d,+e)|0}function GQ(a,b,c){a=a|0;b=b|0;c=c|0;Fb[a&63](b|0,c|0)}function HQ(a,b,c,d,e,f,g,h,i,j,k){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;return Gb[a&3](b|0,c|0,d|0,e|0,f|0,g|0,h|0,i|0,j|0,k|0)|0}function IQ(a,b){a=a|0;b=b|0;return Hb[a&63](b|0)|0}function JQ(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Ib[a&63](b|0,c|0,d|0,e|0,f|0)|0}function KQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Jb[a&63](b|0,c|0,d|0)|0}function LQ(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;Kb[a&15](b|0,c|0,d|0,e|0,f|0,g|0)}function MQ(a,b){a=a|0;b=b|0;return +Lb[a&1](b|0)}function NQ(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return Mb[a&1](b|0,c|0,d|0,e|0,f|0,g|0)|0}function OQ(a,b){a=a|0;b=+b;return +Nb[a&1](+b)}function PQ(a,b,c,d){a=a|0;b=+b;c=+c;d=+d;return +Ob[a&7](+b,+c,+d)}function QQ(a,b,c,d,e,f,g,h,i,j){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;Pb[a&0](b|0,c|0,d|0,e|0,f|0,g|0,h|0,i|0,j|0)}function RQ(a,b,c){a=a|0;b=b|0;c=c|0;return Qb[a&127](b|0,c|0)|0}function SQ(a){a=a|0;return +Rb[a&1]()}function TQ(a){a=a|0;return Sb[a&3]()|0}function UQ(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=+e;f=+f;g=g|0;Tb[a&15](b|0,c|0,d|0,+e,+f,g|0)}function VQ(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return Ub[a&127](b|0,c|0,d|0,e|0)|0}function WQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Vb[a&127](b|0,c|0,d|0)}function XQ(a){a=a|0;Wb[a&7]()}function YQ(a,b,c,d){a=a|0;b=b|0;c=c|0;d=+d;Xb[a&1](b|0,c|0,+d)}function ZQ(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=+e;return Yb[a&1](b|0,c|0,d|0,+e)|0}function _Q(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;Zb[a&31](b|0,c|0,d|0,e|0)}function $Q(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ba(0)}function aR(a){a=a|0;ba(1)}function bR(a,b,c,d){a=a|0;b=b|0;c=+c;d=+d;ba(2);return 0}function cR(a,b){a=a|0;b=b|0;ba(3)}function dR(a,b){a=a|0;b=b|0;ub(a|0,b|0)}function eR(a,b,c,d,e,f,g,h,i,j){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;ba(4);return 0}function fR(a){a=a|0;ba(5);return 0}function gR(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ba(6);return 0}function hR(a,b,c){a=a|0;b=b|0;c=c|0;ba(7);return 0}function iR(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;ba(8)}function jR(a){a=a|0;ba(9);return 0.0}function kR(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;ba(10);return 0}function lR(a){a=+a;ba(11);return 0.0}function mR(a){a=+a;return +wb(+a)}function nR(a,b,c){a=+a;b=+b;c=+c;ba(12);return 0.0}function oR(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;ba(13)}function pR(a,b){a=a|0;b=b|0;ba(14);return 0}function qR(){ba(15);return 0.0}function rR(){ba(16);return 0}function sR(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=+d;e=+e;f=f|0;ba(17)}function tR(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;ba(18);return 0}function uR(a,b,c){a=a|0;b=b|0;c=c|0;ba(19)}function vR(){ba(20)}function wR(a,b,c){a=a|0;b=b|0;c=+c;ba(21)}function xR(a,b,c,d){a=a|0;b=b|0;c=c|0;d=+d;ba(22);return 0}function yR(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;ba(23)}function zR(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Na(a|0,b|0,c|0,d|0)}

// EMSCRIPTEN_END_FUNCS
var Cb=[$Q,ed,Hd,Od,ce,Ge,GL,FL,oL,pL,EL,TK,UK,wK,xK,Ti,HB,XJ,YJ,$Q,$Q,$Q,$Q,$Q,$Q,$Q,$Q,$Q,$Q,$Q,$Q,$Q];var Db=[aR,oc,pc,qc,rc,sc,Ec,Fc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,cd,dd,gd,hd,id,jd,kd,ld,md,vd,wd,xd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Rd,Sd,Td,Vd,Wd,Xd,Yd,Zd,_d,$d,ae,be,de,pe,qe,re,se,De,Ee,Fe,He,Se,Te,Ue,We,Xe,Ye,Ze,_e,$e,af,bf,cf,lf,mf,nf,of,Hf,Gf,hj,dj,Hk,Ck,el,fl,ok,pk,bl,cl,$i,aj,rk,sk,uk,vk,Mt,XA,cB,ZA,YA,nB,xA,yA,cF,hF,Bf,Ui,Fk,Gk,fQ,sp,Ks,mx,Ey,iC,Kz,lG,aE,CD,DD,FD,bA,wG,mI,tI,KP,LP,aR,aR,aR,aR,aR,aR];var Eb=[bR,zo,yo,bR];var Fb=[cR,Xc,ad,od,td,Nd,je,ye,Ne,jf,uf,fu,gB,zB,rB,mB,aB,bB,vB,wB,fF,jF,rA,En,dR,vs,jx,jC,Gz,Mz,Oz,wD,ED,zH,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR,cR];var Gb=[eR,SJ,PJ,eR];var Hb=[fR,jg,kg,Hj,Ij,_t,cu,GD,HD,WE,XE,YE,ZE,_E,$E,aF,bF,$N,hc,rw,xj,zz,vt,gu,ut,yz,hC,kC,Ft,Iz,Nz,wt,eQ,uI,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR,fR];var Ib=[gR,It,fB,qB,Dn,KL,AM,BM,OL,ML,yM,zM,PL,QL,RL,SL,TL,oM,pM,fM,_L,VL,UL,WL,XL,ZL,YL,NL,LL,$L,aM,bM,cM,dM,eM,gM,hM,iM,jM,nM,lM,kM,mM,uM,qM,rM,sM,tM,vM,wM,xM,CM,DM,EM,FM,gR,gR,gR,gR,gR,gR,gR,gR,gR];var Jb=[hR,Ej,qp,Vr,as,gs,ls,Yt,$t,mA,rD,iG,fL,lL,KK,QK,nK,tK,WP,cO,bO,aO,dO,us,Aj,uj,ep,Tk,Cn,pO,Rq,Uq,Tq,ns,ix,DO,rv,Hz,Lz,cC,fA,gE,pI,RJ,OJ,bK,fK,OP,hR,hR,hR,hR,hR,hR,hR,hR,hR,hR,hR,hR,hR,hR,hR,hR];var Kb=[iR,wc,_c,rd,Ld,he,we,Le,gf,sf,iR,iR,iR,iR,iR,iR];var Lb=[jR,nC];var Mb=[kR,nI];var Nb=[lR,mR];var Ob=[nR,Uy,Vy,Wy,Xy,nR,nR,nR];var Pb=[oR];var Qb=[pR,Ht,Zt,du,xB,yB,pB,lB,eB,dI,LH,MH,eI,NH,OH,PH,fI,RH,SH,TH,UH,VH,WH,gI,YH,ZH,_H,$H,aI,bI,JH,KH,QH,XH,FH,GH,HH,EH,CH,DH,hL,iL,kL,qL,rL,sL,tL,uL,vL,wL,xL,MK,NK,PK,pK,qK,sK,pw,Vf,gg,Qg,ih,mh,si,ti,Si,Pf,vj,Pk,nl,Ul,fm,hm,jm,km,lm,rm,mm,yn,An,kI,ap,yq,Zv,Yv,Xv,kx,hu,Bz,ox,Ex,Ix,Jx,ay,Fz,qO,bC,nD,Qs,vG,at,ct,xD,hQ,hs,BD,aP,DF,cI,rI,sI,UJ,VJ,WJ,dQ,pR,pR,pR,pR,pR,pR,pR,pR,pR,pR,pR,pR,pR];var Rb=[qR,gC];var Sb=[rR,Rl,aA,rR];var Tb=[sR,by,cy,dy,ey,fy,gy,hy,iy,sR,sR,sR,sR,sR,sR,sR];var Ub=[tR,Gj,qm,rp,Xr,cs,mt,xv,lt,Bt,Jt,Lt,Wt,Vt,eu,pu,qu,oA,tD,TD,RD,vF,kG,zG,yG,$K,aL,bL,cL,dL,eL,gL,jL,nL,EK,FK,GK,HK,IK,JK,LK,OK,SK,hK,iK,jK,kK,lK,mK,oK,rK,vK,qs,Ou,lx,Pz,AO,eC,bJ,JJ,jJ,rJ,eJ,yJ,CJ,AJ,DJ,TJ,MJ,_J,$J,dK,eK,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR,tR];var Vb=[uR,tc,uc,xc,Oc,Wc,Yc,$c,nd,pd,sd,Id,Jd,Md,ee,fe,ie,te,ue,xe,Ie,Je,Me,df,ef,hf,pf,qf,tf,ci,di,ei,Fj,Wr,bs,_s,Nt,vu,Mu,yv,Xw,Py,pA,nA,DA,uD,sD,SD,QD,dF,eF,gF,iF,kF,jG,pH,oH,Bn,Ws,it,nu,Vu,Wu,Jz,dC,dA,yD,zD,uG,qH,rH,sH,yH,AH,qI,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR,uR];var Wb=[vR,fC,Ez,Qz,mG,vR,vR,vR];var Xb=[wR,AD];var Yb=[xR,eE];var Zb=[yR,vc,Zc,qd,yd,Kd,Ud,ge,ve,Ke,Ve,ff,rf,Ef,Df,Cf,Af,zf,wf,kc,yf,xf,Kt,dB,oB,mL,RK,uK,PO,zR,aK,yR];return{_saveSetjmp:nQ,_vizRenderFromString:jc,_i64Subtract:lQ,_fflush:kO,_realloc:hQ,_dtextract:es,_memmove:sQ,_bitshift64Ashr:oQ,_vizLastErrorMessage:ic,_memset:tQ,_malloc:eQ,_i64Add:mQ,_memcpy:rQ,_bitshift64Lshr:pQ,_free:fQ,_bitshift64Shl:uQ,___errno_location:cN,_testSetjmp:qQ,runPostSets:kQ,stackAlloc:_b,stackSave:$b,stackRestore:ac,establishStackSpace:bc,setThrew:cc,setTempRet0:fc,getTempRet0:gc,dynCall_viiiii:DQ,dynCall_vi:EQ,dynCall_iiidd:FQ,dynCall_vii:GQ,dynCall_iiiiiiiiiii:HQ,dynCall_ii:IQ,dynCall_iiiiii:JQ,dynCall_iiii:KQ,dynCall_viiiiii:LQ,dynCall_di:MQ,dynCall_iiiiiii:NQ,dynCall_dd:OQ,dynCall_dddd:PQ,dynCall_viiiiiiiii:QQ,dynCall_iii:RQ,dynCall_d:SQ,dynCall_i:TQ,dynCall_viiiddi:UQ,dynCall_iiiii:VQ,dynCall_viii:WQ,dynCall_v:XQ,dynCall_viid:YQ,dynCall_iiiid:ZQ,dynCall_viiii:_Q}})


// EMSCRIPTEN_END_ASM
(e.Sa,e.Ta,buffer);e._vizRenderFromString=X._vizRenderFromString;var lc=e._saveSetjmp=X._saveSetjmp;e._fflush=X._fflush;var wc=e._memset=X._memset,kc=e._realloc=X._realloc;e._dtextract=X._dtextract;
var vc=e._memmove=X._memmove,nc=e._bitshift64Ashr=X._bitshift64Ashr,ib=e._i64Subtract=X._i64Subtract,qc=e._testSetjmp=X._testSetjmp;e._vizLastErrorMessage=X._vizLastErrorMessage;var xa=e._malloc=X._malloc,kb=e._i64Add=X._i64Add,tc=e._memcpy=X._memcpy;e.runPostSets=X.runPostSets;var oc=e._bitshift64Lshr=X._bitshift64Lshr,Ea=e._free=X._free;e.___errno_location=X.___errno_location;var xc=e._bitshift64Shl=X._bitshift64Shl;e.dynCall_viiiii=X.dynCall_viiiii;e.dynCall_vi=X.dynCall_vi;e.dynCall_iiidd=X.dynCall_iiidd;
e.dynCall_vii=X.dynCall_vii;e.dynCall_iiiiiiiiiii=X.dynCall_iiiiiiiiiii;e.dynCall_ii=X.dynCall_ii;e.dynCall_iiiiii=X.dynCall_iiiiii;e.dynCall_iiii=X.dynCall_iiii;e.dynCall_viiiiii=X.dynCall_viiiiii;e.dynCall_di=X.dynCall_di;e.dynCall_iiiiiii=X.dynCall_iiiiiii;e.dynCall_dd=X.dynCall_dd;e.dynCall_dddd=X.dynCall_dddd;e.dynCall_viiiiiiiii=X.dynCall_viiiiiiiii;e.dynCall_iii=X.dynCall_iii;e.dynCall_d=X.dynCall_d;e.dynCall_i=X.dynCall_i;e.dynCall_viiiddi=X.dynCall_viiiddi;e.dynCall_iiiii=X.dynCall_iiiii;
e.dynCall_viii=X.dynCall_viii;e.dynCall_v=X.dynCall_v;e.dynCall_viid=X.dynCall_viid;e.dynCall_iiiid=X.dynCall_iiiid;e.dynCall_viiii=X.dynCall_viiii;n.ia=X.stackAlloc;n.ya=X.stackSave;n.ja=X.stackRestore;n.vd=X.establishStackSpace;n.lb=X.setTempRet0;n.Za=X.getTempRet0;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}ja.prototype=Error();ja.prototype.constructor=ja;var qd=null;
e.callMain=e.sd=function(a){function b(){for(var a=0;3>a;a++)d.push(0)}assert(!0,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");assert(0==Ra.length,"cannot call main when preRun functions remain to be called");a=a||[];Va||(Va=!0,Qa(Sa));var c=a.length+1,d=[B(Xa(e.thisProgram),"i8",0)];b();for(var f=0;f<c-1;f+=1)d.push(B(Xa(a[f]),"i8",0)),b();d.push(0);d=B(d,"i32",0);try{var g=e._main(c,d,0);rd(g,!0)}catch(k){if(!(k instanceof ja))if("SimulateInfiniteLoop"==k)e.noExitRuntime=
!0;else throw k&&"object"===typeof k&&k.stack&&e.X("exception thrown: "+[k,k.stack]),k;}finally{}};
function sd(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!w)){Va||(Va=!0,Qa(Sa));Qa(Ta);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&td&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ua.unshift(b)}Qa(Ua)}}a=a||e.arguments;null===qd&&(qd=Date.now());if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Wa();Qa(Ra);e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}e.run=e.run=sd;function rd(a,b){if(!b||!e.noExitRuntime){if(!e.noExitRuntime&&(w=!0,m=void 0,Qa(H),e.onExit))e.onExit(a);da?(process.stdout.once("drain",function(){process.exit(a)}),console.log(" "),setTimeout(function(){process.exit(a)},500)):fa&&"function"===typeof quit&&quit(a);throw new ja(a);}}e.exit=e.exit=rd;var ud=[];
function v(a){void 0!==a?(e.print(a),e.X(a),a=JSON.stringify(a)):a="";w=!0;var b="abort("+a+") at "+Fa()+"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";ud&&ud.forEach(function(c){b=c(b,a)});throw b;}e.abort=e.abort=v;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var td=!0;e.noInitialRun&&(td=!1);sd();


  return Module;
};
  function Viz(src) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var format = options.format === undefined ? "svg" : options.format;
    var engine = options.engine === undefined ? "dot" : options.engine;
    var scale = options.scale;
    var totalMemory = options.totalMemory;
  
    if (format == "png-image-element") {
      return Viz.svgXmlToPngImageElement(render(src, "svg", engine, totalMemory), scale);
    } else {
      return render(src, format, engine, totalMemory);
    }
  }
  
  function render(src, format, engine, totalMemory) {
    var graphviz = Module({ TOTAL_MEMORY: totalMemory });
    
    var resultPointer = graphviz["ccall"]("vizRenderFromString", "number", ["string", "string", "string"], [src, format, engine]);
    var resultString = graphviz["Pointer_stringify"](resultPointer);

    var errorMessagePointer = graphviz["ccall"]("vizLastErrorMessage", "number", [], []);
    var errorMessageString = graphviz["Pointer_stringify"](errorMessagePointer);
    
    if (errorMessageString != "") {
      throw new Error(errorMessageString);
    }
    
    return resultString;
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  Viz.svgXmlToPngImageElement = function(svgXml, scale, callback) {
    if (scale === undefined) {
      if ("devicePixelRatio" in window && window.devicePixelRatio > 1) {
        scale = window.devicePixelRatio;
      } else {
        scale = 1;
      }
    }
    
    var pngImage = new Image();

    try {
      if (typeof fabric === "object" && fabric.loadSVGFromString) {
        fabric.loadSVGFromString(svgXml, function(objects, options) {
          // If there's something wrong with the SVG, Fabric may return an empty array of objects. Graphviz appears to give us at least one <g> element back even given an empty graph, so we will assume an error in this case.
          if (objects.length == 0) {
            if (callback !== undefined) {
              callback(new Error("Error loading SVG with Fabric"));
              return;
            } else {
              throw new Error("Error loading SVG with Fabric");
            }
          }
        
          var element = document.createElement("canvas");
          element.width = options.width;
          element.height = options.height;
      
          var canvas = new fabric.Canvas(element, { enableRetinaScaling: false });
          var obj = fabric.util.groupSVGElements(objects, options);
          canvas.add(obj).renderAll();
      
          pngImage.src = canvas.toDataURL({ multiplier: scale });
          pngImage.width = options.width;
          pngImage.height = options.height;
        
          if (callback !== undefined) {
            callback(null, pngImage);
          }
        });
      } else {
        var svgImage = new Image();

        svgImage.onload = function() {
          var canvas = document.createElement("canvas");
          canvas.width = svgImage.width * scale;
          canvas.height = svgImage.height * scale;

          var context = canvas.getContext("2d");
          context.drawImage(svgImage, 0, 0, canvas.width, canvas.height);

          pngImage.src = canvas.toDataURL("image/png");
          pngImage.width = svgImage.width;
          pngImage.height = svgImage.height;
        
          if (callback !== undefined) {
            callback(null, pngImage);
          }
        }
      
        svgImage.onerror = function(e) {
          var error;
        
          if ('error' in e) {
            error = e.error;
          } else {
            error = new Error('Error loading SVG');
          }
        
          if (callback !== undefined) {
            callback(error);
          } else {
            throw error;
          }
        }
      
        svgImage.src = "data:image/svg+xml;base64," + b64EncodeUnicode(svgXml);
      }
    } catch (e) {
      if (callback !== undefined) {
        callback(e);
      } else {
        throw e;
      }
    }
    
    if (callback === undefined) {
      return pngImage;
    }
  }
  
  Viz.svgXmlToPngBase64 = function(svgXml, scale, callback) {
    Viz.svgXmlToPngImageElement(svgXml, scale, function(err, image) {
      if (err) {
        callback(err);
      } else {
        callback(null, image.src.slice("data:image/png;base64,".length));
      }
    });
  }
  
  if (typeof module === "object" && module.exports) {
    module.exports = Viz;
  } else {
    global.Viz = Viz;
  }
  
})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), "/"))

/***/ })
/******/ ]);
//# sourceMappingURL=voyager.worker.js.map