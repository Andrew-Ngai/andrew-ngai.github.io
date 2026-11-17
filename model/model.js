/*! three.js r187 | MIT License | Copyright © 2010-2025 three.js authors */
var w0=Object.defineProperty;var T0=(n,e)=>{for(var t in e)w0(n,t,{get:e[t],enumerable:!0})};var us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,bh=1,$u=2;var Xs=1,Ju=2,ds=3,kn=0,ci=1,Hi=2,Gn=0,Fr=1,Zn=2,wh=3,Th=4,Ku=5;var Or=100,ju=101,Qu=102,ef=103,tf=104,nf=200,rf=201,sf=202,of=203,Wl=204,Xl=205,af=206,lf=207,cf=208,hf=209,uf=210,ff=211,df=212,pf=213,mf=214,la=0,ca=1,ha=2,Br=3,ua=4,fa=5,da=6,pa=7,qs=0,gf=1,xf=2,bn=0,Ys=1,Zs=2,$s=3,zr=4,Js=5,Ks=6,js=7;var ql=300,Vn=301,xr=302,ma=303,ga=304,kr=1e3,Ki=1001,Qs=1002,Kt=1003,Ah=1004;var eo=1005;var hi=1006,xa=1007;var hn=1008;var Ai=1009,Yl=1010,Zl=1011,_r=1012,to=1013,Bi=1014,Ei=1015,ai=1016,io=1017,no=1018,$n=1020,$l=35902,Jl=35899,Kl=1021,jl=1022,Wi=1023,_n=1026,wn=1027,Gr=1028,ps=1029,Tn=1030,ro=1031;var so=1033,oo=33776,ao=33777,lo=33778,co=33779,_a=35840,ya=35841,va=35842,Ma=35843,Sa=36196,ba=37492,wa=37496,Ta=37488,Aa=37489,ms=37490,Ea=37491,Ca=37808,Ra=37809,Pa=37810,Ia=37811,La=37812,Da=37813,Na=37814,Ua=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ga=37821,Va=36492,Ha=36494,Wa=36495,Xa=36283,qa=36284,gs=36285,Ya=36286;var xs=2300,Ql=2301,ec=2302,Eh=2303,tc=2400,ic=2401,nc=2402;var _f=3200;var Jn=0,yf=1,Hn="",Xi="srgb",_s="srgb-linear",ys="linear",At="srgb";var rc=7680;var vf=519,Mf=512,Sf=513,bf=514,sc=515,wf=516,Tf=517,oc=518,ac=519,Za=35044,$a=35048;var Ch="300 es",qi=2e3,or=2001;function Ef(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ph(){let n=vs("canvas");return n.style.display="block",n}var Af={},ho=null;function Ms(...n){let e="THREE."+n.shift();ho?ho("log",e,...n):console.log(e,...n)}function Cf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ce(...n){n=Cf(n);let e="THREE."+n.shift();if(ho)ho("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Cf(n);let e="THREE."+n.shift();if(ho)ho("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ar(...n){let e=n.join(" ");e in Af||(Af[e]=!0,Ce(...n))}function Rf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Pf={[la]:la,[ha]:da,[ua]:ua,[Br]:fa,[ca]:ca,[da]:ha,[pa]:pa,[fa]:Br};var Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};var en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=1234567,yr=Math.PI/180,Vr=180/Math.PI;function Yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function lc(n,e){return(n%e+e)%e}function A0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function E0(n,e,t){return n!==e?(t-n)/(e-n):0}function uo(n,e,t){return(1-t)*n+t*e}function C0(n,e,t,i){return uo(n,e,1-Math.exp(-t*i))}function R0(n,e=1){return e-Math.abs(lc(n,e*2)-e)}function P0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function I0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function L0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function D0(n,e){return n+Math.random()*(e-n)}function N0(n){return n*(.5-Math.random())}function U0(n){n!==void 0&&(If=n);let e=If+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F0(n){return n*yr}function O0(n){return n*Vr}function B0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function z0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ih(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function k0(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ja(n,e){if(e.constructor===Float32Array)return n;let t=fo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ka(n,e){if(e.constructor===Float32Array)return n;let t=fo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Lh={DEG2RAD:yr,RAD2DEG:Vr,generateUUID:Yi,clamp:st,euclideanModulo:lc,mapLinear:A0,inverseLerp:E0,lerp:uo,damp:C0,pingpong:R0,smoothstep:P0,smootherstep:I0,randInt:L0,randFloat:D0,randFloatSpread:N0,seededRandom:U0,degToRad:F0,radToDeg:O0,isPowerOfTwo:B0,ceilPowerOfTwo:z0,floorPowerOfTwo:Ih,setQuaternionFromProperEuler:k0,normalize:Ka,denormalize:Ja};var Dh=class Dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dh.prototype.isVector2=!0;var ie=Dh;var yi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],u=s[o+0],f=s[o+1],g=s[o+2],b=s[o+3];if(d!==b||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*b;m<0&&(u=-u,f=-f,g=-g,b=-b,m=-m);let p=1-a;if(m<.9995){let w=Math.acos(m),P=Math.sin(w);p=Math.sin(p*w)/P,a=Math.sin(a*w)/P,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+b*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+b*a;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),u=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var Uh=class Uh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;var S=Uh,Nh=new S,Lf=new yi;var Oh=class Oh{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],b=r[0],m=r[3],p=r[6],w=r[1],P=r[4],A=r[7],I=r[2],C=r[5],x=r[8];return s[0]=o*b+a*w+l*I,s[3]=o*m+a*P+l*C,s[6]=o*p+a*A+l*x,s[1]=c*b+h*w+d*I,s[4]=c*m+h*P+d*C,s[7]=c*p+h*A+d*x,s[2]=u*b+f*w+g*I,s[5]=u*m+f*P+g*C,s[8]=u*p+f*A+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=t*d+i*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=d*b,e[1]=(r*c-h*i)*b,e[2]=(a*i-r*o)*b,e[3]=u*b,e[4]=(h*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=f*b,e[7]=(i*l-c*t)*b,e[8]=(o*t-i*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fh.makeScale(e,t)),this}rotate(e){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fh.makeRotation(-e)),this}translate(e,t){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oh.prototype.isMatrix3=!0;var it=Oh,Fh=new it;var Df=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nf=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G0(){let n={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===At&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hn?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_s]:{primaries:e,whitePoint:i,transfer:ys,toXYZ:Df,fromXYZ:Nf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:i,transfer:At,toXYZ:Df,fromXYZ:Nf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),n}var ct=G0();function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var po,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{po===void 0&&(po=vs("canvas")),po.width=e.width,po.height=e.height;let r=po.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=po}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var V0=0,jn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bh(r[o].image)):s.push(Bh(r[o]))}else s=Bh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ja.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var H0=0,zh=new S,Ht=class n extends Ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ki,r=Ki,s=hi,o=hn,a=Wi,l=Ai,c=n.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Yi(),this.name="",this.source=new jn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=ql;Ht.DEFAULT_ANISOTROPY=1;var kh=class kh{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(c+1)/2,A=(f+1)/2,I=(p+1)/2,C=(h+u)/4,x=(d+b)/4,T=(g+m)/4;return P>A&&P>I?P<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(P),r=C/i,s=x/i):A>I?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=T/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=x/s,r=T/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-b)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kh.prototype.isVector4=!0;var Dt=kh;var mo=class extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Ht({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new jn(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jt=class extends mo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};var Hr=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bs=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var hc=class hc{constructor(e,t,i,r,s,o,a,l,c,h,d,u,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,d,u,f,g,b,m)}set(e,t,i,r,s,o,a,l,c,h,d,u,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/go.setFromMatrixColumn(e,0).length(),s=1/go.setFromMatrixColumn(e,1).length(),o=1/go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,b=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-b*c,t[9]=-a*l,t[2]=b-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,b=c*d;t[0]=u+b*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=b+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,b=c*d;t[0]=u-b*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=b-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,b=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+b,t[1]=l*d,t[5]=b*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,b=a*c;t[0]=l*h,t[4]=b-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-b*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,b=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+b,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,X0)}lookAt(e,t,i){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Wr.crossVectors(i,An),Wr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Wr.crossVectors(i,An)),Wr.normalize(),cc.crossVectors(An,Wr),r[0]=Wr.x,r[4]=cc.x,r[8]=An.x,r[1]=Wr.y,r[5]=cc.y,r[9]=An.y,r[2]=Wr.z,r[6]=cc.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],w=i[3],P=i[7],A=i[11],I=i[15],C=r[0],x=r[4],T=r[8],B=r[12],N=r[1],G=r[5],W=r[9],Q=r[13],U=r[2],ee=r[6],J=r[10],Z=r[14],z=r[3],j=r[7],V=r[11],pe=r[15];return s[0]=o*C+a*N+l*U+c*z,s[4]=o*x+a*G+l*ee+c*j,s[8]=o*T+a*W+l*J+c*V,s[12]=o*B+a*Q+l*Z+c*pe,s[1]=h*C+d*N+u*U+f*z,s[5]=h*x+d*G+u*ee+f*j,s[9]=h*T+d*W+u*J+f*V,s[13]=h*B+d*Q+u*Z+f*pe,s[2]=g*C+b*N+m*U+p*z,s[6]=g*x+b*G+m*ee+p*j,s[10]=g*T+b*W+m*J+p*V,s[14]=g*B+b*Q+m*Z+p*pe,s[3]=w*C+P*N+A*U+I*z,s[7]=w*x+P*G+A*ee+I*j,s[11]=w*T+P*W+A*J+I*V,s[15]=w*B+P*Q+A*Z+I*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],w=l*f-c*u,P=a*f-c*d,A=a*u-l*d,I=o*f-c*h,C=o*u-l*h,x=o*d-a*h;return t*(b*w-m*P+p*A)-i*(g*w-m*I+p*C)+r*(g*P-b*I+p*x)-s*(g*A-b*C+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(s*h-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],w=t*a-i*o,P=t*l-r*o,A=t*c-s*o,I=i*l-r*a,C=i*c-s*a,x=r*c-s*l,T=h*b-d*g,B=h*m-u*g,N=h*p-f*g,G=d*m-u*b,W=d*p-f*b,Q=u*p-f*m,U=w*Q-P*W+A*G+I*N-C*B+x*T;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ee=1/U;return e[0]=(a*Q-l*W+c*G)*ee,e[1]=(r*W-i*Q-s*G)*ee,e[2]=(b*x-m*C+p*I)*ee,e[3]=(u*C-d*x-f*I)*ee,e[4]=(l*N-o*Q-c*B)*ee,e[5]=(t*Q-r*N+s*B)*ee,e[6]=(m*A-g*x-p*P)*ee,e[7]=(h*x-u*A+f*P)*ee,e[8]=(o*W-a*N+c*T)*ee,e[9]=(i*N-t*W-s*T)*ee,e[10]=(g*C-b*A+p*w)*ee,e[11]=(d*A-h*C-f*w)*ee,e[12]=(a*B-o*G-l*T)*ee,e[13]=(t*G-i*B+r*T)*ee,e[14]=(b*P-g*I-m*w)*ee,e[15]=(h*I-d*P+u*w)*ee,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,b=o*h,m=o*d,p=a*d,w=l*c,P=l*h,A=l*d,I=i.x,C=i.y,x=i.z;return r[0]=(1-(b+p))*I,r[1]=(f+A)*I,r[2]=(g-P)*I,r[3]=0,r[4]=(f-A)*C,r[5]=(1-(u+p))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(g+P)*x,r[9]=(m-w)*x,r[10]=(1-(u+b))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=go.set(r[0],r[1],r[2]).length(),a=go.set(r[4],r[5],r[6]).length(),l=go.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Qn.copy(this);let c=1/o,h=1/a,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=qi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),g,b;if(l)g=s/(o-s),b=o*s/(o-s);else if(a===qi)g=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===or)g=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qi,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),f=-(i+r)/(i-r),g,b;if(l)g=1/(o-s),b=o/(o-s);else if(a===qi)g=-2/(o-s),b=-(o+s)/(o-s);else if(a===or)g=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};hc.prototype.isMatrix4=!0;var rt=hc,go=new S,Qn=new rt,W0=new S(0,0,0),X0=new S(1,1,1),Wr=new S,cc=new S,An=new S;var Uf=new rt,Ff=new yi,un=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ff.setFromEuler(this),this.setFromQuaternion(Ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var q0=0,Of=new S,xo=new yi,Mr=new rt,uc=new S,Qa=new S,Y0=new S,Z0=new yi,Bf=new S(1,0,0),zf=new S(0,1,0),kf=new S(0,0,1),Gf={type:"added"},$0={type:"removed"},_o={type:"childadded",child:null},Gh={type:"childremoved",child:null},_t=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new S,t=new un,i=new yi,r=new S(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new it}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,t){return Of.copy(e).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uc.copy(e):uc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Qa,uc,this.up):Mr.lookAt(uc,Qa,this.up),this.quaternion.setFromRotationMatrix(Mr),r&&(Mr.extractRotation(r.matrixWorld),xo.setFromRotationMatrix(Mr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),_o.child=e,this.dispatchEvent(_o),_o.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($0),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new S(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}};var J0={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Vh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=lc(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Vh(o,s,e+1/3),this.g=Vh(o,s,e),this.b=Vh(o,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Xi){function i(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xi){let i=Vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return ct.workingToColorSpace(tn.copy(this),e),Math.round(st(tn.r*255,0,255))*65536+Math.round(st(tn.g*255,0,255))*256+Math.round(st(tn.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(tn.copy(this),t);let i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Xi){ct.workingToColorSpace(tn.copy(this),e);let t=tn.r,i=tn.g,r=tn.b;return e!==Xi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(fc);let i=uo(Xr.h,fc.h,t),r=uo(Xr.s,fc.s,t),s=uo(Xr.l,fc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new de;de.NAMES=Vf;var yo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vo=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var er=new S,Sr=new S,Hh=new S,br=new S,Mo=new S,So=new S,Hf=new S,Wh=new S,Xh=new S,qh=new S,Yh=new Dt,Zh=new Dt,$h=new Dt,En=class n{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),er.subVectors(e,t),r.cross(er);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){er.subVectors(r,t),Sr.subVectors(i,t),Hh.subVectors(e,t);let o=er.dot(er),a=er.dot(Sr),l=er.dot(Hh),c=Sr.dot(Sr),h=Sr.dot(Hh),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,br.x),l.addScaledVector(o,br.y),l.addScaledVector(a,br.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Yh.setScalar(0),Zh.setScalar(0),$h.setScalar(0),Yh.fromBufferAttribute(e,t),Zh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yh,s.x),o.addScaledVector(Zh,s.y),o.addScaledVector($h,s.z),o}static isFrontFacing(e,t,i,r){return er.subVectors(i,t),Sr.subVectors(e,t),er.cross(Sr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),er.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Mo.subVectors(r,i),So.subVectors(s,i),Wh.subVectors(e,i);let l=Mo.dot(Wh),c=So.dot(Wh);if(l<=0&&c<=0)return t.copy(i);Xh.subVectors(e,r);let h=Mo.dot(Xh),d=So.dot(Xh);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Mo,o);qh.subVectors(e,s);let f=Mo.dot(qh),g=So.dot(qh);if(g>=0&&f<=g)return t.copy(s);let b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(So,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Hf.subVectors(s,r),a=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(Hf,a);let p=1/(m+b+u);return o=b*p,a=u*p,t.copy(i).addScaledVector(Mo,o).addScaledVector(So,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Ri=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),pc.subVectors(this.max,el),bo.subVectors(e.a,el),wo.subVectors(e.b,el),To.subVectors(e.c,el),qr.subVectors(wo,bo),Yr.subVectors(To,wo),Ts.subVectors(bo,To);let t=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-Ts.z,Ts.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,Ts.z,0,-Ts.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-Ts.y,Ts.x,0];return!Jh(t,bo,wo,To,pc)||(t=[1,0,0,0,1,0,0,0,1],!Jh(t,bo,wo,To,pc))?!1:(mc.crossVectors(qr,Yr),t=[mc.x,mc.y,mc.z],Jh(t,bo,wo,To,pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wr=[new S,new S,new S,new S,new S,new S,new S,new S],tr=new S,dc=new Ri,bo=new S,wo=new S,To=new S,qr=new S,Yr=new S,Ts=new S,el=new S,pc=new S,mc=new S,As=new S;function Jh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){As.fromArray(n,s);let a=r.x*Math.abs(As.x)+r.y*Math.abs(As.y)+r.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=i.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pi=new S,gc=new ie,K0=0,Ii=class extends Ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Za,this.updateRanges=[],this.gpuType=Ei,this.version=0,this._normalizationScale=e!==void 0?fo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix3(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix4(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyNormalMatrix(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.transformDirection(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ja(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ka(e,this.array)}};var Ao=class extends Ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Eo=class extends Ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Be=class extends Ii{constructor(e,t,i){super(new Float32Array(e),t,i)}};var j0=new Ri,tl=new S,Kh=new S,vi=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):j0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);let t=tl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(tl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Kh)),this.expandByPoint(tl.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var Q0=0,Wn=new rt,jh=new _t,Co=new S,Cn=new Ri,il=new Ri,Zi=new S,Je=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ef(e)?Eo:Ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zi.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Zi),Zi.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Zi)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];il.setFromBufferAttribute(a),this.morphTargetsRelative?(Zi.addVectors(Cn.min,il.min),Cn.expandByPoint(Zi),Zi.addVectors(Cn.max,il.max),Cn.expandByPoint(Zi)):(Cn.expandByPoint(il.min),Cn.expandByPoint(il.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zi.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zi));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Zi.fromBufferAttribute(a,c),l&&(Co.fromBufferAttribute(e,c),Zi.add(Co)),r=Math.max(r,i.distanceToSquared(Zi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let B=0;B<i.count;B++)a[B]=new S,l[B]=new S;let h=new S,d=new S,u=new S,f=new ie,g=new ie,b=new ie,m=new S,p=new S;function w(B,N,G){c[B]=c[N]=c[G]=1,h.fromBufferAttribute(i,B),d.fromBufferAttribute(i,N),u.fromBufferAttribute(i,G),f.fromBufferAttribute(s,B),g.fromBufferAttribute(s,N),b.fromBufferAttribute(s,G),d.sub(h),u.sub(h),g.sub(f),b.sub(f);let W=1/(g.x*b.y-b.x*g.y);isFinite(W)&&(m.copy(d).multiplyScalar(b.y).addScaledVector(u,-g.y).multiplyScalar(W),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-b.x).multiplyScalar(W),a[B].add(m),a[N].add(m),a[G].add(m),l[B].add(p),l[N].add(p),l[G].add(p))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let B=0,N=P.length;B<N;++B){let G=P[B],W=G.start,Q=G.count;for(let U=W,ee=W+Q;U<ee;U+=3)w(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let A=new S,I=new S,C=new S,x=new S;function T(B){C.fromBufferAttribute(r,B),x.copy(C);let N=a[B];A.copy(N),A.sub(C.multiplyScalar(C.dot(N))).normalize(),I.crossVectors(x,N);let W=I.dot(l[B])<0?-1:1;o.setXYZW(B,A.x,A.y,A.z,W)}for(let B=0,N=i.count;B<N;++B)c[B]&&T(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let r=new S,s=new S,o=new S,a=new S,l=new S,c=new S,h=new S,d=new S;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zi.fromBufferAttribute(e,t),Zi.normalize(),e.setXYZ(t,Zi.x,Zi.y,Zi.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?f=l[b]*a.data.stride+a.offset:f=l[b]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ii(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Es=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Wf(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Yi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var fn=new S,Cs=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?fo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ms("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ii(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ms("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ja(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ka(e,this.data.array)}};var Qh=new S,ex=new S,tx=new it,nn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Qh.subVectors(i,t).cross(ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Qh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tx.getNormalMatrix(e),r=this.coplanarPoint(Qh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var ix=0,Qt=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Fr,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rc,this.stencilZFail=rc,this.stencilZPass=rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new nn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Tr=class extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Ro,nl=new S,Po=new S,Io=new S,Lo=new ie,rl=new ie,Yf=new rt,xc=new S,sl=new S,_c=new S,Xf=new ie,eu=new ie,qf=new ie,Rs=class extends _t{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",Ro===void 0){Ro=new Je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Es(t,5);Ro.setIndex([0,1,2,0,2,3]),Ro.setAttribute("position",new Cs(i,3,0,!1)),Ro.setAttribute("uv",new Cs(i,2,3,!1))}this.geometry=Ro,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Po.setFromMatrixScale(this.matrixWorld),Yf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Io.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Po.multiplyScalar(-Io.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;yc(xc.set(-.5,-.5,0),Io,o,Po,r,s),yc(sl.set(.5,-.5,0),Io,o,Po,r,s),yc(_c.set(.5,.5,0),Io,o,Po,r,s),Xf.set(0,0),eu.set(1,0),qf.set(1,1);let a=e.ray.intersectTriangle(xc,sl,_c,!1,nl);if(a===null&&(yc(sl.set(-.5,.5,0),Io,o,Po,r,s),eu.set(0,1),a=e.ray.intersectTriangle(xc,_c,sl,!1,nl),a===null))return;let l=e.ray.origin.distanceTo(nl);l<e.near||l>e.far||t.push({distance:l,point:nl.clone(),uv:En.getInterpolation(nl,xc,sl,_c,Xf,eu,qf,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function yc(n,e,t,i,r,s){Lo.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(rl.x=s*Lo.x-r*Lo.y,rl.y=r*Lo.x+s*Lo.y):rl.copy(Lo),n.copy(e),n.x+=rl.x,n.y+=rl.y,n.applyMatrix4(Yf)}var Ar=new S,tu=new S,vc=new S,Mc=new S,yn=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){tu.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),Mc.copy(this.origin).sub(tu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(vc),a=Mc.dot(this.direction),l=-Mc.dot(vc),c=Mc.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let b=1/h;d*=b,u*=b,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tu).addScaledVector(vc,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);let i=Ar.dot(this.direction),r=Ar.dot(Ar)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,b=t.y-o.y,m=t.z-o.z,p=i.x-o.x,w=i.y-o.y,P=i.z-o.z,A=Math.abs(l),I=Math.abs(c),C=Math.abs(h),x,T,B,N,G,W,Q,U,ee,J,Z,z;if(A>=I&&A>=C?(B=l,W=d,ee=g,z=p,l>=0?(x=c,T=h,N=u,G=f,Q=b,U=m,J=w,Z=P):(x=h,T=c,N=f,G=u,Q=m,U=b,J=P,Z=w)):I>=C?(B=c,W=u,ee=b,z=w,c>=0?(x=h,T=l,N=f,G=d,Q=m,U=g,J=P,Z=p):(x=l,T=h,N=d,G=f,Q=g,U=m,J=p,Z=P)):(B=h,W=f,ee=m,z=P,h>=0?(x=l,T=c,N=d,G=u,Q=g,U=b,J=p,Z=w):(x=c,T=l,N=u,G=d,Q=b,U=g,J=w,Z=p)),B===0)return null;let j=x/B,V=T/B,pe=1/B,Ve=N-j*W,Ge=G-V*W,re=Q-j*ee,Ue=U-V*ee,We=J-j*z,tt=Z-V*z,ze=We*Ue-tt*re,dt=Ve*tt-Ge*We,mi=re*Ge-Ue*Ve;if(r){if(ze<0||dt<0||mi<0)return null}else if((ze<0||dt<0||mi<0)&&(ze>0||dt>0||mi>0))return null;let ot=ze+dt+mi;if(ot===0)return null;let Nt=pe*(ze*W+dt*ee+mi*z);return(ot>0?Nt<0:Nt>0)?null:this.at(Nt/ot,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var li=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zf=new rt,Ps=new yn,Sc=new vi,$f=new S,bc=new S,wc=new S,Tc=new S,iu=new S,Ac=new S,Jf=new S,Ec=new S,ht=class extends _t{constructor(e=new Je,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ac.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(iu.fromBufferAttribute(d,e),o?Ac.addScaledVector(iu,h):Ac.addScaledVector(iu.sub(t),h))}t.add(Ac)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(s),Ps.copy(e.ray).recast(e.near),!(Sc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Sc,$f)===null||Ps.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Zf.copy(s).invert(),Ps.copy(e.ray).applyMatrix4(Zf),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),P=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let A=w,I=P;A<I;A+=3){let C=a.getX(A),x=a.getX(A+1),T=a.getX(A+2);r=Cc(this,p,e,i,c,h,d,C,x,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let w=a.getX(m),P=a.getX(m+1),A=a.getX(m+2);r=Cc(this,o,e,i,c,h,d,w,P,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),P=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=w,I=P;A<I;A+=3){let C=A,x=A+1,T=A+2;r=Cc(this,p,e,i,c,h,d,C,x,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let w=m,P=m+1,A=m+2;r=Cc(this,o,e,i,c,h,d,w,P,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function nx(n,e,t,i,r,s,o,a){let l;if(e.side===ci?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kn,a),l===null)return null;Ec.copy(a),Ec.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ec);return c<t.near||c>t.far?null:{distance:c,point:Ec.clone(),object:n}}function Cc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,bc),n.getVertexPosition(l,wc),n.getVertexPosition(c,Tc);let h=nx(n,e,t,i,bc,wc,Tc,Jf);if(h){let d=new S;En.getBarycoord(Jf,bc,wc,Tc,d),r&&(h.uv=En.getInterpolatedAttribute(r,a,l,c,d,new ie)),s&&(h.uv1=En.getInterpolatedAttribute(s,a,l,c,d,new ie)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,d,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new S,materialIndex:0};En.getNormal(bc,wc,Tc,u.normal),h.face=u,h.barycoord=d}return h}var Rn=class extends Ht{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Kt,h=Kt,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zr=class extends Ii{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Do=new rt,jf=new rt,Rc=[],Qf=new Ri,rx=new rt,ol=new ht,al=new vi,$r=class extends ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,rx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Do),Qf.copy(e.boundingBox).applyMatrix4(Do),this.boundingBox.union(Qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Do),al.copy(e.boundingSphere).applyMatrix4(Do),this.boundingSphere.union(al)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ol.geometry=this.geometry,ol.material=this.material,ol.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(i),e.ray.intersectsSphere(al)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Do),jf.multiplyMatrices(i,Do),ol.matrixWorld=jf,ol.raycast(e,Rc);for(let o=0,a=Rc.length;o<a;o++){let l=Rc[o];l.instanceId=s,l.object=this,t.push(l)}Rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rn(new Float32Array(r*this.count),r,this.count,Gr,Ei));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};var Is=new vi,sx=new ie(.5,.5),Pc=new S,Pn=class{constructor(e=new nn,t=new nn,i=new nn,r=new nn,s=new nn,o=new nn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],b=s[9],m=s[10],p=s[11],w=s[12],P=s[13],A=s[14],I=s[15];if(r[0].setComponents(c-o,f-h,p-g,I-w).normalize(),r[1].setComponents(c+o,f+h,p+g,I+w).normalize(),r[2].setComponents(c+a,f+d,p+b,I+P).normalize(),r[3].setComponents(c-a,f-d,p-b,I-P).normalize(),i)r[4].setComponents(l,u,m,A).normalize(),r[5].setComponents(c-l,f-u,p-m,I-A).normalize();else if(r[4].setComponents(c-l,f-u,p-m,I-A).normalize(),t===qi)r[5].setComponents(c+l,f+u,p+m,I+A).normalize();else if(t===or)r[5].setComponents(l,u,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);let t=sx.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Pc.x=r.normal.x>0?e.max.x:e.min.x,Pc.y=r.normal.y>0?e.max.y:e.min.y,Pc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ed=new rt,No=class n{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];ed.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Pn),i[r].setFromProjectionMatrix(ed,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Pn),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var ei=class extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var Dc=new S,Nc=new S,td=new rt,ll=new yn,Ic=new vi,nu=new S,id=new S,lr=class extends _t{constructor(e=new Je,t=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Dc.fromBufferAttribute(t,r-1),Nc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Dc.distanceTo(Nc);e.setAttribute("lineDistance",new Be(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ic.copy(i.boundingSphere),Ic.applyMatrix4(r),Ic.radius+=s,e.ray.intersectsSphere(Ic)===!1)return;td.copy(r).invert(),ll.copy(e.ray).applyMatrix4(td);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=c){let p=h.getX(b),w=h.getX(b+1),P=Lc(this,e,ll,l,p,w,b);P&&t.push(P)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=Lc(this,e,ll,l,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=c){let p=Lc(this,e,ll,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Lc(this,e,ll,l,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Lc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Dc.fromBufferAttribute(a,r),Nc.fromBufferAttribute(a,s),t.distanceSqToSegment(Dc,Nc,nu,id)>i)return;nu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(nu);if(!(c<e.near||c>e.far))return{distance:c,point:id.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var nd=new S,rd=new S,ji=class extends lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)nd.fromBufferAttribute(t,r),rd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nd.distanceTo(rd);e.setAttribute("lineDistance",new Be(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Uo=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var sd=new rt,ru=new yn,Uc=new vi,Fc=new S,Jr=class extends _t{constructor(e=new Je,t=new Uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(r),Uc.radius+=s,e.ray.intersectsSphere(Uc)===!1)return;sd.copy(r).invert(),ru.copy(e.ray).applyMatrix4(sd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,b=f;g<b;g++){let m=c.getX(g);Fc.fromBufferAttribute(d,m),od(Fc,m,l,r,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,b=f;g<b;g++)Fc.fromBufferAttribute(d,g),od(Fc,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function od(n,e,t,i,r,s,o){let a=ru.distanceSqToPoint(n);if(a<t){let l=new S;ru.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Er=class extends Ht{constructor(e=[],t=Vn,i,r,s,o,a,l,c,h){super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Fo=class extends Ht{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vn=class extends Ht{constructor(e,t,i=Bi,r,s,o,a=Kt,l=Kt,c,h=_n,d=1){if(h!==_n&&h!==wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var Ls=class extends vn{constructor(e,t=Bi,i=Vn,r,s,o=Kt,a=Kt,l,c=_n){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var Ds=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var $i=class n extends Je{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(d,2));function g(b,m,p,w,P,A,I,C,x,T,B){let N=A/x,G=I/T,W=A/2,Q=I/2,U=C/2,ee=x+1,J=T+1,Z=0,z=0,j=new S;for(let V=0;V<J;V++){let pe=V*G-Q;for(let Ve=0;Ve<ee;Ve++){let Ge=Ve*N-W;j[b]=Ge*w,j[m]=pe*P,j[p]=U,c.push(j.x,j.y,j.z),j[b]=0,j[m]=0,j[p]=C>0?1:-1,h.push(j.x,j.y,j.z),d.push(Ve/x),d.push(1-V/T),Z+=1}}for(let V=0;V<T;V++)for(let pe=0;pe<x;pe++){let Ve=u+pe+ee*V,Ge=u+pe+ee*(V+1),re=u+(pe+1)+ee*(V+1),Ue=u+(pe+1)+ee*V;l.push(Ve,Ge,Ue),l.push(Ge,re,Ue),z+=6}a.addGroup(f,z,B),f+=z,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Oc=class n extends Je{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=i*2+s,b=r+1,m=new S,p=new S;for(let w=0;w<=g;w++){let P=0,A=0,I=0,C=0;if(w<=i){let B=w/i,N=B*Math.PI/2;A=-h-e*Math.cos(N),I=e*Math.sin(N),C=-e*Math.cos(N),P=B*d}else if(w<=i+s){let B=(w-i)/s;A=-h+B*t,I=e,C=0,P=d+B*u}else{let B=(w-i-s)/i,N=B*Math.PI/2;A=h+e*Math.sin(N),I=e*Math.cos(N),C=e*Math.sin(N),P=d+u+B*d}let x=Math.max(0,Math.min(1,P/f)),T=0;w===0?T=.5/r:w===g&&(T=-.5/r);for(let B=0;B<=r;B++){let N=B/r,G=N*Math.PI*2,W=Math.sin(G),Q=Math.cos(G);p.x=-I*Q,p.y=A,p.z=I*W,a.push(p.x,p.y,p.z),m.set(-I*Q,C,I*W),m.normalize(),l.push(m.x,m.y,m.z),c.push(N+T,x)}if(w>0){let B=(w-1)*b;for(let N=0;N<r;N++){let G=B+N,W=B+N+1,Q=w*b+N,U=w*b+N+1;o.push(G,W,Q),o.push(W,U,Q)}}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var cl=class n extends Je{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new S,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Ns=class n extends Je{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,b=[],m=i/2,p=0;w(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(f,2));function w(){let A=new S,I=new S,C=0,x=(t-e)/i;for(let T=0;T<=s;T++){let B=[],N=T/s,G=N*(t-e)+e;for(let W=0;W<=r;W++){let Q=W/r,U=Q*l+a,ee=Math.sin(U),J=Math.cos(U);I.x=G*ee,I.y=-N*i+m,I.z=G*J,d.push(I.x,I.y,I.z),A.set(ee,x,J).normalize(),u.push(A.x,A.y,A.z),f.push(Q,1-N),B.push(g++)}b.push(B)}for(let T=0;T<r;T++)for(let B=0;B<s;B++){let N=b[B][T],G=b[B+1][T],W=b[B+1][T+1],Q=b[B][T+1];(e>0||B!==0)&&(h.push(N,G,Q),C+=3),(t>0||B!==s-1)&&(h.push(G,W,Q),C+=3)}c.addGroup(p,C,0),p+=C}function P(A){let I=g,C=new ie,x=new S,T=0,B=A===!0?e:t,N=A===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let G=g;for(let W=0;W<=r;W++){let U=W/r*l+a,ee=Math.cos(U),J=Math.sin(U);x.x=B*J,x.y=m*N,x.z=B*ee,d.push(x.x,x.y,x.z),u.push(0,N,0),C.x=ee*.5+.5,C.y=J*.5*N+.5,f.push(C.x,C.y),g++}for(let W=0;W<r;W++){let Q=I+W,U=G+W;A===!0?h.push(U,U+1,Q):h.push(U+1,U,Q),T+=3}c.addGroup(p,T,A===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bc=new S,zc=new S,au=new S,kc=new En,hl=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(yr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:b,b:m,c:p}=kc;if(b.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),kc.getNormal(au),d[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){let P=(w+1)%3,A=d[w],I=d[P],C=kc[h[w]],x=kc[h[P]],T=`${A}_${I}`,B=`${I}_${A}`,N=u.get(B);N?(au.dot(N.normal)<=s&&(f.push(C.x,C.y,C.z),f.push(x.x,x.y,x.z)),u.set(B,null)):u.has(T)||u.set(T,{index0:c[w],index1:c[P],normal:au.clone()})}}for(let g of u.values())if(g){let{index0:b,index1:m}=g;Bc.fromBufferAttribute(a,b),zc.fromBufferAttribute(a,m),f.push(Bc.x,Bc.y,Bc.z),f.push(zc.x,zc.y,zc.z)}this.setAttribute("position",new Be(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ml={};T0(ml,{ArcCurve:()=>Gc,CatmullRomCurve3:()=>Oo,CubicBezierCurve:()=>ul,CubicBezierCurve3:()=>Vc,EllipseCurve:()=>Us,LineCurve:()=>fl,LineCurve3:()=>Hc,QuadraticBezierCurve:()=>dl,QuadraticBezierCurve3:()=>Bo,SplineCurve:()=>pl});var Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let h=i[r],u=i[r+1]-h,f=(o-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ie:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new S,r=[],s=[],o=[],a=new S,l=new rt;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new S)}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(st(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(st(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};var Us=class extends Mi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};var Gc=class extends Us{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uu(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,r(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var ad=new S,ld=new S,lu=new uu,cu=new uu,hu=new uu,Oo=class extends Mi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new S){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ld.subVectors(r[0],r[1]).add(r[0]),c=ld);let d=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ad.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ad),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),lu.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,b,m),cu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,b,m),hu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(lu.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),cu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),hu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(lu.calc(l),cu.calc(l),hu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fu(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function ax(n,e){let t=1-n;return t*t*e}function lx(n,e){return 2*(1-n)*n*e}function cx(n,e){return n*n*e}function Fs(n,e,t,i){return ax(n,e)+lx(n,t)+cx(n,i)}function hx(n,e){let t=1-n;return t*t*t*e}function ux(n,e){let t=1-n;return 3*t*t*n*e}function fx(n,e){return 3*(1-n)*n*n*e}function dx(n,e){return n*n*n*e}function Os(n,e,t,i,r){return hx(n,e)+ux(n,t)+fx(n,i)+dx(n,r)}var ul=class extends Mi{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Os(e,r.x,s.x,o.x,a.x),Os(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var Vc=class extends Mi{constructor(e=new S,t=new S,i=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new S){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Os(e,r.x,s.x,o.x,a.x),Os(e,r.y,s.y,o.y,a.y),Os(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var fl=class extends Mi{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Hc=class extends Mi{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var dl=class extends Mi{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Fs(e,r.x,s.x,o.x),Fs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Bo=class extends Mi{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Fs(e,r.x,s.x,o.x),Fs(e,r.y,s.y,o.y),Fs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var pl=class extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(fu(a,l.x,c.x,h.x,d.x),fu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ie().fromArray(r))}return this}};var gl=class n extends Je{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=st(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,d=new S,u=new ie,f=new S,g=new S,b=new S,m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(g)}for(let w=0;w<=t;w++){let P=i+w*h*r,A=Math.sin(P),I=Math.cos(P);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*A,d.y=e[C].y,d.z=e[C].x*I,o.push(d.x,d.y,d.z),u.x=w/t,u.y=C/(e.length-1),a.push(u.x,u.y);let x=l[3*C+0]*A,T=l[3*C+1],B=l[3*C+0]*I;c.push(x,T,B)}}for(let w=0;w<t;w++)for(let P=0;P<e.length-1;P++){let A=P+w*e.length,I=A,C=A+e.length,x=A+e.length+1,T=A+1;s.push(I,C,T),s.push(x,T,C)}this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var cr=class n extends Je{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let w=p*u-o;for(let P=0;P<c;P++){let A=P*d-s;g.push(A,-w,0),b.push(0,0,1),m.push(P/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let P=w+c*p,A=w+c*(p+1),I=w+1+c*(p+1),C=w+1+c*p;f.push(P,A,C),f.push(A,I,C)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(b,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var hr=class n extends Je{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new S,u=new S,f=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let w=[],P=p/i,A=o+P*a,I=e*Math.cos(A),C=Math.sqrt(e*e-I*I),x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let B=T/t,N=r+B*s;d.x=-C*Math.cos(N),d.y=I,d.z=C*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),m.push(B+x,1-P),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){let P=h[p][w+1],A=h[p][w],I=h[p+1][w],C=h[p+1][w+1];(p!==0||o>0)&&f.push(P,A,C),(p!==i-1||l<Math.PI)&&f.push(A,I,C)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(b,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xc=class n extends Je{constructor(e=new Bo(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,l=new S,c=new ie,h=new S,d=[],u=[],f=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new Be(d,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(f,2));function b(){for(let P=0;P<t;P++)m(P);m(s===!1?t:0),w(),p()}function m(P){h=e.getPointAt(P/t,h);let A=o.normals[P],I=o.binormals[P];for(let C=0;C<=r;C++){let x=C/r*Math.PI*2,T=Math.sin(x),B=-Math.cos(x);l.x=B*A.x+T*I.x,l.y=B*A.y+T*I.y,l.z=B*A.z+T*I.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let P=1;P<=t;P++)for(let A=1;A<=r;A++){let I=(r+1)*(P-1)+(A-1),C=(r+1)*P+(A-1),x=(r+1)*P+A,T=(r+1)*(P-1)+A;g.push(I,C,T),g.push(C,x,T)}}function w(){for(let P=0;P<=t;P++)for(let A=0;A<=r;A++)c.x=P/t,c.y=A/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ml[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Cr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(hd(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(hd(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let i=Cr(n[t]);for(let r in i)e[r]=i[r]}return e}function hd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ud(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var ur={clone:Cr,merge:rn};var fd=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var dd=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var Zt=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new de().setHex(r.value);break;case"v2":this.uniforms[i].value=new ie().fromArray(r.value);break;case"v3":this.uniforms[i].value=new S().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new it().fromArray(r.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var Kr=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Rr=class extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jn,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zo=class extends Qt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jn,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ko=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var Go=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var In=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};var xl=class extends In{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ic:s=e,a=2*t-i;break;case nc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ic:o=e,l=2*i-t;break;case nc:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,w=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,P=(-1-f)*m+(1.5+f)*b+.5*g,A=f*m-f*b;for(let I=0;I!==a;++I)s[I]=p*o[h+I]+w*o[c+I]+P*o[l+I]+A*o[d+I];return s}};var Ho=class extends In{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}};var _l=class extends In{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}};var yl=class extends In{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(r-t),b=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*b+o[l+m]*g;return s}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let b=o[c+g],m=o[l+g],p=f*u+g*2,w=d[p],P=d[p+1],A=e*u+g*2,I=h[A],C=h[A+1],x=Tx(i,t,w,I,r);s[g]=md(x,b,P,C,m)}return s}};function md(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function wx(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Tx(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=md(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=wx(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Li=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Vo(e.settings)&&(i.settings={inTangents:jr(e.settings.inTangents,Array),outTangents:jr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break;case Eh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return ec;case this.InterpolantFactoryMethodBezier:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Vo(this.settings)&&(gd(this.settings.inTangents,e),gd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Vo(this.settings)&&(xd(this.settings.inTangents,e),xd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Rh(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ec,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let b=t[d+g];if(b!==t[u+g]||b!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Vo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function gd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function xd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Li.prototype.ValueTypeName="";Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=Ql;var Pr=class extends Li{constructor(e,t,i){super(e,t,i)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=xs;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Li{constructor(e,t,i,r){super(e,t,i,r)}};vl.prototype.ValueTypeName="color";var Ml=class extends Li{constructor(e,t,i,r){super(e,t,i,r)}};Ml.prototype.ValueTypeName="number";var Sl=class extends In{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)yi.slerpFlat(s,0,o,c-a,o,c,l);return s}};var Wo=class extends Li{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends Li{constructor(e,t,i){super(e,t,i)}};Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=xs;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Li{constructor(e,t,i,r){super(e,t,i,r)}};bl.prototype.ValueTypeName="vector";var wl=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pu=new wl;var sn=class{constructor(e){this.manager=e!==void 0?e:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};sn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ln=class extends _t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Xo=class extends Ln{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var _u=new rt,yd=new S,vd=new S,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pn,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(_u,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===or||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Yc=new S,Zc=new yi,fr=new S,es=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yc,Zc,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,fr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Yc,Zc,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,fr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var ts=new S,Md=new ie,Sd=new ie,pi=class extends es{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Md,Sd),t.subVectors(Sd,Md)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $c=class extends Qr{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}};var zs=class extends Ln{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var dr=class extends es{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Jc=class extends Qr{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var ks=class extends Ln{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Jc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qo=-90,Yo=1,is=class extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new pi(qo,Yo,e,t);r.layers=this.layers,this.add(r);let s=new pi(qo,Yo,e,t);s.layers=this.layers,this.add(s);let o=new pi(qo,Yo,e,t);o.layers=this.layers,this.add(o);let a=new pi(qo,Yo,e,t);a.layers=this.layers,this.add(a);let l=new pi(qo,Yo,e,t);l.layers=this.layers,this.add(l);let c=new pi(qo,Yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}};var Tl=class extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Zo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Gx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Gx(){this._document.hidden===!1&&this.reset()}var vu="\\[\\]\\.:\\/",Hx=new RegExp("["+vu+"]","g"),Mu="[^"+vu+"]",Wx="[^"+vu.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",Mu),qx=/(WCOD+)?/.source.replace("WCOD",Wx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),$x=new RegExp("^"+Xx+qx+Yx+Zx+"$"),Jx=["material","materials","bones","map"],yu=class{constructor(e,t,i){let r=i||ti.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ti=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(e){let t=$x.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Jx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ti.Composite=yu;ti.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ti.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ti.prototype.GetterByBindingType=[ti.prototype._getValue_direct,ti.prototype._getValue_array,ti.prototype._getValue_arrayElement,ti.prototype._getValue_toArray];ti.prototype.SetterByBindingTypeAndVersioning=[[ti.prototype._setValue_direct,ti.prototype._setValue_direct_setNeedsUpdate,ti.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ti.prototype._setValue_array,ti.prototype._setValue_array_setNeedsUpdate,ti.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ti.prototype._setValue_arrayElement,ti.prototype._setValue_arrayElement_setNeedsUpdate,ti.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ti.prototype._setValue_fromArray,ti.prototype._setValue_fromArray_setNeedsUpdate,ti.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YL=new Float32Array(1);var Td=new rt,Al=class{constructor(e,t,i=0,r=1/0){this.ray=new yn(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(e,t=!0,i=[]){return Su(e,this,i,t),i.sort(Ad),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Su(e[r],this,i,t);return i.sort(Ad),i}};function Ad(n,e){return n.distance-e.distance}function Su(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Su(s[o],e,t,!0)}}var $o=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var wu=class wu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};wu.prototype.isMatrix2=!0;var bu=wu;var El=class extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Tu(n,e,t,i){let r=e_(i);switch(t){case Kl:return n*e;case Gr:return n*e/r.components*r.byteLength;case ps:return n*e/r.components*r.byteLength;case Tn:return n*e*2/r.components*r.byteLength;case ro:return n*e*2/r.components*r.byteLength;case jl:return n*e*3/r.components*r.byteLength;case Wi:return n*e*4/r.components*r.byteLength;case so:return n*e*4/r.components*r.byteLength;case oo:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:case Ma:return Math.max(n,16)*Math.max(e,8)/4;case _a:case va:return Math.max(n,8)*Math.max(e,8)/2;case Sa:case ba:case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:case ms:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Va:case Ha:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xa:case qa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gs:case Ya:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e_(n){switch(n){case Ai:case Yl:return{byteLength:1,components:1};case _r:case Zl:case ai:return{byteLength:2,components:1};case io:case no:return{byteLength:2,components:4};case Bi:case to:case Ei:return{byteLength:4,components:1};case $l:case Jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function jc(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ed(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],b=d[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let b=d[f];n.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Cd=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Rd=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`;var Pd=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Id=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Ld=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var Dd=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Nd=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;var Ud=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Fd=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );

	}

#endif
`;var Od=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Bd=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var zd=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var kd=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`;var Gd=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`;var Vd=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;var Hd=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`;var Wd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Xd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var qd=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Yd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Zd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var $d=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Jd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec4( 1.0 );

#endif

#ifdef USE_COLOR_ALPHA

	vColor *= color;

#elif defined( USE_COLOR )

	vColor.rgb *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.rgb *= instanceColor.rgb;

#endif

#ifdef USE_BATCHING_COLOR

	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );

#endif
`;var Kd=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

#define inverseTransformDirection transformDirectionByInverseViewMatrix // @deprecated r185

vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );

}

vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`;var jd=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

#endif
`;var Qd=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var ep=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var tp=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var ip=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var np=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var rp=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var sp=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );

		#ifdef ENVMAP_BLENDING_MULTIPLY

			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_MIX )

			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_ADD )

			outgoingLight += envColor.xyz * specularStrength * reflectivity;

		#endif

	#endif

#endif
`;var op=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;

	#ifdef ENVMAP_TYPE_PMREM

		// Invert PMREMGenerator.lodToRoughness(). Matches Filament's perceptualRoughnessToLod().
		// https://github.com/google/filament/blob/main/shaders/src/surface_light_indirect.fs
		float roughnessToMip( const in float roughness ) {

			float r = clamp( roughness, 0.0, 1.0 );

			return ENVMAP_MAX_LOD * r * ( 2.0 - r );

		}

	#endif

#endif
`;var ap=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;var lp=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;var cp=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;var hp=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var up=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var fp=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var dp=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;var pp=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`;var mp=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var gp=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var xp=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`;var _p=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_SUN_LIGHTS > 0

	struct SunLight {
		vec3 direction;
		vec3 color;
	};

	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];

	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {

		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;

	}

#endif


#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif

#include <lightprobes_pars_fragment>
`;var yp=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_PMREM

			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_PMREM

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );

			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );

			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_RETROREFLECTION

		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

			#ifdef ENVMAP_TYPE_PMREM

				// The retroreflective lobe returns light toward its source, so the environment is sampled along the view direction
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );

				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );

				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );

				return envMapColor.rgb * envMapIntensity;

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_PMREM

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

		#ifdef USE_RETROREFLECTION

			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

				#ifdef ENVMAP_TYPE_PMREM

				  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

					return getIBLRetroRadiance( viewDir, bentNormal, roughness );

				#else

					return vec3( 0.0 );

				#endif

			}

		#endif

	#endif

#endif
`;var vp=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Mp=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`;var Sp=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var bp=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`;var wp=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

// Minimum roughness, so even a perfect mirror samples a prefiltered level of the environment map.
// Matches Filament's desktop MIN_PERCEPTUAL_ROUGHNESS: https://github.com/google/filament/blob/main/shaders/src/surface_material.fs
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef USE_DIFFUSE_ROUGHNESS

	float diffuseRoughnessFactor = diffuseRoughness;

	#ifdef USE_DIFFUSE_ROUGHNESSMAP

		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;

	#endif

	material.diffuseRoughness = saturate( diffuseRoughnessFactor );

#endif

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_RETROREFLECTION

	material.retroreflectivity = retroreflectivity;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`;var Tp=`

uniform sampler2D dfgLUT;

struct PhysicalMaterial {

	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;

	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;

	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif

	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

#ifdef USE_DIFFUSE_ROUGHNESS

	// Portsmouth et al. 2025, "EON: A Practical Energy-Preserving Rough Diffuse BRDF"
	// https://jcgt.org/published/0014/01/06/
	const float EON_EPSILON = 1e-7;

	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {

		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );

		return A * ( 1.0 + roughness * gOverPi );

	}

	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {

		vec3 rho = saturate( diffuseColor );

		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;

		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );

		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );

		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );

		return singleScatter + multiScatter;

	}

	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {

		vec3 rho = saturate( diffuseColor );

		if ( roughness <= EON_EPSILON ) return rho;

		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );

		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );

	}

#endif

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 ); // punctual lights need a minimum roughness to show a highlight

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 ); // punctual lights need a minimum roughness to show a highlight

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float alphaT = max( material.alphaT, alpha );

		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF".
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );

	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;

	float DG = exp( a * dotNV + b );

	return saturate( DG );

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

		#ifdef USE_CLEARCOAT

			vec3 Ncc = geometryClearcoatNormal;

			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );

			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );

			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);

			// LTC Fresnel Approximation for clearcoat
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;

			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );

		#endif

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif

	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	#ifdef USE_RETROREFLECTION

		// Minimal Retroreflective Microfacet Model:
		// https://jcgt.org/published/0015/01/04/
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );

		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );

	#endif

	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;

	// Light reflected by the specular interface is not available to the diffuse layer ( glTF fresnel_mix )
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );

	#ifdef USE_RETROREFLECTION

		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );

		F = mix( F, retroF, saturate( material.retroreflectivity ) );

	#endif

	#ifdef USE_DIFFUSE_ROUGHNESS

		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );

	#else

		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );

	#endif

	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	// Energy reflected by the specular lobe is not available to the diffuse layer
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );

	#endif

	#ifdef USE_DIFFUSE_ROUGHNESS

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		// Irradiance has already integrated the cosine term, so use the directional
		// albedo to approximate EON under locally uniform incident radiance.
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );

	#else

		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );

	#endif

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		diffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectDiffuse += diffuse;

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;

 	#endif

	// Both indirect specular and indirect diffuse light accumulate here
	// Compute multiscattering separately for dielectric and metallic, then mix

	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );

	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );

	#endif

	// Mix based on metalness
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );

	// Diffuse energy conservation uses dielectric path
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );

	#else

		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );

	#endif

	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;

	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;var Ap=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );

		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );

		// Iridescence F0 approximation
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );

	}

#endif

#ifdef STANDARD

	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );

	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;

	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )

		// Multi-scattering energy compensation for direct lighting
		// Based on "Practical Multiple Scattering Compensation for Microfacet Models"
		// https://blog.selfshadow.com/publications/turquin/ms_comp_final.pdf

		// Energy of the single-scattering lobe in a white furnace ( F0 = F90 = 1 )
		float EssMs = material.dfg.x + material.dfg.y;

		// Compensate for the energy lost to multiple scattering, tinting the added term by F0 ( equation 16 )
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );

	#endif

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )

	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {

		sunLight = sunLights[ i ];

		getSunLightInfo( sunLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_LIGHT_PROBE_GRIDS > 0

		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );

		// Sample the last grid whose cells contain the fragment.

		int probeGrid = - 1;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {

			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;

		}
		#pragma unroll_loop_end

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {

			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;var Ep=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )

		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )

			iblIrradiance += getIBLIrradiance( geometryNormal );

		#endif

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_RETROREFLECTION

		#ifdef USE_ANISOTROPY

			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

		#else

			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );

		#endif

		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );

	#endif

	radiance += iblRadiance;

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`;var Cp=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Rp=`
#if NUM_LIGHT_PROBE_GRIDS > 0

// Single atlas 3D texture that stores all 7 SH sub-volumes stacked along Z.
// Atlas depth = 7 * ( nz + 2 ) where nz = probesResolution.z.
// Each sub-volume occupies ( nz + 2 ) slices: 1 padding + nz data + 1 padding.
// Padding is a copy of the first / last data slice and prevents color bleeding
// when the hardware linear filter reads across a sub-volume boundary.
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];

uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];

bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {

	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;

	// Grow the bounds by 1% of a cell, so fragments on the bounds aren't left out by
	// precision errors or samples outside of the triangle.

	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );

}

vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {

	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;

	// Offset sample position along normal by half a probe spacing
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;

	// The bounds hold one cell per probe, so they map directly to the probe grid.
	// Clamp to the texel centers of the outermost probes (XY and Z).
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );

	// Atlas UV mapping along Z:
	//   paddedSlices = nz + 2  (1 padding texel at each end of every sub-volume)
	//   atlasDepth   = 7 * paddedSlices
	//   For sub-volume t the first DATA texel sits at atlas slice t*paddedSlices + 1.
	//   Given probe-grid texel-centre UVZ = ( iz + 0.5 ) / nz the atlas UV is:
	//     atlasUvZ = ( uvw.z * nz + t * paddedSlices + 1 ) / atlasDepth
	//
	// uvZBase encodes the nz-scaled Z plus the intra-volume offset (+ 1 for padding),
	// so adding t*paddedSlices steps to each successive sub-volume.
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;

	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );

	// Unpack 9 vec3 SH L2 coefficients
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;

	// Evaluate L2 irradiance
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;

	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );

	return max( result, vec3( 0.0 ) );

}

#endif
`;var Pp=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Ip=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Lp=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Dp=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Np=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Up=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Fp=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;var Op=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Bp=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var zp=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var kp=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var Gp=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting

	#if defined( USE_COLOR_ALPHA )

		vColor *= morphTargetBaseInfluence;

	#elif defined( USE_COLOR )

		vColor.rgb *= morphTargetBaseInfluence;

	#endif

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`;var Vp=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Hp=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`;var Wp=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Xp=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#ifdef DOUBLE_SIDED

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#ifdef DOUBLE_SIDED

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`;var qp=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;

	#if defined( USE_PACKED_NORMALMAP )

		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );

	#endif

	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`;var Yp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Zp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var $p=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

		#ifdef FLIP_SIDED

			vBitangent = - vBitangent;

		#endif

	#endif

#endif
`;var Jp=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`;var Kp=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var jp=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Qp=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`;var em=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var tm=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var im=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;

	#else

		return depth * ( near - far ) - near;

	#endif
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return ( near * far ) / ( ( near - far ) * depth - near );

	#else

		return ( near * far ) / ( ( far - near ) * depth - far );

	#endif
}
`;var nm=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var rm=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var sm=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var om=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;var am=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var lm=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var cm=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// must match the cascade count in SunLightShadow

		#define SUN_LIGHT_CASCADES 2

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#else

			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#endif

		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#else

			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#endif

		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#else

			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#endif

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#elif defined( SHADOWMAP_TYPE_BASIC )

			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#endif

		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		// Interleaved Gradient Noise for randomizing sampling patterns
		float interleavedGradientNoise( vec2 position ) {

			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );

		}

		// Vogel disk sampling for uniform circular distribution
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {

			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;

		}

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
				// 5 samples using Vogel disk + IGN = effectively 20 filtered taps with better distribution
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;

				// Use IGN to rotate sampling pattern per pixel
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#elif defined( SHADOWMAP_TYPE_VSM )

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;

				float mean = distribution.x;
				float variance = distribution.y * distribution.y;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					float hard_shadow = step( mean, shadowCoord.z );

				#else

					float hard_shadow = step( shadowCoord.z, mean );

				#endif
				
				// Early return if fully lit
				if ( hard_shadow == 1.0 ) {

					shadow = 1.0;

				} else {

					// Variance must be non-zero to avoid division by zero
					variance = max( variance, 0.0000001 );

					// Distance from mean
					float d = shadowCoord.z - mean;

					// Chebyshev's inequality for upper bound on probability
					float p_max = variance / ( variance + d * d );

					// Reduce light bleeding by remapping [amount, 1] to [0, 1]
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );

					shadow = max( hard_shadow, p_max );

				}

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#else // SHADOWMAP_TYPE_BASIC

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				float depth = texture2D( shadowMap, shadowCoord.xy ).r;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					shadow = step( depth, shadowCoord.z );

				#else

					shadow = step( shadowCoord.z, depth );

				#endif

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#endif

	#if NUM_SUN_LIGHT_SHADOWS > 0

		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {

			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;

			float shadow = 1.0;

			// walk the cascades back to front so each fade band can blend with the shadow behind it

			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {

				// ( begin, end, fade start ) view depths of the cascade

				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];

				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {

					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);

					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );

				}

			}

			return shadow;

		}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#if defined( SHADOWMAP_TYPE_PCF )

	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// Direction from light to fragment
		vec3 bd3D = normalize( lightToPosition );

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// Each sample is compared against the depth of the point next to the fragment in its direction,
			// on whichever face of the cube it falls, so the comparison is the same on every face. A face
			// stores the depth along its own axis, which for the point at direction * lightDistance is
			// lightDistance * max( |x|, |y|, |z| ) of the direction, and perspective depth is a + b / z.
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );

			#else

				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );

			#endif

			// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
			// Use Vogel disk + IGN sampling for better quality
			float texelSize = shadowRadius / shadowMapSize.x;

			// Build a tangent-space coordinate system for applying offsets
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );

			// Use IGN to rotate sampling pattern per pixel
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

			shadow = 0.0;

			for ( int i = 0; i < 5; i ++ ) {

				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );

				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );

				shadow += texture( shadowMap, vec4( direction, dp ) );

			}

			shadow *= 0.2;

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#elif defined( SHADOWMAP_TYPE_BASIC )

	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// viewZ to perspective depth

			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;

			// Direction from light to fragment
			vec3 bd3D = normalize( lightToPosition );

			float depth = textureCube( shadowMap, bd3D ).r;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				depth = 1.0 - depth;

			#endif

			shadow = step( dp, depth );

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#endif

	#endif

#endif
`;var hm=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// cascade selection and shadow coordinates are computed per fragment

		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;var um=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	#ifdef HAS_NORMAL

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.

		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

	#else

		vec3 shadowWorldNormal = vec3( 0.0 ); // fallback, see #21483

	#endif

	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_SUN_LIGHT_SHADOWS > 0

		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`;var fm=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

	SunLightShadow sunLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {

		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;var dm=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var pm=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`;var mm=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var gm=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`;var xm=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var _m=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var ym=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var vm=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;var Mm=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`;var Sm=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`;var bm=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP

	varying vec2 vDiffuseRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var wm=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP

	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var Tm=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP

	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`;var Am=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;var Em=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Cm=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Rm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Pm=`

uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <envmap_common_pars_fragment>

void main() {

	#ifdef ENVMAP_TYPE_PMREM

		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );

	#else

		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Im=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Lm=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Dm=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,Nm=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z

	#ifdef USE_REVERSED_DEPTH_BUFFER

		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];

	#else

		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;

	#endif

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		// TODO Deprecate
		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`;var Um=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Fm=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );

}
`;var Om=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Bm=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var zm=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,km=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var Gm=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Vm=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Hm=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Wm=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Xm=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,qm=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Ym=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Zm=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`;var $m=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Jm=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Km=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,jm=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;

	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Qm=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,eg=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var tg=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,ig=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var ng=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,rg=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var sg=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,og=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var mt={alphahash_fragment:Cd,alphahash_pars_fragment:Rd,alphamap_fragment:Pd,alphamap_pars_fragment:Id,alphatest_fragment:Ld,alphatest_pars_fragment:Dd,aomap_fragment:Nd,aomap_pars_fragment:Ud,batching_pars_vertex:Fd,batching_vertex:Od,begin_vertex:Bd,beginnormal_vertex:zd,bsdfs:kd,iridescence_fragment:Gd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:qd,color_fragment:Yd,color_pars_fragment:Zd,color_pars_vertex:$d,color_vertex:Jd,common:Kd,defaultnormal_vertex:jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:ip,colorspace_fragment:np,colorspace_pars_fragment:rp,envmap_fragment:sp,envmap_common_pars_fragment:op,envmap_pars_fragment:ap,envmap_pars_vertex:lp,envmap_physical_pars_fragment:yp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:fp,fog_pars_fragment:dp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:xp,lights_pars_begin:_p,lights_toon_fragment:vp,lights_toon_pars_fragment:Mp,lights_phong_fragment:Sp,lights_phong_pars_fragment:bp,lights_physical_fragment:wp,lights_physical_pars_fragment:Tp,lights_fragment_begin:Ap,lights_fragment_maps:Ep,lights_fragment_end:Cp,lightprobes_pars_fragment:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Dp,map_fragment:Np,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphinstance_vertex:kp,morphcolor_vertex:Gp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:Yp,normal_pars_vertex:Zp,normal_vertex:$p,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:im,premultiplied_alpha_fragment:nm,project_vertex:rm,dithering_fragment:sm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:fm,skinbase_vertex:dm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:xm,specularmap_pars_fragment:_m,tonemapping_fragment:ym,tonemapping_pars_fragment:vm,transmission_fragment:Mm,transmission_pars_fragment:Sm,uv_pars_fragment:bm,uv_pars_vertex:wm,uv_vertex:Tm,worldpos_vertex:Am,background_vert:Em,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Lm,depth_vert:Dm,depth_frag:Nm,distance_vert:Um,distance_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:km,meshbasic_vert:Gm,meshbasic_frag:Vm,meshlambert_vert:Hm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:Ym,meshnormal_frag:Zm,meshphong_vert:$m,meshphong_frag:Jm,meshphysical_vert:Km,meshphysical_frag:jm,meshtoon_vert:Qm,meshtoon_frag:eg,points_vert:tg,points_frag:ig,shadow_vert:ng,shadow_frag:rg,sprite_vert:sg,sprite_frag:og};var Fe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}};var Dn={basic:{uniforms:rn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:rn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:rn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:rn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:rn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new de(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:rn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:rn([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:rn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:rn([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:rn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:rn([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:rn([Fe.common,Fe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:rn([Fe.lights,Fe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Dn.physical={uniforms:rn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Qc={r:0,b:0,g:0},__=new rt,ag=new it;ag.set(-1,0,0,0,1,0,0,0,1);function lg(n,e,t,i,r,s){let o=new de(0),a=r===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){let A=w.backgroundBlurriness>0;P=e.get(P,A)}return P}function g(w){let P=!1,A=f(w);A===null?m(o,a):A&&A.isColor&&(m(A,1),P=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(w,P){let A=f(P);A&&A.isCubeTexture?(c===void 0&&(c=new ht(new $i(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Cr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(P.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ag),c.material.toneMapped=ct.getTransfer(A.colorSpace)!==At,(h!==A||d!==A.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ht(new cr(2,2),new Zt({name:"BackgroundMaterial",uniforms:Cr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ct.getTransfer(A.colorSpace)!==At,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,P){w.getRGB(Qc,qc(n)),t.buffers.color.setClear(Qc.r,Qc.g,Qc.b,P,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,P=1){o.set(w),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(o,a)},render:g,addToRenderList:b,dispose:p}}function cg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,o=!1;function a(G,W,Q,U,ee){let J=!1,Z=d(G,U,Q,W);s!==Z&&(s=Z,c(s.object)),J=f(G,U,Q,ee),J&&g(G,U,Q,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,A(G,W,Q,U),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(G){return n.bindVertexArray(G)}function h(G){return n.deleteVertexArray(G)}function d(G,W,Q,U){let ee=U.wireframe===!0,J=i[W.id];J===void 0&&(J={},i[W.id]=J);let Z=G.isInstancedMesh===!0?G.id:0,z=J[Z];z===void 0&&(z={},J[Z]=z);let j=z[Q.id];j===void 0&&(j={},z[Q.id]=j);let V=j[ee];return V===void 0&&(V=u(l()),j[ee]=V),V}function u(G){let W=[],Q=[],U=[];for(let ee=0;ee<t;ee++)W[ee]=0,Q[ee]=0,U[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Q,attributeDivisors:U,object:G,attributes:{},index:null}}function f(G,W,Q,U){let ee=s.attributes,J=W.attributes,Z=0,z=Q.getAttributes();for(let j in z)if(z[j].location>=0){let pe=ee[j],Ve=J[j];if(Ve===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(Ve=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(Ve=G.instanceColor)),pe===void 0||pe.attribute!==Ve||Ve&&pe.data!==Ve.data)return!0;Z++}return s.attributesNum!==Z||s.index!==U}function g(G,W,Q,U){let ee={},J=W.attributes,Z=0,z=Q.getAttributes();for(let j in z)if(z[j].location>=0){let pe=J[j];pe===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(pe=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(pe=G.instanceColor));let Ve={};Ve.attribute=pe,pe&&pe.data&&(Ve.data=pe.data),ee[j]=Ve,Z++}s.attributes=ee,s.attributesNum=Z,s.index=U}function b(){let G=s.newAttributes;for(let W=0,Q=G.length;W<Q;W++)G[W]=0}function m(G){p(G,0)}function p(G,W){let Q=s.newAttributes,U=s.enabledAttributes,ee=s.attributeDivisors;Q[G]=1,U[G]===0&&(n.enableVertexAttribArray(G),U[G]=1),ee[G]!==W&&(n.vertexAttribDivisor(G,W),ee[G]=W)}function w(){let G=s.newAttributes,W=s.enabledAttributes;for(let Q=0,U=W.length;Q<U;Q++)W[Q]!==G[Q]&&(n.disableVertexAttribArray(Q),W[Q]=0)}function P(G,W,Q,U,ee,J,Z){Z===!0?n.vertexAttribIPointer(G,W,Q,ee,J):n.vertexAttribPointer(G,W,Q,U,ee,J)}function A(G,W,Q,U){b();let ee=U.attributes,J=Q.getAttributes(),Z=W.defaultAttributeValues;for(let z in J){let j=J[z];if(j.location>=0){let V=ee[z];if(V===void 0&&(z==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),z==="instanceColor"&&G.instanceColor&&(V=G.instanceColor)),V!==void 0){let pe=V.normalized,Ve=V.itemSize,Ge=e.get(V);if(Ge===void 0)continue;let re=Ge.buffer,Ue=Ge.type,We=Ge.bytesPerElement,tt=Ue===n.INT||Ue===n.UNSIGNED_INT||V.gpuType===to;if(V.isInterleavedBufferAttribute){let ze=V.data,dt=ze.isInterleavedBuffer===!0?ze.stride:ze.itemSize,mi=V.offset;if(ze.isInstancedInterleavedBuffer||ze.isInstancedBufferAttribute){for(let ot=0;ot<j.locationSize;ot++)p(j.location+ot,ze.meshPerAttribute);G.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ot=0;ot<j.locationSize;ot++)m(j.location+ot);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ot=0;ot<j.locationSize;ot++)P(j.location+ot,Ve/j.locationSize,Ue,pe,dt*We,(mi+Ve/j.locationSize*ot)*We,tt)}else{if(V.isInstancedBufferAttribute){for(let ze=0;ze<j.locationSize;ze++)p(j.location+ze,V.meshPerAttribute);G.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ze=0;ze<j.locationSize;ze++)m(j.location+ze);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ze=0;ze<j.locationSize;ze++)P(j.location+ze,Ve/j.locationSize,Ue,pe,Ve*We,Ve/j.locationSize*ze*We,tt)}}else if(Z!==void 0){let pe=Z[z];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(j.location,pe);break;case 3:n.vertexAttrib3fv(j.location,pe);break;case 4:n.vertexAttrib4fv(j.location,pe);break;default:n.vertexAttrib1fv(j.location,pe)}}}}w()}function I(){B();for(let G in i){let W=i[G];for(let Q in W){let U=W[Q];for(let ee in U){let J=U[ee];for(let Z in J)h(J[Z].object),delete J[Z];delete U[ee]}}delete i[G]}}function C(G){if(i[G.id]===void 0)return;let W=i[G.id];for(let Q in W){let U=W[Q];for(let ee in U){let J=U[ee];for(let Z in J)h(J[Z].object),delete J[Z];delete U[ee]}}delete i[G.id]}function x(G){for(let W in i){let Q=i[W];for(let U in Q){let ee=Q[U];if(ee[G.id]===void 0)continue;let J=ee[G.id];for(let Z in J)h(J[Z].object),delete J[Z];delete ee[G.id]}}}function T(G){for(let W in i){let Q=i[W],U=G.isInstancedMesh===!0?G.id:0,ee=Q[U];if(ee!==void 0){for(let J in ee){let Z=ee[J];for(let z in Z)h(Z[z].object),delete Z[z];delete ee[J]}delete Q[U],Object.keys(Q).length===0&&delete i[W]}}}function B(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:N,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:m,disableUnusedAttributes:w}}function hg(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ug(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==Wi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let T=x===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ai&&x!==Ei&&!T&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:A,maxSamples:I,samples:C}}function fg(n){let e=this,t=null,i=0,r=!1,s=!1,o=new nn,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let w=s?0:i,P=w*4,A=p.clippingState||null;l.value=A,A=h(g,u,P,f);for(let I=0;I!==P;++I)A[I]=t[I];p.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=f+b*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,A=f;P!==b;++P,A+=4)o.copy(d[P]).applyMatrix4(w,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var Lr=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Er(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $i(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:Gn});s.uniforms.tEquirect.value=t;let o=new ht(r,s),a=t.minFilter;return t.minFilter===hn&&(t.minFilter=hi),new is(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};var dg=256,y_=3,v_=20,xg=256,_g=16,M_=3,S_=new S,b_=new de,Jo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new is(1,10,null),this._boxMesh=new ht(new $i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=S_}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(b_));let m=new is(i,r,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(dg,Ih(e))}_fromTexture(e,t){e.mapping===Vn||e.mapping===xr?this._setSize(e.image.length===0?dg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=pg(e,!1,!1),i=Math.log2(e)-y_;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=pg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vn||e.mapping===xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=mg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=w_(),this._integrationMaterial=T_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/_g);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-M_)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(xg*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=A_());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function pg(n,e,t){return new Lr(n,{minFilter:hn,generateMipmaps:e,type:ai,colorSpace:_s,depthBuffer:t})}function Cl(n,e,t){return new Zt({name:n,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:ci,blending:Gn,depthTest:!1,depthWrite:!1})}function w_(){return Cl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function T_(){return Cl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_g}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function A_(){return Cl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${v_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function mg(){return Cl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function gg(){return Cl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===ma||f===ga)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new Lr(g.height);return b.fromEquirectangularTexture(n,u),e.set(u,b),u.addEventListener("dispose",c),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===ma||f===ga,b=f===Vn||f===xr;if(g||b){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Jo(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return g&&w&&w.height>0||b&&w&&l(w)?(i===null&&(i=new Jo(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ma?u.mapping=Vn:f===ga&&(u.mapping=xr),u}function l(u){let f=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function vg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ar("WebGLRenderer: "+i+" extension not supported."),r}}}function Mg(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(g=>delete r[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let b=s.get(g);b&&(e.remove(b),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,b){return r[b.id]!==void 0||(b.addEventListener("dispose",a),r[b.id]=new WeakRef(b),o.register(b,b.id,b),t.memory.geometries++),b}function h(g){let b=g.attributes;for(let m in b)e.update(b[m],n.ARRAY_BUFFER)}function d(g){let b=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let w=b!==null?b.array.length:m.array.length/3-1,P=m.count>=65535?Eo:Ao,A=new P(Math.ceil(w/3)*6,1),I=A.array;if(b!==null){let x=b.array;p=b.version;for(let T=0,B=0;T<w;T+=3){let N=x[T+0],G=x[T+1],W=x[T+2];I[B++]=N,I[B++]=G,I[B++]=G,I[B++]=W,I[B++]=W,I[B++]=N}}else{p=m.version;for(let x=0,T=0;x<w;x+=3){let B=x+0,N=x+1,G=x+2;I[T++]=B,I[T++]=N,I[T++]=N,I[T++]=G,I[T++]=G,I[T++]=B}}A.version=p;let C=s.get(g);C&&e.remove(C),s.set(g,A)}function u(g){let b=s.get(g);if(b){let m=g.index;m!==null&&b.version<m.version&&d(g)}else d(g);return s.get(g)}function f(){for(let g in r){let b=r[g].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Sg(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,s,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,s,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let b=0;for(let m=0;m<f;m++)b+=u[m];t.update(b,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wg(n,e,t){let i=new WeakMap,r=new Dt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let B=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],P=0;f===!0&&(P=1),g===!0&&(P=2),b===!0&&(P=3);let A=a.attributes.position.count*P,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let C=new Float32Array(A*I*4*d),x=new Hr(C,A,I,d);x.type=Ei,x.needsUpdate=!0;let T=P*4;for(let N=0;N<d;N++){let G=m[N],W=p[N],Q=w[N],U=A*I*4*N;for(let ee=0;ee<G.count;ee++){let J=ee*T;f===!0&&(r.fromBufferAttribute(G,ee),C[U+J+0]=r.x,C[U+J+1]=r.y,C[U+J+2]=r.z,C[U+J+3]=0),g===!0&&(r.fromBufferAttribute(W,ee),C[U+J+4]=r.x,C[U+J+5]=r.y,C[U+J+6]=r.z,C[U+J+7]=0),b===!0&&(r.fromBufferAttribute(Q,ee),C[U+J+8]=r.x,C[U+J+9]=r.y,C[U+J+10]=r.z,C[U+J+11]=Q.itemSize===4?r.w:1)}}u={count:d,texture:x,size:new ie(A,I)},i.set(a,u),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Tg(n,e,t,i,r){let s=new WeakMap;function o(c){let h=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var E_={[Ys]:"LINEAR_TONE_MAPPING",[Zs]:"REINHARD_TONE_MAPPING",[$s]:"CINEON_TONE_MAPPING",[zr]:"ACES_FILMIC_TONE_MAPPING",[Ks]:"AGX_TONE_MAPPING",[js]:"NEUTRAL_TONE_MAPPING",[Js]:"CUSTOM_TONE_MAPPING"};function Ag(n,e,t,i,r,s){let o=new jt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Je;h.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Be([0,2,0,0,2,0],2));let d=new Kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ht(h,d),f=new dr(-1,1,1,-1,0,1),g=null,b=null,m=!1,p,w=null,P=[],A=!1;this.setSize=function(I,C){o.setSize(I,C),a!==null&&a.setSize(I,C),l!==null&&l.setSize(I,C);for(let x=0;x<P.length;x++){let T=P[x];T.setSize&&T.setSize(I,C)}},this.setEffects=function(I){P=I,A=P.length>0&&P[0].isRenderPass===!0;let C=o.width,x=o.height;P.length>0&&a===null&&(a=new jt(C,x,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new jt(C,x,{type:ai,depthBuffer:!1,stencilBuffer:!1}));let T=r===!0&&P.some(B=>B.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new vn(C,x),s===!0&&(c.format=wn,c.type=$n)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let B=0;B<P.length;B++){let N=P[B];N.setSize&&N.setSize(C,x),T&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(I,C){if(m||I.toneMapping===bn&&P.length===0)return!1;if(w=C,C!==null){let x=C.width,T=C.height;(o.width!==x||o.height!==T)&&this.setSize(x,T)}return A===!1&&I.setRenderTarget(o),p=I.toneMapping,I.toneMapping=bn,!0},this.hasRenderPass=function(){return A},this.end=function(I,C){I.toneMapping=p,m=!0;let x=o,T=a;for(let B=0;B<P.length;B++){let N=P[B];N.enabled!==!1&&(N.render(I,T,x,C),N.needsSwap!==!1&&(x=T,T=T===a?l:a))}if(g!==I.outputColorSpace||b!==I.toneMapping){g=I.outputColorSpace,b=I.toneMapping,d.defines={},ct.getTransfer(g)===At&&(d.defines.SRGB_TRANSFER="");let B=E_[b];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,I.setRenderTarget(w),I.render(u,f),w=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Dg=new Ht,Ng=new vn(1,1),Ug=new Ls(1),Fg=new Hr,Og=new bs,Bg=new Er,Eg=[],Cg=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Ig=new Float32Array(4);function Ko(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Eg[r];if(s===void 0&&(s=new Float32Array(r),Eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zi(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ki(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function eh(n,e){let t=Cg[e];t===void 0&&(t=new Int32Array(e),Cg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function R_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zi(t,e))return;n.uniform2fv(this.addr,e),ki(t,e)}}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zi(t,e))return;n.uniform3fv(this.addr,e),ki(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zi(t,e))return;n.uniform4fv(this.addr,e),ki(t,e)}}function L_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zi(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ki(t,e)}else{if(zi(t,i))return;Ig.set(i),n.uniformMatrix2fv(this.addr,!1,Ig),ki(t,i)}}function D_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zi(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ki(t,e)}else{if(zi(t,i))return;Pg.set(i),n.uniformMatrix3fv(this.addr,!1,Pg),ki(t,i)}}function N_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zi(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ki(t,e)}else{if(zi(t,i))return;Rg.set(i),n.uniformMatrix4fv(this.addr,!1,Rg),ki(t,i)}}function U_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zi(t,e))return;n.uniform2iv(this.addr,e),ki(t,e)}}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zi(t,e))return;n.uniform3iv(this.addr,e),ki(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zi(t,e))return;n.uniform4iv(this.addr,e),ki(t,e)}}function z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zi(t,e))return;n.uniform2uiv(this.addr,e),ki(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zi(t,e))return;n.uniform3uiv(this.addr,e),ki(t,e)}}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zi(t,e))return;n.uniform4uiv(this.addr,e),ki(t,e)}}function th(n){return n.version===0&&(n.compareFunction=ac,n.needsUpdate=!0),n}function H_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=th(Ng):s=Dg,t.setTexture2D(e||s,r)}function W_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Og,r)}function X_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=th(Ug):s=Bg,t.setTextureCube(e||s,r)}function q_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fg,r)}function Y_(n){switch(n){case 5126:return C_;case 35664:return R_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function Z_(n,e){n.uniform1fv(this.addr,e)}function $_(n,e){let t=Ko(e,this.size,2);n.uniform2fv(this.addr,t)}function J_(n,e){let t=Ko(e,this.size,3);n.uniform3fv(this.addr,t)}function K_(n,e){let t=Ko(e,this.size,4);n.uniform4fv(this.addr,t)}function j_(n,e){let t=Ko(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q_(n,e){let t=Ko(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ey(n,e){let t=Ko(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ty(n,e){n.uniform1iv(this.addr,e)}function iy(n,e){n.uniform2iv(this.addr,e)}function ny(n,e){n.uniform3iv(this.addr,e)}function ry(n,e){n.uniform4iv(this.addr,e)}function sy(n,e){n.uniform1uiv(this.addr,e)}function oy(n,e){n.uniform2uiv(this.addr,e)}function ay(n,e){n.uniform3uiv(this.addr,e)}function ly(n,e){n.uniform4uiv(this.addr,e)}function cy(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);zi(i,s)||(n.uniform1iv(this.addr,s),ki(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=th(Ng):o=Dg;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function hy(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);zi(i,s)||(n.uniform1iv(this.addr,s),ki(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Og,s[o])}function uy(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);zi(i,s)||(n.uniform1iv(this.addr,s),ki(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=th(Ug):o=Bg;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function fy(n,e,t){let i=this.cache,r=e.length,s=eh(t,r);zi(i,s)||(n.uniform1iv(this.addr,s),ki(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fg,s[o])}function dy(n){switch(n){case 5126:return Z_;case 35664:return $_;case 35665:return J_;case 35666:return K_;case 35674:return j_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return iy;case 35668:case 35672:return ny;case 35669:case 35673:return ry;case 5125:return sy;case 36294:return oy;case 36295:return ay;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return fy}}var Eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Y_(t.type)}},Cu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dy(t.type)}},Ru=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Au=/(\w+)(\])?(\[|\.)?/g;function Lg(n,e){n.seq.push(e),n.map[e.id]=e}function py(n,e,t){let i=n.name,r=i.length;for(Au.lastIndex=0;;){let s=Au.exec(i),o=Au.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lg(t,c===void 0?new Eu(a,n,e):new Cu(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Ru(a),Lg(t,d)),t=d}}}var ns=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);py(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Pu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var my=37297,gy=0;function xy(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var zg=new it;function _y(n){ct._getMatrix(zg,ct.workingColorSpace,n);let e=`mat3( ${zg.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case ys:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+xy(n.getShaderSource(e),a)}else return s}function yy(n,e){let t=_y(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vy={[Ys]:"Linear",[Zs]:"Reinhard",[$s]:"Cineon",[zr]:"ACESFilmic",[Ks]:"AgX",[js]:"Neutral",[Js]:"Custom"};function My(n,e){let t=vy[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ih=new S;function Sy(){ct.getLuminanceCoefficients(ih);let n=ih.x.toFixed(4),e=ih.y.toFixed(4),t=ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function by(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function wy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ty(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rl(n){return n!==""}function Gg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(n){return n.replace(Ay,Ey)}function Ey(n,e){let t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Iu(t)}var Cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(n){return n.replace(Cy,Ry)}function Ry(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Py={[Xs]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function Iy(n){return Py[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ly={[xr]:"ENVMAP_MODE_REFRACTION"};function Dy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ly[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ny={[qs]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[xf]:"ENVMAP_BLENDING_ADD"};function Uy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ny[n.combine]||"ENVMAP_BLENDING_NONE"}function Xg(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Iy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dy(t),d=Uy(t),u=by(t),f=wy(s),g=r.createProgram(),b,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Rl).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Rl).join(`
`),m.length>0&&(m+=`
`)):(b=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),m=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?mt.tonemapping_pars_fragment:"",t.toneMapping!==bn?My("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,yy("linearToOutputTexel",t.outputColorSpace),Sy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rl).join(`
`)),o=Iu(o),o=Gg(o,t),o=Vg(o,t),a=Iu(a),a=Gg(a,t),a=Vg(a,t),o=Hg(o),a=Hg(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=p+b+o,P=p+m+a,A=Pu(r,r.VERTEX_SHADER,w),I=Pu(r,r.FRAGMENT_SHADER,P);r.attachShader(g,A),r.attachShader(g,I),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(N){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(g)||"",W=r.getShaderInfoLog(A)||"",Q=r.getShaderInfoLog(I)||"",U=G.trim(),ee=W.trim(),J=Q.trim(),Z=!0,z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,A,I);else{let j=kg(r,A,"vertex"),V=kg(r,I,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+j+`
`+V)}else U!==""?Ce("WebGLProgram: Program Info Log:",U):(ee===""||J==="")&&(z=!1);z&&(N.diagnostics={runnable:Z,programLog:U,vertexShader:{log:ee,prefix:b},fragmentShader:{log:J,prefix:m}})}r.deleteShader(A),r.deleteShader(I),x=new ns(r,g),T=Ty(r,g)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(g,my)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=I,this}var Fy=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lu(e),t.set(e,i)),i}},Lu=class{constructor(e){this.id=Fy++,this.code=e,this.usedTimes=0}};function Oy(n){return n===Tn||n===ms||n===gs}function qg(n,e,t,i,r,s){let o=new vr,a=new nh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,T,B,N,G,W){let Q=N.fog,U=G.geometry,ee=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||ee,J),z=u[x.type],j=i.precision;x.precision!==null&&(j=i.getMaxPrecision(x.precision),j!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",j,"instead."));let V=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,pe=V!==void 0?V.length:0,Ve=0;U.morphAttributes.position!==void 0&&(Ve=1),U.morphAttributes.normal!==void 0&&(Ve=2),U.morphAttributes.color!==void 0&&(Ve=3);let Ge,re,Ue,We;if(z){let Te=Dn[z];Ge=Te.vertexShader,re=Te.fragmentShader}else{Ge=x.vertexShader,re=x.fragmentShader;let Te=a.getVertexShaderStage(x),Ft=a.getFragmentShaderStage(x);a.update(x,Te,Ft),Ue=Te.id,We=Ft.id}let tt=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),dt=G.isInstancedMesh===!0,mi=G.isBatchedMesh===!0,ot=!!x.map,Nt=!!x.matcap,Ut=!!Z,wt=Ut&&Z.isPMREMTexture===!0,Si=!!x.aoMap,ui=!!x.lightMap,Qi=!!x.bumpMap&&x.wireframe===!1,ni=!!x.normalMap,dn=!!x.displacementMap,Et=!!x.emissiveMap,pn=!!x.metalnessMap,mn=!!x.roughnessMap,an=x.anisotropy>0,k=x.clearcoat>0,bi=x.diffuseRoughness>0,It=x.dispersion>0,fe=x.retroreflectivity>0,me=x.iridescence>0,ri=x.sheen>0,we=x.transmission>0,$e=an&&!!x.anisotropyMap,R=k&&!!x.clearcoatMap,_=k&&!!x.clearcoatNormalMap,q=k&&!!x.clearcoatRoughnessMap,ge=bi&&!!x.diffuseRoughnessMap,he=me&&!!x.iridescenceMap,Ae=me&&!!x.iridescenceThicknessMap,De=ri&&!!x.sheenColorMap,se=ri&&!!x.sheenRoughnessMap,oe=!!x.specularMap,Ee=!!x.specularColorMap,D=!!x.specularIntensityMap,le=we&&!!x.transmissionMap,ne=we&&!!x.thicknessMap,Me=!!x.gradientMap,ye=!!x.alphaMap,Se=x.alphaTest>0,je=!!x.alphaHash,pt=!!x.extensions,_e=bn;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(_e=n.toneMapping);let Oe=wt?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,gt={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:re,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:We,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:j,batching:mi,batchingColor:mi&&G._colorsTexture!==null,instancing:dt,instancingColor:dt&&G.instanceColor!==null,instancingMorph:dt&&G.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ot,matcap:Nt,envMap:Ut,envMapMode:Ut&&Z.mapping,envMapPMREM:wt,envMapMaxLod:wt?Oe.length-1:null,envMapSize:wt?Oe[0].width:null,aoMap:Si,lightMap:ui,bumpMap:Qi,normalMap:ni,displacementMap:dn,emissiveMap:Et,normalMapObjectSpace:ni&&x.normalMapType===yf,normalMapTangentSpace:ni&&x.normalMapType===Jn,packedNormalMap:ni&&x.normalMapType===Jn&&Oy(x.normalMap.format),metalnessMap:pn,roughnessMap:mn,anisotropy:an,anisotropyMap:$e,clearcoat:k,clearcoatMap:R,clearcoatNormalMap:_,clearcoatRoughnessMap:q,diffuseRoughness:bi,diffuseRoughnessMap:ge,dispersion:It,retroreflection:fe,iridescence:me,iridescenceMap:he,iridescenceThicknessMap:Ae,sheen:ri,sheenColorMap:De,sheenRoughnessMap:se,specularMap:oe,specularColorMap:Ee,specularIntensityMap:D,transmission:we,transmissionMap:le,thicknessMap:ne,gradientMap:Me,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:Se,alphaHash:je,combine:x.combine,mapUv:ot&&f(x.map.channel),aoMapUv:Si&&f(x.aoMap.channel),lightMapUv:ui&&f(x.lightMap.channel),bumpMapUv:Qi&&f(x.bumpMap.channel),normalMapUv:ni&&f(x.normalMap.channel),displacementMapUv:dn&&f(x.displacementMap.channel),emissiveMapUv:Et&&f(x.emissiveMap.channel),metalnessMapUv:pn&&f(x.metalnessMap.channel),roughnessMapUv:mn&&f(x.roughnessMap.channel),anisotropyMapUv:$e&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:he&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&f(x.sheenRoughnessMap.channel),specularMapUv:oe&&f(x.specularMap.channel),specularColorMapUv:Ee&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:le&&f(x.transmissionMap.channel),thicknessMapUv:ne&&f(x.thicknessMap.channel),alphaMapUv:ye&&f(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ni||an),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(ot||ye),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ni===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ze,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ve,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.filter(Te=>Te.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:ot&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===At,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===At,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hi,flipSided:x.side===ci,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||mi)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function b(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)T.push(B),T.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(m(T,x),p(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function p(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let T=u[x.type],B;if(T){let N=Dn[T];B=ur.clone(N.uniforms)}else B=x.uniforms;return B}function P(x,T){let B=h.get(T);return B!==void 0?++B.usedTimes:(B=new Xg(n,T,x,r),c.push(B),h.set(T,B)),B}function A(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function I(x){a.remove(x)}function C(){a.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:w,acquireProgram:P,releaseProgram:A,releaseShaderCache:I,programs:c,dispose:C}}function Yg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function By(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Zg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $g(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,b,m,p){let w=n[e];return w===void 0?(w={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:p},n[e]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=g,w.materialVariant=o(u),w.groupOrder=b,w.renderOrder=u.renderOrder,w.z=m,w.group=p),e++,w}function l(u,f,g,b,m,p,w){w.reversedDepth===!0&&(m=-m);let P=a(u,f,g,b,m,p);g.transmission>0?i.push(P):g.transparent===!0?r.push(P):t.push(P)}function c(u,f,g,b,m,p){let w=a(u,f,g,b,m,p);g.transmission>0?i.unshift(w):g.transparent===!0?r.unshift(w):t.unshift(w)}function h(u,f){t.length>1&&t.sort(u||By),i.length>1&&i.sort(f||Zg),r.length>1&&r.sort(f||Zg)}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function Jg(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new $g,n.set(i,[o])):r>=s.length?(o=new $g,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new S,color:new de};break;case"SpotLight":t={position:new S,direction:new S,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function ky(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Gy=0;function Vy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Kg(n){let e=new zy,t=ky(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new S);let r=new S,s=new rt,o=new rt;function a(c){let h=0,d=0,u=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,w=0,P=0,A=0,I=0,C=0,x=0,T=0,B=0,N=0;c.sort(Vy);for(let W=0,Q=c.length;W<Q;W++){let U=c[W],ee=U.color,J=U.intensity,Z=U.distance,z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Tn?z=U.shadow.map.texture:z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=ee.r*J,d+=ee.g*J,u+=ee.b*J;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],J);N++}else if(U.isSunLight){let j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let V=U.shadow,pe=t.get(U);pe.shadowIntensity=V.intensity,pe.shadowBias=V.bias,pe.shadowNormalBias=V.normalBias,pe.shadowRadius=V.radius,pe.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[g]=pe,i.sunShadowMap[g]=z;let Ve=V.getViewportCount();for(let Ge=0;Ge<Ve;Ge++)i.sunShadowMatrix[b+Ge]=V.getMatrix(Ge),i.sunShadowCascade[b+Ge]=V._cascadeData[Ge];b+=Ve,g++}i.sun[f]=j,f++}else if(U.isDirectionalLight){let j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let V=U.shadow,pe=t.get(U);pe.shadowIntensity=V.intensity,pe.shadowBias=V.bias,pe.shadowNormalBias=V.normalBias,pe.shadowRadius=V.radius,pe.shadowMapSize=V.mapSize,i.directionalShadow[m]=pe,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=U.shadow.matrix,I++}i.directional[m]=j,m++}else if(U.isSpotLight){let j=e.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(ee).multiplyScalar(J),j.distance=Z,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[w]=j;let V=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,V.updateMatrices(U),U.castShadow&&B++),i.spotLightMatrix[w]=V.matrix,U.castShadow){let pe=t.get(U);pe.shadowIntensity=V.intensity,pe.shadowBias=V.bias,pe.shadowNormalBias=V.normalBias,pe.shadowRadius=V.radius,pe.shadowMapSize=V.mapSize,i.spotShadow[w]=pe,i.spotShadowMap[w]=z,x++}w++}else if(U.isRectAreaLight){let j=e.get(U);j.color.copy(ee).multiplyScalar(J),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[P]=j,P++}else if(U.isPointLight){let j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){let V=U.shadow,pe=t.get(U);pe.shadowIntensity=V.intensity,pe.shadowBias=V.bias,pe.shadowNormalBias=V.normalBias,pe.shadowRadius=V.radius,pe.shadowMapSize=V.mapSize,pe.shadowCameraNear=V.camera.near,pe.shadowCameraFar=V.camera.far,i.pointShadow[p]=pe,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=U.shadow.matrix,C++}i.point[p]=j,p++}else if(U.isHemisphereLight){let j=e.get(U);j.skyColor.copy(U.color).multiplyScalar(J),j.groundColor.copy(U.groundColor).multiplyScalar(J),i.hemi[A]=j,A++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let G=i.hash;(G.sunLength!==f||G.directionalLength!==m||G.pointLength!==p||G.spotLength!==w||G.rectAreaLength!==P||G.hemiLength!==A||G.numSunShadows!==g||G.numDirectionalShadows!==I||G.numPointShadows!==C||G.numSpotShadows!==x||G.numSpotMaps!==T||G.numLightProbes!==N)&&(i.sun.length=f,i.directional.length=m,i.spot.length=w,i.rectArea.length=P,i.point.length=p,i.hemi.length=A,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+T-B,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=N,G.sunLength=f,G.directionalLength=m,G.pointLength=p,G.spotLength=w,G.rectAreaLength=P,G.hemiLength=A,G.numSunShadows=g,G.numDirectionalShadows=I,G.numPointShadows=C,G.numSpotShadows=x,G.numSpotMaps=T,G.numLightProbes=N,i.version=Gy++)}function l(c,h){let d=0,u=0,f=0,g=0,b=0,m=0,p=h.matrixWorldInverse;for(let w=0,P=c.length;w<P;w++){let A=c[w];if(A.isSunLight){let I=i.sun[d];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(p),d++}else if(A.isDirectionalLight){let I=i.directional[u];I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),u++}else if(A.isSpotLight){let I=i.spot[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(A.isRectAreaLight){let I=i.rectArea[b];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),b++}else if(A.isPointLight){let I=i.point[f];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){let I=i.hemi[m];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function jg(n){let e=new Kg(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function o(d){d.isLightProbeGrid?r.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),r.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Qg(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new jg(n),e.set(r,[a])):s>=o.length?(a=new jg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,t0=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );

	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );

}
`;var Wy=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],Xy=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],i0=new rt,Pl=new S,Du=new S;function n0(n,e,t){let i=new Pn,r=new ie,s=new ie,o=new Dt,a=new ko,l=new Go,c={},h=t.maxTextureSize,d={[kn]:ci,[ci]:kn,[Hi]:Hi},u=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ht(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let p=this.type;this.render=function(C,x,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===Ju&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xs);let B=n.getRenderTarget(),N=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Gn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Q=p!==this.type;Q&&x.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(ee=>ee.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,ee=C.length;U<ee;U++){let J=C[U],Z=J.shadow;if(Z===void 0){Ce("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let z=Z.getFrameExtents();r.multiply(z),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/z.x),r.x=s.x*z.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/z.y),r.y=s.y*z.y,Z.mapSize.y=s.y));let j=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=j,Z.map===null||Q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ds){if(J.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new jt(r.x,r.y,{format:Tn,type:ai,minFilter:hi,magFilter:hi,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new vn(r.x,r.y,Ei),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=_n,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Kt,Z.map.depthTexture.magFilter=Kt}else J.isPointLight?(Z.map=new Lr(r.x),Z.map.depthTexture=new Ls(r.x,Bi)):(Z.map=new jt(r.x,r.y),Z.map.depthTexture=new vn(r.x,r.y,Bi)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=_n,this.type===Xs?(Z.map.depthTexture.compareFunction=j?oc:sc,Z.map.depthTexture.minFilter=hi,Z.map.depthTexture.magFilter=hi):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Kt,Z.map.depthTexture.magFilter=Kt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);let V=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,T);let pe=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:T.layers;for(let Ve=0;Ve<V;Ve++){let Ge=Z.getCamera(Ve);if(J.isPointLight){let re=Z.camera,Ue=Z.matrix,We=J.distance||re.far;We!==re.far&&(re.far=We,re.updateProjectionMatrix()),Pl.setFromMatrixPosition(J.matrixWorld),re.position.copy(Pl),Du.copy(re.position),Du.add(Wy[Ve]),re.up.copy(Xy[Ve]),re.lookAt(Du),re.updateMatrixWorld(),Ue.makeTranslation(-Pl.x,-Pl.y,-Pl.z),i0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(i0,re.coordinateSystem,re.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,Ve),n.clear();else{Ve===0&&(n.setRenderTarget(Z.map),n.clear());let re=Z.getViewport(Ve);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),W.viewport(o)}i=Z.getFrustum(Ve),A(x,T,Ge,J,pe,this.type)}Z.isPointLightShadow!==!0&&this.type===ds&&w(Z,T),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(B,N,G)};function w(C,x){let T=e.update(b);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null?C.mapPass=new jt(r.x,r.y,{format:Tn,type:ai}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(x,null,T,u,b,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(x,null,T,f,b,null)}function P(C,x,T,B){let N=null,G=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)N=G;else if(N=T.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let W=N.uuid,Q=x.uuid,U=c[W];U===void 0&&(U={},c[W]=U);let ee=U[Q];ee===void 0&&(ee=N.clone(),U[Q]=ee,x.addEventListener("dispose",I)),N=ee}if(N.visible=x.visible,N.wireframe=x.wireframe,B===ds?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:d[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,T.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let W=n.properties.get(N);W.light=T}return N}function A(C,x,T,B,N,G){if(C.visible===!1)return;if(C.layers.test(N)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&G===ds)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let U=e.update(C),ee=C.material;if(Array.isArray(ee)){let J=U.groups;for(let Z=0,z=J.length;Z<z;Z++){let j=J[Z],V=ee[j.materialIndex];if(V&&V.visible){let pe=P(C,V,B,G);C.onBeforeShadow(n,C,x,T,U,pe,j),n.renderBufferDirect(T,null,U,pe,C,j),C.onAfterShadow(n,C,x,T,U,pe,j)}}}else if(ee.visible){let J=P(C,ee,B,G);C.onBeforeShadow(n,C,x,T,U,J,null),n.renderBufferDirect(T,null,U,J,C,null),C.onAfterShadow(n,C,x,T,U,J,null)}}let Q=C.children;for(let U=0,ee=Q.length;U<ee;U++)A(Q[U],x,T,B,N,G)}function I(C){C.target.removeEventListener("dispose",I);for(let T in c){let B=c[T],N=C.target.uuid;N in B&&(B[N].dispose(),delete B[N])}}}function r0(n,e){function t(){let D=!1,le=new Dt,ne=null,Me=new Dt(0,0,0,0);return{setMask:function(ye){ne!==ye&&!D&&(n.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){D=ye},setClear:function(ye,Se,je,pt,_e){_e===!0&&(ye*=pt,Se*=pt,je*=pt),le.set(ye,Se,je,pt),Me.equals(le)===!1&&(n.clearColor(ye,Se,je,pt),Me.copy(le))},reset:function(){D=!1,ne=null,Me.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,ne=null,Me=null,ye=null;return{setReversed:function(Se){if(le!==Se){let je=e.get("EXT_clip_control");Se?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),le=Se;let pt=ye;ye=null,this.setClear(pt)}},getReversed:function(){return le},setTest:function(Se){Se?ze(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(Se){ne!==Se&&!D&&(n.depthMask(Se),ne=Se)},setFunc:function(Se){if(le&&(Se=Pf[Se]),Me!==Se){switch(Se){case la:n.depthFunc(n.NEVER);break;case ca:n.depthFunc(n.ALWAYS);break;case ha:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case ua:n.depthFunc(n.EQUAL);break;case fa:n.depthFunc(n.GEQUAL);break;case da:n.depthFunc(n.GREATER);break;case pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=Se}},setLocked:function(Se){D=Se},setClear:function(Se){ye!==Se&&(ye=Se,le&&(Se=1-Se),n.clearDepth(Se))},reset:function(){D=!1,ne=null,Me=null,ye=null,le=!1}}}function r(){let D=!1,le=null,ne=null,Me=null,ye=null,Se=null,je=null,pt=null,_e=null;return{setTest:function(Oe){D||(Oe?ze(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Oe){le!==Oe&&!D&&(n.stencilMask(Oe),le=Oe)},setFunc:function(Oe,gt,Te){(ne!==Oe||Me!==gt||ye!==Te)&&(n.stencilFunc(Oe,gt,Te),ne=Oe,Me=gt,ye=Te)},setOp:function(Oe,gt,Te){(Se!==Oe||je!==gt||pt!==Te)&&(n.stencilOp(Oe,gt,Te),Se=Oe,je=gt,pt=Te)},setLocked:function(Oe){D=Oe},setClear:function(Oe){_e!==Oe&&(n.clearStencil(Oe),_e=Oe)},reset:function(){D=!1,le=null,ne=null,Me=null,ye=null,Se=null,je=null,pt=null,_e=null}}}let s=new t,o=new i,a=new r,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],b=null,m=!1,p=null,w=null,P=null,A=null,I=null,C=null,x=null,T=new de(0,0,0),B=0,N=!1,G=null,W=null,Q=null,U=null,ee=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,z=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=z>=2);let V=null,pe={},Ve=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),re=new Dt().fromArray(Ve),Ue=new Dt().fromArray(Ge);function We(D,le,ne,Me){let ye=new Uint8Array(4),Se=n.createTexture();n.bindTexture(D,Se),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<ne;je++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(le+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Se}let tt={};tt[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ze(n.DEPTH_TEST),o.setFunc(Br),Qi(!1),ni(bh),ze(n.CULL_FACE),Si(Gn);function ze(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function dt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function mi(D,le){return u[D]!==le?(n.bindFramebuffer(D,le),u[D]=le,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function ot(D,le){let ne=g,Me=!1;if(D){ne=f.get(le),ne===void 0&&(ne=[],f.set(le,ne));let ye=D.textures;if(ne.length!==ye.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,je=ye.length;Se<je;Se++)ne[Se]=n.COLOR_ATTACHMENT0+Se;ne.length=ye.length,Me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ne)}function Nt(D){return b!==D?(n.useProgram(D),b=D,!0):!1}let Ut={[Or]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[Qu]:n.FUNC_REVERSE_SUBTRACT};Ut[ef]=n.MIN,Ut[tf]=n.MAX;let wt={[nf]:n.ZERO,[rf]:n.ONE,[sf]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[uf]:n.SRC_ALPHA_SATURATE,[cf]:n.DST_COLOR,[af]:n.DST_ALPHA,[of]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[hf]:n.ONE_MINUS_DST_COLOR,[lf]:n.ONE_MINUS_DST_ALPHA,[ff]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function Si(D,le,ne,Me,ye,Se,je,pt,_e,Oe){if(D===Gn){m===!0&&(dt(n.BLEND),m=!1);return}if(m===!1&&(ze(n.BLEND),m=!0),D!==Ku){if(D!==p||Oe!==N){if((w!==Or||I!==Or)&&(n.blendEquation(n.FUNC_ADD),w=Or,I=Or),Oe)switch(D){case Fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFunc(n.ONE,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",D);break}else switch(D){case Fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",D);break}P=null,A=null,C=null,x=null,T.set(0,0,0),B=0,p=D,N=Oe}return}ye=ye||le,Se=Se||ne,je=je||Me,(le!==w||ye!==I)&&(n.blendEquationSeparate(Ut[le],Ut[ye]),w=le,I=ye),(ne!==P||Me!==A||Se!==C||je!==x)&&(n.blendFuncSeparate(wt[ne],wt[Me],wt[Se],wt[je]),P=ne,A=Me,C=Se,x=je),(pt.equals(T)===!1||_e!==B)&&(n.blendColor(pt.r,pt.g,pt.b,_e),T.copy(pt),B=_e),p=D,N=!1}function ui(D,le){D.side===Hi?dt(n.CULL_FACE):ze(n.CULL_FACE);let ne=D.side===ci;le&&(ne=!ne),Qi(ne),D.blending===Fr&&D.transparent===!1?Si(Gn):Si(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let Me=D.stencilWrite;a.setTest(Me),Me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Et(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ze(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qi(D){G!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),G=D)}function ni(D){D!==Zu?(ze(n.CULL_FACE),D!==W&&(D===bh?n.cullFace(n.BACK):D===$u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),W=D}function dn(D){D!==Q&&(Z&&n.lineWidth(D),Q=D)}function Et(D,le,ne){D?(ze(n.POLYGON_OFFSET_FILL),(U!==le||ee!==ne)&&(U=le,ee=ne,o.getReversed()&&(le=-le,ne=-ne),n.polygonOffset(le,ne))):dt(n.POLYGON_OFFSET_FILL)}function pn(D){D?ze(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function mn(D){D===void 0&&(D=n.TEXTURE0+J-1),V!==D&&(n.activeTexture(D),V=D)}function an(D,le,ne){ne===void 0&&(V===null?ne=n.TEXTURE0+J-1:ne=V);let Me=pe[ne];Me===void 0&&(Me={type:void 0,texture:void 0},pe[ne]=Me),(Me.type!==D||Me.texture!==le)&&(V!==ne&&(n.activeTexture(ne),V=ne),n.bindTexture(D,le||tt[D]),Me.type=D,Me.texture=le)}function k(){let D=pe[V];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function bi(){try{n.compressedTexImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function It(){try{n.compressedTexImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function fe(){try{n.texSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function me(){try{n.texSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function ri(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function $e(){try{n.texStorage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function R(){try{n.texStorage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function _(){try{n.texImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function q(){try{n.texImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function ge(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function he(D,le){d[D]!==le&&(n.pixelStorei(D,le),d[D]=le)}function Ae(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function De(D){Ue.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ue.copy(D))}function se(D,le){let ne=c.get(le);ne===void 0&&(ne=new WeakMap,c.set(le,ne));let Me=ne.get(D);Me===void 0&&(Me=n.getUniformBlockIndex(le,D.name),n.uniformBlockBinding(le,Me,Me),ne.set(D,Me))}function oe(D,le,ne){let ye=c.get(le).get(D);l[ye]!==ne&&(n.bindBufferBase(n.UNIFORM_BUFFER,ye,ne),l[ye]=ne)}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,pe={},u={},l={},f=new WeakMap,g=[],b=null,m=!1,p=null,w=null,P=null,A=null,I=null,C=null,x=null,T=new de(0,0,0),B=0,N=!1,G=null,W=null,Q=null,U=null,ee=null,re.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ze,disable:dt,bindFramebuffer:mi,drawBuffers:ot,useProgram:Nt,setBlending:Si,setMaterial:ui,setFlipSided:Qi,setCullFace:ni,setLineWidth:dn,setPolygonOffset:Et,setScissorTest:pn,activeTexture:mn,bindTexture:an,unbindTexture:k,compressedTexImage2D:bi,compressedTexImage3D:It,texImage2D:_,texImage3D:q,pixelStorei:he,getParameter:ge,updateUBOMapping:se,uniformBlockBinding:oe,texStorage2D:$e,texStorage3D:R,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:ri,compressedTexSubImage3D:we,scissor:Ae,viewport:De,reset:Ee}}function s0(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,b=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,_){return m?new OffscreenCanvas(R,_):vs("canvas")}function w(R,_,q){let ge=1,he=$e(R);if((he.width>q||he.height>q)&&(ge=q/Math.max(he.width,he.height)),ge<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Ae=Math.floor(ge*he.width),De=Math.floor(ge*he.height);u===void 0&&(u=p(Ae,De));let se=_?p(Ae,De):u;return se.width=Ae,se.height=De,se.getContext("2d").drawImage(R,0,0,Ae,De),Ce("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+De+")."),se}else return"data"in R&&Ce("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),R;return R}function P(R){return R.generateMipmaps}function A(R){n.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(R,_,q,ge,he,Ae=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let De;ge&&(De=e.get("EXT_texture_norm16"),De||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=_;if(_===n.RED&&(q===n.FLOAT&&(se=n.R32F),q===n.HALF_FLOAT&&(se=n.R16F),q===n.UNSIGNED_BYTE&&(se=n.R8),q===n.UNSIGNED_SHORT&&De&&(se=De.R16_EXT),q===n.SHORT&&De&&(se=De.R16_SNORM_EXT)),_===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.R8UI),q===n.UNSIGNED_SHORT&&(se=n.R16UI),q===n.UNSIGNED_INT&&(se=n.R32UI),q===n.BYTE&&(se=n.R8I),q===n.SHORT&&(se=n.R16I),q===n.INT&&(se=n.R32I)),_===n.RG&&(q===n.FLOAT&&(se=n.RG32F),q===n.HALF_FLOAT&&(se=n.RG16F),q===n.UNSIGNED_BYTE&&(se=n.RG8),q===n.UNSIGNED_SHORT&&De&&(se=De.RG16_EXT),q===n.SHORT&&De&&(se=De.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.RG8UI),q===n.UNSIGNED_SHORT&&(se=n.RG16UI),q===n.UNSIGNED_INT&&(se=n.RG32UI),q===n.BYTE&&(se=n.RG8I),q===n.SHORT&&(se=n.RG16I),q===n.INT&&(se=n.RG32I)),_===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.RGB8UI),q===n.UNSIGNED_SHORT&&(se=n.RGB16UI),q===n.UNSIGNED_INT&&(se=n.RGB32UI),q===n.BYTE&&(se=n.RGB8I),q===n.SHORT&&(se=n.RGB16I),q===n.INT&&(se=n.RGB32I)),_===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),q===n.UNSIGNED_INT&&(se=n.RGBA32UI),q===n.BYTE&&(se=n.RGBA8I),q===n.SHORT&&(se=n.RGBA16I),q===n.INT&&(se=n.RGBA32I)),_===n.RGB&&(q===n.UNSIGNED_SHORT&&De&&(se=De.RGB16_EXT),q===n.SHORT&&De&&(se=De.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),_===n.RGBA){let oe=Ae?ys:ct.getTransfer(he);q===n.FLOAT&&(se=n.RGBA32F),q===n.HALF_FLOAT&&(se=n.RGBA16F),q===n.UNSIGNED_BYTE&&(se=oe===At?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&De&&(se=De.RGBA16_EXT),q===n.SHORT&&De&&(se=De.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(R,_){let q;return R?_===null||_===Bi||_===$n?q=n.DEPTH24_STENCIL8:_===Ei?q=n.DEPTH32F_STENCIL8:_===_r&&(q=n.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bi||_===$n?q=n.DEPTH_COMPONENT24:_===Ei?q=n.DEPTH_COMPONENT32F:_===_r&&(q=n.DEPTH_COMPONENT16),q}function T(R,_){return P(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==hi?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function B(R){let _=new WeakRef(R);i.get(R).__ref=_,g.add(_),b.register(R,_,_)}function N(R){let _=i.get(R).__ref;_!==void 0&&(g.delete(_),b.unregister(_))}function G(R){Q(R.target)}function W(R){U(R.target)}function Q(R){R.removeEventListener("dispose",G),N(R),J(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function U(R){R.removeEventListener("dispose",W),N(R),z(R)}function ee(){for(let R of g){let _=R.deref();_!==void 0&&(_.isRenderTarget===!0?U(_):Q(_))}g.clear(),d.clear()}function J(R){let _=i.get(R);if(_.__webglInit===void 0)return;let q=R.source,ge=f.get(q);if(ge){let he=ge[_.__cacheKey];he.usedTimes--,he.usedTimes===0&&Z(R),Object.keys(ge).length===0&&f.delete(q)}i.remove(R)}function Z(R){let _=i.get(R);n.deleteTexture(_.__webglTexture);let q=R.source,ge=f.get(q);delete ge[_.__cacheKey],o.memory.textures--}function z(R){let _=i.get(R);_.__depthDisposeCallback&&_.__depthDisposeCallback();let q=R.depthTexture;if(q&&q.renderTarget===R&&Q(q),R.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(_.__webglFramebuffer[he]))for(let Ae=0;Ae<_.__webglFramebuffer[he].length;Ae++)n.deleteFramebuffer(_.__webglFramebuffer[he][Ae]);else n.deleteFramebuffer(_.__webglFramebuffer[he]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[he])}else{if(Array.isArray(_.__webglFramebuffer))for(let he=0;he<_.__webglFramebuffer.length;he++)n.deleteFramebuffer(_.__webglFramebuffer[he]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let he=0;he<_.__webglColorRenderbuffer.length;he++)_.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[he]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ge=R.textures;for(let he=0,Ae=ge.length;he<Ae;he++){let De=i.get(ge[he]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(ge[he])}i.remove(R)}let j=0;function V(){j=0}function pe(){return j}function Ve(R){j=R}function Ge(){let R=j;return R>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),j+=1,R}function re(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.mipmapsAutoUpdate),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Ue(R,_){let q=i.get(R);if(R.isVideoTexture&&ri(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){let ge=R.image;if(ge===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{ui(q,R,_);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+_)}function We(R,_){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){ui(q,R,_);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+_)}function tt(R,_){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){ui(q,R,_);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+_)}function ze(R,_){let q=i.get(R);if(R.version>0&&q.__version!==R.version){Qi(q,R,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+_)}let dt={[kr]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[Qs]:n.MIRRORED_REPEAT},mi={[Kt]:n.NEAREST,[Ah]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[hi]:n.LINEAR,[xa]:n.LINEAR_MIPMAP_NEAREST,[hn]:n.LINEAR_MIPMAP_LINEAR},ot={[Mf]:n.NEVER,[ac]:n.ALWAYS,[Sf]:n.LESS,[sc]:n.LEQUAL,[bf]:n.EQUAL,[oc]:n.GEQUAL,[wf]:n.GREATER,[Tf]:n.NOTEQUAL};function Nt(R,_){if(_.type===Ei&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===hi||_.magFilter===xa||_.magFilter===eo||_.magFilter===hn||_.minFilter===hi||_.minFilter===xa||_.minFilter===eo||_.minFilter===hn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,dt[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,dt[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,dt[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,mi[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,mi[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ot[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==eo&&_.minFilter!==hn||_.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ut(R,_){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",G),B(_));let ge=_.source,he=f.get(ge);he===void 0&&(he={},f.set(ge,he));let Ae=re(_);if(Ae!==R.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[Ae].usedTimes++;let De=he[R.__cacheKey];De!==void 0&&(he[R.__cacheKey].usedTimes--,De.usedTimes===0&&Z(_)),R.__cacheKey=Ae,R.__webglTexture=he[Ae].texture}return q}function wt(R,_,q){return Math.floor(Math.floor(R/q)/_)}function Si(R,_,q,ge){let Ae=R.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,q,ge,_.data);else{Ae.sort((D,le)=>D.start-le.start);let De=0;for(let D=1;D<Ae.length;D++){let le=Ae[De],ne=Ae[D],Me=le.start+le.count,ye=wt(ne.start,_.width,4),Se=wt(le.start,_.width,4);ne.start<=Me+1&&ye===Se&&wt(ne.start+ne.count-1,_.width,4)===ye?le.count=Math.max(le.count,ne.start+ne.count-le.start):(++De,Ae[De]=ne)}Ae.length=De+1;let se=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let D=0,le=Ae.length;D<le;D++){let ne=Ae[D],Me=Math.floor(ne.start/4),ye=Math.ceil(ne.count/4),Se=Me%_.width,je=Math.floor(Me/_.width),pt=ye,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,je),t.texSubImage2D(n.TEXTURE_2D,0,Se,je,pt,_e,q,ge,_.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function ui(R,_,q){let ge=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ge=n.TEXTURE_3D);let he=Ut(R,_),Ae=_.source;t.bindTexture(ge,R.__webglTexture,n.TEXTURE0+q);let De=i.get(Ae);if(Ae.version!==De.__version||he===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let _e=ct.getPrimaries(ct.workingColorSpace),Oe=_.colorSpace===Hn?null:ct.getPrimaries(_.colorSpace),gt=_.colorSpace===Hn||_e===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let oe=w(_.image,!1,r.maxTextureSize);oe=we(_,oe);let Ee=s.convert(_.format,_.colorSpace),D=s.convert(_.type),le=C(_.internalFormat,Ee,D,_.normalized,_.colorSpace,_.isVideoTexture);Nt(ge,_);let ne,Me=_.mipmaps,ye=_.isVideoTexture!==!0,Se=De.__version===void 0||he===!0,je=Ae.dataReady,pt=T(_,oe);if(_.isDepthTexture)le=x(_.format===wn,_.type),Se&&(ye?t.texStorage2D(n.TEXTURE_2D,1,le,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,le,oe.width,oe.height,0,Ee,D,null));else if(_.isDataTexture)if(Me.length>0){ye&&Se&&t.texStorage2D(n.TEXTURE_2D,pt,le,Me[0].width,Me[0].height);for(let _e=0,Oe=Me.length;_e<Oe;_e++)ne=Me[_e],ye?je&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ne.width,ne.height,Ee,D,ne.data):t.texImage2D(n.TEXTURE_2D,_e,le,ne.width,ne.height,0,Ee,D,ne.data);_.generateMipmaps=!1}else ye?(Se&&t.texStorage2D(n.TEXTURE_2D,pt,le,oe.width,oe.height),je&&Si(_,oe,Ee,D)):t.texImage2D(n.TEXTURE_2D,0,le,oe.width,oe.height,0,Ee,D,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ye&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pt,le,Me[0].width,Me[0].height,oe.depth);for(let _e=0,Oe=Me.length;_e<Oe;_e++)if(ne=Me[_e],_.format!==Wi)if(Ee!==null)if(ye){if(je)if(_.layerUpdates.size>0){let gt=Tu(ne.width,ne.height,_.format,_.type);for(let Te of _.layerUpdates){let Ft=ne.data.subarray(Te*gt/ne.data.BYTES_PER_ELEMENT,(Te+1)*gt/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Te,ne.width,ne.height,1,Ee,Ft)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,ne.width,ne.height,oe.depth,Ee,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,le,ne.width,ne.height,oe.depth,0,ne.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,ne.width,ne.height,oe.depth,Ee,D,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,le,ne.width,ne.height,oe.depth,0,Ee,D,ne.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ye&&Se&&t.texStorage2D(n.TEXTURE_2D,pt,le,Me[0].width,Me[0].height);for(let _e=0,Oe=Me.length;_e<Oe;_e++)ne=Me[_e],_.format!==Wi?Ee!==null?ye?je&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,ne.width,ne.height,Ee,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,le,ne.width,ne.height,0,ne.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?je&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ne.width,ne.height,Ee,D,ne.data):t.texImage2D(n.TEXTURE_2D,_e,le,ne.width,ne.height,0,Ee,D,ne.data)}else if(_.isDataArrayTexture)if(ye){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pt,le,oe.width,oe.height,oe.depth),je)if(_.layerUpdates.size>0){let _e=Tu(oe.width,oe.height,_.format,_.type);for(let Oe of _.layerUpdates){let gt=oe.data.subarray(Oe*_e/oe.data.BYTES_PER_ELEMENT,(Oe+1)*_e/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,oe.width,oe.height,1,Ee,D,gt)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,D,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,oe.width,oe.height,oe.depth,0,Ee,D,oe.data);else if(_.isData3DTexture)ye?(Se&&t.texStorage3D(n.TEXTURE_3D,pt,le,oe.width,oe.height,oe.depth),je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,D,oe.data)):t.texImage3D(n.TEXTURE_3D,0,le,oe.width,oe.height,oe.depth,0,Ee,D,oe.data);else if(_.isFramebufferTexture){if(Se)if(ye)t.texStorage2D(n.TEXTURE_2D,pt,le,oe.width,oe.height);else{let _e=oe.width,Oe=oe.height;for(let gt=0;gt<pt;gt++)t.texImage2D(n.TEXTURE_2D,gt,le,_e,Oe,0,Ee,D,null),_e>>=1,Oe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),oe.parentNode!==_e){_e.appendChild(oe),d.add(_),_e.onpaint=Oe=>{let gt=Oe.changedElements;for(let Te of d)gt.includes(Te.image)&&(Te.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{let gt=n.RGBA,Te=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,gt,Te,Ft,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Me.length>0){if(ye&&Se){let _e=$e(Me[0]);t.texStorage2D(n.TEXTURE_2D,pt,le,_e.width,_e.height)}for(let _e=0,Oe=Me.length;_e<Oe;_e++)ne=Me[_e],ye?je&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ee,D,ne):t.texImage2D(n.TEXTURE_2D,_e,le,Ee,D,ne);_.generateMipmaps=!1}else if(ye){if(Se){let _e=$e(oe);t.texStorage2D(n.TEXTURE_2D,pt,le,_e.width,_e.height)}je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,D,oe)}else t.texImage2D(n.TEXTURE_2D,0,le,Ee,D,oe);P(_)&&_.mipmapsAutoUpdate===!0&&A(ge),De.__version=Ae.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Qi(R,_,q){if(_.image.length!==6)return;let ge=Ut(R,_),he=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);let Ae=i.get(he);if(he.version!==Ae.__version||ge===!0){t.activeTexture(n.TEXTURE0+q);let De=ct.getPrimaries(ct.workingColorSpace),se=_.colorSpace===Hn?null:ct.getPrimaries(_.colorSpace),oe=_.colorSpace===Hn||De===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,D=_.image[0]&&_.image[0].isDataTexture,le=[];for(let Te=0;Te<6;Te++)!Ee&&!D?le[Te]=w(_.image[Te],!0,r.maxCubemapSize):le[Te]=D?_.image[Te].image:_.image[Te],le[Te]=we(_,le[Te]);let ne=le[0],Me=s.convert(_.format,_.colorSpace),ye=s.convert(_.type),Se=C(_.internalFormat,Me,ye,_.normalized,_.colorSpace),je=_.isVideoTexture!==!0,pt=Ae.__version===void 0||ge===!0,_e=he.dataReady,Oe=T(_,ne);Nt(n.TEXTURE_CUBE_MAP,_);let gt;if(_.isDepthTexture){if(Se=x(_.format===wn,_.type),pt)if(je)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Se,ne.width,ne.height);else for(let Te=0;Te<6;Te++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Se,ne.width,ne.height,0,Me,ye,null)}else if(Ee){je&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,Se,ne.width,ne.height);for(let Te=0;Te<6;Te++){gt=le[Te].mipmaps;for(let Ft=0;Ft<gt.length;Ft++){let fi=gt[Ft];_.format!==Wi?Me!==null?je?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft,0,0,fi.width,fi.height,Me,fi.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft,Se,fi.width,fi.height,0,fi.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft,0,0,fi.width,fi.height,Me,ye,fi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft,Se,fi.width,fi.height,0,Me,ye,fi.data)}}}else{if(gt=_.mipmaps,je&&pt){gt.length>0&&Oe++;let Te=$e(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,Se,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(D){je?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,le[Te].width,le[Te].height,Me,ye,le[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Se,le[Te].width,le[Te].height,0,Me,ye,le[Te].data);for(let Ft=0;Ft<gt.length;Ft++){let Yn=gt[Ft].image[Te].image;je?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft+1,0,0,Yn.width,Yn.height,Me,ye,Yn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft+1,Se,Yn.width,Yn.height,0,Me,ye,Yn.data)}}else{je?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Me,ye,le[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Se,Me,ye,le[Te]);for(let Ft=0;Ft<gt.length;Ft++){let fi=gt[Ft];je?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft+1,0,0,Me,ye,fi.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ft+1,Se,Me,ye,fi.image[Te])}}}P(_)&&_.mipmapsAutoUpdate===!0&&A(n.TEXTURE_CUBE_MAP),Ae.__version=he.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ni(R,_,q,ge,he,Ae){let De=s.convert(q.format,q.colorSpace),se=s.convert(q.type),oe=C(q.internalFormat,De,se,q.normalized,q.colorSpace),Ee=i.get(_),D=i.get(q);if(D.__renderTarget=_,!Ee.__hasExternalTextures){let le=Math.max(1,_.width>>Ae),ne=Math.max(1,_.height>>Ae);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Ae,oe,le,ne,_.depth,0,De,se,null):t.texImage2D(he,Ae,oe,le,ne,0,De,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),me(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,he,D.__webglTexture,0,fe(_)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,he,D.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function dn(R,_,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){let ge=_.depthTexture,he=ge&&ge.isDepthTexture?ge.type:null,Ae=x(_.stencilBuffer,he),De=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(_),Ae,_.width,_.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(_),Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,R)}else{let ge=_.textures;for(let he=0;he<ge.length;he++){let Ae=ge[he],De=s.convert(Ae.format,Ae.colorSpace),se=s.convert(Ae.type),oe=C(Ae.internalFormat,De,se,Ae.normalized,Ae.colorSpace);me(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(_),oe,_.width,_.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(_),oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(R,_,q){let ge=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=i.get(_.depthTexture);he.__renderTarget=_;let Ae=ge?_.depthTexture.image[0]:_.depthTexture.image;(!he.__webglTexture||Ae.width!==_.width||Ae.height!==_.height)&&(Ae.width=_.width,Ae.height=_.height,_.depthTexture.needsUpdate=!0),ge?ze(_.depthTexture,0):Ue(_.depthTexture,0);let De=he.__webglTexture,se=fe(_),oe=ge?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,Ee=_.depthTexture.format===wn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===_n)me(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,oe,De,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,oe,De,0);else if(_.depthTexture.format===wn)me(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,oe,De,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,oe,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pn(R){let _=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let ge=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ge){let he=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ge.removeEventListener("dispose",he)};ge.addEventListener("dispose",he),_.__depthDisposeCallback=he}_.__boundDepthTexture=ge}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(q)for(let ge=0;ge<6;ge++)Et(_.__webglFramebuffer[ge],R,ge);else R.texture.mipmaps.length>0?Et(_.__webglFramebuffer[0],R,0):Et(_.__webglFramebuffer,R,0);else if(q){_.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ge]),_.__webglDepthbuffer[ge]===void 0)_.__webglDepthbuffer[ge]=n.createRenderbuffer(),dn(_.__webglDepthbuffer[ge],R,!1);else{let he=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=_.__webglDepthbuffer[ge];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ae)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),dn(_.__webglDepthbuffer,R,!1);else{let he=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mn(R,_,q){let ge=i.get(R);_!==void 0&&ni(ge.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&pn(R)}function an(R){let _=R.texture,q=i.get(R),ge=i.get(_);R.addEventListener("dispose",W),B(R);let he=R.textures,Ae=R.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=_.version,o.memory.textures++),Ae){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let oe=0;oe<_.mipmaps.length;oe++)q.__webglFramebuffer[se][oe]=n.createFramebuffer()}else q.__webglFramebuffer[se]=n.createFramebuffer()}else{if(_.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)q.__webglFramebuffer[se]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(De)for(let se=0,oe=he.length;se<oe;se++){let Ee=i.get(he[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&me(R)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<he.length;se++){let oe=he[se];q.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[se]);let Ee=s.convert(oe.format,oe.colorSpace),D=s.convert(oe.type),le=C(oe.internalFormat,Ee,D,oe.normalized,oe.colorSpace,R.isXRRenderTarget===!0),ne=fe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,le,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,q.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),dn(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ni(q.__webglFramebuffer[se][oe],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else ni(q.__webglFramebuffer[se],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);P(_)?A(n.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(De){for(let se=0,oe=he.length;se<oe;se++){let Ee=he[se],D=i.get(Ee),le=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,D.__webglTexture),Nt(le,Ee),ni(q.__webglFramebuffer,R,Ee,n.COLOR_ATTACHMENT0+se,le,0),P(Ee)&&A(le)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ge.__webglTexture),Nt(se,_),_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ni(q.__webglFramebuffer[oe],R,_,n.COLOR_ATTACHMENT0,se,oe);else ni(q.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,se,0);P(_)?A(se):_.mipmaps.length>0&&n.texParameteri(se,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&pn(R)}function k(R){let _=R.textures;for(let q=0,ge=_.length;q<ge;q++){let he=_[q];if(P(he)&&he.mipmapsAutoUpdate===!0){let Ae=I(R),De=i.get(he).__webglTexture;t.bindTexture(Ae,De),A(Ae),t.unbindTexture()}}}let bi=[];function It(R){if(R.samples>0){if(me(R)===!1){let _=R.textures,q=R.width,ge=R.height,he=n.COLOR_BUFFER_BIT,Ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(R),se=_.length>1;if(se)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ee]);let D=i.get(_[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,q,ge,0,0,q,ge,he,n.NEAREST),l===!0&&(bi.length=0,bi.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&bi.push(Ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bi))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ee]);let D=i.get(_[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function fe(R){return Math.min(r.maxSamples,R.samples)}function me(R){let _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ri(R){let _=o.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function we(R,_){let q=R.colorSpace,ge=R.format,he=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==_s&&q!==Hn&&(ct.getTransfer(q)===At?(ge!==Wi||he!==Ai)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",q)),_}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ge,this.resetTextureUnits=V,this.getTextureUnits=pe,this.setTextureUnits=Ve,this.setTexture2D=Ue,this.setTexture2DArray=We,this.setTexture3D=tt,this.setTextureCube=ze,this.rebindTextures=mn,this.setupRenderTarget=an,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=pn,this.setupFrameBufferTexture=ni,this.useMultisampledRTT=me,this.dispose=ee}function Nu(n,e){function t(i,r=Hn){let s,o=ct.getTransfer(r);if(i===Ai)return n.UNSIGNED_BYTE;if(i===io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===no)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$l)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yl)return n.BYTE;if(i===Zl)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===to)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Ei)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===Kl)return n.ALPHA;if(i===jl)return n.RGB;if(i===Wi)return n.RGBA;if(i===_n)return n.DEPTH_COMPONENT;if(i===wn)return n.DEPTH_STENCIL;if(i===Gr)return n.RED;if(i===ps)return n.RED_INTEGER;if(i===Tn)return n.RG;if(i===ro)return n.RG_INTEGER;if(i===so)return n.RGBA_INTEGER;if(i===oo||i===ao||i===lo||i===co)if(o===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_a||i===ya||i===va||i===Ma)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sa||i===ba||i===wa||i===Ta||i===Aa||i===ms||i===Ea)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sa||i===ba)return o===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wa)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ta)return s.COMPRESSED_R11_EAC;if(i===Aa)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ms)return s.COMPRESSED_RG11_EAC;if(i===Ea)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ca||i===Ra||i===Pa||i===Ia||i===La||i===Da||i===Na||i===Ua||i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ca)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ra)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pa)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ia)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===La)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Da)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Na)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ua)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oa)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ba)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===za)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ka)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ga)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Ha||i===Wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Va)return o===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xa||i===qa||i===gs||i===Ya)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$n?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zt({vertexShader:qy,fragmentShader:Yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var sh=class extends Ci{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new rh,p={},w=t.getContextAttributes(),P=null,A=null,I=[],C=[],x=new ie,T=null,B=null,N=new pi;N.viewport=new Dt;let G=new pi;G.viewport=new Dt;let W=[N,G],Q=new Tl,U=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Ue=I[re];return Ue===void 0&&(Ue=new ws,I[re]=Ue),Ue.getTargetRaySpace()},this.getControllerGrip=function(re){let Ue=I[re];return Ue===void 0&&(Ue=new ws,I[re]=Ue),Ue.getGripSpace()},this.getHand=function(re){let Ue=I[re];return Ue===void 0&&(Ue=new ws,I[re]=Ue),Ue.getHandSpace()};function J(re){let Ue=C.indexOf(re.inputSource);if(Ue===-1)return;let We=I[Ue];We!==void 0&&(We.update(re.inputSource,re.frame,c||o),We.dispatchEvent({type:re.type,data:re.inputSource}))}function Z(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",z);for(let re=0;re<I.length;re++){let Ue=C[re];Ue!==null&&(C[re]=null,I[re].disconnect(Ue))}U=null,ee=null,m.reset();for(let re in p)delete p[re];if(e.setRenderTarget(P),f=null,u=null,d=null,r=null,A=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(x.width,x.height,!1),B!==null){let re=B.camera;re.fov=B.fov,re.zoom=B.zoom,re.updateProjectionMatrix(),B=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let We=null,tt=null,ze=null;w.depth&&(ze=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,We=w.stencil?wn:_n,tt=w.stencil?$n:Bi);let dt={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(dt),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new jt(u.textureWidth,u.textureHeight,{format:Wi,type:Ai,depthTexture:new vn(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,We),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let We={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,We),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new jt(f.framebufferWidth,f.framebufferHeight,{format:Wi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(re){for(let Ue=0;Ue<re.removed.length;Ue++){let We=re.removed[Ue],tt=C.indexOf(We);tt>=0&&(C[tt]=null,I[tt].disconnect(We))}for(let Ue=0;Ue<re.added.length;Ue++){let We=re.added[Ue],tt=C.indexOf(We);if(tt===-1){for(let dt=0;dt<I.length;dt++)if(dt>=C.length){C.push(We),tt=dt;break}else if(C[dt]===null){C[dt]=We,tt=dt;break}if(tt===-1)break}let ze=I[tt];ze&&ze.connect(We)}}function j(re,Ue){Ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let Ue=re.near,We=re.far;m.texture!==null&&(m.depthNear>0&&(Ue=m.depthNear),m.depthFar>0&&(We=m.depthFar)),Q.near=G.near=N.near=Ue,Q.far=G.far=N.far=We,(U!==Q.near||ee!==Q.far)&&(r.updateRenderState({depthNear:Q.near,depthFar:Q.far}),U=Q.near,ee=Q.far),Q.layers.mask=re.layers.mask|6,N.layers.mask=Q.layers.mask&-5,G.layers.mask=Q.layers.mask&-3;let tt=re.parent,ze=Q.cameras;j(Q,tt);for(let dt=0;dt<ze.length;dt++)j(ze[dt],tt);Q.projectionMatrix.copy(N.projectionMatrix),Q.projectionMatrixInverse.copy(N.projectionMatrixInverse),B===null&&re.isPerspectiveCamera&&(B={camera:re,fov:re.fov,zoom:re.zoom}),V(re,Q,tt)};function V(re,Ue,We){We===null?re.matrix.copy(Ue.matrixWorld):(re.matrix.copy(We.matrixWorld),re.matrix.invert(),re.matrix.multiply(Ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Ue.projectionMatrix),re.projectionMatrixInverse.copy(Ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Vr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(re){l=re,u!==null&&(u.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(re){return p[re]};let pe=null;function Ve(re,Ue){if(h=Ue.getViewerPose(c||o),g=Ue,h!==null){let We=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let tt=!1;We.length!==Q.cameras.length&&(Q.cameras.length=0,tt=!0);for(let ot=0;ot<We.length;ot++){let Nt=We[ot],Ut=null;if(f!==null)Ut=f.getViewport(Nt);else{let Si=d.getViewSubImage(u,Nt);Ut=Si.viewport,ot===0&&(e.setRenderTargetTextures(A,Si.colorTexture,Si.depthStencilTexture),e.setRenderTarget(A))}let wt=W[ot];wt===void 0&&(wt=new pi,wt.layers.enable(ot),wt.viewport=new Dt,W[ot]=wt),wt.matrix.fromArray(Nt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Nt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ot===0&&(Q.matrix.copy(wt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),tt===!0&&Q.cameras.push(wt)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let ot=d.getDepthInformation(We[0]);ot&&ot.isValid&&ot.texture&&m.init(ot,r.renderState)}if(ze&&ze.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let ot=0;ot<We.length;ot++){let Nt=We[ot].camera;if(Nt){let Ut=p[Nt];Ut||(Ut=new Ds,p[Nt]=Ut);let wt=d.getCameraImage(Nt);Ut.sourceTexture=wt}}}}for(let We=0;We<I.length;We++){let tt=C[We],ze=I[We];tt!==null&&ze!==void 0&&ze.update(tt,Ue,c||o)}pe&&pe(re,Ue),Ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ue}),g=null}let Ge=new jc;Ge.setAnimationLoop(Ve),this.setAnimationLoop=function(re){pe=re},this.dispose=function(){}}};var Zy=new rt,o0=new it;o0.set(-1,0,0,0,1,0,0,0,1);function a0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,P,A){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ci&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ci&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),P=w.envMap,A=w.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(A)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(o0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ci&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function l0(n,e,t,i){let r={},s={};function o(w,P){let A=P.program;i.uniformBlockBinding(w,A,r[w.id])}function a(w,P){let A=r[w.id];A===void 0&&(g(w),A=l(w),r[w.id]=A,w.addEventListener("dispose",m));let I=P.program;i.updateUBOMapping(w,I);let C=e.render.frame;s[w.id]!==C&&(c(w),s[w.id]=C)}function l(w){let P=n.createBuffer(),A=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,A,I),n.bindBuffer(n.UNIFORM_BUFFER,null),P}function c(w){let P=r[w.id],A=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let C=0,x=A.length;C<x;C++){let T=A[C];if(Array.isArray(T))for(let B=0,N=T.length;B<N;B++)h(T[B],C,B,I);else h(T,C,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,P,A,I){if(u(w,P,A,I)===!0){let C=w.__offset,x=w.value;if(Array.isArray(x)){let T=0;for(let B=0;B<x.length;B++){let N=x[B],G=b(N,!0);d(N,w.__data,T),T+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,w.__data)}}function d(w,P,A){typeof w=="number"||typeof w=="boolean"?P[A]=w:w.isMatrix3?(P[A]=w.elements[0],P[A+1]=w.elements[1],P[A+2]=w.elements[2],P[A+3]=0,P[A+4]=w.elements[3],P[A+5]=w.elements[4],P[A+6]=w.elements[5],P[A+7]=0,P[A+8]=w.elements[6],P[A+9]=w.elements[7],P[A+10]=w.elements[8],P[A+11]=0):ArrayBuffer.isView(w)?P.set(w.subarray(0,P.length-A),A):w.toArray(P,A)}function u(w,P,A,I){let C=w.value,x=P+"_"+A;if(Array.isArray(C)){I[x]===void 0&&(I[x]=[]);let T=I[x],B=!1;for(let N=0;N<C.length;N++)f(C[N],T,N)===!0&&(B=!0);return B}return f(C,I,x)}function f(w,P,A){if(P[A]===void 0)return typeof w=="number"||typeof w=="boolean"?P[A]=w:ArrayBuffer.isView(w)?P[A]=w.slice():P[A]=w.clone(),!0;{let I=P[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return P[A]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(I.equals(w)===!1)return I.copy(w),!0}}return!1}function g(w){let P=w.uniforms,A=0,I=16;for(let x=0,T=P.length;x<T;x++){let B=Array.isArray(P[x])?P[x]:[P[x]];for(let N=0,G=B.length;N<G;N++){let W=B[N],Q=Array.isArray(W.value)?W.value:[W.value],U=Array.isArray(P[x])||Array.isArray(W.value),ee=A;for(let Z=0,z=Q.length;Z<z;Z++){let j=Q[Z],V=b(j,U),pe=A%I,Ve=pe%V.boundary,Ge=pe+Ve;A+=Ve,Ge!==0&&I-Ge<V.storage&&(A+=I-Ge),Z===0&&(ee=A),A+=V.storage}let J=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new J((A-ee)/Float32Array.BYTES_PER_ELEMENT),W.__offset=ee}}let C=A%I;return C>0&&(A+=I-C),w.__size=A,w.__cache={},this}function b(w,P){let A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=16,A.storage=48):w.isMatrix4?(A.boundary=16,A.storage=64):w.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(A.boundary=16,A.storage=w.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",w),P===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function m(w){let P=w.target;P.removeEventListener("dispose",m),n.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);r={},s={}}return{bind:o,update:a,dispose:p}}var $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pr=null;function c0(){return pr===null&&(pr=new Rn($y,16,16,Tn,ai),pr.name="DFG_LUT",pr.minFilter=hi,pr.magFilter=hi,pr.wrapS=Ki,pr.wrapT=Ki,pr.generateMipmaps=!1,pr.needsUpdate=!0),pr}var Il=class{constructor(e={}){let{canvas:t=Ph(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ai}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let b=f,m=new Set([so,ro,ps]),p=new Set([Ai,Bi,_r,$n,io,no]),w=new Uint32Array(4),P=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},I=null,C=null,x=[],T=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,G=!1,W=null,Q=null,U=null,ee=null;this._outputColorSpace=Xi;let J=0,Z=0,z=null,j=-1,V=null,pe=new Dt,Ve=new Dt,Ge=null,re=new de(0),Ue=0,We=t.width,tt=t.height,ze=1,dt=null,mi=null,ot=new Dt(0,0,We,tt),Nt=new Dt(0,0,We,tt),Ut=!1,wt=new Pn,Si=new No,ui=!1,Qi=!1,ni=new rt,dn=new S,Et=new Dt,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mn=!1;function an(){return z===null?ze:1}let k=i;function bi(v,F){return t.getContext(v,F)}let It,fe,me,ri,we,$e,R,_,q,ge,he,Ae,De,se,oe,Ee,D,le,ne,Me,ye,Se,je;try{let v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Te,!1),k===null){let F="webgl2";if(k=bi(F,v),k===null)throw bi(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(v){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Xe("WebGLRenderer: "+v.message),v}function pt(){It=new vg(k),It.init(),ye=new Nu(k,It),fe=new ug(k,It,e,ye),me=new r0(k,It),fe.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),Q=k.createFramebuffer(),U=k.createFramebuffer(),ee=k.createFramebuffer(),ri=new bg(k),we=new Yg,$e=new s0(k,It,me,we,fe,ye,ri),R=new yg(N),_=new Ed(k),Se=new cg(k,_),q=new Mg(k,_,ri,Se),ge=new Tg(k,q,_,Se,ri),le=new wg(k,fe,$e),oe=new fg(we),he=new qg(N,R,It,fe,Se,oe),Ae=new a0(N,we),De=new Jg,se=new Qg(It),D=new lg(N,R,me,ge,g,l),Ee=new n0(N,ge,fe),je=new l0(k,ri,fe,me),ne=new hg(k,It,ri),Me=new Sg(k,It,ri),ri.programs=he.programs,N.capabilities=fe,N.extensions=It,N.properties=we,N.renderLists=De,N.shadowMap=Ee,N.state=me,N.info=ri}b!==Ai&&(B=new Ag(b,t.width,t.height,a,r,s));let _e=new sh(N,k);this.xr=_e,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let v=It.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=It.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(v){v!==void 0&&(ze=v,this.setSize(We,tt,!1))},this.getSize=function(v){return v.set(We,tt)},this.setSize=function(v,F,K=!0){if(_e.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}We=v,tt=F,t.width=Math.floor(v*ze),t.height=Math.floor(F*ze),K===!0&&(t.style.width=v+"px",t.style.height=F+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(We*ze,tt*ze).floor()},this.setDrawingBufferSize=function(v,F,K){We=v,tt=F,ze=K,t.width=Math.floor(v*K),t.height=Math.floor(F*K),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(b===Ai){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(pe)},this.getViewport=function(v){return v.copy(ot)},this.setViewport=function(v,F,K,X){v.isVector4?ot.set(v.x,v.y,v.z,v.w):ot.set(v,F,K,X),me.viewport(pe.copy(ot).multiplyScalar(an()).round())},this.getScissor=function(v){return v.copy(Nt)},this.setScissor=function(v,F,K,X){v.isVector4?Nt.set(v.x,v.y,v.z,v.w):Nt.set(v,F,K,X),me.scissor(Ve.copy(Nt).multiplyScalar(an()).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(v){me.setScissorTest(Ut=v)},this.setOpaqueSort=function(v){dt=v},this.setTransparentSort=function(v){mi=v},this.getClearColor=function(v){return v.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,K=!0){let X=0;if(v){let Y=!1;if(z!==null){let Ne=z.texture.format;Y=m.has(Ne)}if(Y){let Ne=z.texture.type,Ye=p.has(Ne),Re=D.getClearColor(),ke=D.getClearAlpha(),xe=Re.r,ut=Re.g,vt=Re.b;Ye?(w[0]=xe,w[1]=ut,w[2]=vt,w[3]=ke,k.clearBufferuiv(k.COLOR,0,w)):(P[0]=xe,P[1]=ut,P[2]=vt,P[3]=ke,k.clearBufferiv(k.COLOR,0,P))}else X|=k.COLOR_BUFFER_BIT}F&&(X|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),W=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),D.dispose(),De.dispose(),se.dispose(),$e.dispose(),we.dispose(),R.dispose(),ge.dispose(),q.dispose(),Se.dispose(),je.dispose(),he.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",kl),_e.removeEventListener("sessionend",Sn),ln.stop()};function Oe(v){v.preventDefault(),Ms("WebGLRenderer: Context Lost."),G=!0}function gt(){Ms("WebGLRenderer: Context Restored."),G=!1;let v=ri.autoReset,F=Ee.enabled,K=Ee.autoUpdate,X=Ee.needsUpdate,Y=Ee.type;pt(),ri.autoReset=v,Ee.enabled=F,Ee.autoUpdate=K,Ee.needsUpdate=X,Ee.type=Y}function Te(v){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ft(v){let F=v.target;F.removeEventListener("dispose",Ft),fi(F)}function fi(v){Yn(v),we.remove(v)}function Yn(v){let F=we.get(v).programs;F!==void 0&&(F.forEach(function(K){he.releaseProgram(K)}),v.isShaderMaterial&&he.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,K,X,Y,Ne){F===null&&(F=pn);let Ye=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Re=mr(v,F,K,X,Y);me.setMaterial(X,Ye);let ke=K.index,xe=1;if(X.wireframe===!0){if(ke=q.getWireframeAttribute(K),ke===void 0)return;xe=2}let ut=K.drawRange,vt=K.attributes.position,qe=ut.start*xe,Tt=(ut.start+ut.count)*xe;Ne!==null&&(qe=Math.max(qe,Ne.start*xe),Tt=Math.min(Tt,(Ne.start+Ne.count)*xe)),ke!==null?(qe=Math.max(qe,0),Tt=Math.min(Tt,ke.count)):vt!=null&&(qe=Math.max(qe,0),Tt=Math.min(Tt,vt.count));let gi=Tt-qe;if(gi<0||gi===1/0)return;Se.setup(Y,X,Re,K,ke);let Wt,Vt=ne;if(ke!==null&&(Wt=_.get(ke),Vt=Me,Vt.setIndex(Wt)),Y.isMesh)X.wireframe===!0?(me.setLineWidth(X.wireframeLinewidth*an()),Vt.setMode(k.LINES)):Vt.setMode(k.TRIANGLES);else if(Y.isLine){let Vi=X.linewidth;Vi===void 0&&(Vi=1),me.setLineWidth(Vi*an()),Y.isLineSegments?Vt.setMode(k.LINES):Y.isLineLoop?Vt.setMode(k.LINE_LOOP):Vt.setMode(k.LINE_STRIP)}else Y.isPoints?Vt.setMode(k.POINTS):Y.isSprite&&Vt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Vi=Y._multiDrawStarts,Ze=Y._multiDrawCounts,Di=Y._multiDrawCount,Lt=ke?_.get(ke).bytesPerElement:1,gr=we.get(X).currentProgram.getUniforms();for(let Ni=0;Ni<Di;Ni++)gr.setValue(k,"_gl_DrawID",Ni),Vt.render(Vi[Ni]/Lt,Ze[Ni])}else if(Y.isInstancedMesh)Vt.renderInstances(qe,gi,Y.count);else if(K.isInstancedBufferGeometry){let Vi=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ze=Math.min(K.instanceCount,Vi);Vt.renderInstances(qe,gi,Ze)}else Vt.render(qe,gi)};function zl(v,F,K,X){W!==null&&v.isNodeMaterial&&W.setObject(X,v),ui===!0&&oe.setState(v,K,!1),v.transparent===!0&&v.side===Hi&&v.forceSinglePass===!1?(v.side=ci,v.needsUpdate=!0,On(v,F,X),v.side=kn,v.needsUpdate=!0,On(v,F,X),v.side=Hi):On(v,F,X)}this.compile=function(v,F,K=null){K===null&&(K=v),W!==null&&W.renderStart(v,F,K),C=se.get(K),C.init(F),T.push(C),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),v!==K&&v.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights(),W!==null&&W.updateLights(C.state.lightsArray),Qi=this.localClippingEnabled,ui=oe.init(this.clippingPlanes,Qi),ui===!0&&oe.setGlobalState(this.clippingPlanes,F),W!==null&&Ee.render(C.state.shadowsArray,K,F);let X=new Set;return v.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let Ye=0;Ye<Ne.length;Ye++){let Re=Ne[Ye];zl(Re,K,F,Y),X.add(Re)}else zl(Ne,K,F,Y),X.add(Ne)}),C=T.pop(),W!==null&&W.renderEnd(),X},this.compileAsync=function(v,F,K=null){let X=this.compile(v,F,K);return new Promise(Y=>{function Ne(){if(X.forEach(function(Ye){let ke=we.get(Ye).currentProgram;(ke===void 0||ke.isReady())&&X.delete(Ye)}),X.size===0){Y(v);return}setTimeout(Ne,10)}It.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ra=null;function gn(v){ra&&ra(v)}function kl(){ln.stop()}function Sn(){ln.start()}let ln=new jc;ln.setAnimationLoop(gn),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(v){ra=v,_e.setAnimationLoop(v),v===null?ln.stop():ln.start()},_e.addEventListener("sessionstart",kl),_e.addEventListener("sessionend",Sn),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(v,F);let K=_e.enabled===!0&&_e.isPresenting===!0,X=B!==null&&(z===null||K)&&B.begin(N,z);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(F),F=_e.getCamera()),v.isScene===!0&&v.onBeforeRender(N,v,F,z),C=se.get(v,T.length),C.init(F),C.state.textureUnits=$e.getTextureUnits(),T.push(C),ni.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Si.setFromArrayCamera(F):wt.setFromProjectionMatrix(ni,qi,F.reversedDepth),Qi=this.localClippingEnabled,ui=oe.init(this.clippingPlanes,Qi),I=De.get(v,x.length),I.init(),x.push(I),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Ye=N.xr.getDepthSensingMesh();Ye!==null&&sa(Ye,F,-1/0,N.sortObjects)}sa(v,F,0,N.sortObjects),I.finish(),W!==null&&W.updateLights(C.state.lightsArray),N.sortObjects===!0&&I.sort(dt,mi),mn=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,mn&&D.addToRenderList(I,v),this.info.autoReset===!0&&this.info.reset(),ui===!0&&oe.beginShadows();let Y=C.state.shadowsArray;if(Ee.render(Y,v,F),ui===!0&&oe.endShadows(),(X&&B.hasRenderPass())===!1){let Ye=I.opaque,Re=I.transmissive;if(C.setupLights(),F.isArrayCamera){let ke=F.cameras;if(Re.length>0)for(let xe=0,ut=ke.length;xe<ut;xe++){let vt=ke[xe];oa(Ye,Re,v,vt)}mn&&D.render(v);for(let xe=0,ut=ke.length;xe<ut;xe++){let vt=ke[xe];ls(I,v,vt,vt.viewport)}}else Re.length>0&&oa(Ye,Re,v,F),mn&&D.render(v),ls(I,v,F)}z!==null&&Z===0&&($e.updateMultisampleRenderTarget(z),$e.updateRenderTargetMipmap(z)),X&&B.end(N),v.isScene===!0&&v.onAfterRender(N,v,F),Se.resetDefaultState(),j=-1,V=null,T.pop(),T.length>0?(C=T[T.length-1],$e.setTextureUnits(C.state.textureUnits),ui===!0&&oe.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,x.pop(),x.length>0?I=x[x.length-1]:I=null,W!==null&&W.renderEnd()};function sa(v,F,K,X){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)K=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)C.pushLight(v),v.castShadow&&C.pushShadow(v);else if(v.isSprite){let Ye=F.isArrayCamera?Si:wt;if(!v.frustumCulled||v.intersectsFrustum(Ye)){X&&Et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ni);let Re=ge.update(v),ke=v.material;ke.visible&&I.push(v,Re,ke,K,Et.z,null,F)}}else if(v.isMesh||v.isLine||v.isPoints){let Ye=F.isArrayCamera?Si:wt;if(!v.frustumCulled||v.intersectsFrustum(Ye)){let Re=ge.update(v),ke=v.material;if(X&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Et.copy(v.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Et.copy(Re.boundingSphere.center)),Et.applyMatrix4(v.matrixWorld).applyMatrix4(ni)),Array.isArray(ke)){let xe=Re.groups;for(let ut=0,vt=xe.length;ut<vt;ut++){let qe=xe[ut],Tt=ke[qe.materialIndex];Tt&&Tt.visible&&I.push(v,Re,Tt,K,Et.z,qe,F)}}else ke.visible&&I.push(v,Re,ke,K,Et.z,null,F)}}}let Ne=v.children;for(let Ye=0,Re=Ne.length;Ye<Re;Ye++)sa(Ne[Ye],F,K,X)}function ls(v,F,K,X){let{opaque:Y,transmissive:Ne,transparent:Ye}=v;C.setupLightsView(K),ui===!0&&oe.setGlobalState(N.clippingPlanes,K),X&&me.viewport(pe.copy(X)),Y.length>0&&Hs(Y,F,K),Ne.length>0&&Hs(Ne,F,K),Ye.length>0&&Hs(Ye,F,K),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function oa(v,F,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[X.id]===void 0){let qe=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[X.id]=new jt(1,1,{generateMipmaps:!0,type:qe?ai:Ai,minFilter:hn,samples:Math.max(4,fe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ne=C.state.transmissionRenderTarget[X.id],Ye=X.viewport||pe;Ne.setSize(Ye.z*N.transmissionResolutionScale,Ye.w*N.transmissionResolutionScale);let Re=N.getRenderTarget(),ke=N.getActiveCubeFace(),xe=N.getActiveMipmapLevel();N.setRenderTarget(Ne),N.getClearColor(re),Ue=N.getClearAlpha(),Ue<1&&N.setClearColor(16777215,.5),N.clear(),mn&&D.render(K);let ut=N.toneMapping;N.toneMapping=bn;let vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),C.setupLightsView(X),ui===!0&&oe.setGlobalState(N.clippingPlanes,X),Hs(v,K,X),$e.updateMultisampleRenderTarget(Ne),$e.updateRenderTargetMipmap(Ne),It.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Tt=0,gi=F.length;Tt<gi;Tt++){let Wt=F[Tt],{object:Vt,geometry:Vi,material:Ze,group:Di}=Wt;if(Ze.side===Hi&&Vt.layers.test(X.layers)){let Lt=Ze.side;Ze.side=ci,Ze.needsUpdate=!0,Gl(Vt,K,X,Vi,Ze,Di),Ze.side=Lt,Ze.needsUpdate=!0,qe=!0}}qe===!0&&($e.updateMultisampleRenderTarget(Ne),$e.updateRenderTargetMipmap(Ne))}N.setRenderTarget(Re,ke,xe),N.setClearColor(re,Ue),vt!==void 0&&(X.viewport=vt),N.toneMapping=ut}function Hs(v,F,K){let X=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Ne=v.length;Y<Ne;Y++){let Ye=v[Y],{object:Re,geometry:ke,group:xe}=Ye,ut=Ye.material;ut.allowOverride===!0&&X!==null&&(ut=X),Re.layers.test(K.layers)&&Gl(Re,F,K,ke,ut,xe)}}function Gl(v,F,K,X,Y,Ne){W!==null&&Y.isNodeMaterial&&W.setObject(v,Y),v.onBeforeRender(N,F,K,X,Y,Ne),v.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),Y.onBeforeRender(N,F,K,X,v,Ne),Y.transparent===!0&&Y.side===Hi&&Y.forceSinglePass===!1?(Y.side=ci,Y.needsUpdate=!0,N.renderBufferDirect(K,F,X,Y,v,Ne),Y.side=kn,Y.needsUpdate=!0,N.renderBufferDirect(K,F,X,Y,v,Ne),Y.side=Hi):N.renderBufferDirect(K,F,X,Y,v,Ne),v.onAfterRender(N,F,K,X,Y,Ne)}function Vl(v){let F=0;for(let K of v)K.texture!==null&&F++;return F}function On(v,F,K){F.isScene!==!0&&(F=pn);let X=we.get(v),Y=C.state.lights,Ne=C.state.shadowsArray,Ye=Y.state.version,Re=he.getParameters(v,Y.state,Ne,F,K,C.state.lightProbeGridArray),ke=he.getProgramCacheKey(Re),xe=X.programs;X.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let ut=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;X.envMap=R.get(v.envMap||X.environment,ut),X.envMapRotation=X.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,xe===void 0&&(v.addEventListener("dispose",Ft),xe=new Map,X.programs=xe,X.programVariants=new Map);let vt=xe.get(ke);if(vt!==void 0){if(X.currentProgram===vt&&X.lightsStateVersion===Ye)return xn(v,Re),vt}else Re.uniforms=he.getUniforms(v),W!==null&&v.isNodeMaterial&&W.build(v,K,Re),v.onBeforeCompile(Re,N),vt=he.acquireProgram(Re,ke),xe.set(ke,vt),X.uniforms=Re.uniforms;let qe=X.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(qe.clippingPlanes=oe.uniform),xn(v,Re),X.needsLights=Ur(v),X.lightsStateVersion=Ye,X.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.sunLights.value=Y.state.sun,qe.sunLightShadows.value=Y.state.sunShadow,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.sunShadowMatrix.value=Y.state.sunShadowMatrix,qe.sunShadowCascade.value=Y.state.sunShadowCascade,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Vl(C.state.lightProbeGridArray),X.currentProgram=vt,X.uniformsList=null,vt}function Hl(v,F,K,X,Y){let Ne=we.get(v),Ye=Ne.currentProgram.id+","+X+","+Y,Re=Ne.programVariants.get(Ye);return Re===void 0?(Re=On(v,F,K),Ne.programVariants.set(Ye,Re)):(Ne.currentProgram=Re,Ne.uniformsList=null,Ne.outputColorSpace=X,Ne.toneMapping=Y),Re}function Ws(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=ns.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function xn(v,F){let K=we.get(v);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function mr(v,F,K,X,Y){F.isScene!==!0&&(F=pn),$e.resetTextureUnits();let Ne=F.fog,Ye=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Re=z===null?N.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ct.workingColorSpace,ke=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,xe=R.get(X.envMap||Ye,ke),ut=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vt=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),qe=!!K.morphAttributes.position,Tt=!!K.morphAttributes.normal,gi=!!K.morphAttributes.color,Wt=bn;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Wt=N.toneMapping);let Vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Vi=Vt!==void 0?Vt.length:0,Ze=we.get(X),Di=C.state.lights;if(ui===!0&&(Qi===!0||v!==V)){let si=v===V&&X.id===j;oe.setState(X,v,si)}let Lt=!1,gr=!1;X.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Di.state.version||Y.isBatchedMesh&&Ze.batching===!1||!Y.isBatchedMesh&&Ze.batching===!0||Y.isBatchedMesh&&Ze.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ze.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ze.instancing===!1||!Y.isInstancedMesh&&Ze.instancing===!0||Y.isSkinnedMesh&&Ze.skinning===!1||!Y.isSkinnedMesh&&Ze.skinning===!0||Y.isInstancedMesh&&Ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ze.instancingMorph===!1&&Y.morphTexture!==null||Ze.envMap!==xe||X.fog===!0&&Ze.fog!==Ne||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==oe.numPlanes||Ze.numIntersection!==oe.numIntersection)||Ze.vertexAlphas!==ut||Ze.vertexTangents!==vt||Ze.morphTargets!==qe||Ze.morphNormals!==Tt||Ze.morphColors!==gi||Ze.morphTargetsCount!==Vi||Ze.numLightProbeGrids!==Vl(C.state.lightProbeGridArray)?Lt=!0:(Ze.outputColorSpace!==Re||Ze.toneMapping!==Wt)&&(gr=!0):(Lt=!0,Ze.__version=X.version);let Ni=Ze.currentProgram;(Lt===!0||gr===!0)&&(Ni=gr===!0?Hl(X,F,Y,Re,Wt):On(X,F,Y),W&&X.isNodeMaterial&&W.onUpdateProgram(X,Ni,Ze));let Bn=!1,zn=!1,Ui=!1,at=Ni.getUniforms(),xi=Ze.uniforms;if(me.useProgram(Ni.program)&&(Bn=!0,zn=!0,Ui=!0),X.id!==j&&(j=X.id,zn=!0),Bn||V!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),at.setValue(k,"projectionMatrix",v.projectionMatrix),at.setValue(k,"viewMatrix",v.matrixWorldInverse);let wi=at.map.cameraPosition;wi!==void 0&&wi.setValue(k,dn.setFromMatrixPosition(v.matrixWorld)),fe.logarithmicDepthBuffer&&at.setValue(k,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&at.setValue(k,"isOrthographic",v.isOrthographicCamera===!0),V!==v&&(V=v,zn=!0,Ui=!0)}if(Ze.needsLights&&(Di.state.sunShadowMap.length>0&&at.setValue(k,"sunShadowMap",Di.state.sunShadowMap,$e),Di.state.directionalShadowMap.length>0&&at.setValue(k,"directionalShadowMap",Di.state.directionalShadowMap,$e),Di.state.spotShadowMap.length>0&&at.setValue(k,"spotShadowMap",Di.state.spotShadowMap,$e),Di.state.pointShadowMap.length>0&&at.setValue(k,"pointShadowMap",Di.state.pointShadowMap,$e)),Y.isSkinnedMesh){at.setOptional(k,Y,"bindMatrix"),at.setOptional(k,Y,"bindMatrixInverse");let si=Y.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),at.setValue(k,"boneTexture",si.boneTexture,$e))}Y.isBatchedMesh&&(at.setOptional(k,Y,"batchingTexture"),at.setValue(k,"batchingTexture",Y._matricesTexture,$e),at.setOptional(k,Y,"batchingIdTexture"),at.setValue(k,"batchingIdTexture",Y._indirectTexture,$e),at.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&at.setValue(k,"batchingColorTexture",Y._colorsTexture,$e));let cn=K.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&le.update(Y,K,Ni),(zn||Ze.receiveShadow!==Y.receiveShadow)&&(Ze.receiveShadow=Y.receiveShadow,at.setValue(k,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(xi.envMapIntensity.value=F.environmentIntensity),xi.dfgLUT!==void 0&&(xi.dfgLUT.value=c0()),zn){if(at.setValue(k,"toneMappingExposure",N.toneMappingExposure),Ze.needsLights&&cs(xi,Ui),Ne&&X.fog===!0&&Ae.refreshFogUniforms(xi,Ne),Ae.refreshMaterialUniforms(xi,X,ze,tt,C.state.transmissionRenderTarget[v.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){let si=A,wi=0;for(let sr of C.state.lightProbeGridArray)sr.texture!==null&&(si.textures[wi]=sr.texture,si.min[wi]=sr.boundingBox.min,si.max[wi]=sr.boundingBox.max,si.resolution[wi]=sr.resolution,wi++);for(let sr in si)si[sr].length=wi;xi.probesSH.value=si.textures,xi.probesMin.value=si.min,xi.probesMax.value=si.max,xi.probesResolution.value=si.resolution}ns.upload(k,Ws(Ze),xi,$e)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ns.upload(k,Ws(Ze),xi,$e),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&at.setValue(k,"center",Y.center),at.setValue(k,"modelViewMatrix",Y.modelViewMatrix),at.setValue(k,"normalMatrix",Y.normalMatrix),at.setValue(k,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let si=X.uniformsGroups;for(let wi=0,sr=si.length;wi<sr;wi++){let aa=si[wi];je.update(aa,Ni),je.bind(aa,Ni)}}return Ni}function cs(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Ur(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(v,F,K){let X=we.get(v);X.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),we.get(v.texture).__webglTexture=F,we.get(v.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let K=we.get(v);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,K=0){z=v,J=F,Z=K;let X=null,Y=!1,Ne=!1;if(v){let Re=we.get(v);if(Re.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(k.FRAMEBUFFER,Re.__webglFramebuffer),pe.copy(v.viewport),Ve.copy(v.scissor),Ge=v.scissorTest,me.viewport(pe),me.scissor(Ve),me.setScissorTest(Ge),j=-1;return}else if(Re.__webglFramebuffer===void 0)$e.setupRenderTarget(v);else if(Re.__hasExternalTextures)$e.rebindTextures(v,we.get(v.texture).__webglTexture,we.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ut=v.depthTexture;if(Re.__boundDepthTexture!==ut){if(ut!==null&&we.has(ut)&&(v.width!==ut.image.width||v.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(v)}}let ke=v.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);let xe=we.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(xe[F])?X=xe[F][K]:X=xe[F],Y=!0):v.samples>0&&$e.useMultisampledRTT(v)===!1?X=we.get(v).__webglMultisampledFramebuffer:Array.isArray(xe)?X=xe[K]:X=xe,pe.copy(v.viewport),Ve.copy(v.scissor),Ge=v.scissorTest}else pe.copy(ot).multiplyScalar(ze).floor(),Ve.copy(Nt).multiplyScalar(ze).floor(),Ge=Ut;if(K!==0&&(X=Q),me.bindFramebuffer(k.FRAMEBUFFER,X)&&me.drawBuffers(v,X),me.viewport(pe),me.scissor(Ve),me.setScissorTest(Ge),Y){let Re=we.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,K)}else if(Ne){let Re=F;for(let ke=0;ke<v.textures.length;ke++){let xe=we.get(v.textures[ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ke,xe.__webglTexture,K,Re)}}else if(v!==null&&K!==0){let Re=we.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Re.__webglTexture,K)}j=-1};function hs(v){let F=we.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=fe.textureFormatReadable(v.format),F.__typeReadable=fe.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,K,X,Y,Ne,Ye,Re=0){if(!(v&&v.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ye!==void 0&&(ke=ke[Ye],Array.isArray(ke)&&(ke=ke[0])),ke){me.bindFramebuffer(k.FRAMEBUFFER,ke);try{let xe=v.textures[Re],ut=xe.format,vt=xe.type;v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Re);let qe=hs(xe);if(qe.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-X&&K>=0&&K<=v.height-Y&&k.readPixels(F,K,X,Y,ye.convert(ut),ye.convert(vt),Ne)}finally{let xe=z!==null?we.get(z).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(v,F,K,X,Y,Ne,Ye,Re=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ye!==void 0&&(ke=ke[Ye],Array.isArray(ke)&&(ke=ke[0])),ke)if(F>=0&&F<=v.width-X&&K>=0&&K<=v.height-Y){me.bindFramebuffer(k.FRAMEBUFFER,ke);let xe=v.textures[Re],ut=xe.format,vt=xe.type;v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Re);let qe=hs(xe);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Tt),k.bufferData(k.PIXEL_PACK_BUFFER,Ne.byteLength,k.STREAM_READ),k.readPixels(F,K,X,Y,ye.convert(ut),ye.convert(vt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let gi=z!==null?we.get(z).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,gi);let Wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Rf(k,Wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Tt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ne),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Tt),k.deleteSync(Wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,K=0){let X=Math.pow(2,-K),Y=Math.floor(v.image.width*X),Ne=Math.floor(v.image.height*X),Ye=F!==null?F.x:0,Re=F!==null?F.y:0;$e.setTexture2D(v,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Ye,Re,Y,Ne),me.unbindTexture()},this.copyTextureToTexture=function(v,F,K=null,X=null,Y=0,Ne=0){let Ye,Re,ke,xe,ut,vt,qe,Tt,gi,Wt=v.isCompressedTexture?v.mipmaps[Ne]:v.image;if(K!==null)Ye=K.max.x-K.min.x,Re=K.max.y-K.min.y,ke=K.isBox3?K.max.z-K.min.z:1,xe=K.min.x,ut=K.min.y,vt=K.isBox3?K.min.z:0;else{let at=Math.pow(2,-Y);Ye=Math.floor(Wt.width*at),Re=Math.floor(Wt.height*at),v.isDataArrayTexture?ke=Wt.depth:v.isData3DTexture?ke=Math.floor(Wt.depth*at):ke=1,xe=0,ut=0,vt=0}X!==null?(qe=X.x,Tt=X.y,gi=X.z):(qe=0,Tt=0,gi=0);let Vt=ye.convert(F.format),Vi=ye.convert(F.type),Ze;F.isData3DTexture?($e.setTexture3D(F,0),Ze=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($e.setTexture2DArray(F,0),Ze=k.TEXTURE_2D_ARRAY):($e.setTexture2D(F,0),Ze=k.TEXTURE_2D),me.activeTexture(k.TEXTURE0),me.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),me.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),me.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let Di=me.getParameter(k.UNPACK_ROW_LENGTH),Lt=me.getParameter(k.UNPACK_IMAGE_HEIGHT),gr=me.getParameter(k.UNPACK_SKIP_PIXELS),Ni=me.getParameter(k.UNPACK_SKIP_ROWS),Bn=me.getParameter(k.UNPACK_SKIP_IMAGES);me.pixelStorei(k.UNPACK_ROW_LENGTH,Wt.width),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Wt.height),me.pixelStorei(k.UNPACK_SKIP_PIXELS,xe),me.pixelStorei(k.UNPACK_SKIP_ROWS,ut),me.pixelStorei(k.UNPACK_SKIP_IMAGES,vt);let zn=v.isDataArrayTexture||v.isData3DTexture,Ui=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let at=we.get(v),xi=we.get(F),cn=we.get(at.__renderTarget),si=we.get(xi.__renderTarget);me.bindFramebuffer(k.READ_FRAMEBUFFER,cn.__webglFramebuffer),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let wi=0;wi<ke;wi++)zn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.get(v).__webglTexture,Y,vt+wi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.get(F).__webglTexture,Ne,gi+wi)),k.blitFramebuffer(xe,ut,xe+Ye,ut+Re,qe,Tt,qe+Ye,Tt+Re,k.DEPTH_BUFFER_BIT,k.NEAREST);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||v.isRenderTargetTexture||we.has(v)){let at=we.get(v),xi=we.get(F);me.bindFramebuffer(k.READ_FRAMEBUFFER,U),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,ee);for(let cn=0;cn<ke;cn++)zn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,at.__webglTexture,Y,vt+cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,at.__webglTexture,Y),Ui?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xi.__webglTexture,Ne,gi+cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xi.__webglTexture,Ne),Y!==0?k.blitFramebuffer(xe,ut,xe+Ye,ut+Re,qe,Tt,qe+Ye,Tt+Re,k.COLOR_BUFFER_BIT,k.NEAREST):Ui?k.copyTexSubImage3D(Ze,Ne,qe,Tt,gi+cn,xe,ut,Ye,Re):k.copyTexSubImage2D(Ze,Ne,qe,Tt,xe,ut,Ye,Re);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ui?v.isDataTexture||v.isData3DTexture?k.texSubImage3D(Ze,Ne,qe,Tt,gi,Ye,Re,ke,Vt,Vi,Wt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Ze,Ne,qe,Tt,gi,Ye,Re,ke,Vt,Wt.data):k.texSubImage3D(Ze,Ne,qe,Tt,gi,Ye,Re,ke,Vt,Vi,Wt):v.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ne,qe,Tt,Ye,Re,Vt,Vi,Wt.data):v.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ne,qe,Tt,Wt.width,Wt.height,Vt,Wt.data):k.texSubImage2D(k.TEXTURE_2D,Ne,qe,Tt,Ye,Re,Vt,Vi,Wt);me.pixelStorei(k.UNPACK_ROW_LENGTH,Di),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Lt),me.pixelStorei(k.UNPACK_SKIP_PIXELS,gr),me.pixelStorei(k.UNPACK_SKIP_ROWS,Ni),me.pixelStorei(k.UNPACK_SKIP_IMAGES,Bn),Ne===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&k.generateMipmap(Ze),me.unbindTexture()},this.initRenderTarget=function(v){we.get(v).__webglFramebuffer===void 0&&$e.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?$e.setTextureCube(v,0):v.isData3DTexture?$e.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?$e.setTexture2DArray(v,0):$e.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){J=0,Z=0,z=null,me.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var h0={type:"change"},Fu={type:"start"},f0={type:"end"},oh=new yn,u0=new nn,Jy=Math.cos(70*Lh.DEG2RAD),Gi=new S,Mn=2*Math.PI,kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uu=1e-6,ah=class extends El{constructor(e,t=null){super(e,t),this.state=kt.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new yi,this._lastTargetPosition=new S,this._quat=new yi().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $o,this._sphericalDelta=new $o,this._scale=1,this._panOffset=new S,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new S,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jy.bind(this),this._onPointerDown=Ky.bind(this),this._onPointerUp=Qy.bind(this),this._onContextMenu=ov.bind(this),this._onMouseWheel=iv.bind(this),this._onKeyDown=nv.bind(this),this._onTouchStart=rv.bind(this),this._onTouchMove=sv.bind(this),this._onMouseDown=ev.bind(this),this._onMouseMove=tv.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=lv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=kt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(h0),this.update(),this.state=kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Gi.copy(t).sub(this.target),Gi.applyQuaternion(this._quat),this._spherical.setFromVector3(Gi),this.autoRotate&&this.state===kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Gi.setFromSpherical(this._spherical),Gi.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gi),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Gi.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new S(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new S(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Gi.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oh.origin.copy(this.object.position),oh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oh.direction))<Jy?this.object.lookAt(this.target):(u0.setFromNormalAndCoplanarPoint(this.object.up,this.target),oh.intersectPlane(u0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Uu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uu||this._lastTargetPosition.distanceToSquared(this.target)>Uu?(this.dispatchEvent(h0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gi.setFromMatrixColumn(t,0),Gi.multiplyScalar(-e),this._panOffset.add(Gi)}_panUp(e,t){this.screenSpacePanning===!0?Gi.setFromMatrixColumn(t,1):(Gi.setFromMatrixColumn(t,0),Gi.crossVectors(this.object.up,Gi)),Gi.multiplyScalar(e),this._panOffset.add(Gi)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Gi.copy(r).sub(this.target);let s=Gi.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Ky(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Qy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(f0),this.state=kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ev(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=kt.DOLLY;break;case us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=kt.ROTATE}break;case us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=kt.PAN}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Fu)}function tv(n){switch(this.state){case kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iv(n){this.enabled===!1||this.enableZoom===!1||this.state!==kt.NONE||(n.preventDefault(),this.dispatchEvent(Fu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(f0))}function nv(n){this.enabled!==!1&&this._handleKeyDown(n)}function rv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1){this.state=kt.NONE;break}this._handleTouchStartRotate(n),this.state=kt.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1){this.state=kt.NONE;break}this._handleTouchStartPan(n),this.state=kt.TOUCH_PAN;break;default:this.state=kt.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=kt.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=kt.TOUCH_DOLLY_ROTATE;break;default:this.state=kt.NONE}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Fu)}function sv(n){switch(this._trackPointer(n),this.state){case kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=kt.NONE}}function ov(n){this.enabled!==!1&&n.preventDefault()}function av(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var jo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cv=new dr(-1,1,1,-1,0,1),Ou=class extends Je{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}},hv=new Ou,rs=class{constructor(e){this._mesh=new ht(hv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var lh=class extends Nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ur.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ll=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},ch=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var hh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lh(jo),this.copyPass.material.blending=Gn,this.timer=new Zo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ll!==void 0&&(o instanceof Ll?i=!0:o instanceof ch&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uh=class extends Nn{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var d0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qo=class n extends Nn{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(s,o,{type:ai,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new jt(s,o,{type:ai,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new jt(s,o,{type:ai,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=d0;this.highPassUniforms=ur.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ur.clone(jo.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader,premultipliedAlpha:!0,blending:Zn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new li,this._fsQuad=new rs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ie(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let r=[],s=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new Zt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Qo.BlurDirectionX=new ie(1,0);Qo.BlurDirectionY=new ie(0,1);var Dl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fh=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ur.clone(Dl.uniforms),this.material=new Kr({name:Dl.name,uniforms:this.uniforms,vertexShader:Dl.vertexShader,fragmentShader:Dl.fragmentShader}),this._fsQuad=new rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ys?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$s?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ks?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===js?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Js&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Bl=[{k:"google",n:"Google, every product",d:"3.2 quadrillion tokens a month, May 2026",v:32e14/30},{k:"api",n:"Google\u2019s API alone",d:"Nearly 32 billion tokens a minute, Oct 2026",v:32e9*1440},{k:"billion",n:"A billion people, one answer each",d:"1,000 tokens apiece, every day. My scenario",v:1e12},{k:"agent",n:"One heavy coding agent",d:"50 million tokens a day. My scenario",v:5e7}],na=[{k:"h100",n:"H100",sys:"DGX H100: 8 GPUs, 10.2 kW",kw:10.2/8,rack:32,rackNote:"4 servers a rack",thr:2e3,led:6990079,thrNote:"My estimate. NVIDIA puts B200 at more than 4\xD7 H200 on Llama 3.3 70B, and H100 is no faster than H200."},{k:"b200",n:"B200",sys:"DGX B200: 8 GPUs, about 14.3 kW",kw:14.3/8,rack:32,rackNote:"4 servers a rack",thr:1e4,led:9300191,thrNote:"NVIDIA, InferenceMAX: Llama 3.3 70B at 50 tokens a second per user."},{k:"gb200",n:"GB200 NVL72",sys:"72 GPUs in one rack, about 120 kW",kw:120/72,rack:72,rackNote:"72 GPUs a rack",thr:1e4,led:4183752,thrNote:"My estimate, from NVIDIA\u2019s 4\xD7 per-GPU throughput over H200."},{k:"gb300",n:"GB300 NVL72",sys:"72 GPUs in one rack, 132\u2013140 kW",kw:136/72,rack:72,rackNote:"72 GPUs a rack",thr:15e3,led:6285496,thrNote:"My estimate, from NVIDIA\u2019s 1.5\xD7 over GB200."}],Vu=[{k:"7ha",n:"Gas turbine",m:"GE Vernova 7HA.03",sing:"GE Vernova 7HA.03 gas turbine",plur:"GE Vernova 7HA.03 gas turbines",one:"turbine",many:"turbines",mw:430,shape:"turbine",gas:!0,link:["molecules","Molecules are easy. Machines are hard."],nudge:"The gas is the easy part. The wait is for a turbine slot."},{k:"lm6000",n:"Aeroderivative",m:"GE Vernova LM6000PF+",sing:"GE Vernova LM6000 turbine",plur:"GE Vernova LM6000 turbines",one:"turbine",many:"turbines",mw:56.9,shape:"aero",gas:!0,link:["molecules","Molecules are easy. Machines are hard."],nudge:"Smaller units, more of them, same gas."},{k:"bloom",n:"Fuel cells",m:"Bloom Energy Server",sing:"Bloom Energy Server",plur:"Bloom Energy Servers",one:"Energy Server",many:"Energy Servers",mw:.325,shape:"cell",gas:!0,link:["bloom","The power plant that ships like a server."],nudge:"Each one is a 325 kW box that ships like a server and skips the turbine queue."},{k:"ap1000",n:"Reactor",m:"Westinghouse AP1000",sing:"Westinghouse AP1000 reactor",plur:"Westinghouse AP1000 reactors",one:"reactor",many:"reactors",mw:1117,shape:"reactor",probe:"Nuclear is the 2030s answer to a 2020s problem.",nudge:"Restarts land this decade. Most new reactors land in the next one."}],uv=[{v:2400,t:"H200 \xB7 Llama 70B"},{v:1e4,t:"B200 \xB7 Llama 70B"},{v:3e4,t:"B200 \xB7 gpt-oss"},{v:6e4,t:"B200 peak"}],fv=1200,p0=6,m0=17,ph=Math.log10(500),zu=5,Vs=(n,e)=>n.find(t=>t.k===e)||n[0],g0={t:Bl[0].v,chip:"gb200",thr:1e4,u:.5,pue:1.09,src:"7ha",preset:"google"};function dv(n){let e=Vs(na,n.chip),t=Vs(Vu,n.src),i=n.t/86400,r=i/(n.thr*n.u),s=r/e.rack,o=r*e.kw/1e3,a=o*n.pue,l=a/t.mw,c=Math.max(1,Math.ceil(l-1e-9)),h=e.kw*1e3*n.pue/(n.thr*n.u);return{c:e,p:t,tps:i,chips:r,racks:s,itMW:o,facMW:a,units:l,build:c,jTok:h,whAnswer:h*1e3/3600,abilene:a/fv,halls:s<1?0:Math.ceil(s/Ul),many:l>=1}}var bt={w:.6,d:1.2,h:2.3},ku=40,x0=16,Ul=ku*2*x0,ea=3,dh=3,Nl=1,pv=1.2,ir=7,Un=10,Xn=3.4,mv=[[1e15,"quadrillion"],[1e12,"trillion"],[1e9,"billion"],[1e6,"million"],[1e3,"thousand"]],ii=(n,e=3)=>{if(n===0)return"0";let t=Math.max(0,e-1-Math.floor(Math.log10(Math.abs(n)))),i=Math.min(t,Math.abs(n)<1?8:2);return(+n.toFixed(i)).toLocaleString("en-US",{maximumFractionDigits:i})},as=(n,e=3)=>{for(let[t,i]of mv)if(n>=t*.9995&&(t>=1e6||n<1e6))return t===1e3?Math.round(n).toLocaleString("en-US"):`${ii(n/t,e)} ${i}`;return ii(n,e)},ss=n=>n>=1e6?as(n):n>=10?Math.round(n).toLocaleString("en-US"):ii(n,2),Fn=n=>n>=1e3?`${ii(n/1e3)} GW`:n>=1?`${ii(n)} MW`:n>=.001?`${ii(n*1e3)} kW`:`${ii(n*1e6)} W`,mh=n=>n>=1?`${ii(n)} J`:`${ii(n*1e3)} mJ`,_0=n=>n>=1?`${ii(n)} Wh`:`${ii(n*1e3)} mWh`,Gu=n=>`${Math.round(n*100)}%`,on=n=>Math.round(n).toLocaleString("en-US"),Gs=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ia=n=>n.many?on(n.build):n.units>=.01?`${Math.round(n.units*100)}%`:`${ii(n.units*100,2)}%`,gv=n=>n.many?`${n.build===1?n.p.sing:n.p.plur} to build`:`of one ${n.p.sing}`;function xv(){let n=new URLSearchParams(location.search),e={...g0},t=(a,l,c)=>{let h=parseFloat(n.get(a));return isFinite(h)?Math.min(c,Math.max(l,h)):null},i=t("t",10**p0,10**m0);i&&(e.t=i,e.preset=(Bl.find(a=>Math.abs(a.v-i)/a.v<.001)||{}).k||null),n.get("chip")&&na.some(a=>a.k===n.get("chip"))&&(e.chip=n.get("chip"),e.thr=Vs(na,e.chip).thr);let r=t("thr",10**ph,10**zu);r&&(e.thr=r);let s=t("u",10,100);s&&(e.u=s/100);let o=t("pue",1.05,1.6);return o&&(e.pue=o),n.get("src")&&Vu.some(a=>a.k===n.get("src"))&&(e.src=n.get("src")),e}function _v(n){let e=new URLSearchParams({t:n.t.toPrecision(4).replace("e+","e"),chip:n.chip,thr:Math.round(n.thr),u:Math.round(n.u*100),pue:n.pue.toFixed(2),src:n.src});try{history.replaceState(null,"",`${location.pathname}?${e}${location.hash}`)}catch{}}var os=[{k:"token",n:"Token",name:"One token",tone:"c"},{k:"rack",n:"Rack",name:"One rack",tone:"c"},{k:"hall",n:"Hall",name:"The hall",tone:"c"},{k:"campus",n:"Campus",name:"The campus",tone:"p"},{k:"power",n:"Power",name:"The power",tone:"p"},{k:"all",n:"All",name:"All of it",tone:"p"}];function yv(n,e,t){let i=e.c,r=e.p;if(n==="token")return{big:mh(e.jTok),txt:`What one token costs at the wall, counting the chip, its share of the server and the cooling. A 1,000-token answer is ${_0(e.whAnswer)}. Google measured 0.24 Wh for its median prompt.`};if(n==="rack"){let s=e.racks<1?` This load keeps ${ii(e.chips,2)} of its ${i.rack} GPUs busy, lit here.`:"";return{big:`${ii(i.kw*i.rack,3)} kW`,txt:`One ${i.n} rack, ${i.rack} GPUs. At ${on(t.thr)} tokens a second each and ${Gu(t.u)} load, it serves ${as(t.thr*t.u*i.rack)} tokens a second.${s}`}}if(n==="hall")return e.racks<1?{big:`${ii(e.racks,2)} racks`,txt:`Less than one rack: the work of ${ii(e.chips,2)} chips. A hall like the one behind it holds ${on(Ul)} racks.`}:{big:`${ss(e.racks)} racks`,txt:`${ss(e.chips)} chips. A hall like this holds ${on(Ul)} racks, so this load ${e.halls===1?"fits in one":`fills ${on(e.halls)}`}.`};if(n==="campus"){let s=e.abilene>=.01?`${ii(e.abilene,2)}\xD7 Stargate Abilene, planned at 1.2 GW.`:"Under 1% of Stargate Abilene, planned at 1.2 GW.";return{big:Fn(e.facMW),txt:`${Fn(e.itMW)} for the chips, plus ${Math.round((t.pue-1)*100)}% for cooling and losses. ${s}`}}if(n==="power"){let s=e.many?`${Fn(e.facMW)} of load is ${ii(e.units,3)} ${e.units===1?r.one:r.many} at full output, so you build ${on(e.build)}.`:`${Fn(e.facMW)} of load, a sliver of one ${r.one}.`;return{big:ia(e),txt:`${s} ${r.nudge}`}}return{big:ia(e),txt:`${as(t.t)} tokens a day \u2192 ${ss(e.chips)} chips \u2192 ${ss(e.racks)} racks \u2192 ${Fn(e.facMW)} \u2192 ${ia(e)} ${e.many?e.build===1?r.one:r.many:`of one ${r.one}`}.`}}var Ot=(n,e=document)=>e.querySelector(n),Dr=(n,e=document)=>[...e.querySelectorAll(n)],Gt=xv(),y0=Ot("#panel");y0.innerHTML=`
  <section class="ctl">
    <div class="ctl-h"><h3>Tokens served a day</h3><output id="oT"></output></div>
    <input type="range" id="rT" min="${p0}" max="${m0}" step="0.01" aria-label="Tokens served a day, on a log scale">
    <div class="scale"><span>1 million</span><span>1 trillion</span><span>100 quadrillion</span></div>
    <div class="presets" role="group" aria-label="Scenarios">${Bl.map(n=>`<button type="button" data-k="${n.k}"><b>${n.n}</b><small>${n.d}</small></button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Chip</h3><output id="oC"></output></div>
    <div class="seg" role="group" aria-label="Chip">${na.map(n=>`<button type="button" data-k="${n.k}">${n.n}</button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Tokens a second, per chip</h3><output id="oThr"></output></div>
    <div class="rail-wrap"><input type="range" id="rThr" min="${ph}" max="${zu}" step="0.005" aria-label="Tokens a second each chip serves">
      <div class="ticks" aria-hidden="true">${uv.map((n,e)=>`<i class="${e%2?"lo":""}" style="left:${((Math.log10(n.v)-ph)/(zu-ph)*100).toFixed(2)}%"><span>${n.t}</span></i>`).join("")}</div></div>
    <p class="note" id="nThr"></p>
  </section>
  <section class="ctl two">
    <div><div class="ctl-h"><h3>Average load</h3><output id="oU"></output></div>
      <input type="range" id="rU" min="10" max="100" step="1" aria-label="Average share of capacity in use">
      <p class="note">My assumption. Fleets are built for the peak, not the average.</p></div>
    <div><div class="ctl-h"><h3>Cooling overhead (PUE)</h3><output id="oP"></output></div>
      <input type="range" id="rP" min="1.05" max="1.6" step="0.01" aria-label="Power usage effectiveness">
      <p class="note">Google\u2019s fleet averaged 1.09 in 2025. Newer liquid-cooled sites run 1.1 to 1.3.</p></div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Power it with</h3></div>
    <div class="srcs" role="group" aria-label="Power source">${Vu.map(n=>`<button type="button" data-k="${n.k}"><b>${n.n}</b><small>${n.m} \xB7 ${Fn(n.mw)}</small></button>`).join("")}</div>
    <p class="note" id="nSrc"></p>
  </section>
  <section class="bom" aria-labelledby="bomH">
    <h3 id="bomH">The bill of materials</h3>
    <ol id="bom"></ol>
  </section>
  <div class="acts"><button type="button" id="share">Copy a link to this scenario</button><button type="button" id="reset" class="quiet">Reset</button></div>`;var gh=Ot("#rT"),xh=Ot("#rThr"),_h=Ot("#rU"),yh=Ot("#rP"),nr="all";function vv(){gh.value=Math.log10(Gt.t),xh.value=Math.log10(Gt.thr),_h.value=Math.round(Gt.u*100),yh.value=Gt.pue,Dr(".presets button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===Gt.preset))),Dr(".seg button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===Gt.chip))),Dr(".srcs button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===Gt.src))),[gh,xh,_h,yh].forEach(n=>n.style.setProperty("--f",`${((n.value-n.min)/(n.max-n.min)*100).toFixed(2)}%`))}var Hu=null;function ta(n){let e=Hu,t=os.find(a=>a.k===n),i=os.indexOf(t),{big:r,txt:s}=yv(n,e,Gt);Ot("#card").classList.toggle("pw",t.tone==="p"),Ot("#cNo").textContent=`${i+1} of ${os.length}`,Ot("#cName").textContent=t.name,Ot("#cBig").textContent=r,Ot("#cTxt").textContent=s,Dr("#chaps button").forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.k===n)))}function v0(){let n=dv(Gt),e=n.c,t=n.p;Hu=n,Ot("#oT").textContent=as(Gt.t),Ot("#oC").textContent=e.sys,Ot("#oThr").textContent=on(Gt.thr);let i=Math.abs(Gt.thr-e.thr)/e.thr<.01;Ot("#nThr").innerHTML=i?Gs(e.thrNote):`You\u2019ve set your own number. <button type="button" class="link" id="bench">Use the ${Gs(e.n)} default (${on(e.thr)})</button>`,Ot("#oU").textContent=Gu(Gt.u),Ot("#oP").textContent=Gt.pue.toFixed(2),Ot("#nSrc").innerHTML=t.link?`Ties to my thesis <a href="../#${t.link[0]}">${Gs(t.link[1])}</a>`:`A thesis I\u2019m still testing: <em>${Gs(t.probe)}</em>`,Ot("#aBig").textContent=ia(n),Ot("#aWhat").textContent=gv(n);let r=[["Tokens a day",as(Gt.t),Gt.preset?Vs(Bl,Gt.preset).n:"Your number"],["Tokens a second",as(n.tps),"\xF7 86,400 seconds"],["Chips",ss(n.chips),`\xF7 (${on(Gt.thr)} a second \xD7 ${Gu(Gt.u)} load)`],["Racks",ss(n.racks),`\xF7 ${e.rack} GPUs a rack (${e.rackNote.replace(/ a rack$/,"")})`],["IT power",Fn(n.itMW),`\xD7 ${ii(e.kw,3)} kW a chip, with its share of the server`],["Facility power",Fn(n.facMW),`\xD7 ${Gt.pue.toFixed(2)} PUE for cooling and losses`],[t.many[0].toUpperCase()+t.many.slice(1),n.many?`${ii(n.units,3)} \u2192 build ${on(n.build)}`:`${ii(n.units,2)} of one`,`\xF7 ${Fn(t.mw)} each`],["Per token, at the wall",mh(n.jTok),`A 1,000-token answer: ${_0(n.whAnswer)}. Google measured 0.24 Wh for its median prompt.`],["Against Abilene",n.abilene>=.01?`${ii(n.abilene,2)}\xD7`:"under 1%","Stargate Abilene is planned at 1.2 GW"]];Ot("#bom").innerHTML=r.map(([s,o,a],l)=>`<li style="--i:${l}"><span class="k">${Gs(s)}</span><b>${Gs(o)}</b><span class="n">${Gs(a)}</span></li>`).join(""),vv(),_v(Gt),ta(nr),rr&&rr.update(n,Gt)}var Nr=(n,e)=>{Object.assign(Gt,n),v0(),rr&&rr.settle(e)};gh.addEventListener("input",()=>Nr({t:10**+gh.value,preset:null}));xh.addEventListener("input",()=>Nr({thr:10**+xh.value}));_h.addEventListener("input",()=>Nr({u:+_h.value/100}));yh.addEventListener("input",()=>Nr({pue:+yh.value}));Dr(".presets button").forEach(n=>n.addEventListener("click",()=>Nr({t:Vs(Bl,n.dataset.k).v,preset:n.dataset.k},!0)));Dr(".seg button").forEach(n=>n.addEventListener("click",()=>Nr({chip:n.dataset.k,thr:Vs(na,n.dataset.k).thr},!0)));Dr(".srcs button").forEach(n=>n.addEventListener("click",()=>Nr({src:n.dataset.k},!0)));y0.addEventListener("click",n=>{n.target.closest("#bench")&&Nr({thr:Vs(na,Gt.chip).thr})});Ot("#reset").addEventListener("click",()=>Nr({...g0},!0));Ot("#share").addEventListener("click",async()=>{let n=Ot("#share");try{await navigator.clipboard.writeText(location.href),n.textContent="Link copied"}catch{n.textContent="Copy the address bar to share"}setTimeout(()=>{n.textContent="Copy a link to this scenario"},2200)});var Fl=()=>matchMedia("(min-width: 1180px)").matches,M0=Ot("#tune");function vh(n){document.body.classList.toggle("open",n),M0.setAttribute("aria-expanded",String(n)),rr&&rr.frameSide()}M0.addEventListener("click",()=>vh(!document.body.classList.contains("open")));Ot("#close").addEventListener("click",()=>vh(!1));addEventListener("keydown",n=>{n.key==="Escape"&&document.body.classList.contains("open")&&!Fl()&&vh(!1)});Ot("#chaps").innerHTML=os.map(n=>`<button type="button" data-k="${n.k}" aria-pressed="false">${n.n}</button>`).join("");function Ol(n){nr=n,ta(n),rr&&rr.visit(n),!Fl()&&document.body.classList.contains("open")&&vh(!1)}Dr("#chaps button").forEach(n=>n.addEventListener("click",()=>Ol(n.dataset.k)));addEventListener("keydown",n=>{if(n.target.closest&&n.target.closest("input, textarea, select"))return;let e=os.findIndex(t=>t.k===nr);(n.key==="ArrowRight"||n.key==="]")&&(n.preventDefault(),Ol(os[Math.min(os.length-1,e+1)].k)),(n.key==="ArrowLeft"||n.key==="[")&&(n.preventDefault(),Ol(os[Math.max(0,e-1)].k))});var Bu=["\u2581the","\u2581power","ing","\u2581of","\u2581AI","token","\u2581a","?","\u2581MW","ine","\u2581turb","\u2581chip","\u2581rack","GPU","\u2581is","s","\u2581to","42","\u2581answer","ed","\u2581heat","\u2581grid","\u2581gas","\u2581watt","{","}","def","=>","\u2581hello","\u2581why","\u2581and","\u2581model","\u2581data","er","\u2581build","\u2581slot","\u2581fuel","\u2581cell","\u2581DC","\u2581kW","...","\u2581it","\u2581in","\u2581we","\u2581you","ly","\u2581not","\u2581new","\u2581fast","\u2581cool","\u2581air","\u2581light","\u2581code","\u2581line","\u2581Echo","##","\u2581world","\u2581time","\u2581up","\u2581out","\u2581for","\u2581next","\u2581yes","!"],qn=matchMedia("(prefers-reduced-motion: reduce)").matches,Ji=matchMedia("(max-width: 760px)").matches,rr=null;Fl()&&document.body.classList.add("open");try{rr=Mv()}catch{document.body.classList.add("no-gl")}v0();rr?rr.start():document.body.classList.remove("intro");function Mv(){let n=Ot("#stage"),e=Ot("#cv"),t=new Il({canvas:e,antialias:!0,powerPreference:"high-performance"});if(!t.capabilities.isWebGL2)throw new Error("WebGL 2 is needed");let i=Math.min(devicePixelRatio||1,Ji?1.6:1.75);t.setPixelRatio(i),t.toneMapping=zr,t.toneMappingExposure=1.08,t.outputColorSpace=Xi;let r=new vo;r.background=new de(264723),r.fog=new yo(1124925,4e-4);let s=new pi(40,1,.05,8e4),o=new ah(s,e);o.enableDamping=!0,o.dampingFactor=.075,o.enablePan=!1,o.maxPolarAngle=Math.PI*.485,o.minDistance=1.2,o.maxDistance=14e3,o.zoomSpeed=.9,o.rotateSpeed=.5,o.autoRotateSpeed=.22;let a=null,l=null;try{a=new hh(t,new jt(4,4,{type:ai,samples:Ji?0:4})),a.addPass(new uh(r,s)),l=new Qo(new ie(256,256),.6,.5,.95),a.addPass(l),a.addPass(new fh)}catch{a=null}let c=(M,y,E={})=>new Zt({vertexShader:M,fragmentShader:y,depthWrite:!1,depthTest:!1,fog:!1,...E}),h=new de(1456720),d=new de(1124925),u=new ht(new hr(100,48,24),c("varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }",`uniform vec3 top, mid, hor, warm, wdir; varying vec3 vD;
     void main(){ vec3 d = normalize(vD); float h = d.y;
       vec3 c = mix(hor, mid, smoothstep(-.01, .14, h)); c = mix(c, top, smoothstep(.1, .7, h));
       float w = pow(max(dot(normalize(vec3(d.x, 0., d.z) + 1e-5), wdir), 0.), 4.) * (1. - smoothstep(-.02, .2, h));
       c += warm * w * .2; if (h < -.01) c = hor * .7;
       gl_FragColor = vec4(c, 1.); }`,{side:ci,uniforms:{top:{value:new de(132363)},mid:{value:new de(464682)},hor:{value:h},warm:{value:new de(16029562)},wdir:{value:new S(-1,0,-.4).normalize()}}}));u.renderOrder=-10,u.frustumCulled=!1,r.add(u);let f=new Je,g=[],b=[];for(let M=0;M<(Ji?900:1800);M++){let y=Math.random()*2-1,E=Math.random()*Math.PI*2,L=.03+Math.pow(Math.random(),.7)*.97,H=Math.sqrt(1-L*L);g.push(Math.cos(E)*H*95,L*95,Math.sin(E)*H*95),b.push(.6+Math.pow(Math.random(),6)*2.4)}f.setAttribute("position",new Be(g,3)),f.setAttribute("aS",new Be(b,1));let m=new Jr(f,c("attribute float aS; uniform float pr; varying float vA; void main(){ vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; gl_PointSize = aS * pr; vA = clamp(aS / 2.6, .15, 1.) * smoothstep(.0, .25, normalize(position).y); }","varying float vA; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vec3(.72, .82, .95) * vA * (1. - d * 1.6), 1.); }",{blending:Zn,uniforms:{pr:{value:i}}}));m.renderOrder=-9,m.frustumCulled=!1,r.add(m);let p=new Je,w=[],P=[],A=240;for(let M=0;M<=A;M++){let y=M/A*Math.PI*2,E=.9+Math.sin(y*3+1)*.7+Math.sin(y*7.3)*.45+Math.sin(y*17.1+2)*.22+Math.max(0,Math.sin(y*1.7-.6))*1.6;if(w.push(Math.cos(y)*92,-1,Math.sin(y)*92,Math.cos(y)*92,Math.max(.25,E),Math.sin(y)*92),M<A){let L=M*2;P.push(L,L+1,L+2,L+1,L+3,L+2)}}p.setAttribute("position",new Be(w,3)),p.setIndex(P);let I=new ht(p,c("varying float vY; void main(){ vY = position.y; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }","uniform vec3 c0, c1; varying float vY; void main(){ gl_FragColor = vec4(mix(c0, c1, smoothstep(-1., 3.5, vY)), 1.); }",{side:Hi,uniforms:{c0:{value:new de(860722)},c1:{value:new de(529956)}}}));I.renderOrder=-8,I.frustumCulled=!1,r.add(I);let C=new Je,x=[],T=[];[[.35,40],[1.9,26],[2.8,60],[4.1,18],[5.3,34]].forEach(([M,y])=>{for(let E=0;E<y;E++){let L=M+(Math.random()-.5)*.09;x.push(Math.cos(L)*90,.05+Math.random()*.5,Math.sin(L)*90),T.push(.8+Math.random()*1.6)}}),C.setAttribute("position",new Be(x,3)),C.setAttribute("aS",new Be(T,1));let B=new Jr(C,c("attribute float aS; uniform float pr; varying float vA; void main(){ vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; gl_PointSize = aS * pr; vA = aS / 2.4; }","varying float vA; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vec3(1., .78, .6) * vA * (1. - d * 1.8), 1.); }",{blending:Zn,uniforms:{pr:{value:i}}}));B.renderOrder=-7,B.frustumCulled=!1,r.add(B);let N=new Zt({uniforms:{base:{value:new de(463132)},lineC:{value:new de(4183752)},fogC:{value:d},fogD:{value:4e-4}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 base, lineC, fogC; uniform float fogD; varying vec3 vW;
      float gl(vec2 p, float s){ vec2 q = p / s; vec2 fw = max(fwidth(q), vec2(1e-5)); vec2 g = abs(fract(q - .5) - .5) / fw;
        float l = 1. - min(min(g.x, g.y), 1.); return l * (1. - smoothstep(.12, .4, max(fw.x, fw.y))); }
      void main(){ vec2 p = vW.xz; float a = gl(p, 1.) * .03 + gl(p, 10.) * .045 + gl(p, 100.) * .085 + gl(p, 1000.) * .1;
        vec3 c = base + lineC * a; float d = distance(vW, cameraPosition); float f = 1. - exp(-pow(fogD * d, 2.));
        gl_FragColor = vec4(mix(c, fogC, clamp(f, 0., 1.)), 1.); }`}),G=new ht(new cr(6e4,6e4),N);G.rotation.x=-Math.PI/2,G.renderOrder=-5,r.add(G),r.add(new Xo(5997224,329742,1.25));let W=new ks(12769004,1.9);W.position.set(-.55,1,.5),r.add(W);let Q=new ks(4183752,.55);Q.position.set(.9,.35,-1),r.add(Q);let U=new zs(4183752,0,0,2);r.add(U);let ee=new zs(16029562,0,0,2);r.add(ee);let J=(M,y={})=>new Rr({color:M,roughness:.82,metalness:.15,...y}),Z=(M,y,E={})=>new li({color:new de(M).multiplyScalar(y),...E}),z={pad:J(924201,{roughness:.95}),road:J(1253940,{roughness:.9}),gravel:J(1055786,{roughness:1}),wall:J(1584196),roof:J(1188666),floor:J(858666,{roughness:.6,metalness:.35}),gallery:J(1781576),rack:J(726304,{roughness:.4,metalness:.7}),chiller:J(2242383,{metalness:.45,roughness:.6}),steel:J(2505814,{metalness:.65,roughness:.45}),dark:J(1055787,{metalness:.5,roughness:.5}),stack:J(4281966,{metalness:.5,roughness:.6}),concrete:J(8293532,{roughness:.95}),tower:J(7043723,{roughness:.95,side:Hi}),hall2:J(2768471),cell:J(8820653,{roughness:.5,metalness:.35}),person:J(7307926,{roughness:.8}),truck:J(3360863,{metalness:.4,roughness:.5}),teal:Z(4183752,2.4),tealDim:Z(4183752,.75),busGlow:Z(16029562,.32),lamp:Z(16769736,1.9),beacon:Z(16029562,3),coral:Z(16029562,2.8),coralDim:Z(16029562,.7),blue:Z(6990079,2.2),off:Z(1714746,1),ghost:new Rr({color:3822966,transparent:!0,opacity:.14,depthWrite:!1,roughness:1}),ghostRoof:new Rr({color:4183752,transparent:!0,opacity:.035,depthWrite:!1,roughness:1,side:Hi})},j={teal:new ei({color:new de(4183752).multiplyScalar(1.3),transparent:!0,opacity:.55}),tealFaint:new ei({color:4183752,transparent:!0,opacity:.22}),coral:new ei({color:new de(16029562).multiplyScalar(1.2),transparent:!0,opacity:.7}),wire:new ei({color:10466244,transparent:!0,opacity:.55}),steel:new ei({color:7308960,transparent:!0,opacity:.8}),field:new ei({color:12570846,transparent:!0,opacity:.32}),ghost:new ei({color:new de(16029562).multiplyScalar(1.1),transparent:!0,opacity:.55})},V={box:new $i(1,1,1),cyl:new Ns(1,1,1,28,1),cylOpen:new Ns(1,1,1,36,1,!0),ball:new hr(1,14,10)};V.box.translate(0,.5,0),V.cyl.translate(0,.5,0),V.cylOpen.translate(0,.5,0);let pe=new Set([...Object.values(V)]),Ve=new _t;function Ge(M,y,E,L){if(!E.length)return null;let H=new $r(M,y,E.length);return E.forEach(($,ae)=>{Ve.position.set($[0],$[1],$[2]),Ve.rotation.set(0,$[6]||0,0),Ve.scale.set($[3]??1,$[4]??1,$[5]??1),Ve.updateMatrix(),H.setMatrixAt(ae,Ve.matrix)}),H.instanceMatrix.needsUpdate=!0,H.computeBoundingSphere(),H.computeBoundingBox(),L&&L.add(H),H}function re(M,y,E){let L=new Je;L.setAttribute("position",new Be(M,3));let H=new ji(L,y);return E&&E.add(H),H}function Ue(M,y,E,L,H,$,ae){let O=[[y,E,L],[H,E,L],[H,E,ae],[y,E,ae],[y,$,L],[H,$,L],[H,$,ae],[y,$,ae]];[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].forEach(([te,ce])=>M.push(...O[te],...O[ce]))}function We(M){M.traverse(y=>{y.isInstancedMesh&&y.dispose(),y.geometry&&!pe.has(y.geometry)&&y.geometry.dispose()}),M.parent&&M.parent.remove(M)}let tt=(M,y,E,L)=>{let H=document.createElement("canvas");H.width=M,H.height=y,E(H.getContext("2d"),M,y);let $=new Fo(H);return $.anisotropy=4,L&&($.wrapS=$.wrapT=kr),$},ze=tt(64,256,(M,y,E)=>{M.fillStyle="#fff";for(let L=0;L<18;L++){let H=18+L*12.4;M.globalAlpha=L%6===5?.35:1,M.fillRect(8,H,30,3),M.fillRect(44,H,10,3)}M.globalAlpha=.5,M.fillRect(8,6,48,2),M.fillRect(8,E-10,48,2)}),dt=tt(128,128,(M,y)=>{M.fillStyle="#fff",M.globalAlpha=.9,M.fillRect(0,0,y,y),M.globalAlpha=1,M.fillStyle="#c8d4de",M.fillRect(0,0,y,2),M.fillRect(0,0,2,y)},!0),mi=tt(256,256,(M,y,E)=>{M.fillStyle="#fff",M.fillRect(0,0,y,E),M.fillStyle="#aab6c2";for(let L=0;L<y;L+=32)M.fillRect(L,0,3,E);M.fillStyle="#8d9aa8",M.fillRect(0,E*.12,y,E*.06),M.fillRect(0,E*.9,y,E*.02)},!0);z.hallWall=J(1847625),z.hallWall.map=mi;let ot=new li({map:ze,color:new de(4183752).multiplyScalar(1.05),transparent:!0,depthWrite:!1}),Nt={value:1},Ut=document.createElement("canvas");Ut.width=Ut.height=1024;let wt=new Fo(Ut);wt.anisotropy=4;let Si=()=>{let M=Ut.getContext("2d"),y=128;M.clearRect(0,0,1024,1024),M.textAlign="center",M.textBaseline="middle",M.fillStyle="#fff",Bu.forEach((E,L)=>{let H=L%8*y+y/2,$=Math.floor(L/8)*y+y/2,ae=58;M.font=`700 ${ae}px "Big Shoulders Text","Arial Narrow",sans-serif`;let O=M.measureText(E).width;O>y*.88&&(ae*=y*.88/O,M.font=`700 ${ae}px "Big Shoulders Text","Arial Narrow",sans-serif`),M.fillText(E,H,$)}),wt.needsUpdate=!0};Si(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(Si);let ui=(M,y,E)=>new Zt({uniforms:{uScale:Nt,uColor:{value:y},uAtlas:{value:wt}},vertexShader:`attribute float aSize; attribute float aAlpha; attribute float aCell; varying float vA; varying float vCell;
      uniform float uScale; void main(){ vA = aAlpha; vCell = aCell; vec4 mv = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(aSize * uScale / -mv.z, 0., 220.); if (aAlpha < .005) gl_PointSize = 0.; gl_Position = projectionMatrix * mv; }`,fragmentShader:M,transparent:!0,depthWrite:!1,fog:!1,...E}),Qi=`uniform sampler2D uAtlas; uniform vec3 uColor; varying float vA; varying float vCell;
    void main(){ vec2 pc = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y); float cx = mod(vCell, 8.), cy = floor(vCell / 8. + .001);
      vec4 t = texture2D(uAtlas, (vec2(cx, 7. - cy) + pc) / 8.); float a = t.a * vA; if (a < .02) discard; gl_FragColor = vec4(uColor, a); }`,ni="uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - .5) * 2.; float a = pow(max(0., 1. - d), 1.8) * vA; if (a < .004) discard; gl_FragColor = vec4(uColor, a); }";function dn(M,y){let E=new Je,L=new Float32Array(M*3),H=new Float32Array(M),$=new Float32Array(M),ae=new Float32Array(M);E.setAttribute("position",new Be(L,3).setUsage($a)),E.setAttribute("aSize",new Be(H,1).setUsage($a)),E.setAttribute("aAlpha",new Be($,1).setUsage($a)),E.setAttribute("aCell",new Be(ae,1));let O=new Jr(E,y);O.frustumCulled=!1,r.add(O);let te=Array.from({length:M},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,age:1,life:1,s0:1,s1:1,a:0}));return{p:O,g:E,st:te,n:M,pos:E.attributes.position.array,size:E.attributes.aSize.array,alpha:E.attributes.aAlpha.array,cell:E.attributes.aCell.array}}let Et=dn(Ji?380:900,ui(Qi,new de(4183752).multiplyScalar(2.1),{blending:Zn}));for(let M=0;M<Et.n;M++)Et.cell[M]=Math.floor(Math.random()*Bu.length);Et.g.attributes.aCell.needsUpdate=!0;let pn=dn(Ji?160:360,ui(ni,new de(16029562).multiplyScalar(.42),{blending:Zn})),mn=dn(Ji?90:200,ui(ni,new de(11123917).multiplyScalar(.5),{}));function an(M,y,E){M.beginPath(),M.moveTo(38,8),M.arcTo(y-8,8,y-8,E-8,30),M.arcTo(y-8,E-8,8,E-8,30),M.arcTo(8,E-8,8,8,30),M.arcTo(8,8,y-8,8,30),M.closePath(),M.fillStyle="rgba(6,16,30,.88)",M.fill(),M.strokeStyle="#3fd6c8",M.lineWidth=7,M.stroke(),M.textAlign="center",M.textBaseline="middle",M.font='800 120px "Big Shoulders Text","Arial Narrow",sans-serif',M.fillStyle="#62798d",M.fillText("\u2581",y/2-128,E/2+8),M.fillStyle="#e9fbf8",M.fillText("power",y/2+22,E/2+8)}let k=tt(512,256,(M,y,E)=>{an(M,y,E)}),bi=new Rs(new Tr({map:k,transparent:!0,depthWrite:!1}));bi.scale.set(.56,.28,1),r.add(bi),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{let M=k.image,y=M.getContext("2d");y.clearRect(0,0,M.width,M.height),an(y,M.width,M.height),k.needsUpdate=!0,Si()});let It=new Yt;{let M=new ht(new Oc(.19,1.14,6,14),z.person);M.position.y=.76,It.add(M);let y=new ht(new hr(.12,16,12),z.person);y.position.y=1.68,It.add(y);let E=new ht(new hr(.135,16,8,0,Math.PI*2,0,Math.PI/2),z.tealDim);E.position.y=1.71,It.add(E)}r.add(It);let fe={},me={campus:null,hero:null,grid:null,plant:null,refs:null},ri={},we={lines:[],m:null,mb:null,list:[]},$e={racks:[],roofs:[],heat:[],steam:[]};function R(M){let y=Math.max(1,Math.min(x0,Math.ceil(M/(ku*2)))),E=Math.min(ku*2,Math.max(1,Math.round(M))),L=Math.ceil(E/2),H=[];for(let ue=0;ue<y;ue++){let Ie=ue>>1,Ke=ue&1;H.push(-(Ie*(2*bt.d+Nl+pv)+Ke*(bt.d+Nl))-bt.d/2)}let $=dh,ae=H[y-1]-bt.d/2-dh,O=($+ae)/2,te=$-ae,ce=L*2*bt.w+ea+2*dh,Pe=[],be=Math.max(1,Math.round(M));for(let ue=0;ue<y&&be>0;ue++){let Ie=Math.min(E,be);be-=Ie;for(let Ke=0;Ke<Ie;Ke++){let xt=Ke<L?0:1,He=xt?Ke-L:Ke;Pe.push({x:xt?ea/2+(He+.5)*bt.w:-ea/2-(He+.5)*bt.w,z:H[ue]-O,face:ue&1?-1:1,line:ue})}}return{racks:Pe,inW:ce,inD:te,lines:y,lineZ:H.map(ue=>ue-O),half:L,w:ce+ir,d:te}}function _(M,y){if(M=Math.max(1,Math.ceil(M)),M<=y)return{k:1,n:M};for(let E=0;E<12;E++)for(let L of[1,2,5]){let H=L*10**E;if(H>1&&Math.ceil(M/H)<=y)return{k:H,n:Math.ceil(M/H)}}return{k:1,n:y}}function q(M){let y=R(Ul),E=M.racks<1?1:Math.min(Ul,Math.ceil(M.racks)),L=M.halls>1?y:R(E),H=_(Math.max(1,M.halls),Ji?64:180),$=M.racks<1?0:H.n,ae=M.halls>1?y.w:L.w,O=M.halls>1?y.d:L.d,te=$<=1?1:Math.ceil(Math.sqrt($*1.5)),ce=$<=1?1:Math.ceil($/te),Pe=ae+26,be=O+30,ue=[];for(let Ke=0;Ke<$;Ke++){let xt=Ke%te,He=ce-1-Math.floor(Ke/te);ue.push({x:(xt-(te-1)/2)*Pe,z:(He-(ce-1)/2)*be})}let Ie=$?{minX:-((te-1)/2)*Pe-ae/2-14,maxX:(te-1)/2*Pe+ae/2+14,minZ:-((ce-1)/2)*be-O/2-14,maxZ:(ce-1)/2*be+O/2+14}:{minX:-6,maxX:6,minZ:-6,maxZ:6};return{full:y,hero:L,nb:$,k:H.k,halls:ue,bw:ae,bd:O,campus:Ie,nHero:E}}function ge(M,y){let E=new Yt;E.name="campus";let L=y.campus;Ge(V.box,z.pad,[[(L.minX+L.maxX)/2,0,(L.minZ+L.maxZ)/2,L.maxX-L.minX,.06,L.maxZ-L.minZ]],E);let H=[],$=[],ae=[],O=[],te=[],ce=[];return $e.roofs=[],y.halls.forEach((Pe,be)=>{let ue=Pe.x-y.bw/2,Ie=Pe.x+y.bw/2,Ke=Pe.z-y.bd/2,xt=Pe.z+y.bd/2;if(be!==0){ae.push([Pe.x,.06,Pe.z,y.bw,Un,y.bd]),O.push([Pe.x,Un-1.4,Pe.z,y.bw+.3,.35,y.bd+.3]),Ue(H,ue,.06,Ke,Ie,Un+.06,xt);for(let He=0;He<2;He++)for(let nt=0;nt<7;nt++)te.push([ue+12+nt*(y.bw-20)/6,Un+.06,Pe.z+(He?1:-1)*y.bd*.22,4,2,2.6]);$e.roofs.push({x0:ue+4,x1:Ie-4,z0:Ke+4,z1:xt-4,y:Un+2})}}),ae.length&&(z.hallWall.map.repeat.set(y.bw/9.6,1),z.hallWall.needsUpdate=!0),Ge(V.box,z.hallWall,ae,E),Ge(V.box,z.tealDim,O,E),Ge(V.box,z.chiller,te,E),H.length&&re(H,j.teal,E),y.nb&&he(E,M,y),E}function he(M,y,E){let L=E.hero,H=E.halls[0],$=y.c,O=H.x-(E.bw-L.w)/2+ir/2,te=H.z,ce=new Yt;ce.position.set(O,0,te),M.add(ce);let Pe=new ht(new $i(L.inW,.2,L.inD),z.floor.clone());Pe.material.map=dt.clone(),Pe.material.map.needsUpdate=!0,Pe.material.map.repeat.set(L.inW/.6,L.inD/.6),Pe.material.color.set(990509),Pe.position.y=.1,ce.add(Pe);let be=.35,ue=L.inW/2,Ie=L.inD/2,Ke=[[0,.2,-Ie-be/2,L.inW+2*be,Xn,be],[ue+be/2,.2,0,be,Xn,L.inD],[-ue-be/2,.2,0,be,Xn,L.inD],[0,.2,Ie+be/2,L.inW+2*be,1.1,be]];Ge(V.box,z.wall,Ke,ce);let xt=[],He=Xn+.21,nt=1.31;xt.push(-ue-be,He,-Ie-be,ue+be,He,-Ie-be,ue+be,He,-Ie-be,ue+be,He,Ie,-ue-be,He,-Ie-be,-ue-be,He,Ie,-ue-be,nt,Ie+be,ue+be,nt,Ie+be,ue+be,He,Ie,ue+be,nt,Ie+be,-ue-be,He,Ie,-ue-be,nt,Ie+be),re(xt,j.teal,ce);let yt=[-ue-be-ir/2+be/2,.2,0,ir-be,Xn,L.inD];Ge(V.box,z.gallery,[yt],ce);let Mt=[];Ue(Mt,-ue-ir,Xn+.2,-Ie,-ue-be,Xn+.2,Ie),re(Mt.slice(0,24),j.coral,ce);let Qe=Math.max(2,Math.round(L.inD/6));Ge(V.box,z.lamp,Array.from({length:Qe},(lt,ft)=>[-ue-be-ir/2,Xn+.2,-Ie+3+ft*(L.inD-6)/(Qe-1),.5,.08,.5]),ce);let Le=[];Ue(Le,-ue-ir,.2,-Ie,ue,Un,Ie),re(Le,j.tealFaint,ce);let et=new ht(new $i(L.inW+ir,Un-Xn,L.inD),z.ghostRoof);et.position.set(-ir/2,Xn+(Un-Xn)/2+.2,0),ce.add(et);let ve=-1;L.racks.forEach((lt,ft)=>{lt.line===0&&lt.x>0&&(ve<0||lt.x<L.racks[ve].x)&&(ve=ft)}),ve<0&&L.racks.forEach((lt,ft)=>{lt.line===0&&(ve<0||lt.x>L.racks[ve].x)&&(ve=ft)});let St=L.racks[ve],_i=[],Ti=[];$e.racks=[],L.racks.forEach((lt,ft)=>{$e.racks.push({x:O+lt.x,z:te+lt.z}),ft!==ve&&(_i.push([lt.x,.2,lt.z,bt.w*.96,bt.h,bt.d]),Ti.push([lt.x,.2+.12,lt.z+lt.face*(bt.d/2+.012),bt.w*.82,bt.h*.9,1,lt.face>0?0:Math.PI]))}),Ge(V.box,z.rack,_i,ce);let Xt=ot.clone();Xt.color=new de($.led).multiplyScalar(1.05);let Fi=new cr(1,1);Fi.translate(0,.5,0);let Pt=Ge(Fi,Xt,Ti,ce);Pt&&(Pt.renderOrder=2),Ge(V.box,z.dark,L.lineZ.map(lt=>[0,3.3,lt,L.half*2*bt.w+ea-.4,.1,.2]),ce),Ge(V.box,z.busGlow,L.lineZ.map(lt=>[0,3.27,lt,L.half*2*bt.w+ea-.4,.03,.05]),ce),Ge(V.box,z.ghost,L.lineZ.filter((lt,ft)=>ft%2===0&&L.lineZ[ft+1]!==void 0).map((lt,ft)=>[0,bt.h+.22,lt-bt.d/2-Nl/2,L.half*2*bt.w+ea,.05,Nl+.1]),ce);let Ct=new Yt;Ct.position.set(St.x,.2,St.z),ce.add(Ct);let Rt=new ht(V.box,z.rack);Rt.scale.set(bt.w,bt.h,bt.d),Ct.add(Rt);let qt=bt.d/2+.006,Bt=y.racks<1?y.chips:1/0,zt=(lt,ft,Jt=.5,Oi=.03)=>{let oi=new ht(V.box,ft);oi.scale.set(Jt,Oi,.012),oi.position.set(0,lt,qt),Ct.add(oi)},$t=Z($.led,1.35),di=z.off;if($.rack===72){let lt=[["p"],["p"],...Array(10).fill(["c"]),...Array(9).fill(["s"]),...Array(8).fill(["c"]),["p"],["p"]],ft=0;lt.forEach(([Jt],Oi)=>{let oi=bt.h-.12-Oi*((bt.h-.24)/(lt.length-1));if(Jt==="c"){let Sh=ft*4<Bt;ft++,zt(oi,Sh?$t:di),zt(oi+.002,Sh?z.lamp:di,.05,.028)}else zt(oi,Jt==="p"?z.coral:z.blue,.5,.022)})}else{for(let lt=0;lt<4;lt++){let ft=.35+lt*.46,Jt=lt*8<Bt,Oi=new ht(V.box,z.dark);Oi.scale.set(.54,.4,.01),Oi.position.set(0,ft,qt-.002),Ct.add(Oi);for(let oi=0;oi<6;oi++)zt(ft+.04+oi*.055,Jt?$t:di,.44,.016)}zt(.12,z.coral),zt(bt.h-.1,z.coral)}fe.heroRack=new S(O+St.x,.2,te+St.z),fe.heroFace=St.face,fe.heroHall={ix:O,iz:te,inW:L.inW,inD:L.inD,racks:L.racks,heroX:St.x,lines:L.lines},fe.hall={c:new S(O-ir/2,0,te),w:L.w,d:L.d},It.position.set(fe.heroRack.x+1.9,.2,fe.heroRack.z+St.face*(bt.d/2+1)),It.rotation.y=-.7,bi.position.set(fe.heroRack.x+.15,2.2,fe.heroRack.z+St.face*(bt.d/2+.55)),U.position.set(O,16,te+6),U.intensity=Math.min(420,2*L.inW*L.inD/10)}function Ae(M,y,E){let L=new Yt;L.name="grid";let H=y.campus,$=y.nb===0,ae=$?10:74,O=$?8:52,te=H.minX-($?16:60)-ae/2,ce=$?fe.heroRack.z:0;fe.sub={c:new S(te,0,ce),w:ae,d:O},Ge(V.box,z.gravel,[[te,0,ce,ae,.05,O]],L);let Pe=[];Ue(Pe,te-ae/2,.05,ce-O/2,te+ae/2,2.4,ce+O/2),re(Pe,j.steel,L);let be=$?1:Math.min(8,Math.max(2,Math.ceil(M.facMW/140)+1)),ue=[],Ie=[],Ke=[],xt=[];for(let Qe=0;Qe<be;Qe++){let Le=$?te:te-ae/2+10+Qe*((ae-20)/Math.max(1,be-1)),et=ce+($?0:6),ve=$?.35:1;ue.push([Le,.05,et,6*ve,4.6*ve,4.4*ve]);for(let St=0;St<5;St++)Ie.push([Le-2.4*ve+St*1.2*ve,.4,et+2.6*ve,.16,3.6*ve,.9*ve]);for(let St=-1;St<=1;St++)Ke.push([Le+St*1.7*ve,4.6*ve,et,.22*ve,2.2*ve,.22*ve]),xt.push([Le+St*1.7*ve,6.8*ve,et,.34*ve,.34*ve,.34*ve])}if(Ge(V.box,z.steel,ue,L),Ge(V.box,z.dark,Ie,L),Ge(V.cyl,z.concrete,Ke,L),Ge(V.ball,z.coral,xt,L),!$){let Qe=[];for(let Le=0;Le<4;Le++){let et=te-ae/2+8+Le*((ae-16)/3);Qe.push(et,0,ce-16,et,16,ce-16,et,16,ce-16,et,16,ce-4,et,0,ce-4,et,16,ce-4)}Qe.push(te-ae/2+8,14,ce-10,te+ae/2-8,14,ce-10),re(Qe,j.steel,L)}let He=[],nt=y.halls.slice(0,Ji?18:48),yt=H.minX+4;nt.forEach((Qe,Le)=>{let et=Qe.x-y.bw/2+(Le===0&&y.nb===1,0)+3,ve=[[te+ae/2,.25,ce-10+Le%5*1.2],[yt-2+Le%5*.8,.25,ce-10+Le%5*1.2],[yt-2+Le%5*.8,.25,Qe.z],[et,.25,Qe.z]];He.push(ve)}),$&&He.push([[te+ae/2,.25,ce],[fe.heroRack.x,.25,ce]]);let Mt=[];if(He.forEach(Qe=>{for(let Le=0;Le<Qe.length-1;Le++)Mt.push(...Qe[Le],...Qe[Le+1])}),re(Mt,j.coral,L),we.lines=[],Ee(M)){let Qe=[];for(let Le=-1;Le<=1;Le++){let et=[new S(E.maxX-4,.3,ce+Le*1.6),new S(te-ae/2,.3,ce+Le*1.6)];Qe.push(...et[0].toArray(),...et[1].toArray()),we.lines.push({pts:et,kind:"p",r:.7})}re(Qe,j.coral,L),fe.line=null}else{let Qe=new S(E.maxX+6,0,0),Le=new S(te-ae/2-4,0,ce),et=Qe.distanceTo(Le),ve=Math.max(2,Math.round(et/140)+1),St=[],_i=[],Ti=(Pt,Ct,Rt)=>{let $t=[0,9,18,27,34,38],di=ft=>4.2+(1.1-4.2)*Math.min(1,ft/34),lt=ft=>{let Jt=ft>=34?.77:di(ft);return[[Pt-Jt,ft,Ct-Jt],[Pt+Jt,ft,Ct-Jt],[Pt+Jt,ft,Ct+Jt],[Pt-Jt,ft,Ct+Jt]]};for(let ft=0;ft<$t.length-1;ft++){let Jt=lt($t[ft]),Oi=lt($t[ft+1]);for(let oi=0;oi<4;oi++)Rt.push(...Jt[oi],...Oi[oi],...Jt[oi],...Jt[(oi+1)%4],...Jt[oi],...Oi[(oi+1)%4],...Jt[(oi+1)%4],...Oi[oi])}Rt.push(Pt,34,Ct-9,Pt,34,Ct+9,Pt,34,Ct-9,Pt,30,Ct-2.5,Pt,34,Ct+9,Pt,30,Ct+2.5,Pt,38,Ct,Pt,34,Ct-9,Pt,38,Ct,Pt,34,Ct+9)},Xt=[];for(let Pt=0;Pt<ve;Pt++){let Ct=Pt/(ve-1),Rt=Qe.x+(Le.x-Qe.x)*Ct,qt=Qe.z+(Le.z-Qe.z)*Ct;Ti(Rt,qt,St),Xt.push(new S(Rt,0,qt))}re(St,j.steel,L),Ge(V.ball,z.beacon,Xt.map(Pt=>[Pt.x,38.6,Pt.z,.55,.55,.55]),L),[[34,-8.4],[34,8.4],[38,0]].forEach(([Pt,Ct])=>{let Rt=[];for(let Bt=0;Bt<Xt.length-1;Bt++)for(let zt=0;zt<=16;zt++){let $t=zt/16,di=Xt[Bt].clone().lerp(Xt[Bt+1],$t);Rt.push(new S(di.x,Pt-3.4*4*$t*(1-$t)-.6,di.z+Ct))}let qt=[];for(let Bt=0;Bt<Rt.length-1;Bt++)qt.push(Rt[Bt].x,Rt[Bt].y,Rt[Bt].z,Rt[Bt+1].x,Rt[Bt+1].y,Rt[Bt+1].z);re(qt,j.wire,L),we.lines.push({pts:Rt,kind:"p",r:1.1})}),fe.line=Xt[Math.floor(Xt.length/2)].clone().setY(40)}if(He.slice(0,Ji?8:20).forEach(Qe=>we.lines.push({pts:Qe.map(Le=>new S(...Le)),kind:"p",r:.55})),M.p.gas){let Qe=E.minX-24,Le=-2600,et=(E.minZ+E.maxZ)/2,ve=[new S(Qe,.9,Le),new S(Qe,.9,et-6),new S(Qe+6,.9,et),new S(E.minX+2,.9,et)],St=new ht(new Xc(new Oo(ve,!1,"catmullrom",.05),120,.6,10,!1),z.steel);L.add(St);let _i=[];for(let Ti=Le;Ti<et-10;Ti+=24)_i.push([Qe,0,Ti,.3,.6,1.4]);Ge(V.box,z.dark,_i,L),we.lines.push({pts:ve,kind:"g",r:.75}),fe.gas=new S(Qe,4,Math.max(Le+300,et-420))}else fe.gas=null;return L}let De={turbine:{w:54,d:26,h:40,gx:22,gz:26,cap:120,aspect:1.4},aero:{w:30,d:12,h:18,gx:12,gz:14,cap:300,aspect:1.6},cell:{w:8.9,d:2.4,h:2.2,gx:1.4,gz:2.4,cap:Ji?1400:3600,aspect:1.3},reactor:{w:270,d:230,h:152,gx:60,gz:60,cap:24,aspect:1.5}};function se(M,y){let E=L=>y?L===z.coral||L===z.coralDim||L===z.teal||L===z.tealDim||L===z.lamp?z.coralDim:z.ghost:L;return M==="turbine"?[[V.box,E(z.pad),0,0,0,54,.4,26],[V.box,E(z.steel),-18,.4,0,12,6.5,6.5],[V.box,E(z.dark),-18,.4,9.5,6,5,5],[V.box,E(z.hall2),-2,.4,0,20,9,8],[V.box,E(z.steel),-5,9.4,0,10,8,13],[V.box,E(z.dark),-8,3,0,3,7,3],[V.box,E(z.steel),13,.4,0,8,7.5,7.5],[V.cyl,E(z.stack),21,.4,0,4.4,37,4.4],[V.cylOpen,E(z.dark),21,30,0,4.46,1.2,4.46],[V.cylOpen,E(z.coral),21,37,0,4.48,.9,4.48],[V.box,E(z.coralDim),-2,9.1,0,20.2,.25,8.2],[V.box,E(z.lamp),-12.2,6,4.1,.5,.3,.2],[V.box,E(z.lamp),8.2,6,4.1,.5,.3,.2],[V.box,E(z.lamp),-18,6.6,3.35,.5,.3,.2],[V.box,E(z.lamp),-5,17.5,6.6,.6,.3,.2],[V.box,E(z.lamp),17,7.6,3.85,.5,.3,.2]]:M==="aero"?[[V.box,E(z.pad),0,0,0,30,.3,12],[V.box,E(z.hall2),-2,.3,0,14,5.5,4.6],[V.box,E(z.steel),-6,5.8,0,5,4,5.6],[V.box,E(z.steel),-11.5,.3,0,6,4,4],[V.cyl,E(z.dark),8,.3,0,1.7,16,1.7],[V.cylOpen,E(z.coral),8,16.2,0,1.76,.5,1.76],[V.box,E(z.coralDim),-2,5.75,0,14.2,.18,4.8],[V.box,E(z.lamp),-6,3.6,2.35,.4,.25,.15],[V.box,E(z.lamp),3,3.6,2.35,.4,.25,.15]]:M==="cell"?[[V.box,E(z.cell),0,0,0,8.9,2.1,2.4],[V.box,E(z.tealDim),0,1.72,0,8.94,.1,2.44],[V.box,E(z.dark),0,2.1,0,8.6,.14,2.1]]:[[V.box,E(z.pad),0,0,0,270,.5,230],[V.cyl,E(z.concrete),-80,.5,-40,21.5,58,21.5],[V.ball,E(z.concrete),-80,58.5,-40,21.5,11,21.5],[V.cylOpen,E(z.steel),-80,50,-40,21.8,3.2,21.8],[V.box,E(z.concrete),-80,.5,12,50,30,40],[V.box,E(z.hall2),10,.5,-55,92,36,44],[V.box,E(z.wall),10,.5,-20,60,14,20],[V.box,E(z.coralDim),10,34.6,-32.8,92.2,.5,.2],[V.box,E(z.lamp),-20,12,-32.8,1.2,.5,.2],[V.box,E(z.lamp),40,12,-32.8,1.2,.5,.2]]}let oe=(()=>{let M=[[0,0],[62,0],[52,40],[40,100],[37,118],[38,136],[41,152],[40.4,152],[36.6,136],[35.8,118],[38.8,100],[50.8,40],[60.8,0]].map(([y,E])=>new ie(y,E));return new gl(M,64)})(),Ee=M=>M.p.shape==="cell"||M.facMW<20;function D(M){let y=new Yt;y.name="plant";let E=De[M.p.shape],L=!M.many,H=_(L?1:M.build,E.cap),$=H.n,ae=Math.max(1,Math.ceil(Math.sqrt($*E.aspect*E.d/E.w)));M.p.shape==="cell"&&(ae=Math.max(1,Math.ceil(Math.sqrt($*3.4)))),ae=Math.min($,ae);let O=Math.ceil($/ae),te=M.p.shape==="cell"?8:0,ce=Mt=>{let Qe=Mt%ae;return Qe*(E.w+E.gx)+(te?Math.floor(Qe/10)*te:0)},Pe=Mt=>{let Qe=Math.floor(Mt/ae);return Qe*(E.d+E.gz)+(te?Math.floor(Qe/10)*te:0)},be=ce(ae-1)+E.w,ue=Pe((O-1)*ae)+E.d,Ie=16+(M.p.shape==="reactor"?30:0),Ke=fe.sub.c.x-fe.sub.w/2-(Ee(M)?28:Math.max(260,Math.min(700,(be+ue)*.35))),xt=Ke-be,He=-ue/2,nt={minX:xt-Ie,maxX:Ke+Ie,minZ:He-Ie,maxZ:He+ue+Ie};Ge(V.box,z.gravel,[[(nt.minX+nt.maxX)/2,0,(nt.minZ+nt.maxZ)/2,nt.maxX-nt.minX,.04,nt.maxZ-nt.minZ]],y);let yt=Array.from({length:$},(Mt,Qe)=>[xt+ce(Qe)+E.w/2,He+Pe(Qe)+E.d/2]);if(se(M.p.shape,L).forEach(([Mt,Qe,Le,et,ve,St,_i,Ti])=>{if(Ge(Mt,Qe,yt.map(([Xt,Fi])=>[Xt+Le,et,Fi+ve,St,_i,Ti]),y),L&&Qe===z.ghost){let Xt=new ji(new hl(Mt,25),j.ghost);Xt.position.set(yt[0][0]+Le,et,yt[0][1]+ve),Xt.scale.set(St,_i,Ti),y.add(Xt)}}),$e.heat=[],$e.steam=[],M.p.shape==="reactor"){if(Ge(oe,L?z.ghost:z.tower,yt.map(([Mt,Qe])=>[Mt+75,.5,Qe+55]),y),L){let Mt=new ji(new hl(oe,8),j.ghost);Mt.position.set(yt[0][0]+75,.5,yt[0][1]+55),y.add(Mt)}Ge(V.ball,z.coral,yt.flatMap(([Mt,Qe])=>[0,1,2,3].map(Le=>[Mt+75+Math.cos(Le*1.57)*41,153,Qe+55+Math.sin(Le*1.57)*41,.9,.9,.9])),y),L||yt.slice(0,8).forEach(([Mt,Qe])=>$e.steam.push(new S(Mt+75,150,Qe+55)))}else if(!L&&M.p.shape!=="cell"){let Mt=M.p.shape==="turbine"?21:8,Qe=M.p.shape==="turbine"?38:16.6;yt.slice(0,Ji?10:28).forEach(([Le,et])=>$e.heat.push(new S(Le+Mt,Qe,et)))}return fe.plant={c:new S((nt.minX+nt.maxX)/2,0,(nt.minZ+nt.maxZ)/2),w:nt.maxX-nt.minX,d:nt.maxZ-nt.minZ,h:E.h,k:H.k,n:$},fe.P=nt,ee.position.set(fe.plant.c.x,E.h*1.4,fe.plant.c.z),ee.intensity=L||M.p.shape==="cell"?0:Math.min(24e3,70*Math.sqrt($)*E.h*E.h/10),{g:y,P:nt}}function le(M,y,E){let L=new Yt;L.name="refs";let H=E.maxX-40,$=E.maxZ+10;Ge(V.box,z.truck,[[H,.9,$,13.6,3.1,2.6]],L),Ge(V.box,z.steel,[[H+8.6,.6,$,2.6,3.2,2.5]],L),Ge(V.box,z.dark,[[H+2,0,$,17,.9,2.4]],L),Ge(V.box,z.coral,[[H-6.85,1.3,$+.9,.08,.25,.3],[H-6.85,1.3,$-.9,.08,.25,.3]],L),fe.truck=new S(H+2,4.5,$),fe.truckTop=new S(H-3.5,4,$+.2);let ae=y.campus,O=y.nb?ae.maxX-55-10:ae.maxX+80,te=y.nb?ae.maxZ+52:0,ce=109.7,Pe=48.8,be=[];Ue(be,O-ce/2,.08,te-Pe/2,O+ce/2,.08,te+Pe/2);for(let ue=0;ue<=10;ue++){let Ie=O-45.72+ue*9.144;be.push(Ie,.08,te-Pe/2,Ie,.08,te+Pe/2)}return re(be.slice(0,24).concat(be.slice(72)),j.field,L),fe.field=new S(O,2.5,te),fe.fieldC=y.nb?new S(O,0,te):null,Ge(V.box,z.road,[[(E.maxX+ae.minX)/2,0,(y.nb?ae.maxZ:6)+8,ae.minX-E.maxX+40,.05,7]],L),L}let ne=Ot("#labels"),Me={token:{r:[.8,4.6]},rack:{r:[2.4,60]},person:{r:[2.2,34]},hall:{r:[22,600]},field:{r:[90,1800]},campus:{r:[160,12e3]},flow:{r:[70,12e3]},sub:{r:[60,900]},plant:{r:[90,2e4]},truck:{r:[25,460]},gas:{r:[140,4e3]}};Object.entries(Me).forEach(([M,y])=>{let E=document.createElement("div");E.className=`lb lb-${M}`,ne.appendChild(E),y.el=E,y.p=new S,y.on=!1,y.o=0});function ye(M,y){let E=M.c,L=M.p,H=(ae,O,te)=>{Me[ae].el.innerHTML=O,te&&Me[ae].p.copy(te),Me[ae].on=!!te};H("token",`<b>1 token</b><small>${mh(M.jTok)} at the wall</small>`,bi.position.clone().add(new S(0,.3,0))),H("rack",`<b>${ii(E.kw*E.rack,3)} kW</b><small>one ${E.n} rack, ${E.rack} GPUs</small>`,fe.heroRack.clone().add(new S(-.55,bt.h+.05,fe.heroFace*.3))),H("person","<b>1.8 m</b><small>a person, for scale</small>",It.position.clone().add(new S(0,1.95,0))),H("hall",y.nb?`<b>${ss(M.racks)} racks</b><small>${ss(M.chips)} chips${M.halls>1?` in ${on(M.halls)} halls`:""}</small>`:`<b>${ii(M.chips,2)} chips</b><small>less than one rack</small>`,y.nb?fe.hall.c.clone().add(new S(0,Un+5,0)):fe.heroRack.clone().add(new S(0,4.2,0))),H("campus",`<b>${Fn(M.facMW)}</b><small>${y.k>1?`each hall drawn stands for ${on(y.k)}`:`at the wall, PUE ${Gt.pue.toFixed(2)}`}</small>`,y.nb>1?new S((y.campus.minX+y.campus.maxX)/2,Un+20+(y.campus.maxX-y.campus.minX)*.05,(y.campus.minZ+y.campus.maxZ)/2):null),H("flow",`<b>${as(M.tps)}</b><small>tokens a second, out to the world</small>`,(y.nb?fe.hall.c.clone():fe.heroRack.clone()).add(new S(0,y.nb?70:9,0))),H("field","<b>110 m</b><small>a football field</small>",y.nb?fe.field:null),H("sub",`<b>Substation</b><small>${Fn(M.facMW)} stepped down</small>`,fe.sub.c.clone().add(new S(0,y.nb?20:4,0)));let $=fe.plant;H("plant",M.many?`<b>${on(M.build)} ${M.build===1?L.one:L.many}</b><small>${$.k>1?`each one drawn stands for ${on($.k)}`:`${Fn(M.build*L.mw)} of ${L.m}`}</small>`:`<b>${ia(M)}</b><small>of one ${L.one}, drawn as a ghost</small>`,$.c.clone().add(new S(0,$.h+14+$.w*.03,0))),H("truck","<b>16 m</b><small>a semi-truck</small>",fe.truck),H("gas","<b>Gas in</b><small>the molecules are the easy part</small>",fe.gas)}let Se=new S,je=[],pt=()=>{let M=n.getBoundingClientRect(),y=document.createRange();je=Dr(".title h1, .title .ans, #card, .dock, .console").filter(E=>getComputedStyle(E).visibility!=="hidden").map(E=>{let L;return E.matches("h1, .ans")?(y.selectNodeContents(E),L=y.getBoundingClientRect()):L=E.getBoundingClientRect(),{l:L.left-M.left-8,r:L.right-M.left+8,t:L.top-M.top-6,b:L.bottom-M.top+6}}).filter(E=>E.r>E.l&&E.b>E.t)};function _e(M){Object.values(Me).forEach(y=>{let E=0,L=0,H=0,$=!1;if(y.on){let ae=s.position.distanceTo(y.p);if(Se.copy(y.p).project(s),L=(Se.x+1)/2*Ui,H=(1-Se.y)/2*at,Se.z<1&&ae>y.r[0]&&ae<y.r[1]&&L>-40&&L<Ui+40&&H>20&&H<at){let O=y.el.offsetWidth/2,te=y.el.offsetHeight,ce=(Pe,be)=>je.some(ue=>L+O>ue.l&&L-O<ue.r&&be>ue.t&&Pe<ue.b);ce(H-te,H)?!ce(H,H+te)&&H+te<at-10&&(E=1,$=!0):E=1,E*=Math.min(1,(ae-y.r[0])/(y.r[0]*.5+.01),(y.r[1]-ae)/(y.r[1]*.25))}}if(y.o+=(E-y.o)*Math.min(1,M*7),y.o<.01){y.el.style.opacity!=="0"&&(y.el.style.opacity="0");return}y.el.style.opacity=y.o.toFixed(3),E&&$!==y.flip&&(y.flip=$,y.el.classList.toggle("flip",$)),y.el.style.transform=`translate(-50%,${y.flip?"0":"-100%"}) translate(${L.toFixed(1)}px,${H.toFixed(1)}px)`})}let Oe=(()=>{let M=new Rn(new Uint8Array([86,160,255]),3,1,Gr);M.minFilter=M.magFilter=Kt,M.needsUpdate=!0;let y=(Le,et,ve)=>new zo({color:Le,gradientMap:M,emissive:et,emissiveIntensity:ve}),E={shell:y(9402111,3877534,.42),belly:y(15657976,8222888,.26),feet:y(14274042,4865418,.3),fin:y(8019958,3416975,.42),eye:new li({color:1314596}),shine:new li({color:16777215}),hat:y(4183752,1800816,.55),brim:y(2795933,1002823,.55),lamp:new li({color:new de(16773852).multiplyScalar(2.6)}),ball:y(9393204,3808784,.45),lace:new li({color:15921128}),shadow:new li({color:0,transparent:!0,opacity:.32,depthWrite:!1}),cart:y(2242639,793128,.5),cartTrim:new li({color:new de(4183752).multiplyScalar(1.6)}),tire:y(857116,0,0),crate:y(2901344,1057594,.5),tray:y(1582646,660510,.4),off:new li({color:1714746}),on:new li({color:new de(4183752).multiplyScalar(2)}),crateGlow:new li({color:new de(4183752).multiplyScalar(.9)}),fan:y(16029562,8010280,.45),blush:y(16765916,10504798,.45),rope:new ei({color:13227746,transparent:!0,opacity:.55})},L=[[0,0],[.3,0],[.4,.012],[.445,.05],[.458,.12],[.463,.64]];for(let Le=1;Le<=18;Le++){let et=Le/18*Math.PI/2;L.push([.463*Math.cos(et),.64+.36*Math.sin(et)])}let H=new gl(L.map(([Le,et])=>new ie(Math.max(Le,1e-4),et)),44),$=Le=>Le<=.64?.463:.463*Math.cos(Math.asin(Math.min(1,(Le-.64)/.36))),ae=.82,O=.9,te=.74,ce=.075,Pe=(Le,et)=>{let ve=$(et),St=O*ve;return ce+te*ve*Math.sqrt(Math.max(0,1-Le/St*(Le/St)))},be=(()=>{let Le=new cr(.58,.34,24,10),et=Le.attributes.position;for(let ve=0;ve<et.count;ve++){let St=et.getX(ve),_i=et.getY(ve)+.69;et.setXYZ(ve,St,_i,Pe(St*.97,_i)+.006)}return Le.computeVertexNormals(),Le})(),ue=(Le,et)=>tt(512,300,(ve,St,_i)=>{let Ti=(Rt,qt,Bt,zt,$t)=>{ve.beginPath(),ve.moveTo(Rt+$t,qt),ve.arcTo(Rt+Bt,qt,Rt+Bt,qt+zt,$t),ve.arcTo(Rt+Bt,qt+zt,Rt,qt+zt,$t),ve.arcTo(Rt,qt+zt,Rt,qt,$t),ve.arcTo(Rt,qt,Rt+Bt,qt,$t),ve.closePath()},Xt=Le?_i*.27:0,Fi=Le?_i*.46:_i,Pt=(Rt,qt)=>{ve.strokeStyle=`rgba(255,255,255,${qt})`,ve.lineWidth=Rt,ve.lineJoin=ve.lineCap="round",ve.beginPath();let Bt=Xt+Fi/2,zt=Fi/300*3.4;[[.16,0],[.37,0],[.405,-9],[.455,9],[.505,-13],[.55,6],[.585,0],[.84,0]].forEach(([$t,di],lt)=>lt?ve.lineTo($t*St,Bt+di*zt):ve.moveTo($t*St,Bt+di*zt)),ve.stroke()};if(et){Pt(18,.25),Pt(7,1);return}Ti(0,Xt,St,Fi,Fi*.32),ve.fillStyle="#241a3a",ve.fill();let Ct=Rt=>{let qt=St*.14,Bt=St*.86,zt=4,$t=(Bt-qt)/zt,di=Rt?Xt+Fi*.05:Xt+Fi*.95,lt=Fi*(Rt?.19:-.19),ft=Fi*(Rt?.08:-.08);ve.beginPath(),ve.moveTo(qt+$t*.2,di),ve.quadraticCurveTo(qt,di,qt,di+lt*.45);for(let Jt=0;Jt<zt;Jt++){let Oi=qt+Jt*$t;ve.lineTo(Oi,di+lt),ve.quadraticCurveTo(Oi+$t/2,di+lt+ft,Oi+$t,di+lt)}ve.quadraticCurveTo(Bt,di,Bt-$t*.2,di),ve.closePath(),ve.fillStyle="#ffffff",ve.fill()};Ct(!0),Ct(!1),Pt(5,.55)}),Ie={awake:ue(!1),sleep:ue(!0),glow:ue(!1,!0),glowSleep:ue(!0,!0)},Ke=new hr(1,20,14),xt=new hr(1,24,12,0,Math.PI*2,0,Math.PI/2),He=new cl(1,28);He.rotateX(-Math.PI/2);let nt=new Ns(1,1,1,18),yt=(Le,et,ve,St,_i,Ti,Xt,Fi,Pt)=>{let Ct=new ht(Le,et);return Ct.position.set(ve,St,_i),Ct.scale.set(Ti,Xt??Ti,Fi??Ti),Pt&&Pt.add(Ct),Ct};function Mt(Le={}){let et=new Yt,ve=new Yt;et.add(ve),Le.shadow!==!1&&yt(He,E.shadow,0,.004,.04,.44,1,.4,et);let St=yt(H,E.shell,0,0,0,1,1,ae,ve);yt(H,E.belly,0,.008,ce,O,.985,te,ve);let _i=new ht(be,new li({map:Le.sleep?Ie.sleep:Ie.awake,color:13223638,transparent:!0,alphaTest:.35}));ve.add(_i);let Ti=new ht(be,new li({map:Le.sleep?Ie.glowSleep:Ie.glow,color:new de(5231359).multiplyScalar(1.45),transparent:!0,depthWrite:!1,blending:Zn}));Ti.position.z=.003,ve.add(Ti);let Xt=new Yt;Xt.position.y=.8,ve.add(Xt),[-1,1].forEach(lt=>{let Jt=$(.8),Oi=lt*Math.sin(.9)*Jt,oi=Math.cos(.9)*Jt*ae+.03;yt(Ke,E.eye,Oi,0,oi,.05,.058,.04,Xt).lookAt(Oi*3,0,oi*3+1.4),yt(Ke,E.shine,Oi-lt*.012,.02,oi+.03,.015,.015,.015,Xt)});let Fi=lt=>{let ft=new Yt;return ft.position.set(lt*.452,.6,.02),ve.add(ft),yt(Ke,E.fin,0,-.22,0,.07,.26,.13,ft),ft.rotation.z=lt*.14,ft},Pt=Fi(-1),Ct=Fi(1),Rt=lt=>{let ft=new Yt;return ft.position.set(lt*.215,.06,.1),ve.add(ft),yt(Ke,E.feet,0,-.015,.03,.19,.11,.21,ft),ft},qt=Rt(-1),Bt=Rt(1),zt=null,$t=null;Le.hat&&(zt=new Yt,zt.position.set(0,.9,.02),ve.add(zt),yt(xt,E.hat,0,0,0,.36,.26,.34,zt),yt(nt,E.brim,0,.005,.06,.44,.025,.44,zt),yt(nt,E.hat,0,.2,0,.05,.14,.05,zt),$t=yt(Ke,E.lamp,0,.12,.33,.045,.045,.03,zt));let di=null;return Le.ball&&(di=yt(Ke,E.ball,0,-.46,.12,.1,.065,.065,Ct),yt(nt,E.lace,0,-.46+.06,.12,.004,.02,.05,Ct).rotation.z=Math.PI/2),{root:et,body:ve,visor:_i,pulse:Ti,eyes:Xt,finL:Pt,finR:Ct,footL:qt,footR:Bt,hat:zt,lamp:$t,ball:di,o:Le,seed:Math.random()*20,hop:-1,mode:Le.mode||"stand",sleep:!!Le.sleep}}return{make:Mt,mat:E,m:yt,sphere:Ke,cylG:nt,setSleep:(Le,et)=>{Le.sleep!==et&&(Le.sleep=et,Le.visor.material.map=et?Ie.sleep:Ie.awake,Le.pulse.material.map=et?Ie.glowSleep:Ie.glow,Le.visor.material.needsUpdate=Le.pulse.material.needsUpdate=!0)}}})();function gt(){let M=new Yt,y=Oe.mat,E=Oe.m;E(new $i(1,1,1),y.cart,0,.3,0,.78,.22,1.25,M),E(new $i(1,1,1),y.cartTrim,0,.3,.63,.8,.04,.02,M),E(new $i(1,1,1),y.crate,0,.58,.28,.62,.34,.5,M),E(new $i(1,1,1),y.crateGlow,0,.76,.28,.5,.02,.38,M),[[-.4,.45],[.4,.45],[-.4,-.42],[.4,-.42]].forEach(([$,ae])=>{let O=E(Oe.cylG,y.tire,$,.14,ae,.14,.08,.14,M);O.rotation.z=Math.PI/2}),E(Oe.sphere,y.lamp,0,.34,.66,.06,.045,.02,M);let L=E(Oe.cylG,y.cart,-.3,.85,-.5,.015,.9,.015,M),H=E(Oe.sphere,z.beacon,-.3,1.32,-.5,.05,.05,.05,M);return{g:M,beacon:H}}let Te={},Ft=new Yt;r.add(Ft);let fi=new Je;fi.setAttribute("position",new Be(new Float32Array(36),3).setUsage($a));let Yn=new ji(fi,Oe.mat.rope);Yn.frustumCulled=!1,r.add(Yn);{let M=(O,te)=>{let ce=Oe.make(te);return ce.k=O,Ft.add(ce.root),Te[O]=ce,ce};M("sitter",{mode:"sit",shadow:!1});let y=M("tech",{mode:"tech",hat:!0});y.tray=new Yt,y.root.add(y.tray),Oe.m(new $i(1,1,1),Oe.mat.tray,0,0,0,.5,.05,.62,y.tray),y.led=Oe.m(new $i(1,1,1),Oe.mat.off,0,0,-.315,.42,.025,.012,y.tray);let E=M("cart",{mode:"cart",shadow:!1});E.cart=gt(),E.root.add(E.cart.g),E.body.position.set(0,.41,-.38),E.body.scale.setScalar(.82),M("campus",{mode:"balloon",shadow:!1}),M("plant",{mode:"balloon",hat:!0,shadow:!1}),M("rider",{mode:"sit",shadow:!1}),M("runner",{mode:"run",ball:!0});let L=M("hot",{mode:"hot"});L.fan=new Yt,L.fan.position.set(0,-.44,.1),L.finL.add(L.fan);let H=new cl(1,18,0,Math.PI),$=new ht(H,Oe.mat.fan);$.material.side=Hi,$.scale.setScalar(.22),$.rotation.y=Math.PI/2,L.fan.add($),Oe.m(Oe.cylG,Oe.mat.fan,0,-.06,0,.012,.14,.012,L.fan);let ae=tt(64,64,O=>{O.fillStyle="#fff",O.font='900 52px "Big Shoulders Display","Arial Narrow",sans-serif',O.textAlign="center",O.textBaseline="middle",O.fillText("z",32,34)});Te.plant.zs=[0,1,2].map(O=>{let te=new Rs(new Tr({map:ae,color:new de(13624319),transparent:!0,depthWrite:!1}));return te.visible=!1,r.add(te),te})}function zl(M){let y=Te,E=fe.heroRack,L=fe.heroFace||1;y.sitter.root.position.set(E.x,E.y+bt.h,E.z+L*(bt.d/2-.26)),y.sitter.root.rotation.y=L>0?0:Math.PI,y.sitter.root.scale.setScalar(.78);let H=fe.heroHall,$=H&&(H.racks.find(Pe=>Pe.line===0&&Math.abs(Pe.x-(H.heroX+7.2))<.31)||H.racks.find(Pe=>Pe.line===0&&Math.abs(Pe.x-(H.heroX+3.6))<.31));y.tech.root.visible=!!$,$&&(y.tech.root.position.set(H.ix+$.x,.2,H.iz+$.z+L*(bt.d/2+.78)),y.tech.root.rotation.y=L>0?Math.PI:0,y.tech.root.scale.setScalar(1.05)),y.cart.root.visible=!!(H&&H.lines>=3),H&&(y.cart.path={x:H.ix,z0:H.iz+H.inD/2-dh-2*bt.d-Nl-1,z1:H.iz-H.inD/2+1.6},y.cart.root.scale.setScalar(1));let ae=xe.campus,O=xe.nb>0;y.campus.anchor=O?new S(ae.minX+(ae.maxX-ae.minX)*.62,0,ae.minZ-6):new S(E.x-1.4,.2,E.z-.9),y.campus.size=O?Math.min(46,30+(ae.maxX-ae.minX)*.02):1.15,y.campus.lift=O?30+y.campus.size*.5:4.4,y.campus.drift=O?new S(4,0,-10):new S(-.5,0,.4);let te=fe.plant,ce=fe.P;if(y.plant.anchor=new S(ce.maxX-8,0,ce.minZ+8),y.plant.size=M.p.shape==="reactor"?56:M.p.shape==="cell"?12:M.p.shape==="aero"?20:30,y.plant.lift=te.h+y.plant.size*1.1+(M.p.shape==="cell"?8:14),y.plant.drift=new S(-y.plant.size*.5,0,y.plant.size*.4),Oe.setSleep(y.plant,!M.many),y.hot.root.visible=!!H,H){let Pe=xe.halls[1];Pe?y.hot.root.position.set(Pe.x-xe.bw/2+12+(xe.bw-20)/6*.5,Un+.06,Pe.z):y.hot.root.position.set(H.ix-H.inW/2-ir/2,Xn+.2,H.iz+2),y.hot.root.rotation.y=.5,y.hot.root.scale.setScalar(1.1)}y.hot.pue=Gt.pue,y.hot.body.children[1].material=Gt.pue>=1.3?Oe.mat.blush:Oe.mat.belly,y.rider.root.position.copy(fe.truckTop),y.rider.root.rotation.y=0,y.rider.root.scale.setScalar(1.05),y.runner.root.visible=!!fe.fieldC,fe.fieldC&&(y.runner.path={x0:fe.fieldC.x-46,x1:fe.fieldC.x+46,z:fe.fieldC.z+6}),ln.k&&oa()}let ra=M=>{let y=M%1.4/1.4;return y<.1?.55+y*4.5:y<.2?1-(y-.1)*3:y<.32?.7+(y-.2)*2:y<.5?.94-(y-.32)*2.2:.55},gn=new S;function kl(M,y){let E=Te,L=M/1e3,H=qn,$=0,ae=fi.attributes.position.array;Object.values(E).forEach(O=>{if(!O.root.visible)return;let te=H?O.seed:L+O.seed;O.eyes.scale.y=O.sleep||te%4.3<.13?.12:1,O.pulse.material.opacity=H?.8:ra(te*(O.sleep?.45:1));let ce=Math.sin(te*2.4)*.012,Pe=Math.sin(te*1.9)*.06;if(O.finL.rotation.set(0,0,-.14-Pe),O.finR.rotation.set(0,0,.14+Pe),O.mode==="sit"){O.footL.position.set(-.2,.05,.34),O.footR.position.set(.2,.05,.34),O.footL.rotation.x=.9+Math.sin(te*3.2)*.45,O.footR.rotation.x=.9+Math.sin(te*3.2+2.2)*.45;let ue=O.k==="sitter"?Math.max(0,Math.sin(te*.9))**6:0;if(O.finR.rotation.set(-.9*ue,0,.14+Pe+1.5*ue),O.k==="rider"){let Ie=Math.max(0,Math.sin(te*.7))**4;O.finL.rotation.set(0,0,-.14-2.4*Ie+Math.sin(te*9)*.25*Ie)}O.body.rotation.y=O.k==="sitter"?.25+Math.sin(te*.5)*.12+ue*.2:0,ce*=.5}else if(O.mode==="tech"){let ue=te%6/6,Ie=ue<.2?ue/.2:ue<.45?1:ue<.65?1-(ue-.45)/.2:0;O.tray.position.set(0,.56,.62-.34*(1-Ie)+.05),O.tray.visible=!0,O.finL.rotation.set(-1.25,0,-.32),O.finR.rotation.set(-1.25,0,.32),O.body.rotation.x=.1-.12*Ie,O.body.position.z=-.12*Ie,O.led.material=Ie<.02&&ue>.6?Oe.mat.on:Oe.mat.off,O.lamp&&(O.lamp.material=Oe.mat.lamp)}else if(O.mode==="cart"){let ue=O.path;if(ue){let Ie=Math.abs(ue.z1-ue.z0),Ke=2.4,xt=2*(Ie/Ke+1.2),He=H?.3:(L*1+O.seed)%xt,nt=Ie/Ke+1.2,yt,Mt;if(He<nt){let Qe=Math.min(1,He/(Ie/Ke));yt=ue.z0+(ue.z1-ue.z0)*Qe,Mt=Math.sign(ue.z1-ue.z0),He>Ie/Ke&&(Mt*=Math.cos(Math.min(1,(He-Ie/Ke)/1.2)*Math.PI))}else{let Qe=Math.min(1,(He-nt)/(Ie/Ke));yt=ue.z1+(ue.z0-ue.z1)*Qe,Mt=Math.sign(ue.z0-ue.z1),He-nt>Ie/Ke&&(Mt*=Math.cos(Math.min(1,(He-nt-Ie/Ke)/1.2)*Math.PI))}O.root.position.set(ue.x+.2,.2,yt),O.root.rotation.y=Mt>=0?0:Math.PI}O.finL.rotation.set(-1.1,0,-.2),O.finR.rotation.set(-1.1,0,.2),O.cart.beacon.visible=H||Math.sin(L*9)>0,ce=Math.abs(Math.sin(te*7))*.01}else if(O.mode==="balloon"){let ue=O.size||20,Ie=H?0:Math.sin(te*.35)*.5,Ke=H?0:Math.sin(te*.27+1)*.5;O.root.scale.setScalar(ue),O.root.position.set(O.anchor.x+O.drift.x*(1+Ie*.15),O.anchor.y+O.lift+(H?0:Math.sin(te*.6)*ue*.04),O.anchor.z+O.drift.z*(1+Ke*.15)),O.root.rotation.set(Ie*.06,.5+Ie*.25,Ke*.05),O.root.updateMatrixWorld(),O.finL.rotation.set(0,0,-.25-Math.sin(te*.8)*.12),O.finR.rotation.set(0,0,.25+Math.sin(te*.8+1)*.12),O.footL.rotation.x=O.footR.rotation.x=.25,ce=0,O.zs&&O.zs.forEach((xt,He)=>{if(xt.visible=O.sleep,!O.sleep)return;let nt=(H?.3*He:L*.35+He/3)%1;gn.set(.32+nt*.5,1.05+nt*.7,.1).applyMatrix4(O.root.matrixWorld),xt.position.copy(gn),xt.scale.setScalar(ue*(.14+nt*.16)),xt.material.opacity=Math.sin(Math.PI*nt)*.9}),[[-.3,.2],[.3,.2],[0,-.28]].forEach(([xt,He],nt)=>{gn.set(xt,.02,He).applyMatrix4(O.root.matrixWorld);let yt=O.anchor.x+(nt-1)*ue*.06,Mt=O.anchor.z+(nt===2?-ue*.05:ue*.03);ae.set([gn.x,gn.y,gn.z,yt,O.anchor.y+.05,Mt],$),$+=6})}else if(O.mode==="hot"){let ue=3+(O.pue-1)*40;O.finL.rotation.set(-.6,0,-.9-Math.abs(Math.sin(te*ue*.5))*.5),O.fan.rotation.set(0,0,Math.sin(te*ue)*.5),O.body.rotation.z=Math.sin(te*.8)*.03}else if(O.mode==="run"){let ue=O.path;if(ue){let Ke=ue.x1-ue.x0,xt=5.2,He=Ke/xt,nt=H?.2:(L+O.seed)%(2*He),yt=nt<He,Mt=yt?nt/He:(nt-He)/He;O.root.position.set(yt?ue.x0+Ke*Mt:ue.x1-Ke*Mt,0,ue.z),O.root.rotation.y=yt?Math.PI/2:-Math.PI/2}let Ie=te*11;O.footL.rotation.x=Math.sin(Ie)*.7,O.footR.rotation.x=-Math.sin(Ie)*.7,O.finL.rotation.set(Math.sin(Ie)*.6,0,-.25),O.finR.rotation.set(-.5,0,.55),O.body.rotation.x=.16,ce=Math.abs(Math.sin(Ie))*.06}else O.footL.rotation.x=O.footR.rotation.x=0;let be=0;if(O.hop>=0){let ue=(M-O.hop)/650;ue>=1?O.hop=-1:(be=Math.sin(Math.PI*ue)*.32,O.body.scale.set(1+.06*Math.sin(Math.PI*ue*2),1-.05*Math.sin(Math.PI*ue*2),1))}O.hop<0&&O.body.scale.setScalar(O.mode==="cart"?.82:1),O.body.position.y=(O.mode==="cart"?.41:0)+ce+be});for(let O=$;O<ae.length;O++)ae[O]=0;fi.attributes.position.needsUpdate=!0}let Sn=document.createElement("div");Sn.className="bubble3d",Sn.setAttribute("role","status"),ne.parentNode.appendChild(Sn);let ln={k:null,until:0};function sa(M){let y=Hu,E=y.p,L=ii(y.c.kw*y.c.rack,3);return{sitter:`That token cost ${mh(y.jTok)}. Worth it.`,tech:`Hot swap! This rack draws ${L} kW.`,cart:`Delivering ${as(y.tps)} tokens a second.`,campus:xe.nb?`${Fn(y.facMW)} and counting!`:`It\u2019s a party: ${ii(y.chips,2)} chips\u2019 worth.`,plant:y.many?`${on(y.build)} ${y.build===1?E.one:E.many}, coming up.`:`I only need ${ia(y)} of this one. Zzz.`,hot:Gt.pue>=1.3?`PUE ${Gt.pue.toFixed(2)}. It\u2019s getting hot up here.`:`PUE ${Gt.pue.toFixed(2)}. Cooling adds ${Math.round((Gt.pue-1)*100)}%.`,rider:E.gas?"Next stop: the turbine queue.":"Special delivery!",runner:"110 meters. I paced it out."}[M]}function ls(M,y,E=3200){let L=Te[M];L&&(ln.k=M,ln.until=performance.now()+E,Sn.textContent=y||sa(M),Sn.classList.add("on"),qn||(L.hop=performance.now()))}function oa(){let M=ln.k;if(!M)return;let y=Te[M];if(performance.now()>ln.until||!y.root.visible){Sn.classList.remove("on"),performance.now()>ln.until+400&&(ln.k=null);return}gn.set(0,1.12,0).applyMatrix4(y.root.matrixWorld).project(s);let E=(gn.x+1)/2*Ui,L=(1-gn.y)/2*at,H=gn.z>1||E<-60||E>Ui+60||L<-40||L>at+40;Sn.style.opacity=H?"0":"";let $=Sn.offsetWidth,ae=Sn.offsetHeight,O=Math.min(Ui-$-12,Math.max(12,E-18)),te=L;for(let ce=0;ce<3;ce++){let Pe=je.find(be=>O+$>be.l&&O<be.r&&te>be.t&&te-ae<be.b);if(!Pe)break;te=Pe.t<at/2?Pe.b+ae+10:Pe.t-10}Sn.style.transform=`translate(${O.toFixed(1)}px,${te.toFixed(1)}px) translate(0,-100%)`}function Hs(M){let y=Te[M],E=y.root.scale.x;y.root.updateMatrixWorld();let L=new S(0,.55,0).applyMatrix4(y.root.matrixWorld),H=y.mode==="tech"?fe.heroFace>0?1.3:Math.PI+1.3:y.mode==="cart"?y.root.rotation.y+.25:y.mode==="run"?y.root.rotation.y+.75:y.root.rotation.y+.38,$=y.mode==="balloon"?E*3.4:y.mode==="cart"?5.5:y.mode==="run"?7:y.mode==="hot"?6:Math.max(3.2,E*4.2);return{target:L,dist:$,az:H,el:y.mode==="balloon"?.05:y.mode==="cart"?.3:.16,follow:y.mode==="cart"||y.mode==="run"?M:null}}function Gl(M){let y=Te[M],E=y.root.scale.x,L=s.position.distanceTo(gn.set(0,.5,0).applyMatrix4(y.root.matrixWorld));return E/(2*L*Math.tan(s.fov*Math.PI/360))*at}function Vl(M){let y=null,E=1/0;return Object.values(Te).forEach(L=>{if(!L.root.visible)return;let H=L.root.scale.x,$=gn.set(0,.5,0).applyMatrix4(L.root.matrixWorld),ae=new vi($.clone(),.62*H*(L.mode==="cart"?1.4:1));if(M.intersectsSphere(ae)){let O=M.origin.distanceTo($);O<E&&(E=O,y=L.k)}}),y}function On(M){let y=(O,te,ce,Pe)=>({target:O,dist:te,az:ce,el:Pe}),E=new Ri().setFromPoints([new S(fe.plant.c.x-fe.plant.w/2,0,fe.plant.c.z-fe.plant.d/2),new S(xe.campus.maxX,0,xe.campus.maxZ),new S(xe.campus.minX,0,xe.campus.minZ),new S(fe.plant.c.x+fe.plant.w/2,0,fe.plant.c.z+fe.plant.d/2)]);fe.field&&xe.nb&&E.expandByPoint(fe.field.clone().add(new S(60,0,30)));let L=E.getSize(new S),H=E.getCenter(new S),$=Ji?1.25:1,ae=document.body.classList.contains("open")&&Fl()?1.14:1;if(M==="token")return y(bi.position.clone().add(new S(-.02,.62,0)),Ji?4.8:3.7,-.3,.06);if(M==="rack")return Ji?y(fe.heroRack.clone().add(new S(1.05,1.75,.9)),8.6,-.22,.1):y(fe.heroRack.clone().add(new S(.75,1.05,.9)),6.4,-.5,.14);if(M==="hall")return xe.nb?y(fe.hall.c.clone().add(new S(0,1,0)),(Math.max(fe.hall.w,fe.hall.d)*1.12+16)*$,.45,.66):y(fe.heroRack.clone().add(new S(0,1,0)),14*$,.6,.5);if(M==="campus"){let O=xe.campus,te=O.maxX-O.minX,ce=O.maxZ-O.minZ;return y(new S((O.minX+O.maxX)/2,0,(O.minZ+O.maxZ)/2+ce*.05),(Math.max(te,ce*1.3)*.9+70)*$*ae,.62,.62)}return M==="power"?y(fe.plant.c.clone().add(new S(fe.plant.w*.12,fe.plant.h*.3,0)),(Math.max(fe.plant.w,fe.plant.d)*1.05+fe.plant.h*1.6+50)*$*ae,-.72,.34):Ji?y(H.setY(0),Math.max(L.x*.7,L.z*1.5)+160,1.42,.42):y(H.setY(0),(Math.max(L.x,L.z*1.6)*.92+150)*$*ae,.34,.3)}let Hl=M=>new S(Math.sin(M.az)*Math.cos(M.el),Math.sin(M.el),Math.cos(M.az)*Math.cos(M.el)).multiplyScalar(M.dist);function Ws(M){o.target.copy(M.target),s.position.copy(M.target).add(Hl(M)),s.lookAt(M.target),o.update()}let xn=null,mr=!1,cs=!1,Ur=null;function hs(M,y,E=!1){if(qn){Ws(M);return}let L=s.position.clone().sub(o.target),H=L.length(),$=Math.atan2(L.x,L.z),ae=Math.asin(Math.min(1,L.y/H)),O=M.az-$;O=((O+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,xn={t0:performance.now(),dur:y??Math.min(4200,1200+520*Math.abs(Math.log10(M.dist/H))),from:{t:o.target.clone(),d:H,az:$,el:ae},to:M,daz:O},mr=E,o.enabled=!1,o.autoRotate=!1,Ur=null}let v=M=>M<.5?4*M*M*M:1-Math.pow(-2*M+2,3)/2,F=new S;function K(){if(!Ur||xn)return;let M=Te[Ur];if(!M||!M.root.visible){Ur=null;return}F.set(0,.55,0).applyMatrix4(M.root.matrixWorld).sub(o.target),o.target.add(F),s.position.add(F)}function X(M){if(!xn)return;let y=xn,E=Math.min(1,(M-y.t0)/y.dur),L=v(E);if(y.to.follow){let Pe=Te[y.to.follow];y.to.target.set(0,.55,0).applyMatrix4(Pe.root.matrixWorld)}let H=Math.exp(Math.log(y.from.d)+(Math.log(y.to.dist)-Math.log(y.from.d))*L),$=y.to.dist-y.from.d,O=(Math.abs($)<1e-6?L:Math.min(1,Math.max(0,(H-y.from.d)/$)))*.75+L*.25;o.target.copy(y.from.t).lerp(y.to.target,O);let te=y.from.az+y.daz*L,ce=y.from.el+(y.to.el-y.from.el)*L;if(s.position.copy(o.target).add(Hl({dist:H,az:te,el:ce})),s.lookAt(o.target),mr){let Pe="token";for(let be of["rack","hall","campus","all"])H>=On(be).dist*.7&&(Pe=be);Pe!==nr&&(nr=Pe,ta(Pe))}E>=1&&(xn=null,o.enabled=!0,o.update(),mr&&(mr=!1,document.body.classList.remove("intro"),nr="all",ta("all")),y.done&&y.done(),y.to.follow&&(Ur=y.to.follow),o.autoRotate=!qn&&nr==="all"&&!cs)}let Y=Ot("#scale"),Ne=Ot("i",Y),Ye=Ot("span",Y),Re="";function ke(){let y=2*s.position.distanceTo(o.target)*Math.tan(s.fov*Math.PI/360)/at,E=(Ji?70:110)*y,L=Math.floor(Math.log10(E)),H=10**L,$=[5,2,1].map(O=>O*H).find(O=>O<=E)||H,ae=$<1?`${Math.round($*100)} cm`:$<1e3?`${on($)} m`:`${ii($/1e3,2)} km`;ae!==Re&&(Ye.textContent=ae,Re=ae),Ne.style.width=`${($/y).toFixed(1)}px`}let xe=null,ut=-1e9,vt=null,qe=!1;function Tt(M){xe=q(M);let y=`${xe.nb}|${xe.k}|${xe.nHero}|${M.c.k}|${xe.bw.toFixed(1)}`,E=`${M.p.k}|${M.many?M.build:"ghost"}`,L=`${y}|${E}|${Math.min(8,Math.max(2,Math.ceil(M.facMW/140)+1))}`,H=!1;if(y!==ri.c&&(me.campus&&We(me.campus),me.campus=ge(M,xe),r.add(me.campus),ri.c=y,H=!0,!xe.nb)){let $=me.campus,ae=new Yt;$.add(ae),gi(ae,M,{racks:[{x:0,z:0,face:1,line:0}],inW:4,inD:4,lines:1,lineZ:[0],half:1,w:4,d:4})}if(E!==ri.p||L!==ri.g||H){me.plant&&We(me.plant),me.grid&&We(me.grid),me.refs&&We(me.refs);let $={c:new S(xe.campus.minX-60-37,0,0),w:74};fe.sub=$;let ae=D(M);me.plant=ae.g,r.add(ae.g),me.grid=Ae(M,xe,ae.P),r.add(me.grid),me.refs=le(M,xe,ae.P),r.add(me.refs),Vi(M),ri.p=E,ri.g=L,H=!0}H&&zl(M),H&&qe&&(ut=performance.now()),qe=!1,ye(M,xe),Wt=Math.max(.15,Math.min(1,(Math.log10(Math.max(10,M.tps))-1)/8)),Vt=Math.max(.25,Math.min(1.6,Math.log10(Math.max(.001,M.facMW)*1e3+10)/4)),requestAnimationFrame(pt)}function gi(M,y,E){let L=y.c;Ge(V.box,z.pad,[[0,0,0,5,.2,5]],M);let H=new Yt;H.position.set(0,.2,0),M.add(H);let $=new ht(V.box,z.rack);$.scale.set(bt.w,bt.h,bt.d),H.add($);let ae=bt.d/2+.006,O=y.chips,te=Z(L.led,1.35),ce=(Pe,be,ue=.5,Ie=.03)=>{let Ke=new ht(V.box,be);Ke.scale.set(ue,Ie,.012),Ke.position.set(0,Pe,ae),H.add(Ke)};if(L.rack===72){let Pe=[["p"],["p"],...Array(10).fill(["c"]),...Array(9).fill(["s"]),...Array(8).fill(["c"]),["p"],["p"]],be=0;Pe.forEach(([ue],Ie)=>{let Ke=bt.h-.12-Ie*((bt.h-.24)/(Pe.length-1));if(ue==="c"){let xt=be*4<O;be++,ce(Ke,xt?te:z.off),ce(Ke+.002,xt?z.lamp:z.off,.05,.028)}else ce(Ke,ue==="p"?z.coral:z.blue,.5,.022)})}else{for(let Pe=0;Pe<4;Pe++){let be=.35+Pe*.46,ue=Pe*8<O,Ie=new ht(V.box,z.dark);Ie.scale.set(.54,.4,.01),Ie.position.set(0,be,ae-.002),H.add(Ie);for(let Ke=0;Ke<6;Ke++)ce(be+.04+Ke*.055,ue?te:z.off,.44,.016)}ce(.12,z.coral),ce(bt.h-.1,z.coral)}fe.heroRack=new S(0,.2,0),fe.heroFace=1,fe.heroHall=null,fe.hall={c:new S(0,0,0),w:5,d:5},$e.racks=[{x:0,z:0}],$e.roofs=[],It.position.set(1.4,.2,bt.d/2+1),It.rotation.y=-.7,bi.position.set(.15,2.2,bt.d/2+.55),U.position.set(0,6,3),U.intensity=60}let Wt=.5,Vt=1;function Vi(M){we.m&&(we.m.parent.remove(we.m),we.m.dispose(),we.m=null),we.mb&&(we.mb.parent.remove(we.mb),we.mb.dispose(),we.mb=null),we.list=[],we.lines.forEach((L,H)=>{let $=[0];for(let O=1;O<L.pts.length;O++)$.push($[O-1]+L.pts[O].distanceTo(L.pts[O-1]));L.len=$[$.length-1],L.cum=$;let ae=Math.max(2,Math.min(L.kind==="g"?60:26,Math.round(L.len/(L.r>1?34:L.kind==="g"?46:22))));for(let O=0;O<ae;O++)we.list.push({li:H,u:O/ae,kind:L.kind})});let y=we.list.filter(L=>L.kind==="p").length,E=we.list.length-y;we.m=new $r(V.ball,Z(16029562,3.4),Math.max(1,y)),we.m.frustumCulled=!1,r.add(we.m),we.mb=new $r(V.ball,Z(6990079,2.6),Math.max(1,E)),we.mb.frustumCulled=!1,r.add(we.mb),we.m.count=y,we.mb.count=E}let Ze=(M,y,E)=>{let L=y*M.len,H=1;for(;H<M.cum.length-1&&M.cum[H]<L;)H++;let $=M.cum[H-1],ae=M.cum[H],O=ae>$?(L-$)/(ae-$):0;return E.copy(M.pts[H-1]).lerp(M.pts[H],O)},Di=new Al,Lt=new ie,gr=new S;function Ni(M){let y=e.getBoundingClientRect();Lt.set((M.clientX-y.left)/y.width*2-1,-((M.clientY-y.top)/y.height)*2+1),Di.setFromCamera(Lt,s);let E=Vl(Di.ray);if(E)return"echo:"+E;let L=($,ae,O,te)=>new Ri(new S($.x-ae/2,0,$.z-te/2),new S($.x+ae/2,O,$.z+te/2)),H=[["rack",L(fe.heroRack,1.4,2.6,2),0],["hall",xe.nb?L(fe.hall.c,fe.hall.w,Un,fe.hall.d):null,0],["power",L(fe.plant.c,fe.plant.w,fe.plant.h,fe.plant.d),0],["campus",L(new S((xe.campus.minX+xe.campus.maxX)/2,0,(xe.campus.minZ+xe.campus.maxZ)/2),xe.campus.maxX-xe.campus.minX,Un+2,xe.campus.maxZ-xe.campus.minZ),0]];for(let[$,ae]of H)if(ae&&Di.ray.intersectBox(ae,gr))return $;return null}let Bn=null;e.addEventListener("pointerdown",M=>{Bn={x:M.clientX,y:M.clientY,t:performance.now()},xn&&(xn=null,o.enabled=!0,mr&&(mr=!1,document.body.classList.remove("intro")))}),e.addEventListener("pointerup",M=>{if(!Bn)return;let y=Math.hypot(M.clientX-Bn.x,M.clientY-Bn.y)<6&&performance.now()-Bn.t<450;if(Bn=null,!y)return;let E=Ni(M);if(E&&E.startsWith("echo:")){let L=E.slice(5);Gl(L)<70?(hs(Hs(L)),xn&&(xn.done=()=>ls(L)),xn||ls(L)):ls(L);return}E&&E!==nr?Ol(E):E&&Ol(E==="hall"?"rack":E==="campus"?"hall":E)});let zn=!1;e.addEventListener("pointermove",M=>{Bn||zn||M.pointerType!=="mouse"||(zn=!0,requestAnimationFrame(()=>{zn=!1,e.style.cursor=Ni(M)?"pointer":""}))}),o.addEventListener("start",()=>{cs=!0,Ur=null,o.autoRotate=!1,n.classList.add("touched")}),e.addEventListener("wheel",()=>{cs=!0,o.autoRotate=!1},{passive:!0});let Ui=1,at=1,xi=0,cn=0,si=()=>{Ui=n.clientWidth,at=n.clientHeight,t.setSize(Ui,at,!1),a&&(a.setPixelRatio(i),a.setSize(Ui,at)),s.aspect=Ui/at,Nt.value=at*i/(2*Math.tan(s.fov*Math.PI/360)),wi(!0),pt()};function wi(M){cn=document.body.classList.contains("open")&&Fl()?215:0,M===!0&&(xi=cn),setTimeout(pt,380)}new ResizeObserver(si).observe(n);let aa=!0,Mh=performance.now(),Wu=0;new IntersectionObserver(M=>{aa=M[0].isIntersecting}).observe(n),document.addEventListener("visibilitychange",()=>{document.hidden||(Mh=performance.now())});let Xu=new S;function S0(M){if($e.roofs.length&&Math.random()<.45){let E=$e.roofs[Math.random()*$e.roofs.length|0];M.x=E.x0+Math.random()*(E.x1-E.x0),M.z=E.z0+Math.random()*(E.z1-E.z0),M.y=E.y,M.vy=9+Math.random()*10,M.vx=(Math.random()-.5)*1.4,M.vz=(Math.random()-.5)*1.4,M.life=6+Math.random()*6,M.s0=2.6,M.s1=7}else{let E=Math.random()<($e.racks.length>1?.12:1),L=E?{x:fe.heroRack.x,z:fe.heroRack.z}:$e.racks[Math.random()*$e.racks.length|0];M.x=L.x+(Math.random()-.5)*.5,M.z=L.z+(Math.random()-.5)*1,M.y=2.3+Math.random()*.3,M.vy=.45+Math.random()*.5,M.vx=(Math.random()-.5)*.12,M.vz=(Math.random()-.5)*.12,M.life=E?7+Math.random()*6:14+Math.random()*10,M.s0=.15,M.s1=E?.28:1.4,E||(M.vy=2.2+Math.random()*3,M.s0=.3,M.s1=3.2)}M.age=0}Et.st.forEach(M=>{M.age=1e9});function b0(M,y){let E=Math.round(Et.n*Wt);for(let te=0;te<Et.n;te++){let ce=Et.st[te];if(ce.age>=ce.life)if(te<E&&fe.heroRack)S0(ce),ce.age=qn?Math.random()*ce.life:-Math.random()*3,Et.cell[te]=Math.random()*Bu.length|0;else{Et.alpha[te]=0;continue}ce.age+=qn?0:M;let Pe=Math.max(0,ce.age),be=Pe/ce.life;Et.pos[te*3]=ce.x+ce.vx*Pe,Et.pos[te*3+1]=ce.y+ce.vy*Pe+(ce.s1>3?Pe*Pe*.8:0),Et.pos[te*3+2]=ce.z+ce.vz*Pe,Et.size[te]=ce.s0+(ce.s1-ce.s0)*be,Et.alpha[te]=ce.age<0?0:Math.min(1,be*8)*(1-be)*(1-be)*.95}Et.g.attributes.position.needsUpdate=!0,Et.g.attributes.aSize.needsUpdate=!0,Et.g.attributes.aAlpha.needsUpdate=!0,Et.g.attributes.aCell.needsUpdate=!0;let L=(te,ce,Pe,be,ue,Ie,Ke)=>{for(let xt=0;xt<te.n;xt++){let He=te.st[xt];if(!ce.length){te.alpha[xt]=0;continue}if(He.age>=He.life){let Mt=ce[xt%ce.length];He.x=Mt.x,He.y=Mt.y,He.z=Mt.z,He.vx=(Math.random()-.5)*be+1.5*be,He.vz=(Math.random()-.5)*be,He.vy=Pe*(.7+Math.random()*.6),He.life=Ke*(.7+Math.random()*.6),He.age=qn?Math.random()*He.life:-Math.random()*Ke}He.age+=qn?0:M;let nt=Math.max(0,He.age),yt=nt/He.life;te.pos[xt*3]=He.x+He.vx*nt,te.pos[xt*3+1]=He.y+He.vy*nt,te.pos[xt*3+2]=He.z+He.vz*nt,te.size[xt]=ue+(Ie-ue)*yt,te.alpha[xt]=He.age<0?0:Math.sin(Math.PI*Math.min(1,yt))*.55}te.g.attributes.position.needsUpdate=!0,te.g.attributes.aSize.needsUpdate=!0,te.g.attributes.aAlpha.needsUpdate=!0};L(pn,$e.heat,6,2,2.5,11,4),L(mn,$e.steam,9,5,30,120,14);let H=0,$=0;we.list.forEach(te=>{let ce=we.lines[te.li];!ce||!ce.len||(qn||(te.u=(te.u+M*(te.kind==="g"?9:26*Vt)/ce.len*(ce.r>1?2.2:1))%1),Ze(ce,te.u,Xu),Ve.position.copy(Xu),Ve.scale.setScalar(ce.r),Ve.rotation.set(0,0,0),Ve.updateMatrix(),te.kind==="g"?we.mb.setMatrixAt($++,Ve.matrix):we.m.setMatrixAt(H++,Ve.matrix))}),we.m&&(we.m.instanceMatrix.needsUpdate=!0),we.mb&&(we.mb.instanceMatrix.needsUpdate=!0),bi.position.y+=Math.sin(y/700)*9e-4,bi.material.opacity=1,z.beacon.color.setRGB(3,1.1,.7).multiplyScalar(qn?.8:Math.sin(y/260)>.55?1:.08);let ae=Math.min(1,(y-ut)/900),O=1-Math.pow(1-ae,3);[me.campus,me.plant,me.grid,me.refs].forEach(te=>{te&&(te.scale.y=qn?1:Math.max(.001,O))})}function qu(M){if(requestAnimationFrame(qu),!aa||document.hidden)return;let y=Math.min(.05,(M-Mh)/1e3);Mh=M,Wu++,vt&&(Tt(vt),vt=null),X(M),K(),xn||o.update(),xi+=(cn-xi)*Math.min(1,y*6),s.setViewOffset(Ui,at,xi,Ji?at*.06:-at*.045,Ui,at);let E=s.position.distanceTo(o.target);r.fog.density=.26/(E+18),N.uniforms.fogD.value=r.fog.density,s.near=Math.min(6,Math.max(.03,E*.004)),s.updateProjectionMatrix(),u.position.copy(s.position),m.position.copy(s.position),I.position.copy(s.position),B.position.copy(s.position),G.position.set(Math.round(s.position.x/1e3)*1e3,0,Math.round(s.position.z/1e3)*1e3),l&&(l.strength=(Ji?.5:.62)*Math.min(1,.45+E/160)),b0(y,M),kl(M,y),_e(y),oa(),Wu%3===0&&ke(),a?a.render():t.render(r,s)}let Yu=0;return{update(M){xe?vt=M:Tt(M)},settle(M){M&&(qe=!0),clearTimeout(Yu),Yu=setTimeout(()=>{mr||hs(On(nr),1300)},420)},visit(M){cs=!1,hs(On(M))},frameSide:wi,start(){si(),qn||location.hash==="#all"?(document.body.classList.remove("intro"),nr="all",ta("all"),Ws(On("all")),o.autoRotate=!1):(nr="token",ta("token"),Ws(On("token")),setTimeout(()=>ls("sitter","Hi, I\u2019m Echo! \u{1F44B} Follow this token.",2600),450),setTimeout(()=>{cs?document.body.classList.remove("intro"):hs(On("all"),8200,!0)},2700)),requestAnimationFrame(qu)}}}
