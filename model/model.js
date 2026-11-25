/*! three.js r187 | MIT License | Copyright © 2010-2025 three.js authors */
var h0=Object.defineProperty;var u0=(n,e)=>{for(var t in e)h0(n,t,{get:e[t],enumerable:!0})};var fo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fu=0,Sh=1,Ou=2;var Bo=1,Bu=2,mo=3,Xn=0,mi=1,Xi=2,qn=0,Br=1,Yn=2,yh=3,bh=4,zu=5;var zr=100,Gu=101,ku=102,Hu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,wl=204,Al=205,Zu=206,Ku=207,$u=208,Ju=209,Qu=210,ju=211,ef=212,tf=213,nf=214,ea=0,ta=1,ia=2,Gr=3,na=4,ra=5,oa=6,sa=7,Rl=0,rf=1,of=2,Dn=0,zo=1,Go=2,ko=3,kr=4,Ho=5,Vo=6,Wo=7;var Eh=300,_r=301,Hr=302,Cl=303,Pl=304,go=1e3,An=1001,aa=1002,xi=1003,sf=1004;var la=1005;var Ci=1006,Ll=1007;var In=1008;var Ti=1009,Dl=1010,Il=1011,Tr=1012,Xo=1013,qi=1014,Oi=1015,fi=1016,qo=1017,Yo=1018,or=1020,Nl=35902,Ul=35899,Fl=1021,Ol=1022,an=1023,Rn=1026,Nn=1027,Zo=1028,Ko=1029,Un=1030,$o=1031;var Jo=1033,Qo=33776,jo=33777,es=33778,ts=33779,ca=35840,ha=35841,ua=35842,fa=35843,da=36196,pa=37492,ma=37496,ga=37488,xa=37489,xo=37490,_a=37491,va=37808,Ma=37809,Sa=37810,ya=37811,ba=37812,Ea=37813,Ta=37814,wa=37815,Aa=37816,Ra=37817,Ca=37818,Pa=37819,La=37820,Da=37821,Ia=36492,Na=36494,Ua=36495,Fa=36283,Oa=36284,_o=36285,Ba=36286;var af=3200;var za=0,lf=1,Zn="",Yi="srgb",vo="srgb-linear",Mo="linear",It="srgb";var Bl=7680;var cf=519,hf=512,uf=513,ff=514,zl=515,df=516,pf=517,Gl=518,kl=519,Hl=35044,Ga=35048;var Th="300 es",tn=2e3,wr=2001;function gf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xf(){let n=ns("canvas");return n.style.display="block",n}var mf={},is=null;function rs(...n){let e="THREE."+n.shift();is?is("log",e,...n):console.log(e,...n)}function _f(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=_f(n);let e="THREE."+n.shift();if(is)is("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=_f(n);let e="THREE."+n.shift();if(is)is("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function So(...n){let e=n.join(" ");e in mf||(mf[e]=!0,He(...n))}function vf(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var Mf={[ea]:ea,[ia]:oa,[na]:na,[Gr]:ra,[ta]:ta,[oa]:ia,[sa]:sa,[ra]:Gr};var Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sf=1234567,Vr=Math.PI/180,yo=180/Math.PI;function Cn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function Vl(n,e){return(n%e+e)%e}function f0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function d0(n,e,t){return n!==e?(t-n)/(e-n):0}function os(n,e,t){return(1-t)*n+t*e}function p0(n,e,t,i){return os(n,e,1-Math.exp(-t*i))}function m0(n,e=1){return e-Math.abs(Vl(n,e*2)-e)}function g0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function x0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function v0(n,e){return n+Math.random()*(e-n)}function M0(n){return n*(.5-Math.random())}function S0(n){n!==void 0&&(Sf=n);let e=Sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y0(n){return n*Vr}function b0(n){return n*yo}function E0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function T0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function w0(n,e,t,i,r){let o=Math.cos,s=Math.sin,a=o(t/2),l=s(t/2),c=o((e+i)/2),h=s((e+i)/2),p=o((e-i)/2),u=s((e-i)/2),f=o((i-e)/2),x=s((i-e)/2);switch(r){case"XYX":n.set(a*h,l*p,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*p,a*c);break;case"ZXZ":n.set(l*p,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*x,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*x,a*c);break;case"ZYZ":n.set(l*x,l*f,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ss(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ka(n,e){if(e.constructor===Float32Array)return n;let t=ss(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ha(n,e){if(e.constructor===Float32Array)return n;let t=ss(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ah={DEG2RAD:Vr,RAD2DEG:yo,generateUUID:Cn,clamp:st,euclideanModulo:Vl,mapLinear:f0,inverseLerp:d0,lerp:os,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:x0,randInt:_0,randFloat:v0,randFloatSpread:M0,seededRandom:S0,degToRad:y0,radToDeg:b0,isPowerOfTwo:E0,ceilPowerOfTwo:T0,floorPowerOfTwo:wh,setQuaternionFromProperEuler:w0,normalize:Ha,denormalize:ka};var Rh=class Rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;var le=Rh;var cn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],u=o[s+0],f=o[s+1],x=o[s+2],E=o[s+3];if(p!==E||l!==u||c!==f||h!==x){let m=l*u+c*f+h*x+p*E;m<0&&(u=-u,f=-f,x=-x,E=-E,m=-m);let d=1-a;if(m<.9995){let b=Math.acos(m),D=Math.sin(b);d=Math.sin(d*b)/D,a=Math.sin(a*b)/D,l=l*d+u*a,c=c*d+f*a,h=h*d+x*a,p=p*d+E*a}else{l=l*d+u*a,c=c*d+f*a,h=h*d+x*a,p=p*d+E*a;let b=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=b,c*=b,h*=b,p*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=o[s],u=o[s+1],f=o[s+2],x=o[s+3];return e[t]=a*x+h*p+l*f-c*u,e[t+1]=l*x+h*u+c*p-a*f,e[t+2]=c*x+h*f+a*u-l*p,e[t+3]=h*x-a*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(o/2),u=l(i/2),f=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=u*h*p+c*f*x,this._y=c*f*p-u*h*x,this._z=c*h*x+u*f*p,this._w=c*h*p-u*f*x;break;case"YXZ":this._x=u*h*p+c*f*x,this._y=c*f*p-u*h*x,this._z=c*h*x-u*f*p,this._w=c*h*p+u*f*x;break;case"ZXY":this._x=u*h*p-c*f*x,this._y=c*f*p+u*h*x,this._z=c*h*x+u*f*p,this._w=c*h*p-u*f*x;break;case"ZYX":this._x=u*h*p-c*f*x,this._y=c*f*p+u*h*x,this._z=c*h*x-u*f*p,this._w=c*h*p+u*f*x;break;case"YZX":this._x=u*h*p+c*f*x,this._y=c*f*p+u*h*x,this._z=c*h*x-u*f*p,this._w=c*h*p-u*f*x;break;case"XZY":this._x=u*h*p-c*f*x,this._y=c*f*p-u*h*x,this._z=c*h*x+u*f*p,this._w=c*h*p+u*f*x;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=i+a+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(i>a&&i>p){let f=2*Math.sqrt(1+i-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>p){let f=2*Math.sqrt(1+a-i-p);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-i-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-i*c,this._z=o*h+s*c+i*l-r*a,this._w=s*h-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var Ph=class Ph{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),h=2*(a*t-o*r),p=2*(o*i-s*t);return this.x=t+l*c+s*p-a*h,this.y=i+l*h+a*c-o*p,this.z=r+l*p+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;var y=Ph,Ch=new y,yf=new cn;var Dh=class Dh{constructor(e,t,i,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,l,c)}set(e,t,i,r,o,s,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],x=i[8],E=r[0],m=r[3],d=r[6],b=r[1],D=r[4],A=r[7],I=r[2],R=r[5],g=r[8];return o[0]=s*E+a*b+l*I,o[3]=s*m+a*D+l*R,o[6]=s*d+a*A+l*g,o[1]=c*E+h*b+p*I,o[4]=c*m+h*D+p*R,o[7]=c*d+h*A+p*g,o[2]=u*E+f*b+x*I,o[5]=u*m+f*D+x*R,o[8]=u*d+f*A+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-i*o*h+i*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*s-a*c,u=a*l-h*o,f=c*o-s*l,x=t*p+i*u+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/x;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*s)*E,e[3]=u*E,e[4]=(h*t-r*l)*E,e[5]=(r*o-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(s*t-i*o)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var tt=Dh,Lh=new tt;var bf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ef=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){let n={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===It&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===It&&(r.r=bo(r.r),r.g=bo(r.g),r.b=bo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[s].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vo]:{primaries:e,whitePoint:i,transfer:Mo,toXYZ:bf,fromXYZ:Ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yi},outputColorSpaceConfig:{drawingBufferColorSpace:Yi}},[Yi]:{primaries:e,whitePoint:i,transfer:It,toXYZ:bf,fromXYZ:Ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yi}}}),n}var dt=A0();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var as,Wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=ns("canvas")),as.width=e.width,as.height=e.height;let r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ns("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=sr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var R0=0,Wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ih(r[s].image)):o.push(Ih(r[s]))}else o=Ih(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function Ih(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var C0=0,Nh=new y,_i=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=An,r=An,o=Ci,s=In,a=an,l=Ti,c=n.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Cn(),this.name="",this.source=new Wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=Eh;_i.DEFAULT_ANISOTROPY=1;var Uh=class Uh{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],x=l[9],E=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-E)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+E)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let D=(c+1)/2,A=(f+1)/2,I=(d+1)/2,R=(h+u)/4,g=(p+E)/4,w=(x+m)/4;return D>A&&D>I?D<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(D),r=R/i,o=g/i):A>I?A<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),i=R/r,o=w/r):I<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(I),i=g/o,r=w/o),this.set(i,r,o,t),this}let b=Math.sqrt((m-x)*(m-x)+(p-E)*(p-E)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(p-E)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uh.prototype.isVector4=!0;var Xt=Uh;var Xl=class extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=new _i({width:e,height:t,depth:i.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};var di=class extends Xl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};var ls=class extends _i{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xi,this.minFilter=xi,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends _i{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xi,this.minFilter=xi,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zl=class Zl{constructor(e,t,i,r,o,s,a,l,c,h,p,u,f,x,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,l,c,h,p,u,f,x,E,m)}set(e,t,i,r,o,s,a,l,c,h,p,u,f,x,E,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=x,d[11]=E,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),o=1/cs.setFromMatrixColumn(e,1).length(),s=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){let u=s*h,f=s*p,x=a*h,E=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=f+x*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=x+f*c,t[10]=s*l}else if(e.order==="YXZ"){let u=l*h,f=l*p,x=c*h,E=c*p;t[0]=u+E*a,t[4]=x*a-f,t[8]=s*c,t[1]=s*p,t[5]=s*h,t[9]=-a,t[2]=f*a-x,t[6]=E+u*a,t[10]=s*l}else if(e.order==="ZXY"){let u=l*h,f=l*p,x=c*h,E=c*p;t[0]=u-E*a,t[4]=-s*p,t[8]=x+f*a,t[1]=f+x*a,t[5]=s*h,t[9]=E-u*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let u=s*h,f=s*p,x=a*h,E=a*p;t[0]=l*h,t[4]=x*c-f,t[8]=u*c+E,t[1]=l*p,t[5]=E*c+u,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let u=s*l,f=s*c,x=a*l,E=a*c;t[0]=l*h,t[4]=E-u*p,t[8]=x*p+f,t[1]=p,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*p+x,t[10]=u-E*p}else if(e.order==="XZY"){let u=s*l,f=s*c,x=a*l,E=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+E,t[5]=s*h,t[9]=f*p-x,t[2]=x*p-f,t[6]=a*h,t[10]=E*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,L0)}lookAt(e,t,i){let r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Xr.crossVectors(i,Fn),Xr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Xr.crossVectors(i,Fn)),Xr.normalize(),Yl.crossVectors(Fn,Xr),r[0]=Xr.x,r[4]=Yl.x,r[8]=Fn.x,r[1]=Xr.y,r[5]=Yl.y,r[9]=Fn.y,r[2]=Xr.z,r[6]=Yl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],x=i[2],E=i[6],m=i[10],d=i[14],b=i[3],D=i[7],A=i[11],I=i[15],R=r[0],g=r[4],w=r[8],z=r[12],U=r[1],H=r[5],X=r[9],ee=r[13],F=r[2],te=r[6],Q=r[10],$=r[14],G=r[3],j=r[7],V=r[11],de=r[15];return o[0]=s*R+a*U+l*F+c*G,o[4]=s*g+a*H+l*te+c*j,o[8]=s*w+a*X+l*Q+c*V,o[12]=s*z+a*ee+l*$+c*de,o[1]=h*R+p*U+u*F+f*G,o[5]=h*g+p*H+u*te+f*j,o[9]=h*w+p*X+u*Q+f*V,o[13]=h*z+p*ee+u*$+f*de,o[2]=x*R+E*U+m*F+d*G,o[6]=x*g+E*H+m*te+d*j,o[10]=x*w+E*X+m*Q+d*V,o[14]=x*z+E*ee+m*$+d*de,o[3]=b*R+D*U+A*F+I*G,o[7]=b*g+D*H+A*te+I*j,o[11]=b*w+D*X+A*Q+I*V,o[15]=b*z+D*ee+A*$+I*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],f=e[14],x=e[3],E=e[7],m=e[11],d=e[15],b=l*f-c*u,D=a*f-c*p,A=a*u-l*p,I=s*f-c*h,R=s*u-l*h,g=s*p-a*h;return t*(E*b-m*D+d*A)-i*(x*b-m*I+d*R)+r*(x*D-E*I+d*g)-o*(x*A-E*R+m*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(s*h-a*c)-i*(o*h-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],f=e[11],x=e[12],E=e[13],m=e[14],d=e[15],b=t*a-i*s,D=t*l-r*s,A=t*c-o*s,I=i*l-r*a,R=i*c-o*a,g=r*c-o*l,w=h*E-p*x,z=h*m-u*x,U=h*d-f*x,H=p*m-u*E,X=p*d-f*E,ee=u*d-f*m,F=b*ee-D*X+A*H+I*U-R*z+g*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let te=1/F;return e[0]=(a*ee-l*X+c*H)*te,e[1]=(r*X-i*ee-o*H)*te,e[2]=(E*g-m*R+d*I)*te,e[3]=(u*R-p*g-f*I)*te,e[4]=(l*U-s*ee-c*z)*te,e[5]=(t*ee-r*U+o*z)*te,e[6]=(m*A-x*g-d*D)*te,e[7]=(h*g-u*A+f*D)*te,e[8]=(s*X-a*U+c*w)*te,e[9]=(i*U-t*X-o*w)*te,e[10]=(x*R-E*A+d*b)*te,e[11]=(p*A-h*R-f*b)*te,e[12]=(a*z-s*H-l*w)*te,e[13]=(t*H-i*z+r*w)*te,e[14]=(E*D-x*I-m*b)*te,e[15]=(h*I-p*D+u*b)*te,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,h=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,h=s+s,p=a+a,u=o*c,f=o*h,x=o*p,E=s*h,m=s*p,d=a*p,b=l*c,D=l*h,A=l*p,I=i.x,R=i.y,g=i.z;return r[0]=(1-(E+d))*I,r[1]=(f+A)*I,r[2]=(x-D)*I,r[3]=0,r[4]=(f-A)*R,r[5]=(1-(u+d))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(x+D)*g,r[9]=(m-b)*g,r[10]=(1-(u+E))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let s=cs.set(r[0],r[1],r[2]).length(),a=cs.set(r[4],r[5],r[6]).length(),l=cs.set(r[8],r[9],r[10]).length();o<0&&(s=-s),ar.copy(this);let c=1/s,h=1/a,p=1/l;return ar.elements[0]*=c,ar.elements[1]*=c,ar.elements[2]*=c,ar.elements[4]*=h,ar.elements[5]*=h,ar.elements[6]*=h,ar.elements[8]*=p,ar.elements[9]*=p,ar.elements[10]*=p,t.setFromRotationMatrix(ar),i.x=s,i.y=a,i.z=l,this}makePerspective(e,t,i,r,o,s,a=tn,l=!1){let c=this.elements,h=2*o/(t-e),p=2*o/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),x,E;if(l)x=o/(s-o),E=s*o/(s-o);else if(a===tn)x=-(s+o)/(s-o),E=-2*s*o/(s-o);else if(a===wr)x=-s/(s-o),E=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=tn,l=!1){let c=this.elements,h=2/(t-e),p=2/(i-r),u=-(t+e)/(t-e),f=-(i+r)/(i-r),x,E;if(l)x=1/(s-o),E=s/(s-o);else if(a===tn)x=-2/(s-o),E=-(s+o)/(s-o);else if(a===wr)x=-1/(s-o),E=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Zl.prototype.isMatrix4=!0;var at=Zl,cs=new y,ar=new at,P0=new y(0,0,0),L0=new y(1,1,1),Xr=new y,Yl=new y,Fn=new y;var Tf=new at,wf=new cn,Kn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-st(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var D0=0,Af=new y,hs=new cn,Ar=new at,Kl=new y,Va=new y,I0=new y,N0=new cn,Rf=new y(1,0,0),Cf=new y(0,1,0),Pf=new y(0,0,1),Lf={type:"added"},U0={type:"removed"},us={type:"childadded",child:null},Fh={type:"childremoved",child:null},kt=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new y,t=new Kn,i=new cn,r=new y(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new tt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Rf,e)}rotateY(e){return this.rotateOnAxis(Cf,e)}rotateZ(e){return this.rotateOnAxis(Pf,e)}translateOnAxis(e,t){return Af.copy(e).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rf,e)}translateY(e){return this.translateOnAxis(Cf,e)}translateZ(e){return this.translateOnAxis(Pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kl.copy(e):Kl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Va,Kl,this.up):Ar.lookAt(Kl,Va,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Ar),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lf),us.child=e,this.dispatchEvent(us),us.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lf),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*r,o[13]+=i-o[1]*t-o[5]*i-o[9]*r,o[14]+=r-o[2]*t-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];o(e.shapes,p)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),p=s(e.shapes),u=s(e.skeletons),f=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new y(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var F0={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),d=this._getHandJoint(c,E);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function Oh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=Vl(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Oh(s,o,e+1/3),this.g=Oh(s,o,e),this.b=Oh(s,o,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yi){function i(o){o!==void 0&&parseFloat(o)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,t);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yi){let i=Df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yi){return dt.workingToColorSpace(hn.copy(this),e),Math.round(st(hn.r*255,0,255))*65536+Math.round(st(hn.g*255,0,255))*256+Math.round(st(hn.b*255,0,255))}getHexString(e=Yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(hn.copy(this),t);let i=hn.r,r=hn.g,o=hn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let p=s-a;switch(c=h<=.5?p/(s+a):p/(2-s-a),s){case i:l=(r-o)/p+(r<o?6:0);break;case r:l=(o-i)/p+2;break;case o:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Yi){dt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,r=hn.b;return e!==Yi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL($l);let i=os(Yr.h,$l.h,t),r=os(Yr.s,$l.s,t),o=os(Yr.l,$l.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ge;ge.NAMES=Df;var Wa=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xa=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var lr=new y,Rr=new y,Bh=new y,Cr=new y,ds=new y,ps=new y,If=new y,zh=new y,Gh=new y,kh=new y,Hh=new Xt,Vh=new Xt,Wh=new Xt,$n=class n{constructor(e=new y,t=new y,i=new y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),lr.subVectors(e,t),r.cross(lr);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){lr.subVectors(r,t),Rr.subVectors(i,t),Bh.subVectors(e,t);let s=lr.dot(lr),a=lr.dot(Rr),l=lr.dot(Bh),c=Rr.dot(Rr),h=Rr.dot(Bh),p=s*c-a*a;if(p===0)return o.set(0,0,0),null;let u=1/p,f=(c*l-a*h)*u,x=(s*h-a*l)*u;return o.set(1-f-x,x,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,i,r,o,s,a,l){return this.getBarycoord(e,t,i,r,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Cr.x),l.addScaledVector(s,Cr.y),l.addScaledVector(a,Cr.z),l)}static getInterpolatedAttribute(e,t,i,r,o,s){return Hh.setScalar(0),Vh.setScalar(0),Wh.setScalar(0),Hh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,i),Wh.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Hh,o.x),s.addScaledVector(Vh,o.y),s.addScaledVector(Wh,o.z),s}static isFrontFacing(e,t,i,r){return lr.subVectors(i,t),Rr.subVectors(e,t),lr.cross(Rr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return lr.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),lr.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;ds.subVectors(r,i),ps.subVectors(o,i),zh.subVectors(e,i);let l=ds.dot(zh),c=ps.dot(zh);if(l<=0&&c<=0)return t.copy(i);Gh.subVectors(e,r);let h=ds.dot(Gh),p=ps.dot(Gh);if(h>=0&&p<=h)return t.copy(r);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),t.copy(i).addScaledVector(ds,s);kh.subVectors(e,o);let f=ds.dot(kh),x=ps.dot(kh);if(x>=0&&f<=x)return t.copy(o);let E=f*c-l*x;if(E<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(ps,a);let m=h*x-f*p;if(m<=0&&p-h>=0&&f-x>=0)return If.subVectors(o,r),a=(p-h)/(p-h+(f-x)),t.copy(r).addScaledVector(If,a);let d=1/(m+E+u);return s=E*d,a=u*d,t.copy(i).addScaledVector(ds,s).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var un=class{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,cr):cr.fromBufferAttribute(o,s),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Ql.subVectors(this.max,qa),ms.subVectors(e.a,qa),gs.subVectors(e.b,qa),xs.subVectors(e.c,qa),Zr.subVectors(gs,ms),Kr.subVectors(xs,gs),Eo.subVectors(ms,xs);let t=[0,-Zr.z,Zr.y,0,-Kr.z,Kr.y,0,-Eo.z,Eo.y,Zr.z,0,-Zr.x,Kr.z,0,-Kr.x,Eo.z,0,-Eo.x,-Zr.y,Zr.x,0,-Kr.y,Kr.x,0,-Eo.y,Eo.x,0];return!Xh(t,ms,gs,xs,Ql)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,ms,gs,xs,Ql))?!1:(jl.crossVectors(Zr,Kr),t=[jl.x,jl.y,jl.z],Xh(t,ms,gs,xs,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pr=[new y,new y,new y,new y,new y,new y,new y,new y],cr=new y,Jl=new un,ms=new y,gs=new y,xs=new y,Zr=new y,Kr=new y,Eo=new y,qa=new y,Ql=new y,jl=new y,To=new y;function Xh(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){To.fromArray(n,o);let a=r.x*Math.abs(To.x)+r.y*Math.abs(To.y)+r.z*Math.abs(To.z),l=e.dot(To),c=t.dot(To),h=i.dot(To);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pi=new y,ec=new le,O0=0,Sn=class extends Zi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hl,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=e!==void 0?ss(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix3(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix4(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.applyNormalMatrix(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pi.fromBufferAttribute(this,t),Pi.transformDirection(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ka(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ha(e,this.array)}};var _s=class extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vs=class extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var B0=new un,Ya=new y,qh=new y,Ki=class{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):B0.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);let t=Ya.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(qh)),this.expandByPoint(Ya.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var z0=0,Jn=new at,Yh=new kt,Ms=new y,On=new un,Za=new un,$i=new y,Mt=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?vs:_s)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new tt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];On.setFromBufferAttribute(o),this.morphTargetsRelative?($i.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint($i),$i.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint($i)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Za.setFromBufferAttribute(a),this.morphTargetsRelative?($i.addVectors(On.min,Za.min),On.expandByPoint($i),$i.addVectors(On.max,Za.max),On.expandByPoint($i)):(On.expandByPoint(Za.min),On.expandByPoint(Za.max))}On.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)$i.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared($i));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$i.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),$i.add(Ms)),r=Math.max(r,i.distanceToSquared($i))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let a=[],l=[],c=new Uint8Array(i.count);for(let z=0;z<i.count;z++)a[z]=new y,l[z]=new y;let h=new y,p=new y,u=new y,f=new le,x=new le,E=new le,m=new y,d=new y;function b(z,U,H){c[z]=c[U]=c[H]=1,h.fromBufferAttribute(i,z),p.fromBufferAttribute(i,U),u.fromBufferAttribute(i,H),f.fromBufferAttribute(o,z),x.fromBufferAttribute(o,U),E.fromBufferAttribute(o,H),p.sub(h),u.sub(h),x.sub(f),E.sub(f);let X=1/(x.x*E.y-E.x*x.y);isFinite(X)&&(m.copy(p).multiplyScalar(E.y).addScaledVector(u,-x.y).multiplyScalar(X),d.copy(u).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(X),a[z].add(m),a[U].add(m),a[H].add(m),l[z].add(d),l[U].add(d),l[H].add(d))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,U=D.length;z<U;++z){let H=D[z],X=H.start,ee=H.count;for(let F=X,te=X+ee;F<te;F+=3)b(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let A=new y,I=new y,R=new y,g=new y;function w(z){R.fromBufferAttribute(r,z),g.copy(R);let U=a[z];A.copy(U),A.sub(R.multiplyScalar(R.dot(U))).normalize(),I.crossVectors(g,U);let X=I.dot(l[z])<0?-1:1;s.setXYZW(z,A.x,A.y,A.z,X)}for(let z=0,U=i.count;z<U;++z)c[z]&&w(z);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let r=new y,o=new y,s=new y,a=new y,l=new y,c=new y,h=new y,p=new y;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,E),s.fromBufferAttribute(t,m),h.subVectors(s,o),p.subVectors(r,o),h.cross(p),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),o.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,o),p.subVectors(r,o),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$i.fromBufferAttribute(e,t),$i.normalize(),e.setXYZ(t,$i.x,$i.y,$i.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,p=a.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let d=0;d<h;d++)u[x++]=c[f++]}return new Sn(u,h,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let o=e.morphAttributes;for(let c in o){let h=[],p=o[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hl,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Nf(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Cn()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var yn=new y,Ka=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?ss(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),o=this._normalize(o)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){rs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){rs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ka(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ha(e,this.data.array)}};var Zh=new y,G0=new y,k0=new tt,fn=class{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Zh.subVectors(i,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Zh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||k0.getNormalMatrix(e),r=this.coplanarPoint(Zh).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var H0=0,Ji=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Br,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Al,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new fn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var $r=class extends Ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Ss,$a=new y,ys=new y,bs=new y,Es=new le,Ja=new le,Of=new at,ic=new y,Qa=new y,nc=new y,Uf=new le,Kh=new le,Ff=new le,Ts=class extends kt{constructor(e=new $r){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tc(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Ka(i,3,0,!1)),Ss.setAttribute("uv",new Ka(i,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-bs.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let s=this.center;rc(ic.set(-.5,-.5,0),bs,s,ys,r,o),rc(Qa.set(.5,-.5,0),bs,s,ys,r,o),rc(nc.set(.5,.5,0),bs,s,ys,r,o),Uf.set(0,0),Kh.set(1,0),Ff.set(1,1);let a=e.ray.intersectTriangle(ic,Qa,nc,!1,$a);if(a===null&&(rc(Qa.set(-.5,.5,0),bs,s,ys,r,o),Kh.set(0,1),a=e.ray.intersectTriangle(ic,nc,Qa,!1,$a),a===null))return;let l=e.ray.origin.distanceTo($a);l<e.near||l>e.far||t.push({distance:l,point:$a.clone(),uv:$n.getInterpolation($a,ic,Qa,nc,Uf,Kh,Ff,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function rc(n,e,t,i,r,o){Es.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ja.x=o*Es.x-r*Es.y,Ja.y=r*Es.x+o*Es.y):Ja.copy(Es),n.copy(e),n.x+=Ja.x,n.y+=Ja.y,n.applyMatrix4(Of)}var Lr=new y,$h=new y,oc=new y,sc=new y,Bn=class{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$h.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),sc.copy(this.origin).sub($h);let o=e.distanceTo(t)*.5,s=-this.direction.dot(oc),a=sc.dot(this.direction),l=-sc.dot(oc),c=sc.lengthSq(),h=Math.abs(1-s*s),p,u,f,x;if(h>0)if(p=s*l-a,u=s*a-l,x=o*h,p>=0)if(u>=-x)if(u<=x){let E=1/h;p*=E,u*=E,f=p*(p+s*u+2*a)+u*(s*p+u+2*l)+c}else u=o,p=Math.max(0,-(s*u+a)),f=-p*p+u*(u+2*l)+c;else u=-o,p=Math.max(0,-(s*u+a)),f=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-s*o+a)),u=p>0?-o:Math.min(Math.max(-o,-l),o),f=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(p=Math.max(0,-(s*o+a)),u=p>0?o:Math.min(Math.max(-o,-l),o),f=-p*p+u*(u+2*l)+c);else u=s>0?-o:o,p=Math.max(0,-(s*u+a)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy($h).addScaledVector(oc,u),f}intersectSphere(e,t){if(e.radius<0)return null;Lr.subVectors(e.center,this.origin);let i=Lr.dot(this.direction),r=Lr.dot(Lr)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(o=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(o=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,i,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=e.x-s.x,u=e.y-s.y,f=e.z-s.z,x=t.x-s.x,E=t.y-s.y,m=t.z-s.z,d=i.x-s.x,b=i.y-s.y,D=i.z-s.z,A=Math.abs(l),I=Math.abs(c),R=Math.abs(h),g,w,z,U,H,X,ee,F,te,Q,$,G;if(A>=I&&A>=R?(z=l,X=p,te=x,G=d,l>=0?(g=c,w=h,U=u,H=f,ee=E,F=m,Q=b,$=D):(g=h,w=c,U=f,H=u,ee=m,F=E,Q=D,$=b)):I>=R?(z=c,X=u,te=E,G=b,c>=0?(g=h,w=l,U=f,H=p,ee=m,F=x,Q=D,$=d):(g=l,w=h,U=p,H=f,ee=x,F=m,Q=d,$=D)):(z=h,X=f,te=m,G=D,h>=0?(g=l,w=c,U=p,H=u,ee=x,F=E,Q=d,$=b):(g=c,w=l,U=u,H=p,ee=E,F=x,Q=b,$=d)),z===0)return null;let j=g/z,V=w/z,de=1/z,Ge=U-j*X,Be=H-V*X,ne=ee-j*te,Le=F-V*te,We=Q-j*G,Qe=$-V*G,Fe=We*Le-Qe*ne,gt=Ge*Qe-Be*We,vi=ne*Be-Le*Ge;if(r){if(Fe<0||gt<0||vi<0)return null}else if((Fe<0||gt<0||vi<0)&&(Fe>0||gt>0||vi>0))return null;let rt=Fe+gt+vi;if(rt===0)return null;let Ht=de*(Fe*X+gt*te+vi*G);return(rt>0?Ht<0:Ht>0)?null:this.at(Ht/rt,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var Li=class extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bf=new at,wo=new Bn,ac=new Ki,zf=new y,lc=new y,cc=new y,hc=new y,Jh=new y,uc=new y,Gf=new y,fc=new y,ct=class extends kt{constructor(e=new Mt,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){uc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],p=o[l];h!==0&&(Jh.fromBufferAttribute(p,e),s?uc.addScaledVector(Jh,h):uc.addScaledVector(Jh.sub(t),h))}t.add(uc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(o),wo.copy(e.ray).recast(e.near),!(ac.containsPoint(wo.origin)===!1&&(wo.intersectSphere(ac,zf)===null||wo.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(Bf.copy(o).invert(),wo.copy(e.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&wo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wo)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,p=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,E=u.length;x<E;x++){let m=u[x],d=s[m.materialIndex],b=Math.max(m.start,f.start),D=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let A=b,I=D;A<I;A+=3){let R=a.getX(A),g=a.getX(A+1),w=a.getX(A+2);r=dc(this,d,e,i,c,h,p,R,g,w),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=x,d=E;m<d;m+=3){let b=a.getX(m),D=a.getX(m+1),A=a.getX(m+2);r=dc(this,s,e,i,c,h,p,b,D,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,E=u.length;x<E;x++){let m=u[x],d=s[m.materialIndex],b=Math.max(m.start,f.start),D=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=b,I=D;A<I;A+=3){let R=A,g=A+1,w=A+2;r=dc(this,d,e,i,c,h,p,R,g,w),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=x,d=E;m<d;m+=3){let b=m,D=m+1,A=m+2;r=dc(this,s,e,i,c,h,p,b,D,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function V0(n,e,t,i,r,o,s,a){let l;if(e.side===mi?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Xn,a),l===null)return null;fc.copy(a),fc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fc);return c<t.near||c>t.far?null:{distance:c,point:fc.clone(),object:n}}function dc(n,e,t,i,r,o,s,a,l,c){n.getVertexPosition(a,lc),n.getVertexPosition(l,cc),n.getVertexPosition(c,hc);let h=V0(n,e,t,i,lc,cc,hc,Gf);if(h){let p=new y;$n.getBarycoord(Gf,lc,cc,hc,p),r&&(h.uv=$n.getInterpolatedAttribute(r,a,l,c,p,new le)),o&&(h.uv1=$n.getInterpolatedAttribute(o,a,l,c,p,new le)),s&&(h.normal=$n.getInterpolatedAttribute(s,a,l,c,p,new y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new y,materialIndex:0};$n.getNormal(lc,cc,hc,u.normal),h.face=u,h.barycoord=p}return h}var ws=class extends _i{constructor(e=null,t=1,i=1,r,o,s,a,l,c=xi,h=xi,p,u){super(null,s,a,l,c,h,r,o,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ja=class extends Sn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var As=new at,kf=new at,pc=[],Hf=new un,W0=new at,el=new ct,tl=new Ki,Ao=class extends ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ja(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,W0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),Hf.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Hf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),tl.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(tl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,s=e*o+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(el.geometry=this.geometry,el.material=this.material,el.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),e.ray.intersectsSphere(tl)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,As),kf.multiplyMatrices(i,As),el.matrixWorld=kf,el.raycast(e,pc);for(let s=0,a=pc.length;s<a;s++){let l=pc[s];l.instanceId=o,l.object=this,t.push(l)}pc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ja(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ws(new Float32Array(r*this.count),r,this.count,Zo,Oi));let o=this.morphTexture.source.data.data,s=0;for(let c=0;c<i.length;c++)s+=i[c];let a=this.geometry.morphTargetsRelative?1:1-s,l=r*e;return o[l]=a,o.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};var Ro=new Ki,X0=new le(.5,.5),mc=new y,hr=class{constructor(e=new fn,t=new fn,i=new fn,r=new fn,o=new fn,s=new fn){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tn,i=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],p=o[5],u=o[6],f=o[7],x=o[8],E=o[9],m=o[10],d=o[11],b=o[12],D=o[13],A=o[14],I=o[15];if(r[0].setComponents(c-s,f-h,d-x,I-b).normalize(),r[1].setComponents(c+s,f+h,d+x,I+b).normalize(),r[2].setComponents(c+a,f+p,d+E,I+D).normalize(),r[3].setComponents(c-a,f-p,d-E,I-D).normalize(),i)r[4].setComponents(l,u,m,A).normalize(),r[5].setComponents(c-l,f-u,d-m,I-A).normalize();else if(r[4].setComponents(c-l,f-u,d-m,I-A).normalize(),t===tn)r[5].setComponents(c+l,f+u,d+m,I+A).normalize();else if(t===wr)r[5].setComponents(l,u,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ro)}intersectsSprite(e){Ro.center.set(0,0,0);let t=X0.distanceTo(e.center);return Ro.radius=.7071067811865476+t,Ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ro)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(mc.x=r.normal.x>0?e.max.x:e.min.x,mc.y=r.normal.y>0?e.max.y:e.min.y,mc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vf=new at,gc=class n{constructor(){this.coordinateSystem=tn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let o=t[r];Vf.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),i[r]===void 0&&(i[r]=new hr),i[r].setFromProjectionMatrix(Vf,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new hr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Pn=class extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var vc=new y,Mc=new y,Wf=new at,il=new Bn,xc=new Ki,Qh=new y,Xf=new y,Sc=class extends kt{constructor(e=new Mt,t=new Pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)vc.fromBufferAttribute(t,r-1),Mc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vc.distanceTo(Mc);e.setAttribute("lineDistance",new Ke(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(r),xc.radius+=o,e.ray.intersectsSphere(xc)===!1)return;Wf.copy(r).invert(),il.copy(e.ray).applyMatrix4(Wf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let E=f,m=x-1;E<m;E+=c){let d=h.getX(E),b=h.getX(E+1),D=_c(this,e,il,l,d,b,E);D&&t.push(D)}if(this.isLineLoop){let E=h.getX(x-1),m=h.getX(f),d=_c(this,e,il,l,E,m,x-1);d&&t.push(d)}}else{let f=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let E=f,m=x-1;E<m;E+=c){let d=_c(this,e,il,l,E,E+1,E);d&&t.push(d)}if(this.isLineLoop){let E=_c(this,e,il,l,x-1,f,x-1);E&&t.push(E)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function _c(n,e,t,i,r,o,s){let a=n.geometry.attributes.position;if(vc.fromBufferAttribute(a,r),Mc.fromBufferAttribute(a,o),t.distanceSqToSegment(vc,Mc,Qh,Xf)>i)return;Qh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Qh);if(!(c<e.near||c>e.far))return{distance:c,point:Xf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var qf=new y,Yf=new y,Jr=class extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)qf.fromBufferAttribute(t,r),Yf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qf.distanceTo(Yf);e.setAttribute("lineDistance",new Ke(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var yc=class extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Zf=new at,jh=new Bn,bc=new Ki,Ec=new y,Co=class extends kt{constructor(e=new Mt,t=new yc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=o,e.ray.intersectsSphere(bc)===!1)return;Zf.copy(r).invert(),jh.copy(e.ray).applyMatrix4(Zf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){let u=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let x=u,E=f;x<E;x++){let m=c.getX(x);Ec.fromBufferAttribute(p,m),Kf(Ec,m,l,r,e,t,this)}}else{let u=Math.max(0,s.start),f=Math.min(p.count,s.start+s.count);for(let x=u,E=f;x<E;x++)Ec.fromBufferAttribute(p,x),Kf(Ec,x,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Kf(n,e,t,i,r,o,s){let a=jh.distanceSqToPoint(n);if(a<t){let l=new y;jh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Rs=class extends _i{constructor(e=[],t=_r,i,r,o,s,a,l,c,h){super(e,t,i,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Cs=class extends _i{constructor(e,t,i,r,o,s,a,l,c){super(e,t,i,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zn=class extends _i{constructor(e,t,i=qi,r,o,s,a=xi,l=xi,c,h=Rn,p=1){if(h!==Rn&&h!==Nn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,r,o,s,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var Ps=class extends zn{constructor(e,t=qi,i=_r,r,o,s=xi,a=xi,l,c=Rn){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,o,s,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var Ls=class extends _i{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var bn=class n extends Mt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=0,f=0;x("z","y","x",-1,-1,i,t,e,s,o,0),x("z","y","x",1,-1,i,t,-e,s,o,1),x("x","z","y",1,1,e,i,t,r,s,2),x("x","z","y",1,-1,e,i,-t,r,s,3),x("x","y","z",1,-1,e,t,i,r,o,4),x("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(p,2));function x(E,m,d,b,D,A,I,R,g,w,z){let U=A/g,H=I/w,X=A/2,ee=I/2,F=R/2,te=g+1,Q=w+1,$=0,G=0,j=new y;for(let V=0;V<Q;V++){let de=V*H-ee;for(let Ge=0;Ge<te;Ge++){let Be=Ge*U-X;j[E]=Be*b,j[m]=de*D,j[d]=F,c.push(j.x,j.y,j.z),j[E]=0,j[m]=0,j[d]=R>0?1:-1,h.push(j.x,j.y,j.z),p.push(Ge/g),p.push(1-V/w),$+=1}}for(let V=0;V<w;V++)for(let de=0;de<g;de++){let Ge=u+de+te*V,Be=u+de+te*(V+1),ne=u+(de+1)+te*(V+1),Le=u+(de+1)+te*V;l.push(Ge,Be,Le),l.push(Be,ne,Le),G+=6}a.addGroup(f,G,z),f+=G,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var nl=class n extends Mt{constructor(e=1,t=1,i=4,r=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:o},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),o=Math.max(1,Math.floor(o));let s=[],a=[],l=[],c=[],h=t/2,p=Math.PI/2*e,u=t,f=2*p+u,x=i*2+o,E=r+1,m=new y,d=new y;for(let b=0;b<=x;b++){let D=0,A=0,I=0,R=0;if(b<=i){let z=b/i,U=z*Math.PI/2;A=-h-e*Math.cos(U),I=e*Math.sin(U),R=-e*Math.cos(U),D=z*p}else if(b<=i+o){let z=(b-i)/o;A=-h+z*t,I=e,R=0,D=p+z*u}else{let z=(b-i-o)/i,U=z*Math.PI/2;A=h+e*Math.sin(U),I=e*Math.cos(U),R=e*Math.sin(U),D=p+u+z*p}let g=Math.max(0,Math.min(1,D/f)),w=0;b===0?w=.5/r:b===x&&(w=-.5/r);for(let z=0;z<=r;z++){let U=z/r,H=U*Math.PI*2,X=Math.sin(H),ee=Math.cos(H);d.x=-I*ee,d.y=A,d.z=I*X,a.push(d.x,d.y,d.z),m.set(-I*ee,R,I*X),m.normalize(),l.push(m.x,m.y,m.z),c.push(U+w,g)}if(b>0){let z=(b-1)*E;for(let U=0;U<r;U++){let H=z+U,X=z+U+1,ee=b*E+U,F=b*E+U+1;s.push(H,X,ee),s.push(X,F,ee)}}}this.setIndex(s),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Tc=class n extends Mt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new y,h=new le;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let f=i+p/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[u]/e+1)/2,h.y=(s[u+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=t;p++)o.push(p,p+1,0);this.setIndex(o),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Ds=class n extends Mt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),o=Math.floor(o);let h=[],p=[],u=[],f=[],x=0,E=[],m=i/2,d=0;b(),s===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(h),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function b(){let A=new y,I=new y,R=0,g=(t-e)/i;for(let w=0;w<=o;w++){let z=[],U=w/o,H=U*(t-e)+e;for(let X=0;X<=r;X++){let ee=X/r,F=ee*l+a,te=Math.sin(F),Q=Math.cos(F);I.x=H*te,I.y=-U*i+m,I.z=H*Q,p.push(I.x,I.y,I.z),A.set(te,g,Q).normalize(),u.push(A.x,A.y,A.z),f.push(ee,1-U),z.push(x++)}E.push(z)}for(let w=0;w<r;w++)for(let z=0;z<o;z++){let U=E[z][w],H=E[z+1][w],X=E[z+1][w+1],ee=E[z][w+1];(e>0||z!==0)&&(h.push(U,H,ee),R+=3),(t>0||z!==o-1)&&(h.push(H,X,ee),R+=3)}c.addGroup(d,R,0),d+=R}function D(A){let I=x,R=new le,g=new y,w=0,z=A===!0?e:t,U=A===!0?1:-1;for(let X=1;X<=r;X++)p.push(0,m*U,0),u.push(0,U,0),f.push(.5,.5),x++;let H=x;for(let X=0;X<=r;X++){let F=X/r*l+a,te=Math.cos(F),Q=Math.sin(F);g.x=z*Q,g.y=m*U,g.z=z*te,p.push(g.x,g.y,g.z),u.push(0,U,0),R.x=te*.5+.5,R.y=Q*.5*U+.5,f.push(R.x,R.y),x++}for(let X=0;X<r;X++){let ee=I+X,F=H+X;A===!0?h.push(F,F+1,ee):h.push(F+1,F,ee),w+=3}c.addGroup(d,w,A===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wc=new y,Ac=new y,eu=new y,Rc=new $n,rl=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),o=Math.cos(Vr*t),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],h=["a","b","c"],p=new Array(3),u=new Map,f=[];for(let x=0;x<l;x+=3){s?(c[0]=s.getX(x),c[1]=s.getX(x+1),c[2]=s.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:E,b:m,c:d}=Rc;if(E.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Rc.getNormal(eu),p[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let b=0;b<3;b++){let D=(b+1)%3,A=p[b],I=p[D],R=Rc[h[b]],g=Rc[h[D]],w=`${A}_${I}`,z=`${I}_${A}`,U=u.get(z);U?(eu.dot(U.normal)<=o&&(f.push(R.x,R.y,R.z),f.push(g.x,g.y,g.z)),u.set(z,null)):u.has(w)||u.set(w,{index0:c[b],index1:c[D],normal:eu.clone()})}}for(let x of u.values())if(x){let{index0:E,index1:m}=x;wc.fromBufferAttribute(a,E),Ac.fromBufferAttribute(a,m),f.push(wc.x,wc.y,wc.z),f.push(Ac.x,Ac.y,Ac.z)}this.setAttribute("position",new Ke(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var su={};u0(su,{ArcCurve:()=>Cc,CatmullRomCurve3:()=>Ns,CubicBezierCurve:()=>Pc,CubicBezierCurve3:()=>Lc,EllipseCurve:()=>Is,LineCurve:()=>Dc,LineCurve3:()=>Ic,QuadraticBezierCurve:()=>Nc,QuadraticBezierCurve3:()=>Us,SplineCurve:()=>Uc});var Di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,o=i.length,s;t?s=t:s=e*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(o-1);let h=i[r],u=i[r+1]-h,f=(s-h)/u;return(r+f)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let s=this.getPoint(r),a=this.getPoint(o),l=t||(s.isVector2?new le:new y);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new y,r=[],o=[],s=[],a=new y,l=new at;for(let f=0;f<=e;f++){let x=f/e;r[f]=this.getTangentAt(x,new y)}o[0]=new y,s[0]=new y;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(st(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,x))}s[f].crossVectors(r[f],o[f])}if(t===!0){let f=Math.acos(st(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let x=1;x<=e;x++)o[x].applyMatrix4(l.makeRotationAxis(r[x],f*x)),s[x].crossVectors(r[x],o[x])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};var Is=class extends Di{constructor(e=0,t=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let i=t,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);let a=this.aStartAngle+e*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};var Cc=class extends Is{constructor(e,t,i,r,o,s){super(e,t,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}};function ru(){let n=0,e=0,t=0,i=0;function r(o,s,a,l){n=o,e=a,t=-3*o+3*s-2*a-l,i=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,h,p){let u=(s-o)/c-(a-o)/(c+h)+(a-s)/h,f=(a-s)/h-(l-s)/(h+p)+(l-a)/p;u*=h,f*=h,r(s,a,u,f)},calc:function(o){let s=o*o,a=s*o;return n+e*o+t*s+i*a}}}var $f=new y,Jf=new y,tu=new ru,iu=new ru,nu=new ru,Ns=class extends Di{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new y){let i=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e,a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%o]:(Jf.subVectors(r[0],r[1]).add(r[0]),c=Jf);let p=r[a%o],u=r[(a+1)%o];if(this.closed||a+2<o?h=r[(a+2)%o]:($f.subVectors(r[o-1],r[o-2]).add(r[o-1]),h=$f),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),E=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),x<1e-4&&(x=E),m<1e-4&&(m=E),tu.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,x,E,m),iu.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,x,E,m),nu.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,x,E,m)}else this.curveType==="catmullrom"&&(tu.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),iu.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),nu.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(tu.calc(l),iu.calc(l),nu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new y().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ou(n,e,t,i,r){let o=(i-e)*.5,s=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+o+s)*l+(-3*t+3*i-2*o-s)*a+o*n+t}function q0(n,e){let t=1-n;return t*t*e}function Y0(n,e){return 2*(1-n)*n*e}function Z0(n,e){return n*n*e}function Po(n,e,t,i){return q0(n,e)+Y0(n,t)+Z0(n,i)}function K0(n,e){let t=1-n;return t*t*t*e}function $0(n,e){let t=1-n;return 3*t*t*n*e}function J0(n,e){return 3*(1-n)*n*n*e}function Q0(n,e){return n*n*n*e}function Lo(n,e,t,i,r){return K0(n,e)+$0(n,t)+J0(n,i)+Q0(n,r)}var Pc=class extends Di{constructor(e=new le,t=new le,i=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new le){let i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(Lo(e,r.x,o.x,s.x,a.x),Lo(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var Lc=class extends Di{constructor(e=new y,t=new y,i=new y,r=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new y){let i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(Lo(e,r.x,o.x,s.x,a.x),Lo(e,r.y,o.y,s.y,a.y),Lo(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var Dc=class extends Di{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Ic=class extends Di{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Nc=class extends Di{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(Po(e,r.x,o.x,s.x),Po(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Us=class extends Di{constructor(e=new y,t=new y,i=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new y){let i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(Po(e,r.x,o.x,s.x),Po(e,r.y,o.y,s.y),Po(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Uc=class extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],p=r[s>r.length-3?r.length-1:s+2];return i.set(ou(a,l.x,c.x,h.x,p.x),ou(a,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}};var Fs=class n extends Mt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=st(r,0,Math.PI*2);let o=[],s=[],a=[],l=[],c=[],h=1/t,p=new y,u=new le,f=new y,x=new y,E=new y,m=0,d=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,f.x=d*1,f.y=-m,f.z=d*0,E.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:E.normalize(),l.push(E.x,E.y,E.z);break;default:m=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,f.x=d*1,f.y=-m,f.z=d*0,x.copy(f),f.x+=E.x,f.y+=E.y,f.z+=E.z,f.normalize(),l.push(f.x,f.y,f.z),E.copy(x)}for(let b=0;b<=t;b++){let D=i+b*h*r,A=Math.sin(D),I=Math.cos(D);for(let R=0;R<=e.length-1;R++){p.x=e[R].x*A,p.y=e[R].y,p.z=e[R].x*I,s.push(p.x,p.y,p.z),u.x=b/t,u.y=R/(e.length-1),a.push(u.x,u.y);let g=l[3*R+0]*A,w=l[3*R+1],z=l[3*R+0]*I;c.push(g,w,z)}}for(let b=0;b<t;b++)for(let D=0;D<e.length-1;D++){let A=D+b*e.length,I=A,R=A+e.length,g=A+e.length+1,w=A+1;o.push(I,R,w),o.push(g,w,R)}this.setIndex(o),this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var ur=class n extends Mt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,u=t/l,f=[],x=[],E=[],m=[];for(let d=0;d<h;d++){let b=d*u-s;for(let D=0;D<c;D++){let A=D*p-o;x.push(A,-b,0),E.push(0,0,1),m.push(D/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){let D=b+c*d,A=b+c*(d+1),I=b+1+c*(d+1),R=b+1+c*d;f.push(D,A,R),f.push(A,I,R)}this.setIndex(f),this.setAttribute("position",new Ke(x,3)),this.setAttribute("normal",new Ke(E,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Dr=class n extends Mt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(s+a,Math.PI),c=0,h=[],p=new y,u=new y,f=[],x=[],E=[],m=[];for(let d=0;d<=i;d++){let b=[],D=d/i,A=s+D*a,I=e*Math.cos(A),R=Math.sqrt(e*e-I*I),g=0;d===0&&s===0?g=.5/t:d===i&&l===Math.PI&&(g=-.5/t);for(let w=0;w<=t;w++){let z=w/t,U=r+z*o;p.x=-R*Math.cos(U),p.y=I,p.z=R*Math.sin(U),x.push(p.x,p.y,p.z),u.copy(p).normalize(),E.push(u.x,u.y,u.z),m.push(z+g,1-D),b.push(c++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){let D=h[d][b+1],A=h[d][b],I=h[d+1][b],R=h[d+1][b+1];(d!==0||s>0)&&f.push(D,A,R),(d!==i-1||l<Math.PI)&&f.push(A,I,R)}this.setIndex(f),this.setAttribute("position",new Ke(x,3)),this.setAttribute("normal",new Ke(E,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fc=class n extends Mt{constructor(e=new Us(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),t=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:o};let s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new y,l=new y,c=new le,h=new y,p=[],u=[],f=[],x=[];E(),this.setIndex(x),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function E(){for(let D=0;D<t;D++)m(D);m(o===!1?t:0),b(),d()}function m(D){h=e.getPointAt(D/t,h);let A=s.normals[D],I=s.binormals[D];for(let R=0;R<=r;R++){let g=R/r*Math.PI*2,w=Math.sin(g),z=-Math.cos(g);l.x=z*A.x+w*I.x,l.y=z*A.y+w*I.y,l.z=z*A.z+w*I.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let D=1;D<=t;D++)for(let A=1;A<=r;A++){let I=(r+1)*(D-1)+(A-1),R=(r+1)*D+(A-1),g=(r+1)*D+A,w=(r+1)*(D-1)+A;x.push(I,R,w),x.push(R,g,w)}}function b(){for(let D=0;D<=t;D++)for(let A=0;A<=r;A++)c.x=D/t,c.y=A/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new su[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ir(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Qf(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Qf(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][i]=o}else e[t][i]=r.slice();else e[t][i]=r}}return e}function dn(n){let e={};for(let t=0;t<n.length;t++){let i=Ir(n[t]);for(let r in i)e[r]=i[r]}return e}function Qf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Oc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var vr={clone:Ir,merge:dn};var ed=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var td=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var Qt=class extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new at().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var Do=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Qr=class extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bc=class extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var zc=class extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var jr=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ol=class extends jr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var au=new at,id=new y,nd=new y,Os=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){au.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(au,e.coordinateSystem,e.reversedDepth);let o=this._frameExtents,s=r?r.z/o.x:1,a=r?r.w/o.y:1,l=r?r.x/o.x:0,c=r?r.y/o.y:0;e.coordinateSystem===wr||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Gc=new y,kc=new cn,Mr=new y,Bs=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gc,kc,Mr),Mr.x===1&&Mr.y===1&&Mr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,kc,Mr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gc,kc,Mr),Mr.x===1&&Mr.y===1&&Mr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,kc,Mr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var eo=new y,rd=new le,od=new le,Ii=class extends Bs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){eo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(eo.x,eo.y).multiplyScalar(-e/eo.z),eo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(eo.x,eo.y).multiplyScalar(-e/eo.z)}getViewSize(e,t){return this.getViewBounds(e,rd,od),t.subVectors(od,rd)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Hc=class extends Os{constructor(){super(new Ii(90,1,.5,500)),this.isPointLightShadow=!0}};var zs=class extends jr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Nr=class extends Bs{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Vc=class extends Os{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var Gs=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Vc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ks=-90,Hs=1,Io=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ii(ks,Hs,e,t);r.layers=this.layers,this.add(r);let o=new Ii(ks,Hs,e,t);o.layers=this.layers,this.add(o);let s=new Ii(ks,Hs,e,t);s.layers=this.layers,this.add(s);let a=new Ii(ks,Hs,e,t);a.layers=this.layers,this.add(a);let l=new Ii(ks,Hs,e,t);l.layers=this.layers,this.add(l);let c=new Ii(ks,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}};var Wc=class extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var sl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=j0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function j0(){this._document.hidden===!1&&this.reset()}var sd=new at,al=class{constructor(e,t,i=0,r=1/0){this.ray=new Bn(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sd),this}intersectObject(e,t=!0,i=[]){return lu(e,this,i,t),i.sort(ad),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)lu(e[r],this,i,t);return i.sort(ad),i}};function ad(n,e){return n.distance-e.distance}function lu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let s=0,a=o.length;s<a;s++)lu(o[s],e,t,!0)}}var Vs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ll=class extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function cu(n,e,t,i){let r=ex(i);switch(t){case Fl:return n*e;case Zo:return n*e/r.components*r.byteLength;case Ko:return n*e/r.components*r.byteLength;case Un:return n*e*2/r.components*r.byteLength;case $o:return n*e*2/r.components*r.byteLength;case Ol:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case Jo:return n*e*4/r.components*r.byteLength;case Qo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case es:case ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ha:case fa:return Math.max(n,16)*Math.max(e,8)/4;case ca:case ua:return Math.max(n,8)*Math.max(e,8)/2;case da:case pa:case ga:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ma:case xo:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Na:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _o:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ex(n){switch(n){case Ti:case Dl:return{byteLength:1,components:1};case Tr:case Il:case fi:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case qi:case Xo:case Oi:return{byteLength:4,components:1};case Nl:case Ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xc(){let n=null,e=!1,t=null,i=null;function r(o,s){i=n.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function ld(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){let h=l.array,p=l.updateRanges;if(n.bindBuffer(c,a),p.length===0)n.bufferSubData(c,0,h);else{p.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<p.length;f++){let x=p[u],E=p[f];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++u,p[u]=E)}p.length=u+1;for(let f=0,x=p.length;f<x;f++){let E=p[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var cd=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var hd=`
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
`;var ud=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var fd=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var dd=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var pd=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var md=`
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
`;var gd=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var xd=`
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
`;var _d=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var vd=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Md=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Sd=`

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

`;var yd=`

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

`;var bd=`
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
`;var Ed=`
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
`;var Td=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var wd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Ad=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Rd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Cd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Pd=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Ld=`
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
`;var Dd=`
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
`;var Id=`

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
`;var Nd=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Ud=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Fd=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Od=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Bd=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var zd=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Gd=`
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
`;var kd=`
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
`;var Hd=`
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
`;var Vd=`
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
`;var Wd=`
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
`;var Xd=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var qd=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Yd=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var Zd=`
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
`;var Kd=`

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
`;var $d=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var Jd=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var Qd=`
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
`;var jd=`
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
`;var ep=`
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
`;var tp=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var ip=`
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
`;var np=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var rp=`
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
`;var op=`
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
`;var sp=`

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
`;var ap=`
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
`;var lp=`
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
`;var cp=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var hp=`
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
`;var up=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var fp=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var dp=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var pp=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var mp=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var gp=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var xp=`
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
`;var _p=`
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
`;var vp=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Mp=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Sp=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var yp=`
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
`;var bp=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Ep=`
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
`;var Tp=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var wp=`
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

`;var Ap=`

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
`;var Rp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Cp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Pp=`
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
`;var Lp=`
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
`;var Dp=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Ip=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Np=`

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
`;var Up=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Fp=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Op=`
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
`;var Bp=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var zp=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Gp=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var kp=`
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
`;var Hp=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Vp=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Wp=`
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
`;var Xp=`

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
`;var qp=`

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


`;var Yp=`
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
`;var Zp=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Kp=`
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
`;var $p=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var Jp=`
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
`;var Qp=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var jp=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var em=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var tm=`
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
`;var im=`
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
`;var nm=`
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
`;var rm=`
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
`;var om=`
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
`;var sm=`
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
`;var am=`
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
`;var lm=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,cm=`
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
`;var hm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,um=`

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
`;var fm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,dm=`
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
`;var pm=`
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
`,mm=`
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
`;var gm=`
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
`,xm=`
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
`;var _m=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,vm=`
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
`;var Mm=`
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
`,Sm=`
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
`;var ym=`
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
`,bm=`
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
`;var Em=`
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
`,Tm=`
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
`;var wm=`
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
`,Am=`
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
`;var Rm=`
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
`,Cm=`
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
`;var Pm=`
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
`,Lm=`
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
`;var Dm=`
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
`,Im=`
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
`;var Nm=`
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
`,Um=`
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
`;var Fm=`
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
`,Om=`
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
`;var Bm=`
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
`,zm=`
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
`;var Gm=`
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
`,km=`
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
`;var St={alphahash_fragment:cd,alphahash_pars_fragment:hd,alphamap_fragment:ud,alphamap_pars_fragment:fd,alphatest_fragment:dd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:xd,batching_vertex:_d,begin_vertex:vd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:yd,bumpmap_pars_fragment:bd,clipping_planes_fragment:Ed,clipping_planes_pars_fragment:Td,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Ad,color_fragment:Rd,color_pars_fragment:Cd,color_pars_vertex:Pd,color_vertex:Ld,common:Dd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Nd,displacementmap_vertex:Ud,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:Bd,colorspace_pars_fragment:zd,envmap_fragment:Gd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Hd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:ep,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Yd,fog_pars_fragment:Zd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:$d,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Qd,lights_pars_begin:jd,lights_toon_fragment:tp,lights_toon_pars_fragment:ip,lights_phong_fragment:np,lights_phong_pars_fragment:rp,lights_physical_fragment:op,lights_physical_pars_fragment:sp,lights_fragment_begin:ap,lights_fragment_maps:lp,lights_fragment_end:cp,lightprobes_pars_fragment:hp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:xp,map_particle_pars_fragment:_p,metalnessmap_fragment:vp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:yp,morphnormal_vertex:bp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Tp,normal_fragment_begin:wp,normal_fragment_maps:Ap,normal_pars_fragment:Rp,normal_pars_vertex:Cp,normal_vertex:Pp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Up,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:Gp,dithering_pars_fragment:kp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Zp,skinning_pars_vertex:Kp,skinning_vertex:$p,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:jp,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:im,transmission_pars_fragment:nm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:sm,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:fm,cube_frag:dm,depth_vert:pm,depth_frag:mm,distance_vert:gm,distance_frag:xm,equirect_vert:_m,equirect_frag:vm,linedashed_vert:Mm,linedashed_frag:Sm,meshbasic_vert:ym,meshbasic_frag:bm,meshlambert_vert:Em,meshlambert_frag:Tm,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Im,meshtoon_vert:Nm,meshtoon_frag:Um,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:Gm,sprite_frag:km};var Ue={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}};var Qn={basic:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:dn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:dn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ge(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:dn([Ue.points,Ue.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:dn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:dn([Ue.common,Ue.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:dn([Ue.sprite,Ue.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:dn([Ue.common,Ue.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:dn([Ue.lights,Ue.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Qn.physical={uniforms:dn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var qc={r:0,b:0,g:0},_x=new at,Hm=new tt;Hm.set(-1,0,0,0,1,0,0,0,1);function Vm(n,e,t,i,r,o){let s=new ge(0),a=r===!0?0:1,l,c,h=null,p=0,u=null;function f(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){let A=b.backgroundBlurriness>0;D=e.get(D,A)}return D}function x(b){let D=!1,A=f(b);A===null?m(s,a):A&&A.isColor&&(m(A,1),D=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(b,D){let A=f(D);A&&A.isCubeTexture?(c===void 0&&(c=new ct(new bn(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Ir(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(D.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hm),c.material.toneMapped=dt.getTransfer(A.colorSpace)!==It,(h!==A||p!==A.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,p=A.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ct(new ur(2,2),new Qt({name:"BackgroundMaterial",uniforms:Ir(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=dt.getTransfer(A.colorSpace)!==It,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||p!==A.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,p=A.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,D){b.getRGB(qc,Oc(n)),t.buffers.color.setClear(qc.r,qc.g,qc.b,D,o)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,D=1){s.set(b),a=D,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(s,a)},render:x,addToRenderList:E,dispose:d}}function Wm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),o=r,s=!1;function a(H,X,ee,F,te){let Q=!1,$=p(H,F,ee,X);o!==$&&(o=$,c(o.object)),Q=f(H,F,ee,te),Q&&x(H,F,ee,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,A(H,X,ee,F),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(H){return n.bindVertexArray(H)}function h(H){return n.deleteVertexArray(H)}function p(H,X,ee,F){let te=F.wireframe===!0,Q=i[X.id];Q===void 0&&(Q={},i[X.id]=Q);let $=H.isInstancedMesh===!0?H.id:0,G=Q[$];G===void 0&&(G={},Q[$]=G);let j=G[ee.id];j===void 0&&(j={},G[ee.id]=j);let V=j[te];return V===void 0&&(V=u(l()),j[te]=V),V}function u(H){let X=[],ee=[],F=[];for(let te=0;te<t;te++)X[te]=0,ee[te]=0,F[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ee,attributeDivisors:F,object:H,attributes:{},index:null}}function f(H,X,ee,F){let te=o.attributes,Q=X.attributes,$=0,G=ee.getAttributes();for(let j in G)if(G[j].location>=0){let de=te[j],Ge=Q[j];if(Ge===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(Ge=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(Ge=H.instanceColor)),de===void 0||de.attribute!==Ge||Ge&&de.data!==Ge.data)return!0;$++}return o.attributesNum!==$||o.index!==F}function x(H,X,ee,F){let te={},Q=X.attributes,$=0,G=ee.getAttributes();for(let j in G)if(G[j].location>=0){let de=Q[j];de===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(de=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(de=H.instanceColor));let Ge={};Ge.attribute=de,de&&de.data&&(Ge.data=de.data),te[j]=Ge,$++}o.attributes=te,o.attributesNum=$,o.index=F}function E(){let H=o.newAttributes;for(let X=0,ee=H.length;X<ee;X++)H[X]=0}function m(H){d(H,0)}function d(H,X){let ee=o.newAttributes,F=o.enabledAttributes,te=o.attributeDivisors;ee[H]=1,F[H]===0&&(n.enableVertexAttribArray(H),F[H]=1),te[H]!==X&&(n.vertexAttribDivisor(H,X),te[H]=X)}function b(){let H=o.newAttributes,X=o.enabledAttributes;for(let ee=0,F=X.length;ee<F;ee++)X[ee]!==H[ee]&&(n.disableVertexAttribArray(ee),X[ee]=0)}function D(H,X,ee,F,te,Q,$){$===!0?n.vertexAttribIPointer(H,X,ee,te,Q):n.vertexAttribPointer(H,X,ee,F,te,Q)}function A(H,X,ee,F){E();let te=F.attributes,Q=ee.getAttributes(),$=X.defaultAttributeValues;for(let G in Q){let j=Q[G];if(j.location>=0){let V=te[G];if(V===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),V!==void 0){let de=V.normalized,Ge=V.itemSize,Be=e.get(V);if(Be===void 0)continue;let ne=Be.buffer,Le=Be.type,We=Be.bytesPerElement,Qe=Le===n.INT||Le===n.UNSIGNED_INT||V.gpuType===Xo;if(V.isInterleavedBufferAttribute){let Fe=V.data,gt=Fe.isInterleavedBuffer===!0?Fe.stride:Fe.itemSize,vi=V.offset;if(Fe.isInstancedInterleavedBuffer||Fe.isInstancedBufferAttribute){for(let rt=0;rt<j.locationSize;rt++)d(j.location+rt,Fe.meshPerAttribute);H.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let rt=0;rt<j.locationSize;rt++)m(j.location+rt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let rt=0;rt<j.locationSize;rt++)D(j.location+rt,Ge/j.locationSize,Le,de,gt*We,(vi+Ge/j.locationSize*rt)*We,Qe)}else{if(V.isInstancedBufferAttribute){for(let Fe=0;Fe<j.locationSize;Fe++)d(j.location+Fe,V.meshPerAttribute);H.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Fe=0;Fe<j.locationSize;Fe++)m(j.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Fe=0;Fe<j.locationSize;Fe++)D(j.location+Fe,Ge/j.locationSize,Le,de,Ge*We,Ge/j.locationSize*Fe*We,Qe)}}else if($!==void 0){let de=$[G];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(j.location,de);break;case 3:n.vertexAttrib3fv(j.location,de);break;case 4:n.vertexAttrib4fv(j.location,de);break;default:n.vertexAttrib1fv(j.location,de)}}}}b()}function I(){z();for(let H in i){let X=i[H];for(let ee in X){let F=X[ee];for(let te in F){let Q=F[te];for(let $ in Q)h(Q[$].object),delete Q[$];delete F[te]}}delete i[H]}}function R(H){if(i[H.id]===void 0)return;let X=i[H.id];for(let ee in X){let F=X[ee];for(let te in F){let Q=F[te];for(let $ in Q)h(Q[$].object),delete Q[$];delete F[te]}}delete i[H.id]}function g(H){for(let X in i){let ee=i[X];for(let F in ee){let te=ee[F];if(te[H.id]===void 0)continue;let Q=te[H.id];for(let $ in Q)h(Q[$].object),delete Q[$];delete te[H.id]}}}function w(H){for(let X in i){let ee=i[X],F=H.isInstancedMesh===!0?H.id:0,te=ee[F];if(te!==void 0){for(let Q in te){let $=te[Q];for(let G in $)h($[G].object),delete $[G];delete te[Q]}delete ee[F],Object.keys(ee).length===0&&delete i[X]}}}function z(){U(),s=!0,o!==r&&(o=r,c(o.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:E,enableAttribute:m,disableUnusedAttributes:b}}function Xm(n,e,t){let i;function r(l){i=l}function o(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function s(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function qm(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(g){return!(g!==an&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let w=g===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Ti&&g!==Oi&&!w&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:A,maxSamples:I,samples:R}}function Ym(n){let e=this,t=null,i=0,r=!1,o=!1,s=new fn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||r;return r=u,i=p.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,f){let x=p.clippingPlanes,E=p.clipIntersection,m=p.clipShadows,d=n.get(p);if(!r||x===null||x.length===0||o&&!m)o?h(null):c();else{let b=o?0:i,D=b*4,A=d.clippingState||null;l.value=A,A=h(x,u,D,f);for(let I=0;I!==D;++I)A[I]=t[I];d.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,f,x){let E=p!==null?p.length:0,m=null;if(E!==0){if(m=l.value,x!==!0||m===null){let d=f+E*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let D=0,A=f;D!==E;++D,A+=4)s.copy(p[D]).applyMatrix4(b,a),s.normal.toArray(m,A),m[A+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}var to=class extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bn(5,5,5),o=new Qt({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:qn});o.uniforms.tEquirect.value=t;let s=new ct(r,o),a=t.minFilter;return t.minFilter===In&&(t.minFilter=Ci),new Io(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}};var Zm=256,vx=3,Mx=20,Qm=256,jm=16,Sx=3,yx=new y,bx=new ge,cl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Io(1,10,null),this._boxMesh=new ct(new bn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=yx}=o,l=this._renderer;this._setSize(s);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,x=l.autoClearStencil,E=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(e.background=l.getClearColor(bx));let m=new Io(i,r,h);return m.position.copy(a),m.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=x,e.background=E,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Zm,wh(e))}_fromTexture(e,t){e.mapping===_r||e.mapping===Hr?this._setSize(e.image.length===0?Zm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Km(e,!1,!1),i=Math.log2(e)-vx;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Km(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,o=this._cubeCamera;r.material=i,o.renderTarget=e,o.activeMipmapLevel=t;let s=e.width>>t;e.viewport.set(0,0,s,s),o.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_r||e.mapping===Hr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$m()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ex(),this._integrationMaterial=Tx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(t/jm);for(let s=0;s<=i;s++){let a=n.lodToRoughness(s,i);if(s>i-Sx)o.roughness.value=a,this._renderCube(e,s,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Qm*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=wx());let i=this._blurMaterial,r=i.uniforms,o=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=o.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(o,0,i)}};function Km(n,e,t){return new to(n,{minFilter:In,generateMipmaps:e,type:fi,colorSpace:vo,depthBuffer:t})}function hl(n,e,t){return new Qt({name:n,uniforms:e,vertexShader:St.cube_vert,fragmentShader:t,side:mi,blending:qn,depthTest:!1,depthWrite:!1})}function Ex(){return hl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qm}u

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
	`)}function Tx(){return hl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jm}},`

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
	`)}function wx(){return hl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mx}
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
	`)}function $m(){return hl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jm(){return hl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,f=!1){return u==null?null:f?s(u):o(u)}function o(u){if(u&&u.isTexture){let f=u.mapping;if(f===Cl||f===Pl)if(e.has(u)){let x=e.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let E=new to(x.height);return E.fromEquirectangularTexture(n,u),e.set(u,E),u.addEventListener("dispose",c),a(E.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,x=f===Cl||f===Pl,E=f===_r||f===Hr;if(x||E){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new cl(n)),m=x?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return x&&b&&b.height>0||E&&b&&l(b)?(i===null&&(i=new cl(n)),m=x?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Cl?u.mapping=_r:f===Pl&&(u.mapping=Hr),u}function l(u){let f=0,x=6;for(let E=0;E<x;E++)u[E]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function tg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&So("WebGLRenderer: "+i+" extension not supported."),r}}}function ig(n,e,t,i){let r={},o=new WeakMap,s=new FinalizationRegistry(x=>delete r[x]);function a(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let m in x.attributes)e.remove(x.attributes[m]);x.removeEventListener("dispose",a),delete r[x.id],s.unregister(x);let E=o.get(x);E&&(e.remove(E),o.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,E){return r[E.id]!==void 0||(E.addEventListener("dispose",a),r[E.id]=new WeakRef(E),s.register(E,E.id,E),t.memory.geometries++),E}function h(x){let E=x.attributes;for(let m in E)e.update(E[m],n.ARRAY_BUFFER)}function p(x){let E=x.index,m=x.attributes.position,d=0;if(m===void 0)return;let b=E!==null?E.array.length:m.array.length/3-1,D=m.count>=65535?vs:_s,A=new D(Math.ceil(b/3)*6,1),I=A.array;if(E!==null){let g=E.array;d=E.version;for(let w=0,z=0;w<b;w+=3){let U=g[w+0],H=g[w+1],X=g[w+2];I[z++]=U,I[z++]=H,I[z++]=H,I[z++]=X,I[z++]=X,I[z++]=U}}else{d=m.version;for(let g=0,w=0;g<b;g+=3){let z=g+0,U=g+1,H=g+2;I[w++]=z,I[w++]=U,I[w++]=U,I[w++]=H,I[w++]=H,I[w++]=z}}A.version=d;let R=o.get(x);R&&e.remove(R),o.set(x,A)}function u(x){let E=o.get(x);if(E){let m=x.index;m!==null&&E.version<m.version&&p(x)}else p(x);return o.get(x)}function f(){for(let x in r){let E=r[x].deref();E!==void 0&&l(E)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function ng(n,e,t){let i;function r(p){i=p}let o,s;function a(p){o=p.type,s=p.bytesPerElement}function l(p,u){n.drawElements(i,u,o,p*s),t.update(u,i,1)}function c(p,u,f){f!==0&&(n.drawElementsInstanced(i,u,o,p*s,f),t.update(u,i,f))}function h(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,o,p,0,f);let E=0;for(let m=0;m<f;m++)E+=u[m];t.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function rg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:Et("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function og(n,e,t){let i=new WeakMap,r=new Xt;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==p){let z=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],D=0;f===!0&&(D=1),x===!0&&(D=2),E===!0&&(D=3);let A=a.attributes.position.count*D,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let R=new Float32Array(A*I*4*p),g=new ls(R,A,I,p);g.type=Oi,g.needsUpdate=!0;let w=D*4;for(let U=0;U<p;U++){let H=m[U],X=d[U],ee=b[U],F=A*I*4*U;for(let te=0;te<H.count;te++){let Q=te*w;f===!0&&(r.fromBufferAttribute(H,te),R[F+Q+0]=r.x,R[F+Q+1]=r.y,R[F+Q+2]=r.z,R[F+Q+3]=0),x===!0&&(r.fromBufferAttribute(X,te),R[F+Q+4]=r.x,R[F+Q+5]=r.y,R[F+Q+6]=r.z,R[F+Q+7]=0),E===!0&&(r.fromBufferAttribute(ee,te),R[F+Q+8]=r.x,R[F+Q+9]=r.y,R[F+Q+10]=r.z,R[F+Q+11]=ee.itemSize===4?r.w:1)}}u={count:p,texture:g,size:new le(A,I)},i.set(a,u),a.addEventListener("dispose",z)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function sg(n,e,t,i,r){let o=new WeakMap;function s(c){let h=r.render.frame,p=c.geometry,u=e.get(c,p);if(o.get(u)!==h&&(e.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;o.get(f)!==h&&(f.update(),o.set(f,h))}return u}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}var Ax={[zo]:"LINEAR_TONE_MAPPING",[Go]:"REINHARD_TONE_MAPPING",[ko]:"CINEON_TONE_MAPPING",[kr]:"ACES_FILMIC_TONE_MAPPING",[Vo]:"AGX_TONE_MAPPING",[Wo]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};function ag(n,e,t,i,r,o){let s=new di(e,t,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Mt;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let p=new Do({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ct(h,p),f=new Nr(-1,1,1,-1,0,1),x=null,E=null,m=!1,d,b=null,D=[],A=!1;this.setSize=function(I,R){s.setSize(I,R),a!==null&&a.setSize(I,R),l!==null&&l.setSize(I,R);for(let g=0;g<D.length;g++){let w=D[g];w.setSize&&w.setSize(I,R)}},this.setEffects=function(I){D=I,A=D.length>0&&D[0].isRenderPass===!0;let R=s.width,g=s.height;D.length>0&&a===null&&(a=new di(R,g,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new di(R,g,{type:fi,depthBuffer:!1,stencilBuffer:!1}));let w=r===!0&&D.some(z=>z.needsDepthTexture===!0);w!==(s.depthTexture!==null)&&(w===!0&&c===null&&(c=new zn(R,g),o===!0&&(c.format=Nn,c.type=or)),s.dispose(),s.depthTexture=w?c:null,s.resolveDepthBuffer=w,s.storeMultisampledDepthBuffer=w);for(let z=0;z<D.length;z++){let U=D[z];U.setSize&&U.setSize(R,g),w&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(I,R){if(m||I.toneMapping===Dn&&D.length===0)return!1;if(b=R,R!==null){let g=R.width,w=R.height;(s.width!==g||s.height!==w)&&this.setSize(g,w)}return A===!1&&I.setRenderTarget(s),d=I.toneMapping,I.toneMapping=Dn,!0},this.hasRenderPass=function(){return A},this.end=function(I,R){I.toneMapping=d,m=!0;let g=s,w=a;for(let z=0;z<D.length;z++){let U=D[z];U.enabled!==!1&&(U.render(I,w,g,R),U.needsSwap!==!1&&(g=w,w=w===a?l:a))}if(x!==I.outputColorSpace||E!==I.toneMapping){x=I.outputColorSpace,E=I.toneMapping,p.defines={},dt.getTransfer(x)===It&&(p.defines.SRGB_TRANSFER="");let z=Ax[E];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,I.setRenderTarget(b),I.render(u,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var pg=new _i,mg=new zn(1,1),gg=new Ps(1),xg=new ls,_g=new ql,vg=new Rs,lg=[],cg=[],hg=new Float32Array(16),ug=new Float32Array(9),fg=new Float32Array(4);function Ws(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=lg[r];if(o===void 0&&(o=new Float32Array(r),lg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Bi(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zi(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yc(n,e){let t=cg[e];t===void 0&&(t=new Int32Array(e),cg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bi(t,e))return;n.uniform2fv(this.addr,e),zi(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bi(t,e))return;n.uniform3fv(this.addr,e),zi(t,e)}}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bi(t,e))return;n.uniform4fv(this.addr,e),zi(t,e)}}function Dx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bi(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zi(t,e)}else{if(Bi(t,i))return;fg.set(i),n.uniformMatrix2fv(this.addr,!1,fg),zi(t,i)}}function Ix(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bi(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zi(t,e)}else{if(Bi(t,i))return;ug.set(i),n.uniformMatrix3fv(this.addr,!1,ug),zi(t,i)}}function Nx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bi(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zi(t,e)}else{if(Bi(t,i))return;hg.set(i),n.uniformMatrix4fv(this.addr,!1,hg),zi(t,i)}}function Ux(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bi(t,e))return;n.uniform2iv(this.addr,e),zi(t,e)}}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bi(t,e))return;n.uniform3iv(this.addr,e),zi(t,e)}}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bi(t,e))return;n.uniform4iv(this.addr,e),zi(t,e)}}function zx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bi(t,e))return;n.uniform2uiv(this.addr,e),zi(t,e)}}function kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bi(t,e))return;n.uniform3uiv(this.addr,e),zi(t,e)}}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bi(t,e))return;n.uniform4uiv(this.addr,e),zi(t,e)}}function Zc(n){return n.version===0&&(n.compareFunction=kl,n.needsUpdate=!0),n}function Vx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?o=Zc(mg):o=pg,t.setTexture2D(e||o,r)}function Wx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_g,r)}function Xx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Zc(gg):o=vg,t.setTextureCube(e||o,r)}function qx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xg,r)}function Yx(n){switch(n){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Ix;case 35676:return Nx;case 5124:case 35670:return Ux;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return Gx;case 36295:return kx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function Zx(n,e){n.uniform1fv(this.addr,e)}function Kx(n,e){let t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function $x(n,e){let t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function Jx(n,e){let t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function Qx(n,e){let t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jx(n,e){let t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e_(n,e){let t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t_(n,e){n.uniform1iv(this.addr,e)}function i_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function r_(n,e){n.uniform4iv(this.addr,e)}function o_(n,e){n.uniform1uiv(this.addr,e)}function s_(n,e){n.uniform2uiv(this.addr,e)}function a_(n,e){n.uniform3uiv(this.addr,e)}function l_(n,e){n.uniform4uiv(this.addr,e)}function c_(n,e,t){let i=this.cache,r=e.length,o=Yc(t,r);Bi(i,o)||(n.uniform1iv(this.addr,o),zi(i,o));let s;this.type===n.SAMPLER_2D_SHADOW?s=Zc(mg):s=pg;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function h_(n,e,t){let i=this.cache,r=e.length,o=Yc(t,r);Bi(i,o)||(n.uniform1iv(this.addr,o),zi(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||_g,o[s])}function u_(n,e,t){let i=this.cache,r=e.length,o=Yc(t,r);Bi(i,o)||(n.uniform1iv(this.addr,o),zi(i,o));let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Zc(gg):s=vg;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||s,o[a])}function f_(n,e,t){let i=this.cache,r=e.length,o=Yc(t,r);Bi(i,o)||(n.uniform1iv(this.addr,o),zi(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||xg,o[s])}function d_(n){switch(n){case 5126:return Zx;case 35664:return Kx;case 35665:return $x;case 35666:return Jx;case 35674:return Qx;case 35675:return jx;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return i_;case 35668:case 35672:return n_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return s_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return f_}}var fu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}},du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},uu=/(\w+)(\])?(\[|\.)?/g;function dg(n,e){n.seq.push(e),n.map[e.id]=e}function p_(n,e,t){let i=n.name,r=i.length;for(uu.lastIndex=0;;){let o=uu.exec(i),s=uu.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){dg(t,c===void 0?new fu(a,n,e):new du(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new pu(a),dg(t,p)),t=p}}}var io=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);p_(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function mu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var m_=37297,g_=0;function x_(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var Mg=new tt;function __(n){dt._getMatrix(Mg,dt.workingColorSpace,n);let e=`mat3( ${Mg.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Mo:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+x_(n.getShaderSource(e),a)}else return o}function v_(n,e){let t=__(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var M_={[zo]:"Linear",[Go]:"Reinhard",[ko]:"Cineon",[kr]:"ACESFilmic",[Vo]:"AgX",[Wo]:"Neutral",[Ho]:"Custom"};function S_(n,e){let t=M_[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kc=new y;function y_(){dt.getLuminanceCoefficients(Kc);let n=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function E_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function ul(n){return n!==""}function yg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(n){return n.replace(w_,A_)}function A_(n,e){let t=St[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return gu(t)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(n){return n.replace(R_,C_)}function C_(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Tg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var P_={[Bo]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function L_(n){return P_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D_={[Hr]:"ENVMAP_MODE_REFRACTION"};function I_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N_={[Rl]:"ENVMAP_BLENDING_MULTIPLY",[rf]:"ENVMAP_BLENDING_MIX",[of]:"ENVMAP_BLENDING_ADD"};function U_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":N_[n.combine]||"ENVMAP_BLENDING_NONE"}function wg(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=L_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=I_(t),p=U_(t),u=b_(t),f=E_(o),x=r.createProgram(),E,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ul).join(`
`),E.length>0&&(E+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ul).join(`
`),m.length>0&&(m+=`
`)):(E=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),m=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?St.tonemapping_pars_fragment:"",t.toneMapping!==Dn?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ul).join(`
`)),s=gu(s),s=yg(s,t),s=bg(s,t),a=gu(a),a=yg(a,t),a=bg(a,t),s=Eg(s),a=Eg(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,E=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,m=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=d+E+s,D=d+m+a,A=mu(r,r.VERTEX_SHADER,b),I=mu(r,r.FRAGMENT_SHADER,D);r.attachShader(x,A),r.attachShader(x,I),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(U){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(A)||"",ee=r.getShaderInfoLog(I)||"",F=H.trim(),te=X.trim(),Q=ee.trim(),$=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,I);else{let j=Sg(r,A,"vertex"),V=Sg(r,I,"fragment");Et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+j+`
`+V)}else F!==""?He("WebGLProgram: Program Info Log:",F):(te===""||Q==="")&&(G=!1);G&&(U.diagnostics={runnable:$,programLog:F,vertexShader:{log:te,prefix:E},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(A),r.deleteShader(I),g=new io(r,x),w=T_(r,x)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(x,m_)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=I,this}var F_=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xu(e),t.set(e,i)),i}},xu=class{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}};function O_(n){return n===Un||n===xo||n===_o}function Ag(n,e,t,i,r,o){let s=new qr,a=new $c,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,w,z,U,H,X){let ee=U.fog,F=H.geometry,te=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?U.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,$=e.get(g.envMap||te,Q),G=u[g.type],j=i.precision;g.precision!==null&&(j=i.getMaxPrecision(g.precision),j!==g.precision&&He("WebGLProgram.getParameters:",g.precision,"not supported, using",j,"instead."));let V=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,de=V!==void 0?V.length:0,Ge=0;F.morphAttributes.position!==void 0&&(Ge=1),F.morphAttributes.normal!==void 0&&(Ge=2),F.morphAttributes.color!==void 0&&(Ge=3);let Be,ne,Le,We;if(G){let Ne=Qn[G];Be=Ne.vertexShader,ne=Ne.fragmentShader}else{Be=g.vertexShader,ne=g.fragmentShader;let Ne=a.getVertexShaderStage(g),ot=a.getFragmentShaderStage(g);a.update(g,Ne,ot),Le=Ne.id,We=ot.id}let Qe=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),gt=H.isInstancedMesh===!0,vi=H.isBatchedMesh===!0,rt=!!g.map,Ht=!!g.matcap,Vt=!!$,At=Vt&&$.isPMREMTexture===!0,bi=!!g.aoMap,gi=!!g.lightMap,nn=!!g.bumpMap&&g.wireframe===!1,ni=!!g.normalMap,gn=!!g.displacementMap,Nt=!!g.emissiveMap,Tn=!!g.metalnessMap,wn=!!g.roughnessMap,xn=g.anisotropy>0,k=g.clearcoat>0,Ei=g.diffuseRoughness>0,Bt=g.dispersion>0,ue=g.retroreflectivity>0,me=g.iridescence>0,ai=g.sheen>0,Te=g.transmission>0,Ye=xn&&!!g.anisotropyMap,C=k&&!!g.clearcoatMap,v=k&&!!g.clearcoatNormalMap,Z=k&&!!g.clearcoatRoughnessMap,_e=Ei&&!!g.diffuseRoughnessMap,ce=me&&!!g.iridescenceMap,Ae=me&&!!g.iridescenceThicknessMap,Pe=ai&&!!g.sheenColorMap,oe=ai&&!!g.sheenRoughnessMap,se=!!g.specularMap,Re=!!g.specularColorMap,N=!!g.specularIntensityMap,ae=Te&&!!g.transmissionMap,ie=Te&&!!g.thicknessMap,be=!!g.gradientMap,ye=!!g.alphaMap,Ee=g.alphaTest>0,Je=!!g.alphaHash,ft=!!g.extensions,ve=Dn;g.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&(ve=n.toneMapping);let je=At?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,_t={shaderID:G,shaderType:g.type,shaderName:g.name,vertexShader:Be,fragmentShader:ne,defines:g.defines,customVertexShaderID:Le,customFragmentShaderID:We,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:j,batching:vi,batchingColor:vi&&H._colorsTexture!==null,instancing:gt,instancingColor:gt&&H.instanceColor!==null,instancingMorph:gt&&H.morphTexture!==null,outputColorSpace:Qe===null?n.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:rt,matcap:Ht,envMap:Vt,envMapMode:Vt&&$.mapping,envMapPMREM:At,envMapMaxLod:At?je.length-1:null,envMapSize:At?je[0].width:null,aoMap:bi,lightMap:gi,bumpMap:nn,normalMap:ni,displacementMap:gn,emissiveMap:Nt,normalMapObjectSpace:ni&&g.normalMapType===lf,normalMapTangentSpace:ni&&g.normalMapType===za,packedNormalMap:ni&&g.normalMapType===za&&O_(g.normalMap.format),metalnessMap:Tn,roughnessMap:wn,anisotropy:xn,anisotropyMap:Ye,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:v,clearcoatRoughnessMap:Z,diffuseRoughness:Ei,diffuseRoughnessMap:_e,dispersion:Bt,retroreflection:ue,iridescence:me,iridescenceMap:ce,iridescenceThicknessMap:Ae,sheen:ai,sheenColorMap:Pe,sheenRoughnessMap:oe,specularMap:se,specularColorMap:Re,specularIntensityMap:N,transmission:Te,transmissionMap:ae,thicknessMap:ie,gradientMap:be,opaque:g.transparent===!1&&g.blending===Br&&g.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ee,alphaHash:Je,combine:g.combine,mapUv:rt&&f(g.map.channel),aoMapUv:bi&&f(g.aoMap.channel),lightMapUv:gi&&f(g.lightMap.channel),bumpMapUv:nn&&f(g.bumpMap.channel),normalMapUv:ni&&f(g.normalMap.channel),displacementMapUv:gn&&f(g.displacementMap.channel),emissiveMapUv:Nt&&f(g.emissiveMap.channel),metalnessMapUv:Tn&&f(g.metalnessMap.channel),roughnessMapUv:wn&&f(g.roughnessMap.channel),anisotropyMapUv:Ye&&f(g.anisotropyMap.channel),clearcoatMapUv:C&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:oe&&f(g.sheenRoughnessMap.channel),specularMapUv:se&&f(g.specularMap.channel),specularColorMapUv:Re&&f(g.specularColorMap.channel),specularIntensityMapUv:N&&f(g.specularIntensityMap.channel),transmissionMapUv:ae&&f(g.transmissionMap.channel),thicknessMapUv:ie&&f(g.thicknessMap.channel),alphaMapUv:ye&&f(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ni||xn),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(rt||ye),fog:!!ee,useFog:g.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&ni===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Fe,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ge,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:rt&&g.map.isVideoTexture===!0&&dt.getTransfer(g.map.colorSpace)===It,decodeVideoTextureEmissive:Nt&&g.emissiveMap.isVideoTexture===!0&&dt.getTransfer(g.emissiveMap.colorSpace)===It,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Xi,flipSided:g.side===mi,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ft&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&g.extensions.multiDraw===!0||vi)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function E(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let z in g.defines)w.push(z),w.push(g.defines[z]);return g.isRawShaderMaterial===!1&&(m(w,g),d(w,g),w.push(n.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function m(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function d(g,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.diffuseRoughness&&s.enable(25),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function b(g){let w=u[g.type],z;if(w){let U=Qn[w];z=vr.clone(U.uniforms)}else z=g.uniforms;return z}function D(g,w){let z=h.get(w);return z!==void 0?++z.usedTimes:(z=new wg(n,w,g,r),c.push(z),h.set(w,z)),z}function A(g){if(--g.usedTimes===0){let w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function I(g){a.remove(g)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:E,getUniforms:b,acquireProgram:D,releaseProgram:A,releaseShaderCache:I,programs:c,dispose:R}}function Rg(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pg(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,x,E,m,d){let b=n[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:x,materialVariant:s(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:d},n[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=x,b.materialVariant=s(u),b.groupOrder=E,b.renderOrder=u.renderOrder,b.z=m,b.group=d),e++,b}function l(u,f,x,E,m,d,b){b.reversedDepth===!0&&(m=-m);let D=a(u,f,x,E,m,d);x.transmission>0?i.push(D):x.transparent===!0?r.push(D):t.push(D)}function c(u,f,x,E,m,d){let b=a(u,f,x,E,m,d);x.transmission>0?i.unshift(b):x.transparent===!0?r.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||B_),i.length>1&&i.sort(f||Cg),r.length>1&&r.sort(f||Cg)}function p(){for(let u=e,f=n.length;u<f;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:p,sort:h}}function Lg(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new Pg,n.set(i,[s])):r>=o.length?(s=new Pg,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function z_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new y,color:new ge};break;case"SpotLight":t={position:new y,direction:new y,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new y,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new y,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new y,halfWidth:new y,halfHeight:new y};break}return n[e.id]=t,t}}}function G_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var k_=0;function H_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dg(n){let e=new z_,t=G_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new y);let r=new y,o=new at,s=new at;function a(c){let h=0,p=0,u=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let f=0,x=0,E=0,m=0,d=0,b=0,D=0,A=0,I=0,R=0,g=0,w=0,z=0,U=0;c.sort(H_);for(let X=0,ee=c.length;X<ee;X++){let F=c[X],te=F.color,Q=F.intensity,$=F.distance,G=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Un?G=F.shadow.map.texture:G=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=te.r*Q,p+=te.g*Q,u+=te.b*Q;else if(F.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(F.sh.coefficients[j],Q);U++}else if(F.isSunLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let V=F.shadow,de=t.get(F);de.shadowIntensity=V.intensity,de.shadowBias=V.bias,de.shadowNormalBias=V.normalBias,de.shadowRadius=V.radius,de.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[x]=de,i.sunShadowMap[x]=G;let Ge=V.getViewportCount();for(let Be=0;Be<Ge;Be++)i.sunShadowMatrix[E+Be]=V.getMatrix(Be),i.sunShadowCascade[E+Be]=V._cascadeData[Be];E+=Ge,x++}i.sun[f]=j,f++}else if(F.isDirectionalLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let V=F.shadow,de=t.get(F);de.shadowIntensity=V.intensity,de.shadowBias=V.bias,de.shadowNormalBias=V.normalBias,de.shadowRadius=V.radius,de.shadowMapSize=V.mapSize,i.directionalShadow[m]=de,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=F.shadow.matrix,I++}i.directional[m]=j,m++}else if(F.isSpotLight){let j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(te).multiplyScalar(Q),j.distance=$,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,i.spot[b]=j;let V=F.shadow;if(F.map&&(i.spotLightMap[w]=F.map,w++,V.updateMatrices(F),F.castShadow&&z++),i.spotLightMatrix[b]=V.matrix,F.castShadow){let de=t.get(F);de.shadowIntensity=V.intensity,de.shadowBias=V.bias,de.shadowNormalBias=V.normalBias,de.shadowRadius=V.radius,de.shadowMapSize=V.mapSize,i.spotShadow[b]=de,i.spotShadowMap[b]=G,g++}b++}else if(F.isRectAreaLight){let j=e.get(F);j.color.copy(te).multiplyScalar(Q),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),i.rectArea[D]=j,D++}else if(F.isPointLight){let j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){let V=F.shadow,de=t.get(F);de.shadowIntensity=V.intensity,de.shadowBias=V.bias,de.shadowNormalBias=V.normalBias,de.shadowRadius=V.radius,de.shadowMapSize=V.mapSize,de.shadowCameraNear=V.camera.near,de.shadowCameraFar=V.camera.far,i.pointShadow[d]=de,i.pointShadowMap[d]=G,i.pointShadowMatrix[d]=F.shadow.matrix,R++}i.point[d]=j,d++}else if(F.isHemisphereLight){let j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(Q),j.groundColor.copy(F.groundColor).multiplyScalar(Q),i.hemi[A]=j,A++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let H=i.hash;(H.sunLength!==f||H.directionalLength!==m||H.pointLength!==d||H.spotLength!==b||H.rectAreaLength!==D||H.hemiLength!==A||H.numSunShadows!==x||H.numDirectionalShadows!==I||H.numPointShadows!==R||H.numSpotShadows!==g||H.numSpotMaps!==w||H.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=D,i.point.length=d,i.hemi.length=A,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+w-z,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=U,H.sunLength=f,H.directionalLength=m,H.pointLength=d,H.spotLength=b,H.rectAreaLength=D,H.hemiLength=A,H.numSunShadows=x,H.numDirectionalShadows=I,H.numPointShadows=R,H.numSpotShadows=g,H.numSpotMaps=w,H.numLightProbes=U,i.version=k_++)}function l(c,h){let p=0,u=0,f=0,x=0,E=0,m=0,d=h.matrixWorldInverse;for(let b=0,D=c.length;b<D;b++){let A=c[b];if(A.isSunLight){let I=i.sun[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(d),p++}else if(A.isDirectionalLight){let I=i.directional[u];I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),u++}else if(A.isSpotLight){let I=i.spot[x];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),x++}else if(A.isRectAreaLight){let I=i.rectArea[E];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),s.identity(),o.copy(A.matrixWorld),o.premultiply(d),s.extractRotation(o),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(s),I.halfHeight.applyMatrix4(s),E++}else if(A.isPointLight){let I=i.point[f];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),f++}else if(A.isHemisphereLight){let I=i.hemi[m];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:i}}function Ig(n){let e=new Dg(n),t=[],i=[],r=[];function o(p){h.camera=p,t.length=0,i.length=0,r.length=0}function s(p){p.isLightProbeGrid?r.push(p):t.push(p)}function a(p){i.push(p)}function l(){e.setup(t),r.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Ng(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Ig(n),e.set(r,[a])):o>=s.length?(a=new Ig(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Fg=`
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
`;var W_=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],X_=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],Og=new at,fl=new y,_u=new y;function Bg(n,e,t){let i=new hr,r=new le,o=new le,s=new Xt,a=new Bc,l=new zc,c={},h=t.maxTextureSize,p={[Xn]:mi,[mi]:Xn,[Xi]:Xi},u=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Ug,fragmentShader:Fg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new Mt;x.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new ct(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let d=this.type;this.render=function(R,g,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Bu&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bo);let z=n.getRenderTarget(),U=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),X=n.state;X.setBlending(qn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let ee=d!==this.type;ee&&g.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(te=>te.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,te=R.length;F<te;F++){let Q=R[F],$=Q.shadow;if($===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let G=$.getFrameExtents();r.multiply(G),o.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/G.x),r.x=o.x*G.x,$.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/G.y),r.y=o.y*G.y,$.mapSize.y=o.y));let j=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=j,$.map===null||ee===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===mo){if(Q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new di(r.x,r.y,{format:Un,type:fi,minFilter:Ci,magFilter:Ci,generateMipmaps:!1}),$.map.texture.name=Q.name+".shadowMap",$.map.depthTexture=new zn(r.x,r.y,Oi),$.map.depthTexture.name=Q.name+".shadowMapDepth",$.map.depthTexture.format=Rn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=xi,$.map.depthTexture.magFilter=xi}else Q.isPointLight?($.map=new to(r.x),$.map.depthTexture=new Ps(r.x,qi)):($.map=new di(r.x,r.y),$.map.depthTexture=new zn(r.x,r.y,qi)),$.map.depthTexture.name=Q.name+".shadowMap",$.map.depthTexture.format=Rn,this.type===Bo?($.map.depthTexture.compareFunction=j?Gl:zl,$.map.depthTexture.minFilter=Ci,$.map.depthTexture.magFilter=Ci):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=xi,$.map.depthTexture.magFilter=xi);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);let V=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Q.isPointLight!==!0&&$.updateMatrices(Q,w);let de=($.camera.layers.mask&4294967294)!==0?$.camera.layers:w.layers;for(let Ge=0;Ge<V;Ge++){let Be=$.getCamera(Ge);if(Q.isPointLight){let ne=$.camera,Le=$.matrix,We=Q.distance||ne.far;We!==ne.far&&(ne.far=We,ne.updateProjectionMatrix()),fl.setFromMatrixPosition(Q.matrixWorld),ne.position.copy(fl),_u.copy(ne.position),_u.add(W_[Ge]),ne.up.copy(X_[Ge]),ne.lookAt(_u),ne.updateMatrixWorld(),Le.makeTranslation(-fl.x,-fl.y,-fl.z),Og.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Og,ne.coordinateSystem,ne.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,Ge),n.clear();else{Ge===0&&(n.setRenderTarget($.map),n.clear());let ne=$.getViewport(Ge);s.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),X.viewport(s)}i=$.getFrustum(Ge),A(g,w,Be,Q,de,this.type)}$.isPointLightShadow!==!0&&this.type===mo&&b($,w),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(z,U,H)};function b(R,g){let w=e.update(E);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new di(r.x,r.y,{format:Un,type:fi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(g,null,w,u,E,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(g,null,w,f,E,null)}function D(R,g,w,z){let U=null,H=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)U=H;else if(U=w.isPointLight===!0?l:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let X=U.uuid,ee=g.uuid,F=c[X];F===void 0&&(F={},c[X]=F);let te=F[ee];te===void 0&&(te=U.clone(),F[ee]=te,g.addEventListener("dispose",I)),U=te}if(U.visible=g.visible,U.wireframe=g.wireframe,z===mo?U.side=g.shadowSide!==null?g.shadowSide:g.side:U.side=g.shadowSide!==null?g.shadowSide:p[g.side],U.alphaMap=g.alphaMap,U.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,U.map=g.map,U.clipShadows=g.clipShadows,U.clippingPlanes=g.clippingPlanes,U.clipIntersection=g.clipIntersection,U.displacementMap=g.displacementMap,U.displacementScale=g.displacementScale,U.displacementBias=g.displacementBias,U.wireframeLinewidth=g.wireframeLinewidth,U.linewidth=g.linewidth,w.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let X=n.properties.get(U);X.light=w}return U}function A(R,g,w,z,U,H){if(R.visible===!1)return;if(R.layers.test(U)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&H===mo)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);let F=e.update(R),te=R.material;if(Array.isArray(te)){let Q=F.groups;for(let $=0,G=Q.length;$<G;$++){let j=Q[$],V=te[j.materialIndex];if(V&&V.visible){let de=D(R,V,z,H);R.onBeforeShadow(n,R,g,w,F,de,j),n.renderBufferDirect(w,null,F,de,R,j),R.onAfterShadow(n,R,g,w,F,de,j)}}}else if(te.visible){let Q=D(R,te,z,H);R.onBeforeShadow(n,R,g,w,F,Q,null),n.renderBufferDirect(w,null,F,Q,R,null),R.onAfterShadow(n,R,g,w,F,Q,null)}}let ee=R.children;for(let F=0,te=ee.length;F<te;F++)A(ee[F],g,w,z,U,H)}function I(R){R.target.removeEventListener("dispose",I);for(let w in c){let z=c[w],U=R.target.uuid;U in z&&(z[U].dispose(),delete z[U])}}}function zg(n,e){function t(){let N=!1,ae=new Xt,ie=null,be=new Xt(0,0,0,0);return{setMask:function(ye){ie!==ye&&!N&&(n.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){N=ye},setClear:function(ye,Ee,Je,ft,ve){ve===!0&&(ye*=ft,Ee*=ft,Je*=ft),ae.set(ye,Ee,Je,ft),be.equals(ae)===!1&&(n.clearColor(ye,Ee,Je,ft),be.copy(ae))},reset:function(){N=!1,ie=null,be.set(-1,0,0,0)}}}function i(){let N=!1,ae=!1,ie=null,be=null,ye=null;return{setReversed:function(Ee){if(ae!==Ee){let Je=e.get("EXT_clip_control");Ee?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),ae=Ee;let ft=ye;ye=null,this.setClear(ft)}},getReversed:function(){return ae},setTest:function(Ee){Ee?Fe(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(Ee){ie!==Ee&&!N&&(n.depthMask(Ee),ie=Ee)},setFunc:function(Ee){if(ae&&(Ee=Mf[Ee]),be!==Ee){switch(Ee){case ea:n.depthFunc(n.NEVER);break;case ta:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case na:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){ye!==Ee&&(ye=Ee,ae&&(Ee=1-Ee),n.clearDepth(Ee))},reset:function(){N=!1,ie=null,be=null,ye=null,ae=!1}}}function r(){let N=!1,ae=null,ie=null,be=null,ye=null,Ee=null,Je=null,ft=null,ve=null;return{setTest:function(je){N||(je?Fe(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(je){ae!==je&&!N&&(n.stencilMask(je),ae=je)},setFunc:function(je,_t,Ne){(ie!==je||be!==_t||ye!==Ne)&&(n.stencilFunc(je,_t,Ne),ie=je,be=_t,ye=Ne)},setOp:function(je,_t,Ne){(Ee!==je||Je!==_t||ft!==Ne)&&(n.stencilOp(je,_t,Ne),Ee=je,Je=_t,ft=Ne)},setLocked:function(je){N=je},setClear:function(je){ve!==je&&(n.clearStencil(je),ve=je)},reset:function(){N=!1,ae=null,ie=null,be=null,ye=null,Ee=null,Je=null,ft=null,ve=null}}}let o=new t,s=new i,a=new r,l={},c=new WeakMap,h={},p={},u={},f=new WeakMap,x=[],E=null,m=!1,d=null,b=null,D=null,A=null,I=null,R=null,g=null,w=new ge(0,0,0),z=0,U=!1,H=null,X=null,ee=null,F=null,te=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,G=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=G>=2);let V=null,de={},Ge=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),ne=new Xt().fromArray(Ge),Le=new Xt().fromArray(Be);function We(N,ae,ie,be){let ye=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(N,Ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<ie;Je++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ae+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Ee}let Qe={};Qe[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),Qe[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Qe[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Qe[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Fe(n.DEPTH_TEST),s.setFunc(Gr),nn(!1),ni(Sh),Fe(n.CULL_FACE),bi(qn);function Fe(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function gt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function vi(N,ae){return u[N]!==ae?(n.bindFramebuffer(N,ae),u[N]=ae,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function rt(N,ae){let ie=x,be=!1;if(N){ie=f.get(ae),ie===void 0&&(ie=[],f.set(ae,ie));let ye=N.textures;if(ie.length!==ye.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Je=ye.length;Ee<Je;Ee++)ie[Ee]=n.COLOR_ATTACHMENT0+Ee;ie.length=ye.length,be=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,be=!0);be&&n.drawBuffers(ie)}function Ht(N){return E!==N?(n.useProgram(N),E=N,!0):!1}let Vt={[zr]:n.FUNC_ADD,[Gu]:n.FUNC_SUBTRACT,[ku]:n.FUNC_REVERSE_SUBTRACT};Vt[Hu]=n.MIN,Vt[Vu]=n.MAX;let At={[Wu]:n.ZERO,[Xu]:n.ONE,[qu]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[Qu]:n.SRC_ALPHA_SATURATE,[$u]:n.DST_COLOR,[Zu]:n.DST_ALPHA,[Yu]:n.ONE_MINUS_SRC_COLOR,[Al]:n.ONE_MINUS_SRC_ALPHA,[Ju]:n.ONE_MINUS_DST_COLOR,[Ku]:n.ONE_MINUS_DST_ALPHA,[ju]:n.CONSTANT_COLOR,[ef]:n.ONE_MINUS_CONSTANT_COLOR,[tf]:n.CONSTANT_ALPHA,[nf]:n.ONE_MINUS_CONSTANT_ALPHA};function bi(N,ae,ie,be,ye,Ee,Je,ft,ve,je){if(N===qn){m===!0&&(gt(n.BLEND),m=!1);return}if(m===!1&&(Fe(n.BLEND),m=!0),N!==zu){if(N!==d||je!==U){if((b!==zr||I!==zr)&&(n.blendEquation(n.FUNC_ADD),b=zr,I=zr),je)switch(N){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFunc(n.ONE,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",N);break}else switch(N){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yh:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",N);break}D=null,A=null,R=null,g=null,w.set(0,0,0),z=0,d=N,U=je}return}ye=ye||ae,Ee=Ee||ie,Je=Je||be,(ae!==b||ye!==I)&&(n.blendEquationSeparate(Vt[ae],Vt[ye]),b=ae,I=ye),(ie!==D||be!==A||Ee!==R||Je!==g)&&(n.blendFuncSeparate(At[ie],At[be],At[Ee],At[Je]),D=ie,A=be,R=Ee,g=Je),(ft.equals(w)===!1||ve!==z)&&(n.blendColor(ft.r,ft.g,ft.b,ve),w.copy(ft),z=ve),d=N,U=!1}function gi(N,ae){N.side===Xi?gt(n.CULL_FACE):Fe(n.CULL_FACE);let ie=N.side===mi;ae&&(ie=!ie),nn(ie),N.blending===Br&&N.transparent===!1?bi(qn):bi(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),o.setMask(N.colorWrite);let be=N.stencilWrite;a.setTest(be),be&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function nn(N){H!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),H=N)}function ni(N){N!==Fu?(Fe(n.CULL_FACE),N!==X&&(N===Sh?n.cullFace(n.BACK):N===Ou?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),X=N}function gn(N){N!==ee&&($&&n.lineWidth(N),ee=N)}function Nt(N,ae,ie){N?(Fe(n.POLYGON_OFFSET_FILL),(F!==ae||te!==ie)&&(F=ae,te=ie,s.getReversed()&&(ae=-ae,ie=-ie),n.polygonOffset(ae,ie))):gt(n.POLYGON_OFFSET_FILL)}function Tn(N){N?Fe(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function wn(N){N===void 0&&(N=n.TEXTURE0+Q-1),V!==N&&(n.activeTexture(N),V=N)}function xn(N,ae,ie){ie===void 0&&(V===null?ie=n.TEXTURE0+Q-1:ie=V);let be=de[ie];be===void 0&&(be={type:void 0,texture:void 0},de[ie]=be),(be.type!==N||be.texture!==ae)&&(V!==ie&&(n.activeTexture(ie),V=ie),n.bindTexture(N,ae||Qe[N]),be.type=N,be.texture=ae)}function k(){let N=de[V];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ei(){try{n.compressedTexImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function Bt(){try{n.compressedTexImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function ue(){try{n.texSubImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function me(){try{n.texSubImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function ai(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function Ye(){try{n.texStorage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function C(){try{n.texStorage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function v(){try{n.texImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function Z(){try{n.texImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function _e(N){return p[N]!==void 0?p[N]:n.getParameter(N)}function ce(N,ae){p[N]!==ae&&(n.pixelStorei(N,ae),p[N]=ae)}function Ae(N){ne.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ne.copy(N))}function Pe(N){Le.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Le.copy(N))}function oe(N,ae){let ie=c.get(ae);ie===void 0&&(ie=new WeakMap,c.set(ae,ie));let be=ie.get(N);be===void 0&&(be=n.getUniformBlockIndex(ae,N.name),n.uniformBlockBinding(ae,be,be),ie.set(N,be))}function se(N,ae,ie){let ye=c.get(ae).get(N);l[ye]!==ie&&(n.bindBufferBase(n.UNIFORM_BUFFER,ye,ie),l[ye]=ie)}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},V=null,de={},u={},l={},f=new WeakMap,x=[],E=null,m=!1,d=null,b=null,D=null,A=null,I=null,R=null,g=null,w=new ge(0,0,0),z=0,U=!1,H=null,X=null,ee=null,F=null,te=null,ne.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Fe,disable:gt,bindFramebuffer:vi,drawBuffers:rt,useProgram:Ht,setBlending:bi,setMaterial:gi,setFlipSided:nn,setCullFace:ni,setLineWidth:gn,setPolygonOffset:Nt,setScissorTest:Tn,activeTexture:wn,bindTexture:xn,unbindTexture:k,compressedTexImage2D:Ei,compressedTexImage3D:Bt,texImage2D:v,texImage3D:Z,pixelStorei:ce,getParameter:_e,updateUBOMapping:oe,uniformBlockBinding:se,texStorage2D:Ye,texStorage3D:C,texSubImage2D:ue,texSubImage3D:me,compressedTexSubImage2D:ai,compressedTexSubImage3D:Te,scissor:Ae,viewport:Pe,reset:Re}}function Gg(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,p=new Set,u,f=new WeakMap,x=new Set,E=new FinalizationRegistry(C=>x.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(C,v){return m?new OffscreenCanvas(C,v):ns("canvas")}function b(C,v,Z){let _e=1,ce=Ye(C);if((ce.width>Z||ce.height>Z)&&(_e=Z/Math.max(ce.width,ce.height)),_e<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Ae=Math.floor(_e*ce.width),Pe=Math.floor(_e*ce.height);u===void 0&&(u=d(Ae,Pe));let oe=v?d(Ae,Pe):u;return oe.width=Ae,oe.height=Pe,oe.getContext("2d").drawImage(C,0,0,Ae,Pe),He("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ae+"x"+Pe+")."),oe}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),C;return C}function D(C){return C.generateMipmaps}function A(C){n.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(C,v,Z,_e,ce,Ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pe;_e&&(Pe=e.get("EXT_texture_norm16"),Pe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=v;if(v===n.RED&&(Z===n.FLOAT&&(oe=n.R32F),Z===n.HALF_FLOAT&&(oe=n.R16F),Z===n.UNSIGNED_BYTE&&(oe=n.R8),Z===n.UNSIGNED_SHORT&&Pe&&(oe=Pe.R16_EXT),Z===n.SHORT&&Pe&&(oe=Pe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.R8UI),Z===n.UNSIGNED_SHORT&&(oe=n.R16UI),Z===n.UNSIGNED_INT&&(oe=n.R32UI),Z===n.BYTE&&(oe=n.R8I),Z===n.SHORT&&(oe=n.R16I),Z===n.INT&&(oe=n.R32I)),v===n.RG&&(Z===n.FLOAT&&(oe=n.RG32F),Z===n.HALF_FLOAT&&(oe=n.RG16F),Z===n.UNSIGNED_BYTE&&(oe=n.RG8),Z===n.UNSIGNED_SHORT&&Pe&&(oe=Pe.RG16_EXT),Z===n.SHORT&&Pe&&(oe=Pe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(oe=n.RG16UI),Z===n.UNSIGNED_INT&&(oe=n.RG32UI),Z===n.BYTE&&(oe=n.RG8I),Z===n.SHORT&&(oe=n.RG16I),Z===n.INT&&(oe=n.RG32I)),v===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),Z===n.UNSIGNED_INT&&(oe=n.RGB32UI),Z===n.BYTE&&(oe=n.RGB8I),Z===n.SHORT&&(oe=n.RGB16I),Z===n.INT&&(oe=n.RGB32I)),v===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(oe=n.RGBA32UI),Z===n.BYTE&&(oe=n.RGBA8I),Z===n.SHORT&&(oe=n.RGBA16I),Z===n.INT&&(oe=n.RGBA32I)),v===n.RGB&&(Z===n.UNSIGNED_SHORT&&Pe&&(oe=Pe.RGB16_EXT),Z===n.SHORT&&Pe&&(oe=Pe.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),v===n.RGBA){let se=Ae?Mo:dt.getTransfer(ce);Z===n.FLOAT&&(oe=n.RGBA32F),Z===n.HALF_FLOAT&&(oe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(oe=se===It?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Pe&&(oe=Pe.RGBA16_EXT),Z===n.SHORT&&Pe&&(oe=Pe.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function g(C,v){let Z;return C?v===null||v===qi||v===or?Z=n.DEPTH24_STENCIL8:v===Oi?Z=n.DEPTH32F_STENCIL8:v===Tr&&(Z=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qi||v===or?Z=n.DEPTH_COMPONENT24:v===Oi?Z=n.DEPTH_COMPONENT32F:v===Tr&&(Z=n.DEPTH_COMPONENT16),Z}function w(C,v){return D(C)===!0||C.isFramebufferTexture&&C.minFilter!==xi&&C.minFilter!==Ci?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function z(C){let v=new WeakRef(C);i.get(C).__ref=v,x.add(v),E.register(C,v,v)}function U(C){let v=i.get(C).__ref;v!==void 0&&(x.delete(v),E.unregister(v))}function H(C){ee(C.target)}function X(C){F(C.target)}function ee(C){C.removeEventListener("dispose",H),U(C),Q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&p.delete(C)}function F(C){C.removeEventListener("dispose",X),U(C),G(C)}function te(){for(let C of x){let v=C.deref();v!==void 0&&(v.isRenderTarget===!0?F(v):ee(v))}x.clear(),p.clear()}function Q(C){let v=i.get(C);if(v.__webglInit===void 0)return;let Z=C.source,_e=f.get(Z);if(_e){let ce=_e[v.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&$(C),Object.keys(_e).length===0&&f.delete(Z)}i.remove(C)}function $(C){let v=i.get(C);n.deleteTexture(v.__webglTexture);let Z=C.source,_e=f.get(Z);delete _e[v.__cacheKey],s.memory.textures--}function G(C){let v=i.get(C);v.__depthDisposeCallback&&v.__depthDisposeCallback();let Z=C.depthTexture;if(Z&&Z.renderTarget===C&&ee(Z),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(v.__webglFramebuffer[ce]))for(let Ae=0;Ae<v.__webglFramebuffer[ce].length;Ae++)n.deleteFramebuffer(v.__webglFramebuffer[ce][Ae]);else n.deleteFramebuffer(v.__webglFramebuffer[ce]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ce])}else{if(Array.isArray(v.__webglFramebuffer))for(let ce=0;ce<v.__webglFramebuffer.length;ce++)n.deleteFramebuffer(v.__webglFramebuffer[ce]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ce=0;ce<v.__webglColorRenderbuffer.length;ce++)v.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ce]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let _e=C.textures;for(let ce=0,Ae=_e.length;ce<Ae;ce++){let Pe=i.get(_e[ce]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),s.memory.textures--),i.remove(_e[ce])}i.remove(C)}let j=0;function V(){j=0}function de(){return j}function Ge(C){j=C}function Be(){let C=j;return C>=r.maxTextures&&He("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),j+=1,C}function ne(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.mipmapsAutoUpdate),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function Le(C,v){let Z=i.get(C);if(C.isVideoTexture&&ai(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){let _e=C.image;if(_e===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{gi(Z,C,v);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+v)}function We(C,v){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){gi(Z,C,v);return}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+v)}function Qe(C,v){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){gi(Z,C,v);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+v)}function Fe(C,v){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){nn(Z,C,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+v)}let gt={[go]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[aa]:n.MIRRORED_REPEAT},vi={[xi]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[la]:n.NEAREST_MIPMAP_LINEAR,[Ci]:n.LINEAR,[Ll]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},rt={[hf]:n.NEVER,[kl]:n.ALWAYS,[uf]:n.LESS,[zl]:n.LEQUAL,[ff]:n.EQUAL,[Gl]:n.GEQUAL,[df]:n.GREATER,[pf]:n.NOTEQUAL};function Ht(C,v){if(v.type===Oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ci||v.magFilter===Ll||v.magFilter===la||v.magFilter===In||v.minFilter===Ci||v.minFilter===Ll||v.minFilter===la||v.minFilter===In)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,gt[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,gt[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,gt[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,vi[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,vi[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===xi||v.minFilter!==la&&v.minFilter!==In||v.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(C,v){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",H),z(v));let _e=v.source,ce=f.get(_e);ce===void 0&&(ce={},f.set(_e,ce));let Ae=ne(v);if(Ae!==C.__cacheKey){ce[Ae]===void 0&&(ce[Ae]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),ce[Ae].usedTimes++;let Pe=ce[C.__cacheKey];Pe!==void 0&&(ce[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&$(v)),C.__cacheKey=Ae,C.__webglTexture=ce[Ae].texture}return Z}function At(C,v,Z){return Math.floor(Math.floor(C/Z)/v)}function bi(C,v,Z,_e){let Ae=C.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Z,_e,v.data);else{Ae.sort((N,ae)=>N.start-ae.start);let Pe=0;for(let N=1;N<Ae.length;N++){let ae=Ae[Pe],ie=Ae[N],be=ae.start+ae.count,ye=At(ie.start,v.width,4),Ee=At(ae.start,v.width,4);ie.start<=be+1&&ye===Ee&&At(ie.start+ie.count-1,v.width,4)===ye?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++Pe,Ae[Pe]=ie)}Ae.length=Pe+1;let oe=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let N=0,ae=Ae.length;N<ae;N++){let ie=Ae[N],be=Math.floor(ie.start/4),ye=Math.ceil(ie.count/4),Ee=be%v.width,Je=Math.floor(be/v.width),ft=ye,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,Je),t.texSubImage2D(n.TEXTURE_2D,0,Ee,Je,ft,ve,Z,_e,v.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function gi(C,v,Z){let _e=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(_e=n.TEXTURE_3D);let ce=Vt(C,v),Ae=v.source;t.bindTexture(_e,C.__webglTexture,n.TEXTURE0+Z);let Pe=i.get(Ae);if(Ae.version!==Pe.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ve=dt.getPrimaries(dt.workingColorSpace),je=v.colorSpace===Zn?null:dt.getPrimaries(v.colorSpace),_t=v.colorSpace===Zn||ve===je?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let se=b(v.image,!1,r.maxTextureSize);se=Te(v,se);let Re=o.convert(v.format,v.colorSpace),N=o.convert(v.type),ae=R(v.internalFormat,Re,N,v.normalized,v.colorSpace,v.isVideoTexture);Ht(_e,v);let ie,be=v.mipmaps,ye=v.isVideoTexture!==!0,Ee=Pe.__version===void 0||ce===!0,Je=Ae.dataReady,ft=w(v,se);if(v.isDepthTexture)ae=g(v.format===Nn,v.type),Ee&&(ye?t.texStorage2D(n.TEXTURE_2D,1,ae,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ae,se.width,se.height,0,Re,N,null));else if(v.isDataTexture)if(be.length>0){ye&&Ee&&t.texStorage2D(n.TEXTURE_2D,ft,ae,be[0].width,be[0].height);for(let ve=0,je=be.length;ve<je;ve++)ie=be[ve],ye?Je&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ie.width,ie.height,Re,N,ie.data):t.texImage2D(n.TEXTURE_2D,ve,ae,ie.width,ie.height,0,Re,N,ie.data);v.generateMipmaps=!1}else ye?(Ee&&t.texStorage2D(n.TEXTURE_2D,ft,ae,se.width,se.height),Je&&bi(v,se,Re,N)):t.texImage2D(n.TEXTURE_2D,0,ae,se.width,se.height,0,Re,N,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ye&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,ae,be[0].width,be[0].height,se.depth);for(let ve=0,je=be.length;ve<je;ve++)if(ie=be[ve],v.format!==an)if(Re!==null)if(ye){if(Je)if(v.layerUpdates.size>0){let _t=cu(ie.width,ie.height,v.format,v.type);for(let Ne of v.layerUpdates){let ot=ie.data.subarray(Ne*_t/ie.data.BYTES_PER_ELEMENT,(Ne+1)*_t/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Ne,ie.width,ie.height,1,Re,ot)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ie.width,ie.height,se.depth,Re,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,ae,ie.width,ie.height,se.depth,0,ie.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?Je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ie.width,ie.height,se.depth,Re,N,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,ae,ie.width,ie.height,se.depth,0,Re,N,ie.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ye&&Ee&&t.texStorage2D(n.TEXTURE_2D,ft,ae,be[0].width,be[0].height);for(let ve=0,je=be.length;ve<je;ve++)ie=be[ve],v.format!==an?Re!==null?ye?Je&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,ie.width,ie.height,Re,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,ae,ie.width,ie.height,0,ie.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?Je&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ie.width,ie.height,Re,N,ie.data):t.texImage2D(n.TEXTURE_2D,ve,ae,ie.width,ie.height,0,Re,N,ie.data)}else if(v.isDataArrayTexture)if(ye){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,ae,se.width,se.height,se.depth),Je)if(v.layerUpdates.size>0){let ve=cu(se.width,se.height,v.format,v.type);for(let je of v.layerUpdates){let _t=se.data.subarray(je*ve/se.data.BYTES_PER_ELEMENT,(je+1)*ve/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,je,se.width,se.height,1,Re,N,_t)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Re,N,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,se.width,se.height,se.depth,0,Re,N,se.data);else if(v.isData3DTexture)ye?(Ee&&t.texStorage3D(n.TEXTURE_3D,ft,ae,se.width,se.height,se.depth),Je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Re,N,se.data)):t.texImage3D(n.TEXTURE_3D,0,ae,se.width,se.height,se.depth,0,Re,N,se.data);else if(v.isFramebufferTexture){if(Ee)if(ye)t.texStorage2D(n.TEXTURE_2D,ft,ae,se.width,se.height);else{let ve=se.width,je=se.height;for(let _t=0;_t<ft;_t++)t.texImage2D(n.TEXTURE_2D,_t,ae,ve,je,0,Re,N,null),ve>>=1,je>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),se.parentNode!==ve){ve.appendChild(se),p.add(v),ve.onpaint=je=>{let _t=je.changedElements;for(let Ne of p)_t.includes(Ne.image)&&(Ne.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let _t=n.RGBA,Ne=n.RGBA,ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_t,Ne,ot,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(be.length>0){if(ye&&Ee){let ve=Ye(be[0]);t.texStorage2D(n.TEXTURE_2D,ft,ae,ve.width,ve.height)}for(let ve=0,je=be.length;ve<je;ve++)ie=be[ve],ye?Je&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re,N,ie):t.texImage2D(n.TEXTURE_2D,ve,ae,Re,N,ie);v.generateMipmaps=!1}else if(ye){if(Ee){let ve=Ye(se);t.texStorage2D(n.TEXTURE_2D,ft,ae,ve.width,ve.height)}Je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,N,se)}else t.texImage2D(n.TEXTURE_2D,0,ae,Re,N,se);D(v)&&v.mipmapsAutoUpdate===!0&&A(_e),Pe.__version=Ae.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function nn(C,v,Z){if(v.image.length!==6)return;let _e=Vt(C,v),ce=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Z);let Ae=i.get(ce);if(ce.version!==Ae.__version||_e===!0){t.activeTexture(n.TEXTURE0+Z);let Pe=dt.getPrimaries(dt.workingColorSpace),oe=v.colorSpace===Zn?null:dt.getPrimaries(v.colorSpace),se=v.colorSpace===Zn||Pe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Re=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let Ne=0;Ne<6;Ne++)!Re&&!N?ae[Ne]=b(v.image[Ne],!0,r.maxCubemapSize):ae[Ne]=N?v.image[Ne].image:v.image[Ne],ae[Ne]=Te(v,ae[Ne]);let ie=ae[0],be=o.convert(v.format,v.colorSpace),ye=o.convert(v.type),Ee=R(v.internalFormat,be,ye,v.normalized,v.colorSpace),Je=v.isVideoTexture!==!0,ft=Ae.__version===void 0||_e===!0,ve=ce.dataReady,je=w(v,ie);Ht(n.TEXTURE_CUBE_MAP,v);let _t;if(v.isDepthTexture){if(Ee=g(v.format===Nn,v.type),ft)if(Je)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ee,ie.width,ie.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,ie.width,ie.height,0,be,ye,null)}else if(Re){Je&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Ee,ie.width,ie.height);for(let Ne=0;Ne<6;Ne++){_t=ae[Ne].mipmaps;for(let ot=0;ot<_t.length;ot++){let wi=_t[ot];v.format!==an?be!==null?Je?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot,0,0,wi.width,wi.height,be,wi.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot,Ee,wi.width,wi.height,0,wi.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot,0,0,wi.width,wi.height,be,ye,wi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot,Ee,wi.width,wi.height,0,be,ye,wi.data)}}}else{if(_t=v.mipmaps,Je&&ft){_t.length>0&&je++;let Ne=Ye(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Ee,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(N){Je?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ae[Ne].width,ae[Ne].height,be,ye,ae[Ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,ae[Ne].width,ae[Ne].height,0,be,ye,ae[Ne].data);for(let ot=0;ot<_t.length;ot++){let li=_t[ot].image[Ne].image;Je?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot+1,0,0,li.width,li.height,be,ye,li.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot+1,Ee,li.width,li.height,0,be,ye,li.data)}}else{Je?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,be,ye,ae[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,be,ye,ae[Ne]);for(let ot=0;ot<_t.length;ot++){let wi=_t[ot];Je?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot+1,0,0,be,ye,wi.image[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ot+1,Ee,be,ye,wi.image[Ne])}}}D(v)&&v.mipmapsAutoUpdate===!0&&A(n.TEXTURE_CUBE_MAP),Ae.__version=ce.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ni(C,v,Z,_e,ce,Ae){let Pe=o.convert(Z.format,Z.colorSpace),oe=o.convert(Z.type),se=R(Z.internalFormat,Pe,oe,Z.normalized,Z.colorSpace),Re=i.get(v),N=i.get(Z);if(N.__renderTarget=v,!Re.__hasExternalTextures){let ae=Math.max(1,v.width>>Ae),ie=Math.max(1,v.height>>Ae);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,Ae,se,ae,ie,v.depth,0,Pe,oe,null):t.texImage2D(ce,Ae,se,ae,ie,0,Pe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),me(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,ce,N.__webglTexture,0,ue(v)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,ce,N.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function gn(C,v,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){let _e=v.depthTexture,ce=_e&&_e.isDepthTexture?_e.type:null,Ae=g(v.stencilBuffer,ce),Pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(v),Ae,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(v),Ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,C)}else{let _e=v.textures;for(let ce=0;ce<_e.length;ce++){let Ae=_e[ce],Pe=o.convert(Ae.format,Ae.colorSpace),oe=o.convert(Ae.type),se=R(Ae.internalFormat,Pe,oe,Ae.normalized,Ae.colorSpace);me(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(v),se,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(v),se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,se,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(C,v,Z){let _e=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=i.get(v.depthTexture);ce.__renderTarget=v;let Ae=_e?v.depthTexture.image[0]:v.depthTexture.image;(!ce.__webglTexture||Ae.width!==v.width||Ae.height!==v.height)&&(Ae.width=v.width,Ae.height=v.height,v.depthTexture.needsUpdate=!0),_e?Fe(v.depthTexture,0):Le(v.depthTexture,0);let Pe=ce.__webglTexture,oe=ue(v),se=_e?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Re=v.depthTexture.format===Nn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Rn)me(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,se,Pe,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,se,Pe,0);else if(v.depthTexture.format===Nn)me(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,se,Pe,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Re,se,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tn(C){let v=i.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let _e=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),_e){let ce=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,_e.removeEventListener("dispose",ce)};_e.addEventListener("dispose",ce),v.__depthDisposeCallback=ce}v.__boundDepthTexture=_e}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(Z)for(let _e=0;_e<6;_e++)Nt(v.__webglFramebuffer[_e],C,_e);else C.texture.mipmaps.length>0?Nt(v.__webglFramebuffer[0],C,0):Nt(v.__webglFramebuffer,C,0);else if(Z){v.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[_e]),v.__webglDepthbuffer[_e]===void 0)v.__webglDepthbuffer[_e]=n.createRenderbuffer(),gn(v.__webglDepthbuffer[_e],C,!1);else{let ce=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=v.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Ae)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),gn(v.__webglDepthbuffer,C,!1);else{let ce=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function wn(C,v,Z){let _e=i.get(C);v!==void 0&&ni(_e.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Tn(C)}function xn(C){let v=C.texture,Z=i.get(C),_e=i.get(v);C.addEventListener("dispose",X),z(C);let ce=C.textures,Ae=C.isWebGLCubeRenderTarget===!0,Pe=ce.length>1;if(Pe||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=v.version,s.memory.textures++),Ae){Z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps.length>0){Z.__webglFramebuffer[oe]=[];for(let se=0;se<v.mipmaps.length;se++)Z.__webglFramebuffer[oe][se]=n.createFramebuffer()}else Z.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)Z.__webglFramebuffer[oe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let oe=0,se=ce.length;oe<se;oe++){let Re=i.get(ce[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&me(C)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let oe=0;oe<ce.length;oe++){let se=ce[oe];Z.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let Re=o.convert(se.format,se.colorSpace),N=o.convert(se.type),ae=R(se.internalFormat,Re,N,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),ie=ue(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),gn(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)ni(Z.__webglFramebuffer[oe][se],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,se);else ni(Z.__webglFramebuffer[oe],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);D(v)?A(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let oe=0,se=ce.length;oe<se;oe++){let Re=ce[oe],N=i.get(Re),ae=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,N.__webglTexture),Ht(ae,Re),ni(Z.__webglFramebuffer,C,Re,n.COLOR_ATTACHMENT0+oe,ae,0),D(Re)&&A(ae)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,_e.__webglTexture),Ht(oe,v),v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)ni(Z.__webglFramebuffer[se],C,v,n.COLOR_ATTACHMENT0,oe,se);else ni(Z.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,oe,0);D(v)?A(oe):v.mipmaps.length>0&&n.texParameteri(oe,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Tn(C)}function k(C){let v=C.textures;for(let Z=0,_e=v.length;Z<_e;Z++){let ce=v[Z];if(D(ce)&&ce.mipmapsAutoUpdate===!0){let Ae=I(C),Pe=i.get(ce).__webglTexture;t.bindTexture(Ae,Pe),A(Ae),t.unbindTexture()}}}let Ei=[];function Bt(C){if(C.samples>0){if(me(C)===!1){let v=C.textures,Z=C.width,_e=C.height,ce=n.COLOR_BUFFER_BIT,Ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(C),oe=v.length>1;if(oe)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);let N=i.get(v[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,Z,_e,0,0,Z,_e,ce,n.NEAREST),l===!0&&(Ei.length=0,Ei.push(n.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ei.push(Ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ei))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);let N=i.get(v[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ue(C){return Math.min(r.maxSamples,C.samples)}function me(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ai(C){let v=s.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Te(C,v){let Z=C.colorSpace,_e=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==vo&&Z!==Zn&&(dt.getTransfer(Z)===It?(_e!==an||ce!==Ti)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Z)),v}function Ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=V,this.getTextureUnits=de,this.setTextureUnits=Ge,this.setTexture2D=Le,this.setTexture2DArray=We,this.setTexture3D=Qe,this.setTextureCube=Fe,this.rebindTextures=wn,this.setupRenderTarget=xn,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Tn,this.setupFrameBufferTexture=ni,this.useMultisampledRTT=me,this.dispose=te}function kg(n,e){function t(i,r=Zn){let o,s=dt.getTransfer(r);if(i===Ti)return n.UNSIGNED_BYTE;if(i===qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ul)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dl)return n.BYTE;if(i===Il)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Xo)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Fl)return n.ALPHA;if(i===Ol)return n.RGB;if(i===an)return n.RGBA;if(i===Rn)return n.DEPTH_COMPONENT;if(i===Nn)return n.DEPTH_STENCIL;if(i===Zo)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Un)return n.RG;if(i===$o)return n.RG_INTEGER;if(i===Jo)return n.RGBA_INTEGER;if(i===Qo||i===jo||i===es||i===ts)if(s===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===es)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ts)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ca||i===ha||i===ua||i===fa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ca)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===da||i===pa||i===ma||i===ga||i===xa||i===xo||i===_a)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===da||i===pa)return s===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ma)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===ga)return o.COMPRESSED_R11_EAC;if(i===xa)return o.COMPRESSED_SIGNED_R11_EAC;if(i===xo)return o.COMPRESSED_RG11_EAC;if(i===_a)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===va||i===Ma||i===Sa||i===ya||i===ba||i===Ea||i===Ta||i===wa||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===va)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ma)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ba)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ta)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wa)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return s===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===Na||i===Ua)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ia)return s===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Na)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ua)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fa||i===Oa||i===_o||i===Ba)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Fa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_o)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
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

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ls(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Qt({vertexShader:q_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Qc=class extends Zi{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,x=null,E=typeof XRWebGLBinding<"u",m=new Jc,d={},b=t.getContextAttributes(),D=null,A=null,I=[],R=[],g=new le,w=null,z=null,U=new Ii;U.viewport=new Xt;let H=new Ii;H.viewport=new Xt;let X=[U,H],ee=new Wc,F=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Le=I[ne];return Le===void 0&&(Le=new fs,I[ne]=Le),Le.getTargetRaySpace()},this.getControllerGrip=function(ne){let Le=I[ne];return Le===void 0&&(Le=new fs,I[ne]=Le),Le.getGripSpace()},this.getHand=function(ne){let Le=I[ne];return Le===void 0&&(Le=new fs,I[ne]=Le),Le.getHandSpace()};function Q(ne){let Le=R.indexOf(ne.inputSource);if(Le===-1)return;let We=I[Le];We!==void 0&&(We.update(ne.inputSource,ne.frame,c||s),We.dispatchEvent({type:ne.type,data:ne.inputSource}))}function $(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",G);for(let ne=0;ne<I.length;ne++){let Le=R[ne];Le!==null&&(R[ne]=null,I[ne].disconnect(Le))}F=null,te=null,m.reset();for(let ne in d)delete d[ne];if(e.setRenderTarget(D),f=null,u=null,p=null,r=null,A=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(g.width,g.height,!1),z!==null){let ne=z.camera;ne.fov=z.fov,ne.zoom=z.zoom,ne.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",$),r.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(g),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let We=null,Qe=null,Fe=null;b.depth&&(Fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,We=b.stencil?Nn:Rn,Qe=b.stencil?or:qi);let gt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:o};p=this.getBinding(),u=p.createProjectionLayer(gt),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new di(u.textureWidth,u.textureHeight,{format:an,type:Ti,depthTexture:new zn(u.textureWidth,u.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,We),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let We={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,t,We),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new di(f.framebufferWidth,f.framebufferHeight,{format:an,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(ne){for(let Le=0;Le<ne.removed.length;Le++){let We=ne.removed[Le],Qe=R.indexOf(We);Qe>=0&&(R[Qe]=null,I[Qe].disconnect(We))}for(let Le=0;Le<ne.added.length;Le++){let We=ne.added[Le],Qe=R.indexOf(We);if(Qe===-1){for(let gt=0;gt<I.length;gt++)if(gt>=R.length){R.push(We),Qe=gt;break}else if(R[gt]===null){R[gt]=We,Qe=gt;break}if(Qe===-1)break}let Fe=I[Qe];Fe&&Fe.connect(We)}}function j(ne,Le){Le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let Le=ne.near,We=ne.far;m.texture!==null&&(m.depthNear>0&&(Le=m.depthNear),m.depthFar>0&&(We=m.depthFar)),ee.near=H.near=U.near=Le,ee.far=H.far=U.far=We,(F!==ee.near||te!==ee.far)&&(r.updateRenderState({depthNear:ee.near,depthFar:ee.far}),F=ee.near,te=ee.far),ee.layers.mask=ne.layers.mask|6,U.layers.mask=ee.layers.mask&-5,H.layers.mask=ee.layers.mask&-3;let Qe=ne.parent,Fe=ee.cameras;j(ee,Qe);for(let gt=0;gt<Fe.length;gt++)j(Fe[gt],Qe);ee.projectionMatrix.copy(U.projectionMatrix),ee.projectionMatrixInverse.copy(U.projectionMatrixInverse),z===null&&ne.isPerspectiveCamera&&(z={camera:ne,fov:ne.fov,zoom:ne.zoom}),V(ne,ee,Qe)};function V(ne,Le,We){We===null?ne.matrix.copy(Le.matrixWorld):(ne.matrix.copy(We.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Le.projectionMatrix),ne.projectionMatrixInverse.copy(Le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=yo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ne){l=ne,u!==null&&(u.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ee)},this.getCameraTexture=function(ne){return d[ne]};let de=null;function Ge(ne,Le){if(h=Le.getViewerPose(c||s),x=Le,h!==null){let We=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let Qe=!1;We.length!==ee.cameras.length&&(ee.cameras.length=0,Qe=!0);for(let rt=0;rt<We.length;rt++){let Ht=We[rt],Vt=null;if(f!==null)Vt=f.getViewport(Ht);else{let bi=p.getViewSubImage(u,Ht);Vt=bi.viewport,rt===0&&(e.setRenderTargetTextures(A,bi.colorTexture,bi.depthStencilTexture),e.setRenderTarget(A))}let At=X[rt];At===void 0&&(At=new Ii,At.layers.enable(rt),At.viewport=new Xt,X[rt]=At),At.matrix.fromArray(Ht.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Ht.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),rt===0&&(ee.matrix.copy(At.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Qe===!0&&ee.cameras.push(At)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();let rt=p.getDepthInformation(We[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,r.renderState)}if(Fe&&Fe.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let rt=0;rt<We.length;rt++){let Ht=We[rt].camera;if(Ht){let Vt=d[Ht];Vt||(Vt=new Ls,d[Ht]=Vt);let At=p.getCameraImage(Ht);Vt.sourceTexture=At}}}}for(let We=0;We<I.length;We++){let Qe=R[We],Fe=I[We];Qe!==null&&Fe!==void 0&&Fe.update(Qe,Le,c||s)}de&&de(ne,Le),Le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Le}),x=null}let Be=new Xc;Be.setAnimationLoop(Ge),this.setAnimationLoop=function(ne){de=ne},this.dispose=function(){}}};var Z_=new at,Hg=new tt;Hg.set(-1,0,0,0,1,0,0,0,1);function Vg(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Oc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,D,A){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?o(m,d):d.isMeshLambertMaterial?(o(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(o(m,d),p(m,d)):d.isMeshPhongMaterial?(o(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(o(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,A)):d.isMeshMatcapMaterial?(o(m,d),x(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),E(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,D):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===mi&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===mi&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),D=b.envMap,A=b.envMapRotation;D&&(m.envMap.value=D,m.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(A)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hg),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,D){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=D*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,b){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mi&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function E(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wg(n,e,t,i){let r={},o={};function s(b,D){let A=D.program;i.uniformBlockBinding(b,A,r[b.id])}function a(b,D){let A=r[b.id];A===void 0&&(x(b),A=l(b),r[b.id]=A,b.addEventListener("dispose",m));let I=D.program;i.updateUBOMapping(b,I);let R=e.render.frame;o[b.id]!==R&&(c(b),o[b.id]=R)}function l(b){let D=n.createBuffer(),A=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,A,I),n.bindBuffer(n.UNIFORM_BUFFER,null),D}function c(b){let D=r[b.id],A=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let R=0,g=A.length;R<g;R++){let w=A[R];if(Array.isArray(w))for(let z=0,U=w.length;z<U;z++)h(w[z],R,z,I);else h(w,R,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,D,A,I){if(u(b,D,A,I)===!0){let R=b.__offset,g=b.value;if(Array.isArray(g)){let w=0;for(let z=0;z<g.length;z++){let U=g[z],H=E(U,!0);p(U,b.__data,w),w+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,b.__data)}}function p(b,D,A){typeof b=="number"||typeof b=="boolean"?D[A]=b:b.isMatrix3?(D[A]=b.elements[0],D[A+1]=b.elements[1],D[A+2]=b.elements[2],D[A+3]=0,D[A+4]=b.elements[3],D[A+5]=b.elements[4],D[A+6]=b.elements[5],D[A+7]=0,D[A+8]=b.elements[6],D[A+9]=b.elements[7],D[A+10]=b.elements[8],D[A+11]=0):ArrayBuffer.isView(b)?D.set(b.subarray(0,D.length-A),A):b.toArray(D,A)}function u(b,D,A,I){let R=b.value,g=D+"_"+A;if(Array.isArray(R)){I[g]===void 0&&(I[g]=[]);let w=I[g],z=!1;for(let U=0;U<R.length;U++)f(R[U],w,U)===!0&&(z=!0);return z}return f(R,I,g)}function f(b,D,A){if(D[A]===void 0)return typeof b=="number"||typeof b=="boolean"?D[A]=b:ArrayBuffer.isView(b)?D[A]=b.slice():D[A]=b.clone(),!0;{let I=D[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return D[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function x(b){let D=b.uniforms,A=0,I=16;for(let g=0,w=D.length;g<w;g++){let z=Array.isArray(D[g])?D[g]:[D[g]];for(let U=0,H=z.length;U<H;U++){let X=z[U],ee=Array.isArray(X.value)?X.value:[X.value],F=Array.isArray(D[g])||Array.isArray(X.value),te=A;for(let $=0,G=ee.length;$<G;$++){let j=ee[$],V=E(j,F),de=A%I,Ge=de%V.boundary,Be=de+Ge;A+=Ge,Be!==0&&I-Be<V.storage&&(A+=I-Be),$===0&&(te=A),A+=V.storage}let Q=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new Q((A-te)/Float32Array.BYTES_PER_ELEMENT),X.__offset=te}}let R=A%I;return R>0&&(A+=I-R),b.__size=A,b.__cache={},this}function E(b,D){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=16,A.storage=48):b.isMatrix4?(A.boundary=16,A.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):He("WebGLRenderer: Unsupported uniform value type.",b),D===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function m(b){let D=b.target;D.removeEventListener("dispose",m),n.deleteBuffer(r[D.id]),delete r[D.id],delete o[D.id]}function d(){for(let b in r)n.deleteBuffer(r[b]);r={},o={}}return{bind:s,update:a,dispose:d}}var K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sr=null;function Xg(){return Sr===null&&(Sr=new ws(K_,16,16,Un,fi),Sr.name="DFG_LUT",Sr.minFilter=Ci,Sr.magFilter=Ci,Sr.wrapS=An,Sr.wrapT=An,Sr.generateMipmaps=!1,Sr.needsUpdate=!0),Sr}var dl=class{constructor(e={}){let{canvas:t=xf(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ti}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=s;let E=f,m=new Set([Jo,$o,Ko]),d=new Set([Ti,qi,Tr,or,qo,Yo]),b=new Uint32Array(4),D=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},I=null,R=null,g=[],w=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,H=!1,X=null,ee=null,F=null,te=null;this._outputColorSpace=Yi;let Q=0,$=0,G=null,j=-1,V=null,de=new Xt,Ge=new Xt,Be=null,ne=new ge(0),Le=0,We=t.width,Qe=t.height,Fe=1,gt=null,vi=null,rt=new Xt(0,0,We,Qe),Ht=new Xt(0,0,We,Qe),Vt=!1,At=new hr,bi=new gc,gi=!1,nn=!1,ni=new at,gn=new y,Nt=new Xt,Tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wn=!1;function xn(){return G===null?Fe:1}let k=i;function Ei(M,O){return t.getContext(M,O)}let Bt,ue,me,ai,Te,Ye,C,v,Z,_e,ce,Ae,Pe,oe,se,Re,N,ae,ie,be,ye,Ee,Je;try{let M={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),k===null){let O="webgl2";if(k=Ei(O,M),k===null)throw Ei(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(M){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Et("WebGLRenderer: "+M.message),M}function ft(){Bt=new tg(k),Bt.init(),ye=new kg(k,Bt),ue=new qm(k,Bt,e,ye),me=new zg(k,Bt),ue.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),ee=k.createFramebuffer(),F=k.createFramebuffer(),te=k.createFramebuffer(),ai=new rg(k),Te=new Rg,Ye=new Gg(k,Bt,me,Te,ue,ye,ai),C=new eg(U),v=new ld(k),Ee=new Wm(k,v),Z=new ig(k,v,ai,Ee),_e=new sg(k,Z,v,Ee,ai),ae=new og(k,ue,Ye),se=new Ym(Te),ce=new Ag(U,C,Bt,ue,Ee,se),Ae=new Vg(U,Te),Pe=new Lg,oe=new Ng(Bt),N=new Vm(U,C,me,_e,x,l),Re=new Bg(U,_e,ue),Je=new Wg(k,ai,ue,me),ie=new Xm(k,Bt,ai),be=new ng(k,Bt,ai),ai.programs=ce.programs,U.capabilities=ue,U.extensions=Bt,U.properties=Te,U.renderLists=Pe,U.shadowMap=Re,U.state=me,U.info=ai}E!==Ti&&(z=new ag(E,t.width,t.height,a,r,o));let ve=new Qc(U,k);this.xr=ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(M){M!==void 0&&(Fe=M,this.setSize(We,Qe,!1))},this.getSize=function(M){return M.set(We,Qe)},this.setSize=function(M,O,J=!0){if(ve.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}We=M,Qe=O,t.width=Math.floor(M*Fe),t.height=Math.floor(O*Fe),J===!0&&(t.style.width=M+"px",t.style.height=O+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(We*Fe,Qe*Fe).floor()},this.setDrawingBufferSize=function(M,O,J){We=M,Qe=O,Fe=J,t.width=Math.floor(M*J),t.height=Math.floor(O*J),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(E===Ti){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(de)},this.getViewport=function(M){return M.copy(rt)},this.setViewport=function(M,O,J,W){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,O,J,W),me.viewport(de.copy(rt).multiplyScalar(xn()).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,O,J,W){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,O,J,W),me.scissor(Ge.copy(Ht).multiplyScalar(xn()).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(M){me.setScissorTest(Vt=M)},this.setOpaqueSort=function(M){gt=M},this.setTransparentSort=function(M){vi=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,J=!0){let W=0;if(M){let q=!1;if(G!==null){let Ce=G.texture.format;q=m.has(Ce)}if(q){let Ce=G.texture.type,Ve=d.has(Ce),we=N.getClearColor(),Oe=N.getClearAlpha(),Ze=we.r,pt=we.g,Pt=we.b;Ve?(b[0]=Ze,b[1]=pt,b[2]=Pt,b[3]=Oe,k.clearBufferuiv(k.COLOR,0,b)):(D[0]=Ze,D[1]=pt,D[2]=Pt,D[3]=Oe,k.clearBufferiv(k.COLOR,0,D))}else W|=k.COLOR_BUFFER_BIT}O&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),X=M},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),N.dispose(),Pe.dispose(),oe.dispose(),Ye.dispose(),Te.dispose(),C.dispose(),_e.dispose(),Z.dispose(),Ee.dispose(),Je.dispose(),ce.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Js),ve.removeEventListener("sessionend",rn),yr.stop()};function je(M){M.preventDefault(),rs("WebGLRenderer: Context Lost."),H=!0}function _t(){rs("WebGLRenderer: Context Restored."),H=!1;let M=ai.autoReset,O=Re.enabled,J=Re.autoUpdate,W=Re.needsUpdate,q=Re.type;ft(),ai.autoReset=M,Re.enabled=O,Re.autoUpdate=J,Re.needsUpdate=W,Re.type=q}function Ne(M){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ot(M){let O=M.target;O.removeEventListener("dispose",ot),wi(O)}function wi(M){li(M),Te.remove(M)}function li(M){let O=Te.get(M).programs;O!==void 0&&(O.forEach(function(J){ce.releaseProgram(J)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,J,W,q,Ce){O===null&&(O=Tn);let Ve=q.isMesh&&q.matrixWorld.determinantAffine()<0,we=yl(M,O,J,W,q);me.setMaterial(W,Ve);let Oe=J.index,Ze=1;if(W.wireframe===!0){if(Oe=Z.getWireframeAttribute(J),Oe===void 0)return;Ze=2}let pt=J.drawRange,Pt=J.attributes.position,Xe=pt.start*Ze,Lt=(pt.start+pt.count)*Ze;Ce!==null&&(Xe=Math.max(Xe,Ce.start*Ze),Lt=Math.min(Lt,(Ce.start+Ce.count)*Ze)),Oe!==null?(Xe=Math.max(Xe,0),Lt=Math.min(Lt,Oe.count)):Pt!=null&&(Xe=Math.max(Xe,0),Lt=Math.min(Lt,Pt.count));let Mi=Lt-Xe;if(Mi<0||Mi===1/0)return;Ee.setup(q,W,we,J,Oe);let $t,Jt=ie;if(Oe!==null&&($t=v.get(Oe),Jt=be,Jt.setIndex($t)),q.isMesh)W.wireframe===!0?(me.setLineWidth(W.wireframeLinewidth*xn()),Jt.setMode(k.LINES)):Jt.setMode(k.TRIANGLES);else if(q.isLine){let ki=W.linewidth;ki===void 0&&(ki=1),me.setLineWidth(ki*xn()),q.isLineSegments?Jt.setMode(k.LINES):q.isLineLoop?Jt.setMode(k.LINE_LOOP):Jt.setMode(k.LINE_STRIP)}else q.isPoints?Jt.setMode(k.POINTS):q.isSprite&&Jt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let ki=q._multiDrawStarts,xe=q._multiDrawCounts,Hi=q._multiDrawCount,Ut=Oe?v.get(Oe).bytesPerElement:1,nr=Te.get(W).currentProgram.getUniforms();for(let Ni=0;Ni<Hi;Ni++)nr.setValue(k,"_gl_DrawID",Ni),Jt.render(ki[Ni]/Ut,xe[Ni])}else if(q.isInstancedMesh)Jt.renderInstances(Xe,Mi,q.count);else if(J.isInstancedBufferGeometry){let ki=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,xe=Math.min(J.instanceCount,ki);Jt.renderInstances(Xe,Mi,xe)}else Jt.render(Xe,Mi)};function $s(M,O,J,W){X!==null&&M.isNodeMaterial&&X.setObject(W,M),gi===!0&&se.setState(M,J,!1),M.transparent===!0&&M.side===Xi&&M.forceSinglePass===!1?(M.side=mi,M.needsUpdate=!0,on(M,O,W),M.side=Xn,M.needsUpdate=!0,on(M,O,W),M.side=Xi):on(M,O,W)}this.compile=function(M,O,J=null){J===null&&(J=M),X!==null&&X.renderStart(M,O,J),R=oe.get(J),R.init(O),w.push(R),J.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),M!==J&&M.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights(),X!==null&&X.updateLights(R.state.lightsArray),nn=this.localClippingEnabled,gi=se.init(this.clippingPlanes,nn),gi===!0&&se.setGlobalState(this.clippingPlanes,O),X!==null&&Re.render(R.state.shadowsArray,J,O);let W=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ce=q.material;if(Ce)if(Array.isArray(Ce))for(let Ve=0;Ve<Ce.length;Ve++){let we=Ce[Ve];$s(we,J,O,q),W.add(we)}else $s(Ce,J,O,q),W.add(Ce)}),R=w.pop(),X!==null&&X.renderEnd(),W},this.compileAsync=function(M,O,J=null){let W=this.compile(M,O,J);return new Promise(q=>{function Ce(){if(W.forEach(function(Ve){let Oe=Te.get(Ve).currentProgram;(Oe===void 0||Oe.isReady())&&W.delete(Ve)}),W.size===0){q(M);return}setTimeout(Ce,10)}Bt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let so=null;function Fo(M){so&&so(M)}function Js(){yr.stop()}function rn(){yr.start()}let yr=new Xc;yr.setAnimationLoop(Fo),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(M){so=M,ve.setAnimationLoop(M),M===null?yr.stop():yr.start()},ve.addEventListener("sessionstart",Js),ve.addEventListener("sessionend",rn),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;X!==null&&X.renderStart(M,O);let J=ve.enabled===!0&&ve.isPresenting===!0,W=z!==null&&(G===null||J)&&z.begin(U,G);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),M.isScene===!0&&M.onBeforeRender(U,M,O,G),R=oe.get(M,w.length),R.init(O),R.state.textureUnits=Ye.getTextureUnits(),w.push(R),ni.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?bi.setFromArrayCamera(O):At.setFromProjectionMatrix(ni,tn,O.reversedDepth),nn=this.localClippingEnabled,gi=se.init(this.clippingPlanes,nn),I=Pe.get(M,g.length),I.init(),g.push(I),this.info.render.frame++,ve.enabled===!0&&ve.isPresenting===!0){let Ve=U.xr.getDepthSensingMesh();Ve!==null&&Qs(Ve,O,-1/0,U.sortObjects)}Qs(M,O,0,U.sortObjects),I.finish(),X!==null&&X.updateLights(R.state.lightsArray),U.sortObjects===!0&&I.sort(gt,vi),wn=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,wn&&N.addToRenderList(I,M),this.info.autoReset===!0&&this.info.reset(),gi===!0&&se.beginShadows();let q=R.state.shadowsArray;if(Re.render(q,M,O),gi===!0&&se.endShadows(),(W&&z.hasRenderPass())===!1){let Ve=I.opaque,we=I.transmissive;if(R.setupLights(),O.isArrayCamera){let Oe=O.cameras;if(we.length>0)for(let Ze=0,pt=Oe.length;Ze<pt;Ze++){let Pt=Oe[Ze];ir(Ve,we,M,Pt)}wn&&N.render(M);for(let Ze=0,pt=Oe.length;Ze<pt;Ze++){let Pt=Oe[Ze];tr(I,M,Pt,Pt.viewport)}}else we.length>0&&ir(Ve,we,M,O),wn&&N.render(M),tr(I,M,O)}G!==null&&$===0&&(Ye.updateMultisampleRenderTarget(G),Ye.updateRenderTargetMipmap(G)),W&&z.end(U),M.isScene===!0&&M.onAfterRender(U,M,O),Ee.resetDefaultState(),j=-1,V=null,w.pop(),w.length>0?(R=w[w.length-1],Ye.setTextureUnits(R.state.textureUnits),gi===!0&&se.setGlobalState(U.clippingPlanes,R.state.camera)):R=null,g.pop(),g.length>0?I=g[g.length-1]:I=null,X!==null&&X.renderEnd()};function Qs(M,O,J,W){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){let Ve=O.isArrayCamera?bi:At;if(!M.frustumCulled||M.intersectsFrustum(Ve)){W&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ni);let we=_e.update(M),Oe=M.material;Oe.visible&&I.push(M,we,Oe,J,Nt.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let Ve=O.isArrayCamera?bi:At;if(!M.frustumCulled||M.intersectsFrustum(Ve)){let we=_e.update(M),Oe=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Nt.copy(we.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(ni)),Array.isArray(Oe)){let Ze=we.groups;for(let pt=0,Pt=Ze.length;pt<Pt;pt++){let Xe=Ze[pt],Lt=Oe[Xe.materialIndex];Lt&&Lt.visible&&I.push(M,we,Lt,J,Nt.z,Xe,O)}}else Oe.visible&&I.push(M,we,Oe,J,Nt.z,null,O)}}}let Ce=M.children;for(let Ve=0,we=Ce.length;Ve<we;Ve++)Qs(Ce[Ve],O,J,W)}function tr(M,O,J,W){let{opaque:q,transmissive:Ce,transparent:Ve}=M;R.setupLightsView(J),gi===!0&&se.setGlobalState(U.clippingPlanes,J),W&&me.viewport(de.copy(W)),q.length>0&&ao(q,O,J),Ce.length>0&&ao(Ce,O,J),Ve.length>0&&ao(Ve,O,J),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ir(M,O,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[W.id]===void 0){let Xe=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[W.id]=new di(1,1,{generateMipmaps:!0,type:Xe?fi:Ti,minFilter:In,samples:Math.max(4,ue.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ce=R.state.transmissionRenderTarget[W.id],Ve=W.viewport||de;Ce.setSize(Ve.z*U.transmissionResolutionScale,Ve.w*U.transmissionResolutionScale);let we=U.getRenderTarget(),Oe=U.getActiveCubeFace(),Ze=U.getActiveMipmapLevel();U.setRenderTarget(Ce),U.getClearColor(ne),Le=U.getClearAlpha(),Le<1&&U.setClearColor(16777215,.5),U.clear(),wn&&N.render(J);let pt=U.toneMapping;U.toneMapping=Dn;let Pt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),R.setupLightsView(W),gi===!0&&se.setGlobalState(U.clippingPlanes,W),ao(M,J,W),Ye.updateMultisampleRenderTarget(Ce),Ye.updateRenderTargetMipmap(Ce),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Lt=0,Mi=O.length;Lt<Mi;Lt++){let $t=O[Lt],{object:Jt,geometry:ki,material:xe,group:Hi}=$t;if(xe.side===Xi&&Jt.layers.test(W.layers)){let Ut=xe.side;xe.side=mi,xe.needsUpdate=!0,lo(Jt,J,W,ki,xe,Hi),xe.side=Ut,xe.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ye.updateMultisampleRenderTarget(Ce),Ye.updateRenderTargetMipmap(Ce))}U.setRenderTarget(we,Oe,Ze),U.setClearColor(ne,Le),Pt!==void 0&&(W.viewport=Pt),U.toneMapping=pt}function ao(M,O,J){let W=O.isScene===!0?O.overrideMaterial:null;for(let q=0,Ce=M.length;q<Ce;q++){let Ve=M[q],{object:we,geometry:Oe,group:Ze}=Ve,pt=Ve.material;pt.allowOverride===!0&&W!==null&&(pt=W),we.layers.test(J.layers)&&lo(we,O,J,Oe,pt,Ze)}}function lo(M,O,J,W,q,Ce){X!==null&&q.isNodeMaterial&&X.setObject(M,q),M.onBeforeRender(U,O,J,W,q,Ce),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(U,O,J,W,M,Ce),q.transparent===!0&&q.side===Xi&&q.forceSinglePass===!1?(q.side=mi,q.needsUpdate=!0,U.renderBufferDirect(J,O,W,q,M,Ce),q.side=Xn,q.needsUpdate=!0,U.renderBufferDirect(J,O,W,q,M,Ce),q.side=Xi):U.renderBufferDirect(J,O,W,q,M,Ce),M.onAfterRender(U,O,J,W,q,Ce)}function Ml(M){let O=0;for(let J of M)J.texture!==null&&O++;return O}function on(M,O,J){O.isScene!==!0&&(O=Tn);let W=Te.get(M),q=R.state.lights,Ce=R.state.shadowsArray,Ve=q.state.version,we=ce.getParameters(M,q.state,Ce,O,J,R.state.lightProbeGridArray),Oe=ce.getProgramCacheKey(we),Ze=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let pt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=C.get(M.envMap||W.environment,pt),W.envMapRotation=W.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ze===void 0&&(M.addEventListener("dispose",ot),Ze=new Map,W.programs=Ze,W.programVariants=new Map);let Pt=Ze.get(Oe);if(Pt!==void 0){if(W.currentProgram===Pt&&W.lightsStateVersion===Ve)return co(M,we),Pt}else we.uniforms=ce.getUniforms(M),X!==null&&M.isNodeMaterial&&X.build(M,J,we),M.onBeforeCompile(we,U),Pt=ce.acquireProgram(we,Oe),Ze.set(Oe,Pt),W.uniforms=we.uniforms;let Xe=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Xe.clippingPlanes=se.uniform),co(M,we),W.needsLights=gh(M),W.lightsStateVersion=Ve,W.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.sunLights.value=q.state.sun,Xe.sunLightShadows.value=q.state.sunShadow,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.sunShadowMatrix.value=q.state.sunShadowMatrix,Xe.sunShadowCascade.value=q.state.sunShadowCascade,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),W.numLightProbeGrids=Ml(R.state.lightProbeGridArray),W.currentProgram=Pt,W.uniformsList=null,Pt}function br(M,O,J,W,q){let Ce=Te.get(M),Ve=Ce.currentProgram.id+","+W+","+q,we=Ce.programVariants.get(Ve);return we===void 0?(we=on(M,O,J),Ce.programVariants.set(Ve,we)):(Ce.currentProgram=we,Ce.uniformsList=null,Ce.outputColorSpace=W,Ce.toneMapping=q),we}function Sl(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=io.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function co(M,O){let J=Te.get(M);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function yl(M,O,J,W,q){O.isScene!==!0&&(O=Tn),Ye.resetTextureUnits();let Ce=O.fog,Ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,we=G===null?U.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:dt.workingColorSpace,Oe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ze=C.get(W.envMap||Ve,Oe),pt=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Pt=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!J.morphAttributes.position,Lt=!!J.morphAttributes.normal,Mi=!!J.morphAttributes.color,$t=Dn;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=U.toneMapping);let Jt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ki=Jt!==void 0?Jt.length:0,xe=Te.get(W),Hi=R.state.lights;if(gi===!0&&(nn===!0||M!==V)){let ci=M===V&&W.id===j;se.setState(W,M,ci)}let Ut=!1,nr=!1;W.version===xe.__version?xe.needsLights&&xe.lightsStateVersion!==Hi.state.version||q.isBatchedMesh&&xe.batching===!1||!q.isBatchedMesh&&xe.batching===!0||q.isBatchedMesh&&xe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&xe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&xe.instancing===!1||!q.isInstancedMesh&&xe.instancing===!0||q.isSkinnedMesh&&xe.skinning===!1||!q.isSkinnedMesh&&xe.skinning===!0||q.isInstancedMesh&&xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&xe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&xe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&xe.instancingMorph===!1&&q.morphTexture!==null||xe.envMap!==Ze||W.fog===!0&&xe.fog!==Ce||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==se.numPlanes||xe.numIntersection!==se.numIntersection)||xe.vertexAlphas!==pt||xe.vertexTangents!==Pt||xe.morphTargets!==Xe||xe.morphNormals!==Lt||xe.morphColors!==Mi||xe.morphTargetsCount!==ki||xe.numLightProbeGrids!==Ml(R.state.lightProbeGridArray)?Ut=!0:(xe.outputColorSpace!==we||xe.toneMapping!==$t)&&(nr=!0):(Ut=!0,xe.__version=W.version);let Ni=xe.currentProgram;(Ut===!0||nr===!0)&&(Ni=nr===!0?br(W,O,q,we,$t):on(W,O,q),X&&W.isNodeMaterial&&X.onUpdateProgram(W,Ni,xe));let Oo=!1,rr=!1,mr=!1,Ot=Ni.getUniforms(),Ui=xe.uniforms;if(me.useProgram(Ni.program)&&(Oo=!0,rr=!0,mr=!0),W.id!==j&&(j=W.id,rr=!0),Oo||V!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ot.setValue(k,"projectionMatrix",M.projectionMatrix),Ot.setValue(k,"viewMatrix",M.matrixWorldInverse);let Ai=Ot.map.cameraPosition;Ai!==void 0&&Ai.setValue(k,gn.setFromMatrixPosition(M.matrixWorld)),ue.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,rr=!0,mr=!0)}if(xe.needsLights&&(Hi.state.sunShadowMap.length>0&&Ot.setValue(k,"sunShadowMap",Hi.state.sunShadowMap,Ye),Hi.state.directionalShadowMap.length>0&&Ot.setValue(k,"directionalShadowMap",Hi.state.directionalShadowMap,Ye),Hi.state.spotShadowMap.length>0&&Ot.setValue(k,"spotShadowMap",Hi.state.spotShadowMap,Ye),Hi.state.pointShadowMap.length>0&&Ot.setValue(k,"pointShadowMap",Hi.state.pointShadowMap,Ye)),q.isSkinnedMesh){Ot.setOptional(k,q,"bindMatrix"),Ot.setOptional(k,q,"bindMatrixInverse");let ci=q.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),Ot.setValue(k,"boneTexture",ci.boneTexture,Ye))}q.isBatchedMesh&&(Ot.setOptional(k,q,"batchingTexture"),Ot.setValue(k,"batchingTexture",q._matricesTexture,Ye),Ot.setOptional(k,q,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",q._indirectTexture,Ye),Ot.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",q._colorsTexture,Ye));let _n=J.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ae.update(q,J,Ni),(rr||xe.receiveShadow!==q.receiveShadow)&&(xe.receiveShadow=q.receiveShadow,Ot.setValue(k,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Ui.envMapIntensity.value=O.environmentIntensity),Ui.dfgLUT!==void 0&&(Ui.dfgLUT.value=Xg()),rr){if(Ot.setValue(k,"toneMappingExposure",U.toneMappingExposure),xe.needsLights&&mh(Ui,mr),Ce&&W.fog===!0&&Ae.refreshFogUniforms(Ui,Ce),Ae.refreshMaterialUniforms(Ui,W,Fe,Qe,R.state.transmissionRenderTarget[M.id]),xe.needsLights&&xe.numLightProbeGrids>0){let ci=A,Ai=0;for(let Vn of R.state.lightProbeGridArray)Vn.texture!==null&&(ci.textures[Ai]=Vn.texture,ci.min[Ai]=Vn.boundingBox.min,ci.max[Ai]=Vn.boundingBox.max,ci.resolution[Ai]=Vn.resolution,Ai++);for(let Vn in ci)ci[Vn].length=Ai;Ui.probesSH.value=ci.textures,Ui.probesMin.value=ci.min,Ui.probesMax.value=ci.max,Ui.probesResolution.value=ci.resolution}io.upload(k,Sl(xe),Ui,Ye)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(io.upload(k,Sl(xe),Ui,Ye),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ot.setValue(k,"center",q.center),Ot.setValue(k,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(k,"normalMatrix",q.normalMatrix),Ot.setValue(k,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let ci=W.uniformsGroups;for(let Ai=0,Vn=ci.length;Ai<Vn;Ai++){let gr=ci[Ai];Je.update(gr,Ni),Je.bind(gr,Ni)}}return Ni}function mh(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function gh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(M,O,J){let W=Te.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Te.get(M.texture).__webglTexture=O,Te.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let J=Te.get(M);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,J=0){G=M,Q=O,$=J;let W=null,q=!1,Ce=!1;if(M){let we=Te.get(M);if(we.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),de.copy(M.viewport),Ge.copy(M.scissor),Be=M.scissorTest,me.viewport(de),me.scissor(Ge),me.setScissorTest(Be),j=-1;return}else if(we.__webglFramebuffer===void 0)Ye.setupRenderTarget(M);else if(we.__hasExternalTextures)Ye.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let pt=M.depthTexture;if(we.__boundDepthTexture!==pt){if(pt!==null&&Te.has(pt)&&(M.width!==pt.image.width||M.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(M)}}let Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);let Ze=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ze[O])?W=Ze[O][J]:W=Ze[O],q=!0):M.samples>0&&Ye.useMultisampledRTT(M)===!1?W=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[J]:W=Ze,de.copy(M.viewport),Ge.copy(M.scissor),Be=M.scissorTest}else de.copy(rt).multiplyScalar(Fe).floor(),Ge.copy(Ht).multiplyScalar(Fe).floor(),Be=Vt;if(J!==0&&(W=ee),me.bindFramebuffer(k.FRAMEBUFFER,W)&&me.drawBuffers(M,W),me.viewport(de),me.scissor(Ge),me.setScissorTest(Be),q){let we=Te.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,J)}else if(Ce){let we=O;for(let Oe=0;Oe<M.textures.length;Oe++){let Ze=Te.get(M.textures[Oe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Oe,Ze.__webglTexture,J,we)}}else if(M!==null&&J!==0){let we=Te.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,J)}j=-1};function bl(M){let O=Te.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=ue.textureFormatReadable(M.format),O.__typeReadable=ue.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,J,W,q,Ce,Ve,we=0){if(!(M&&M.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ve!==void 0&&(Oe=Oe[Ve],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){me.bindFramebuffer(k.FRAMEBUFFER,Oe);try{let Ze=M.textures[we],pt=Ze.format,Pt=Ze.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Xe=bl(Ze);if(Xe.__formatReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-W&&J>=0&&J<=M.height-q&&k.readPixels(O,J,W,q,ye.convert(pt),ye.convert(Pt),Ce)}finally{let Ze=G!==null?Te.get(G).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(M,O,J,W,q,Ce,Ve,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ve!==void 0&&(Oe=Oe[Ve],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(O>=0&&O<=M.width-W&&J>=0&&J<=M.height-q){me.bindFramebuffer(k.FRAMEBUFFER,Oe);let Ze=M.textures[we],pt=Ze.format,Pt=Ze.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Xe=bl(Ze);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Lt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Lt),k.bufferData(k.PIXEL_PACK_BUFFER,Ce.byteLength,k.STREAM_READ),k.readPixels(O,J,W,q,ye.convert(pt),ye.convert(Pt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Mi=G!==null?Te.get(G).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Mi);let $t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await vf(k,$t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Lt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ce),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Lt),k.deleteSync($t),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,J=0){let W=Math.pow(2,-J),q=Math.floor(M.image.width*W),Ce=Math.floor(M.image.height*W),Ve=O!==null?O.x:0,we=O!==null?O.y:0;Ye.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Ve,we,q,Ce),me.unbindTexture()},this.copyTextureToTexture=function(M,O,J=null,W=null,q=0,Ce=0){let Ve,we,Oe,Ze,pt,Pt,Xe,Lt,Mi,$t=M.isCompressedTexture?M.mipmaps[Ce]:M.image;if(J!==null)Ve=J.max.x-J.min.x,we=J.max.y-J.min.y,Oe=J.isBox3?J.max.z-J.min.z:1,Ze=J.min.x,pt=J.min.y,Pt=J.isBox3?J.min.z:0;else{let Ot=Math.pow(2,-q);Ve=Math.floor($t.width*Ot),we=Math.floor($t.height*Ot),M.isDataArrayTexture?Oe=$t.depth:M.isData3DTexture?Oe=Math.floor($t.depth*Ot):Oe=1,Ze=0,pt=0,Pt=0}W!==null?(Xe=W.x,Lt=W.y,Mi=W.z):(Xe=0,Lt=0,Mi=0);let Jt=ye.convert(O.format),ki=ye.convert(O.type),xe;O.isData3DTexture?(Ye.setTexture3D(O,0),xe=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ye.setTexture2DArray(O,0),xe=k.TEXTURE_2D_ARRAY):(Ye.setTexture2D(O,0),xe=k.TEXTURE_2D),me.activeTexture(k.TEXTURE0),me.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),me.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),me.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let Hi=me.getParameter(k.UNPACK_ROW_LENGTH),Ut=me.getParameter(k.UNPACK_IMAGE_HEIGHT),nr=me.getParameter(k.UNPACK_SKIP_PIXELS),Ni=me.getParameter(k.UNPACK_SKIP_ROWS),Oo=me.getParameter(k.UNPACK_SKIP_IMAGES);me.pixelStorei(k.UNPACK_ROW_LENGTH,$t.width),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$t.height),me.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),me.pixelStorei(k.UNPACK_SKIP_ROWS,pt),me.pixelStorei(k.UNPACK_SKIP_IMAGES,Pt);let rr=M.isDataArrayTexture||M.isData3DTexture,mr=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let Ot=Te.get(M),Ui=Te.get(O),_n=Te.get(Ot.__renderTarget),ci=Te.get(Ui.__renderTarget);me.bindFramebuffer(k.READ_FRAMEBUFFER,_n.__webglFramebuffer),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Ai=0;Ai<Oe;Ai++)rr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(M).__webglTexture,q,Pt+Ai),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(O).__webglTexture,Ce,Mi+Ai)),k.blitFramebuffer(Ze,pt,Ze+Ve,pt+we,Xe,Lt,Xe+Ve,Lt+we,k.DEPTH_BUFFER_BIT,k.NEAREST);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||Te.has(M)){let Ot=Te.get(M),Ui=Te.get(O);me.bindFramebuffer(k.READ_FRAMEBUFFER,F),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,te);for(let _n=0;_n<Oe;_n++)rr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ot.__webglTexture,q,Pt+_n):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ot.__webglTexture,q),mr?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ui.__webglTexture,Ce,Mi+_n):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ui.__webglTexture,Ce),q!==0?k.blitFramebuffer(Ze,pt,Ze+Ve,pt+we,Xe,Lt,Xe+Ve,Lt+we,k.COLOR_BUFFER_BIT,k.NEAREST):mr?k.copyTexSubImage3D(xe,Ce,Xe,Lt,Mi+_n,Ze,pt,Ve,we):k.copyTexSubImage2D(xe,Ce,Xe,Lt,Ze,pt,Ve,we);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else mr?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(xe,Ce,Xe,Lt,Mi,Ve,we,Oe,Jt,ki,$t.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(xe,Ce,Xe,Lt,Mi,Ve,we,Oe,Jt,$t.data):k.texSubImage3D(xe,Ce,Xe,Lt,Mi,Ve,we,Oe,Jt,ki,$t):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ce,Xe,Lt,Ve,we,Jt,ki,$t.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ce,Xe,Lt,$t.width,$t.height,Jt,$t.data):k.texSubImage2D(k.TEXTURE_2D,Ce,Xe,Lt,Ve,we,Jt,ki,$t);me.pixelStorei(k.UNPACK_ROW_LENGTH,Hi),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut),me.pixelStorei(k.UNPACK_SKIP_PIXELS,nr),me.pixelStorei(k.UNPACK_SKIP_ROWS,Ni),me.pixelStorei(k.UNPACK_SKIP_IMAGES,Oo),Ce===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&k.generateMipmap(xe),me.unbindTexture()},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&Ye.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ye.setTextureCube(M,0):M.isData3DTexture?Ye.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ye.setTexture2DArray(M,0):Ye.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){Q=0,$=0,G=null,me.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var qg={type:"change"},Mu={type:"start"},Zg={type:"end"},jc=new Bn,Yg=new fn,$_=Math.cos(70*Ah.DEG2RAD),Gi=new y,Ln=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vu=1e-6,eh=class extends ll{constructor(e,t=null){super(e,t),this.state=Zt.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:po.ROTATE,TWO:po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new cn,this._lastTargetPosition=new y,this._quat=new cn().setFromUnitVectors(e.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vs,this._sphericalDelta=new Vs,this._scale=1,this._panOffset=new y,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new y,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q_.bind(this),this._onPointerDown=J_.bind(this),this._onPointerUp=j_.bind(this),this._onContextMenu=sv.bind(this),this._onMouseWheel=iv.bind(this),this._onKeyDown=nv.bind(this),this._onTouchStart=rv.bind(this),this._onTouchMove=ov.bind(this),this._onMouseDown=ev.bind(this),this._onMouseMove=tv.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=lv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Zt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qg),this.update(),this.state=Zt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Gi.copy(t).sub(this.target),Gi.applyQuaternion(this._quat),this._spherical.setFromVector3(Gi),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),r<-Math.PI?r+=Ln:r>Math.PI&&(r-=Ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Gi.setFromSpherical(this._spherical),Gi.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gi),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let a=Gi.length();s=this._clampDistance(a*this._scale);let l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){let a=new y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;let c=new y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=Gi.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(jc.origin.copy(this.object.position),jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jc.direction))<$_?this.object.lookAt(this.target):(Yg.setFromNormalAndCoplanarPoint(this.object.up,this.target),jc.intersectPlane(Yg,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vu||this._lastTargetPosition.distanceToSquared(this.target)>vu?(this.dispatchEvent(qg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gi.setFromMatrixColumn(t,0),Gi.multiplyScalar(-e),this._panOffset.add(Gi)}_panUp(e,t){this.screenSpacePanning===!0?Gi.setFromMatrixColumn(t,1):(Gi.setFromMatrixColumn(t,0),Gi.crossVectors(this.object.up,Gi)),Gi.multiplyScalar(e),this._panOffset.add(Gi)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Gi.copy(r).sub(this.target);let o=Gi.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function J_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Q_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function j_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zg),this.state=Zt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ev(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Zt.DOLLY;break;case fo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Zt.ROTATE}break;case fo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Mu)}function tv(n){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iv(n){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(n.preventDefault(),this.dispatchEvent(Mu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zg))}function nv(n){this.enabled!==!1&&this._handleKeyDown(n)}function rv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case po.ROTATE:if(this.enableRotate===!1){this.state=Zt.NONE;break}this._handleTouchStartRotate(n),this.state=Zt.TOUCH_ROTATE;break;case po.PAN:if(this.enablePan===!1){this.state=Zt.NONE;break}this._handleTouchStartPan(n),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case po.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Zt.TOUCH_DOLLY_PAN;break;case po.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Mu)}function ov(n){switch(this._trackPointer(n),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Zt.NONE}}function sv(n){this.enabled!==!1&&n.preventDefault()}function av(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cv=new Nr(-1,1,1,-1,0,1),Su=class extends Mt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},hv=new Su,no=class{constructor(e){this._mesh=new ct(hv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var th=class extends Gn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vr.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new no(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pl=class extends Gn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},ih=class extends Gn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var nh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new th(Xs),this.copyPass.material.blending=qn,this.timer=new sl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,o=this.passes.length;r<o;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pl!==void 0&&(s instanceof pl?i=!0:s instanceof ih&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rh=class extends Gn{constructor(e,t,i=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}};var Kg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qs=class n extends Gn{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new di(o,s,{type:fi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new di(o,s,{type:fi,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let u=new di(o,s,{type:fi,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),o=Math.round(o/2),s=Math.round(s/2)}let a=Kg;this.highPassUniforms=vr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vr.clone(Xs.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:Xs.vertexShader,fragmentShader:Xs.fragmentShader,premultipliedAlpha:!0,blending:Yn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new Li,this._fsQuad=new no(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.invSize.value=new le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);let r=[],o=[];for(let s=1;s<e;s+=2){let a=t[s],l=s+1<e?t[s+1]:0,c=a+l;r.push((s*a+(s+1)*l)/c),o.push(c)}return new Qt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:o}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};qs.BlurDirectionX=new le(1,0);qs.BlurDirectionY=new le(0,1);var ml={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var oh=class extends Gn{constructor(){super(),this.isOutputPass=!0,this.uniforms=vr.clone(ml.uniforms),this.material=new Do({name:ml.name,uniforms:this.uniforms,vertexShader:ml.vertexShader,fragmentShader:ml.fragmentShader}),this._fsQuad=new no(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===It&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _l=[{k:"google",n:"Google, every product",d:"3.2 quadrillion tokens a month, May 2026",v:32e14/30},{k:"api",n:"Google\u2019s API alone",d:"Nearly 32 billion tokens a minute, Oct 2026",v:32e9*1440},{k:"billion",n:"A billion people, one answer each",d:"1,000 tokens apiece, every day. My scenario",v:1e12},{k:"agent",n:"One heavy coding agent",d:"50 million tokens a day. My scenario",v:5e7}],Ks=[{k:"h100",n:"H100",sys:"DGX H100: 8 GPUs, 10.2 kW",kw:10.2/8,rack:32,rackNote:"4 servers a rack",thr:2e3,led:6990079,thrNote:"My estimate. NVIDIA puts B200 at more than 4\xD7 H200 on Llama 3.3 70B, and H100 is no faster than H200."},{k:"b200",n:"B200",sys:"DGX B200: 8 GPUs, about 14.3 kW",kw:14.3/8,rack:32,rackNote:"4 servers a rack",thr:1e4,led:9300191,thrNote:"NVIDIA, InferenceMAX: Llama 3.3 70B at 50 tokens a second per user."},{k:"gb200",n:"GB200 NVL72",sys:"72 GPUs in one rack, about 120 kW",kw:120/72,rack:72,rackNote:"72 GPUs a rack",thr:1e4,led:4183752,thrNote:"My estimate, from NVIDIA\u2019s 4\xD7 per-GPU throughput over H200."},{k:"gb300",n:"GB300 NVL72",sys:"72 GPUs in one rack, 132\u2013140 kW",kw:136/72,rack:72,rackNote:"72 GPUs a rack",thr:15e3,led:6285496,thrNote:"My estimate, from NVIDIA\u2019s 1.5\xD7 over GB200."}],wu=[{k:"7ha",n:"Gas turbine",m:"GE Vernova 7HA.03",sing:"GE Vernova 7HA.03 gas turbine",plur:"GE Vernova 7HA.03 gas turbines",one:"turbine",many:"turbines",mw:430,shape:"turbine",gas:!0,link:["molecules","Molecules are easy. Machines are hard."],nudge:"The gas is the easy part. The wait is for a turbine slot."},{k:"lm6000",n:"Aeroderivative",m:"GE Vernova LM6000PF+",sing:"GE Vernova LM6000 turbine",plur:"GE Vernova LM6000 turbines",one:"turbine",many:"turbines",mw:56.9,shape:"aero",gas:!0,link:["molecules","Molecules are easy. Machines are hard."],nudge:"Smaller units, more of them, same gas."},{k:"bloom",n:"Fuel cells",m:"Bloom Energy Server",sing:"Bloom Energy Server",plur:"Bloom Energy Servers",one:"Energy Server",many:"Energy Servers",mw:.325,shape:"cell",gas:!0,link:["bloom","The power plant that ships like a server."],nudge:"Each one is a 325 kW box that ships like a server and skips the turbine queue."},{k:"ap1000",n:"Reactor",m:"Westinghouse AP1000",sing:"Westinghouse AP1000 reactor",plur:"Westinghouse AP1000 reactors",one:"reactor",many:"reactors",mw:1117,shape:"reactor",probe:"Nuclear is the 2030s answer to a 2020s problem.",nudge:"Restarts land this decade. Most new reactors land in the next one."}],uv=[{v:2400,t:"H200 \xB7 Llama 70B"},{v:1e4,t:"B200 \xB7 Llama 70B"},{v:3e4,t:"B200 \xB7 gpt-oss"},{v:6e4,t:"B200 peak"}],fv=1200,$g=6,Jg=17,ah=Math.log10(500),bu=5,Uo=(n,e)=>n.find(t=>t.k===e)||n[0],Qg={t:_l[0].v,chip:"gb200",thr:1e4,u:.5,pue:1.09,src:"7ha",preset:"google"};function dv(n){let e=Uo(Ks,n.chip),t=Uo(wu,n.src),i=n.t/86400,r=i/(n.thr*n.u),o=r/e.rack,s=r*e.kw/1e3,a=s*n.pue,l=a/t.mw,c=Math.max(1,Math.ceil(l-1e-9)),h=e.kw*1e3*n.pue/(n.thr*n.u);return{c:e,p:t,tps:i,chips:r,racks:o,itMW:s,facMW:a,units:l,build:c,jTok:h,whAnswer:h*1e3/3600,abilene:a/fv,halls:o<1?0:Math.ceil(o/xl),many:l>=1}}var yt={w:.6,d:1.2,h:2.3},Eu=40,jg=16,xl=Eu*2*jg,Ys=3,sh=3,gl=1,pv=1.2,fr=7,kn=10,jn=3.4,mv=[[1e15,"quadrillion"],[1e12,"trillion"],[1e9,"billion"],[1e6,"million"],[1e3,"thousand"]],si=(n,e=3)=>{if(n===0)return"0";let t=Math.max(0,e-1-Math.floor(Math.log10(Math.abs(n)))),i=Math.min(t,Math.abs(n)<1?8:2);return(+n.toFixed(i)).toLocaleString("en-US",{maximumFractionDigits:i})},oo=(n,e=3)=>{for(let[t,i]of mv)if(n>=t*.9995&&(t>=1e6||n<1e6))return t===1e3?Math.round(n).toLocaleString("en-US"):`${si(n/t,e)} ${i}`;return si(n,e)},ro=n=>n>=1e6?oo(n):n>=10?Math.round(n).toLocaleString("en-US"):si(n,2),Hn=n=>n>=1e3?`${si(n/1e3)} GW`:n>=1?`${si(n)} MW`:n>=.001?`${si(n*1e3)} kW`:`${si(n*1e6)} W`,lh=n=>n>=1?`${si(n)} J`:`${si(n*1e3)} mJ`,e0=n=>n>=1?`${si(n)} Wh`:`${si(n*1e3)} mWh`,Tu=n=>`${Math.round(n*100)}%`,mn=n=>Math.round(n).toLocaleString("en-US"),No=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zs=n=>n.many?mn(n.build):n.units>=.01?`${Math.round(n.units*100)}%`:`${si(n.units*100,2)}%`,gv=n=>n.many?`${n.build===1?n.p.sing:n.p.plur} to build`:`of one ${n.p.sing}`;function xv(){let n=new URLSearchParams(location.search),e={...Qg},t=(a,l,c)=>{let h=parseFloat(n.get(a));return isFinite(h)?Math.min(c,Math.max(l,h)):null},i=t("t",10**$g,10**Jg);i&&(e.t=i,e.preset=(_l.find(a=>Math.abs(a.v-i)/a.v<.001)||{}).k||null),n.get("chip")&&Ks.some(a=>a.k===n.get("chip"))&&(e.chip=n.get("chip"),e.thr=Uo(Ks,e.chip).thr);let r=t("thr",10**ah,10**bu);r&&(e.thr=r);let o=t("u",10,100);o&&(e.u=o/100);let s=t("pue",1.05,1.6);return s&&(e.pue=s),n.get("src")&&wu.some(a=>a.k===n.get("src"))&&(e.src=n.get("src")),e}function _v(n){let e=new URLSearchParams({t:n.t.toPrecision(4).replace("e+","e"),chip:n.chip,thr:Math.round(n.thr),u:Math.round(n.u*100),pue:n.pue.toFixed(2),src:n.src});try{history.replaceState(null,"",`${location.pathname}?${e}${location.hash}`)}catch{}}var er=[{k:"token",n:"Token",name:"One token",tone:"c"},{k:"rack",n:"Rack",name:"One rack",tone:"c"},{k:"hall",n:"Hall",name:"The hall",tone:"c"},{k:"campus",n:"Campus",name:"The campus",tone:"p"},{k:"power",n:"Power",name:"The power",tone:"p"},{k:"all",n:"All",name:"All of it",tone:"p"}];function t0(n,e,t){let i=e.c,r=e.p;if(n==="token")return{big:lh(e.jTok),txt:`What one token costs at the wall, counting the chip, its share of the server and the cooling. A 1,000-token answer is ${e0(e.whAnswer)}. Google measured 0.24 Wh for its median prompt.`};if(n==="rack"){let o=e.racks<1?` This load keeps ${si(e.chips,2)} of its ${i.rack} GPUs busy, lit here.`:"";return{big:`${si(i.kw*i.rack,3)} kW`,txt:`One ${i.n} rack, ${i.rack} GPUs. At ${mn(t.thr)} tokens a second each and ${Tu(t.u)} load, it serves ${oo(t.thr*t.u*i.rack)} tokens a second.${o}`}}if(n==="hall")return e.racks<1?{big:`${si(e.racks,2)} racks`,txt:`Less than one rack: the work of ${si(e.chips,2)} chips. A hall like the one behind it holds ${mn(xl)} racks.`}:{big:`${ro(e.racks)} racks`,txt:`${ro(e.chips)} chips. A hall like this holds ${mn(xl)} racks, so this load ${e.halls===1?"fits in one":`fills ${mn(e.halls)}`}.`};if(n==="campus"){let o=e.abilene>=.01?`${si(e.abilene,2)}\xD7 Stargate Abilene, planned at 1.2 GW.`:"Under 1% of Stargate Abilene, planned at 1.2 GW.";return{big:Hn(e.facMW),txt:`${Hn(e.itMW)} for the chips, plus ${Math.round((t.pue-1)*100)}% for cooling and losses. ${o}`}}if(n==="power"){let o=e.many?`${Hn(e.facMW)} of load is ${si(e.units,3)} ${e.units===1?r.one:r.many} at full output, so you build ${mn(e.build)}.`:`${Hn(e.facMW)} of load, a sliver of one ${r.one}.`;return{big:Zs(e),txt:`${o} ${r.nudge}`}}return{big:Zs(e),txt:`${oo(t.t)} tokens a day \u2192 ${ro(e.chips)} chips \u2192 ${ro(e.racks)} racks \u2192 ${Hn(e.facMW)} \u2192 ${Zs(e)} ${e.many?e.build===1?r.one:r.many:`of one ${r.one}`}.`}}var Tt=(n,e=document)=>e.querySelector(n),dr=(n,e=document)=>[...e.querySelectorAll(n)],qt=xv(),i0=Tt("#panel");i0.innerHTML=`
  <section class="ctl">
    <div class="ctl-h"><h3>Tokens served a day</h3><output id="oT"></output></div>
    <input type="range" id="rT" min="${$g}" max="${Jg}" step="0.01" aria-label="Tokens served a day, on a log scale">
    <div class="scale"><span>1 million</span><span>1 trillion</span><span>100 quadrillion</span></div>
    <div class="presets" role="group" aria-label="Scenarios">${_l.map(n=>`<button type="button" data-k="${n.k}"><b>${n.n}</b><small>${n.d}</small></button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Chip</h3><output id="oC"></output></div>
    <div class="seg" role="group" aria-label="Chip">${Ks.map(n=>`<button type="button" data-k="${n.k}">${n.n}</button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Tokens a second, per chip</h3><output id="oThr"></output></div>
    <div class="rail-wrap"><input type="range" id="rThr" min="${ah}" max="${bu}" step="0.005" aria-label="Tokens a second each chip serves">
      <div class="ticks" aria-hidden="true">${uv.map((n,e)=>`<i class="${e%2?"lo":""}" style="left:${((Math.log10(n.v)-ah)/(bu-ah)*100).toFixed(2)}%"><span>${n.t}</span></i>`).join("")}</div></div>
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
    <div class="srcs" role="group" aria-label="Power source">${wu.map(n=>`<button type="button" data-k="${n.k}"><b>${n.n}</b><small>${n.m} \xB7 ${Hn(n.mw)}</small></button>`).join("")}</div>
    <p class="note" id="nSrc"></p>
  </section>
  <section class="bom" aria-labelledby="bomH">
    <h3 id="bomH">The bill of materials</h3>
    <ol id="bom"></ol>
  </section>
  <div class="acts"><button type="button" id="share">Copy a link to this scenario</button><button type="button" id="reset" class="quiet">Reset</button></div>`;var ch=Tt("#rT"),hh=Tt("#rThr"),uh=Tt("#rU"),fh=Tt("#rP"),Qi="all";function vv(){ch.value=Math.log10(qt.t),hh.value=Math.log10(qt.thr),uh.value=Math.round(qt.u*100),fh.value=qt.pue,dr(".presets button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===qt.preset))),dr(".seg button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===qt.chip))),dr(".srcs button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===qt.src))),[ch,hh,uh,fh].forEach(n=>n.style.setProperty("--f",`${((n.value-n.min)/(n.max-n.min)*100).toFixed(2)}%`))}var dh=null;function Ur(n){let e=dh,t=er.find(l=>l.k===n),i=er.indexOf(t),{big:r,txt:o}=t0(n,e,qt);Tt("#card").classList.toggle("pw",t.tone==="p"),Tt("#cNo").textContent=`${i+1} of ${er.length}`,Tt("#cName").textContent=t.name,Tt("#cBig").textContent=r,Tt("#cTxt").textContent=o,Tt("#prev").disabled=i===0;let a=er[i+1];Tt("#nextTxt").textContent=a?`Next: ${a.name}`:document.body.classList.contains("open")?"Start again at one token":"Now tune the numbers",dr("#chaps button").forEach((l,c)=>{if(l.setAttribute("aria-pressed",String(l.dataset.k===n)),l.classList.toggle("past",c<i),l.dataset.k===n&&pn){let h=l.parentNode;h.scrollTo({left:l.offsetLeft-(h.clientWidth-l.offsetWidth)/2,behavior:En?"auto":"smooth"})}})}function n0(){let n=dv(qt),e=n.c,t=n.p;dh=n,Tt("#oT").textContent=oo(qt.t),Tt("#oC").textContent=e.sys,Tt("#oThr").textContent=mn(qt.thr);let i=Math.abs(qt.thr-e.thr)/e.thr<.01;Tt("#nThr").innerHTML=i?No(e.thrNote):`You\u2019ve set your own number. <button type="button" class="link" id="bench">Use the ${No(e.n)} default (${mn(e.thr)})</button>`,Tt("#oU").textContent=Tu(qt.u),Tt("#oP").textContent=qt.pue.toFixed(2),Tt("#nSrc").innerHTML=t.link?`Ties to my thesis <a href="../#${t.link[0]}">${No(t.link[1])}</a>`:`A thesis I\u2019m still testing: <em>${No(t.probe)}</em>`,Tt("#aBig").textContent=Zs(n),Tt("#aWhat").textContent=gv(n);let r=[["Tokens a day",oo(qt.t),qt.preset?Uo(_l,qt.preset).n:"Your number"],["Tokens a second",oo(n.tps),"\xF7 86,400 seconds"],["Chips",ro(n.chips),`\xF7 (${mn(qt.thr)} a second \xD7 ${Tu(qt.u)} load)`],["Racks",ro(n.racks),`\xF7 ${e.rack} GPUs a rack (${e.rackNote.replace(/ a rack$/,"")})`],["IT power",Hn(n.itMW),`\xD7 ${si(e.kw,3)} kW a chip, with its share of the server`],["Facility power",Hn(n.facMW),`\xD7 ${qt.pue.toFixed(2)} PUE for cooling and losses`],[t.many[0].toUpperCase()+t.many.slice(1),n.many?`${si(n.units,3)} \u2192 build ${mn(n.build)}`:`${si(n.units,2)} of one`,`\xF7 ${Hn(t.mw)} each`],["Per token, at the wall",lh(n.jTok),`A 1,000-token answer: ${e0(n.whAnswer)}. Google measured 0.24 Wh for its median prompt.`],["Against Abilene",n.abilene>=.01?`${si(n.abilene,2)}\xD7`:"under 1%","Stargate Abilene is planned at 1.2 GW"]],o=dr("#bom li b").map(s=>s.textContent);Tt("#bom").innerHTML=r.map(([s,a,l],c)=>`<li style="--i:${c}"${o.length&&o[c]!==a?' class="flash"':""}><span class="k">${No(s)}</span><b>${No(a)}</b><span class="n">${No(l)}</span></li>`).join(""),vv(),_v(qt),dr("#chaps button").forEach(s=>{Tt("small",s).textContent=s.dataset.k==="all"?"overview":t0(s.dataset.k,n,qt).big}),Ur(Qi),pr&&pr.update(n,qt)}var Or=(n,e)=>{Object.assign(qt,n),n0(),pr&&pr.settle(e)};ch.addEventListener("input",()=>Or({t:10**+ch.value,preset:null}));hh.addEventListener("input",()=>Or({thr:10**+hh.value}));uh.addEventListener("input",()=>Or({u:+uh.value/100}));fh.addEventListener("input",()=>Or({pue:+fh.value}));dr(".presets button").forEach(n=>n.addEventListener("click",()=>Or({t:Uo(_l,n.dataset.k).v,preset:n.dataset.k},!0)));dr(".seg button").forEach(n=>n.addEventListener("click",()=>Or({chip:n.dataset.k,thr:Uo(Ks,n.dataset.k).thr},!0)));dr(".srcs button").forEach(n=>n.addEventListener("click",()=>Or({src:n.dataset.k},!0)));i0.addEventListener("click",n=>{n.target.closest("#bench")&&Or({thr:Uo(Ks,qt.chip).thr})});Tt("#reset").addEventListener("click",()=>Or({...Qg},!0));Tt("#share").addEventListener("click",async()=>{let n=Tt("#share");try{await navigator.clipboard.writeText(location.href),n.textContent="Link copied"}catch{n.textContent="Copy the address bar to share"}setTimeout(()=>{n.textContent="Copy a link to this scenario"},2200)});var ph=()=>matchMedia("(min-width: 1180px)").matches,r0=Tt("#tune");function vl(n){document.body.classList.toggle("open",n),r0.setAttribute("aria-expanded",String(n)),pr&&pr.frameSide(),dh&&Ur(Qi)}r0.addEventListener("click",()=>vl(!document.body.classList.contains("open")));Tt("#close").addEventListener("click",()=>{vl(!1),Ur(Qi)});addEventListener("keydown",n=>{n.key==="Escape"&&document.body.classList.contains("open")&&!ph()&&vl(!1)});Tt("#chaps").innerHTML=er.map(n=>`<button type="button" data-k="${n.k}" class="${n.tone==="p"?"pw":""}" aria-pressed="false"><b>${n.n}</b><small></small></button>`).join("");function Fr(n){Qi=n,Ur(n),pr&&pr.visit(n),!ph()&&document.body.classList.contains("open")&&vl(!1)}dr("#chaps button").forEach(n=>n.addEventListener("click",()=>Fr(n.dataset.k)));var o0=n=>{let e=er.findIndex(t=>t.k===Qi);return er[Math.min(er.length-1,Math.max(0,e+n))].k};Tt("#prev").addEventListener("click",()=>Fr(o0(-1)));Tt("#next").addEventListener("click",()=>{if(Qi!=="all")return Fr(o0(1));document.body.classList.contains("open")?Fr("token"):(vl(!0),Ur(Qi))});Tt("#recenter").addEventListener("click",()=>Fr(Qi));var Mv=Tt("#nav"),s0=()=>Mv.classList.toggle("solid",scrollY>40);addEventListener("scroll",s0,{passive:!0});s0();addEventListener("keydown",n=>{if(n.target.closest&&n.target.closest("input, textarea, select"))return;let e=er.findIndex(t=>t.k===Qi);(n.key==="ArrowRight"||n.key==="]")&&(n.preventDefault(),Fr(er[Math.min(er.length-1,e+1)].k)),(n.key==="ArrowLeft"||n.key==="[")&&(n.preventDefault(),Fr(er[Math.max(0,e-1)].k))});var yu=["\u2581the","\u2581power","ing","\u2581of","\u2581AI","token","\u2581a","?","\u2581MW","ine","\u2581turb","\u2581chip","\u2581rack","GPU","\u2581is","s","\u2581to","42","\u2581answer","ed","\u2581heat","\u2581grid","\u2581gas","\u2581watt","{","}","def","=>","\u2581hello","\u2581why","\u2581and","\u2581model","\u2581data","er","\u2581build","\u2581slot","\u2581fuel","\u2581cell","\u2581DC","\u2581kW","...","\u2581it","\u2581in","\u2581we","\u2581you","ly","\u2581not","\u2581new","\u2581fast","\u2581cool","\u2581air","\u2581light","\u2581code","\u2581line","\u2581Echo","##","\u2581world","\u2581time","\u2581up","\u2581out","\u2581for","\u2581next","\u2581yes","!"],En=matchMedia("(prefers-reduced-motion: reduce)").matches,pn=matchMedia("(max-width: 760px)").matches,pr=null;ph()&&document.body.classList.add("open");try{pr=Sv()}catch{document.body.classList.add("no-gl")}n0();pr?pr.start():document.body.classList.remove("intro");function Sv(){let n=Tt("#stage"),e=Tt("#cv"),t=new dl({canvas:e,antialias:!0,powerPreference:"high-performance"});if(!t.capabilities.isWebGL2)throw new Error("WebGL 2 is needed");let i=Math.min(devicePixelRatio||1,pn?1.6:1.75);t.setPixelRatio(i),t.toneMapping=kr,t.toneMappingExposure=1.08,t.outputColorSpace=Yi;let r=new Xa;r.background=new ge(264723),r.fog=new Wa(1124925,4e-4);let o=new Ii(40,1,.05,8e4),s=new eh(o,e);s.enableDamping=!0,s.dampingFactor=.075,s.enablePan=!1,s.maxPolarAngle=Math.PI*.485,s.minDistance=1.2,s.maxDistance=14e3,s.zoomSpeed=.9,s.rotateSpeed=.5,s.autoRotateSpeed=.22;let a=null,l=null;try{a=new nh(t,new di(4,4,{type:fi,samples:pn?0:4})),a.addPass(new rh(r,o)),l=new qs(new le(256,256),.6,.5,.95),a.addPass(l),a.addPass(new oh)}catch{a=null}let c=(_,S,T={})=>new Qt({vertexShader:_,fragmentShader:S,depthWrite:!1,depthTest:!1,fog:!1,...T}),h=new ge(1456720),p=new ge(1124925),u=new ct(new Dr(100,48,24),c("varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }",`uniform vec3 top, mid, hor, warm, wdir; varying vec3 vD;
     void main(){ vec3 d = normalize(vD); float h = d.y;
       vec3 c = mix(hor, mid, smoothstep(-.01, .14, h)); c = mix(c, top, smoothstep(.1, .7, h));
       float w = pow(max(dot(normalize(vec3(d.x, 0., d.z) + 1e-5), wdir), 0.), 4.) * (1. - smoothstep(-.02, .2, h));
       c += warm * w * .2; if (h < -.01) c = hor * .7;
       gl_FragColor = vec4(c, 1.); }`,{side:mi,uniforms:{top:{value:new ge(132363)},mid:{value:new ge(464682)},hor:{value:h},warm:{value:new ge(16029562)},wdir:{value:new y(-1,0,-.4).normalize()}}}));u.renderOrder=-10,u.frustumCulled=!1,r.add(u);let f=new Mt,x=[],E=[];for(let _=0;_<(pn?900:1800);_++){let S=Math.random()*2-1,T=Math.random()*Math.PI*2,P=.03+Math.pow(Math.random(),.7)*.97,B=Math.sqrt(1-P*P);x.push(Math.cos(T)*B*95,P*95,Math.sin(T)*B*95),E.push(.6+Math.pow(Math.random(),6)*2.4)}f.setAttribute("position",new Ke(x,3)),f.setAttribute("aS",new Ke(E,1));let m=new Co(f,c("attribute float aS; uniform float pr; varying float vA; void main(){ vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; gl_PointSize = aS * pr; vA = clamp(aS / 2.6, .15, 1.) * smoothstep(.0, .25, normalize(position).y); }","varying float vA; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vec3(.72, .82, .95) * vA * (1. - d * 1.6), 1.); }",{blending:Yn,uniforms:{pr:{value:i}}}));m.renderOrder=-9,m.frustumCulled=!1,r.add(m);let d=new Mt,b=[],D=[],A=240;for(let _=0;_<=A;_++){let S=_/A*Math.PI*2,T=.9+Math.sin(S*3+1)*.7+Math.sin(S*7.3)*.45+Math.sin(S*17.1+2)*.22+Math.max(0,Math.sin(S*1.7-.6))*1.6;if(b.push(Math.cos(S)*92,-1,Math.sin(S)*92,Math.cos(S)*92,Math.max(.25,T),Math.sin(S)*92),_<A){let P=_*2;D.push(P,P+1,P+2,P+1,P+3,P+2)}}d.setAttribute("position",new Ke(b,3)),d.setIndex(D);let I=new ct(d,c("varying float vY; void main(){ vY = position.y; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }","uniform vec3 c0, c1; varying float vY; void main(){ gl_FragColor = vec4(mix(c0, c1, smoothstep(-1., 3.5, vY)), 1.); }",{side:Xi,uniforms:{c0:{value:new ge(860722)},c1:{value:new ge(529956)}}}));I.renderOrder=-8,I.frustumCulled=!1,r.add(I);let R=new Mt,g=[],w=[];[[.35,40],[1.9,26],[2.8,60],[4.1,18],[5.3,34]].forEach(([_,S])=>{for(let T=0;T<S;T++){let P=_+(Math.random()-.5)*.09;g.push(Math.cos(P)*90,.05+Math.random()*.5,Math.sin(P)*90),w.push(.8+Math.random()*1.6)}}),R.setAttribute("position",new Ke(g,3)),R.setAttribute("aS",new Ke(w,1));let z=new Co(R,c("attribute float aS; uniform float pr; varying float vA; void main(){ vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; gl_PointSize = aS * pr; vA = aS / 2.4; }","varying float vA; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vec3(1., .78, .6) * vA * (1. - d * 1.8), 1.); }",{blending:Yn,uniforms:{pr:{value:i}}}));z.renderOrder=-7,z.frustumCulled=!1,r.add(z);let U=new Qt({uniforms:{base:{value:new ge(463132)},lineC:{value:new ge(4183752)},fogC:{value:p},fogD:{value:4e-4}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 base, lineC, fogC; uniform float fogD; varying vec3 vW;
      float gl(vec2 p, float s){ vec2 q = p / s; vec2 fw = max(fwidth(q), vec2(1e-5)); vec2 g = abs(fract(q - .5) - .5) / fw;
        float l = 1. - min(min(g.x, g.y), 1.); return l * (1. - smoothstep(.12, .4, max(fw.x, fw.y))); }
      void main(){ vec2 p = vW.xz; float a = gl(p, 1.) * .03 + gl(p, 10.) * .045 + gl(p, 100.) * .085 + gl(p, 1000.) * .1;
        vec3 c = base + lineC * a; float d = distance(vW, cameraPosition); float f = 1. - exp(-pow(fogD * d, 2.));
        gl_FragColor = vec4(mix(c, fogC, clamp(f, 0., 1.)), 1.); }`}),H=new ct(new ur(6e4,6e4),U);H.rotation.x=-Math.PI/2,H.renderOrder=-5,r.add(H),r.add(new ol(5997224,329742,1.25));let X=new Gs(12769004,1.9);X.position.set(-.55,1,.5),r.add(X);let ee=new Gs(4183752,.55);ee.position.set(.9,.35,-1),r.add(ee);let F=new zs(4183752,0,0,2);r.add(F);let te=new zs(16029562,0,0,2);r.add(te);let Q=(_,S={})=>new Qr({color:_,roughness:.82,metalness:.15,...S}),$=(_,S,T={})=>new Li({color:new ge(_).multiplyScalar(S),...T}),G={pad:Q(924201,{roughness:.95}),road:Q(1253940,{roughness:.9}),gravel:Q(1055786,{roughness:1}),wall:Q(1584196),roof:Q(1188666),floor:Q(858666,{roughness:.6,metalness:.35}),gallery:Q(1781576),rack:Q(726304,{roughness:.4,metalness:.7}),chiller:Q(2242383,{metalness:.45,roughness:.6}),steel:Q(2505814,{metalness:.65,roughness:.45}),dark:Q(1055787,{metalness:.5,roughness:.5}),stack:Q(4281966,{metalness:.5,roughness:.6}),concrete:Q(8293532,{roughness:.95}),tower:Q(7043723,{roughness:.95,side:Xi}),hall2:Q(2768471),cell:Q(8820653,{roughness:.5,metalness:.35}),person:Q(7307926,{roughness:.8}),truck:Q(3360863,{metalness:.4,roughness:.5}),teal:$(4183752,2.4),tealDim:$(4183752,.75),busGlow:$(16029562,.32),lamp:$(16769736,1.9),beacon:$(16029562,3),coral:$(16029562,2.8),coralDim:$(16029562,.7),blue:$(6990079,2.2),off:$(1714746,1),ghost:new Qr({color:3822966,transparent:!0,opacity:.14,depthWrite:!1,roughness:1}),ghostRoof:new Qr({color:4183752,transparent:!0,opacity:.035,depthWrite:!1,roughness:1,side:Xi})},j={teal:new Pn({color:new ge(4183752).multiplyScalar(1.3),transparent:!0,opacity:.55}),tealFaint:new Pn({color:4183752,transparent:!0,opacity:.22}),coral:new Pn({color:new ge(16029562).multiplyScalar(1.2),transparent:!0,opacity:.7}),wire:new Pn({color:10466244,transparent:!0,opacity:.55}),steel:new Pn({color:7308960,transparent:!0,opacity:.8}),field:new Pn({color:12570846,transparent:!0,opacity:.32}),ghost:new Pn({color:new ge(16029562).multiplyScalar(1.1),transparent:!0,opacity:.55})},V={box:new bn(1,1,1),cyl:new Ds(1,1,1,28,1),cylOpen:new Ds(1,1,1,36,1,!0),ball:new Dr(1,14,10)};V.box.translate(0,.5,0),V.cyl.translate(0,.5,0),V.cylOpen.translate(0,.5,0);let de=new Set([...Object.values(V)]),Ge=new kt;function Be(_,S,T,P){if(!T.length)return null;let B=new Ao(_,S,T.length);return T.forEach((K,re)=>{Ge.position.set(K[0],K[1],K[2]),Ge.rotation.set(0,K[6]||0,0),Ge.scale.set(K[3]??1,K[4]??1,K[5]??1),Ge.updateMatrix(),B.setMatrixAt(re,Ge.matrix)}),B.instanceMatrix.needsUpdate=!0,B.computeBoundingSphere(),B.computeBoundingBox(),P&&P.add(B),B}function ne(_,S,T){let P=new Mt;P.setAttribute("position",new Ke(_,3));let B=new Jr(P,S);return T&&T.add(B),B}function Le(_,S,T,P,B,K,re){let he=[[S,T,P],[B,T,P],[B,T,re],[S,T,re],[S,K,P],[B,K,P],[B,K,re],[S,K,re]];[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].forEach(([L,Y])=>_.push(...he[L],...he[Y]))}function We(_){_.traverse(S=>{S.isInstancedMesh&&S.dispose(),S.geometry&&!de.has(S.geometry)&&S.geometry.dispose()}),_.parent&&_.parent.remove(_)}let Qe=(_,S,T,P)=>{let B=document.createElement("canvas");B.width=_,B.height=S,T(B.getContext("2d"),_,S);let K=new Cs(B);return K.anisotropy=4,P&&(K.wrapS=K.wrapT=go),K},Fe=Qe(64,256,(_,S,T)=>{_.fillStyle="#fff";for(let P=0;P<18;P++){let B=18+P*12.4;_.globalAlpha=P%6===5?.35:1,_.fillRect(8,B,30,3),_.fillRect(44,B,10,3)}_.globalAlpha=.5,_.fillRect(8,6,48,2),_.fillRect(8,T-10,48,2)}),gt=Qe(128,128,(_,S)=>{_.fillStyle="#fff",_.globalAlpha=.9,_.fillRect(0,0,S,S),_.globalAlpha=1,_.fillStyle="#c8d4de",_.fillRect(0,0,S,2),_.fillRect(0,0,2,S)},!0),vi=Qe(256,256,(_,S,T)=>{_.fillStyle="#fff",_.fillRect(0,0,S,T),_.fillStyle="#aab6c2";for(let P=0;P<S;P+=32)_.fillRect(P,0,3,T);_.fillStyle="#8d9aa8",_.fillRect(0,T*.12,S,T*.06),_.fillRect(0,T*.9,S,T*.02)},!0);G.hallWall=Q(1847625),G.hallWall.map=vi;let rt=new Li({map:Fe,color:new ge(4183752).multiplyScalar(1.05),transparent:!0,depthWrite:!1}),Ht={value:1},Vt=document.createElement("canvas");Vt.width=Vt.height=1024;let At=new Cs(Vt);At.anisotropy=4;let bi=()=>{let _=Vt.getContext("2d"),S=128;_.clearRect(0,0,1024,1024),_.textAlign="center",_.textBaseline="middle",_.fillStyle="#fff",yu.forEach((T,P)=>{let B=P%8*S+S/2,K=Math.floor(P/8)*S+S/2,re=58;_.font=`700 ${re}px "Big Shoulders Text","Arial Narrow",sans-serif`;let he=_.measureText(T).width;he>S*.88&&(re*=S*.88/he,_.font=`700 ${re}px "Big Shoulders Text","Arial Narrow",sans-serif`),_.fillText(T,B,K)}),At.needsUpdate=!0};bi(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(bi);let gi=(_,S,T)=>new Qt({uniforms:{uScale:Ht,uColor:{value:S},uAtlas:{value:At}},vertexShader:`attribute float aSize; attribute float aAlpha; attribute float aCell; varying float vA; varying float vCell;
      uniform float uScale; void main(){ vA = aAlpha; vCell = aCell; vec4 mv = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(aSize * uScale / -mv.z, 0., 220.); if (aAlpha < .005) gl_PointSize = 0.; gl_Position = projectionMatrix * mv; }`,fragmentShader:_,transparent:!0,depthWrite:!1,fog:!1,...T}),nn=`uniform sampler2D uAtlas; uniform vec3 uColor; varying float vA; varying float vCell;
    void main(){ vec2 pc = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y); float cx = mod(vCell, 8.), cy = floor(vCell / 8. + .001);
      vec4 t = texture2D(uAtlas, (vec2(cx, 7. - cy) + pc) / 8.); float a = t.a * vA; if (a < .02) discard; gl_FragColor = vec4(uColor, a); }`,ni="uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - .5) * 2.; float a = pow(max(0., 1. - d), 1.8) * vA; if (a < .004) discard; gl_FragColor = vec4(uColor, a); }";function gn(_,S){let T=new Mt,P=new Float32Array(_*3),B=new Float32Array(_),K=new Float32Array(_),re=new Float32Array(_);T.setAttribute("position",new Ke(P,3).setUsage(Ga)),T.setAttribute("aSize",new Ke(B,1).setUsage(Ga)),T.setAttribute("aAlpha",new Ke(K,1).setUsage(Ga)),T.setAttribute("aCell",new Ke(re,1));let he=new Co(T,S);he.frustumCulled=!1,r.add(he);let L=Array.from({length:_},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,age:1,life:1,s0:1,s1:1,a:0}));return{p:he,g:T,st:L,n:_,pos:T.attributes.position.array,size:T.attributes.aSize.array,alpha:T.attributes.aAlpha.array,cell:T.attributes.aCell.array}}let Nt=gn(pn?380:900,gi(nn,new ge(4183752).multiplyScalar(2.1),{blending:Yn}));for(let _=0;_<Nt.n;_++)Nt.cell[_]=Math.floor(Math.random()*yu.length);Nt.g.attributes.aCell.needsUpdate=!0;let Tn=gn(pn?160:360,gi(ni,new ge(16029562).multiplyScalar(.42),{blending:Yn})),wn=gn(pn?90:200,gi(ni,new ge(11123917).multiplyScalar(.5),{}));function xn(_,S,T){_.beginPath(),_.moveTo(38,8),_.arcTo(S-8,8,S-8,T-8,30),_.arcTo(S-8,T-8,8,T-8,30),_.arcTo(8,T-8,8,8,30),_.arcTo(8,8,S-8,8,30),_.closePath(),_.fillStyle="rgba(6,16,30,.88)",_.fill(),_.strokeStyle="#3fd6c8",_.lineWidth=7,_.stroke(),_.textAlign="center",_.textBaseline="middle",_.font='800 120px "Big Shoulders Text","Arial Narrow",sans-serif',_.fillStyle="#62798d",_.fillText("\u2581",S/2-128,T/2+8),_.fillStyle="#e9fbf8",_.fillText("power",S/2+22,T/2+8)}let k=Qe(512,256,(_,S,T)=>{xn(_,S,T)}),Ei=new Ts(new $r({map:k,transparent:!0,depthWrite:!1}));Ei.scale.set(.56,.28,1),r.add(Ei),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{let _=k.image,S=_.getContext("2d");S.clearRect(0,0,_.width,_.height),xn(S,_.width,_.height),k.needsUpdate=!0,bi()});let Bt=new ii;{let _=new ct(new nl(.19,1.14,6,14),G.person);_.position.y=.76,Bt.add(_);let S=new ct(new Dr(.12,16,12),G.person);S.position.y=1.68,Bt.add(S);let T=new ct(new Dr(.135,16,8,0,Math.PI*2,0,Math.PI/2),G.tealDim);T.position.y=1.71,Bt.add(T)}r.add(Bt);let ue={},me={campus:null,hero:null,grid:null,plant:null,refs:null},ai={},Te={lines:[],m:null,mb:null,list:[]},Ye={racks:[],roofs:[],heat:[],steam:[]};function C(_){let S=Math.max(1,Math.min(jg,Math.ceil(_/(Eu*2)))),T=Math.min(Eu*2,Math.max(1,Math.round(_))),P=Math.ceil(T/2),B=[];for(let De=0;De<S;De++){let Ie=De>>1,nt=De&1;B.push(-(Ie*(2*yt.d+gl+pv)+nt*(yt.d+gl))-yt.d/2)}let K=sh,re=B[S-1]-yt.d/2-sh,he=(K+re)/2,L=K-re,Y=P*2*yt.w+Ys+2*sh,fe=[],pe=Math.max(1,Math.round(_));for(let De=0;De<S&&pe>0;De++){let Ie=Math.min(T,pe);pe-=Ie;for(let nt=0;nt<Ie;nt++){let Rt=nt<P?0:1,ke=Rt?nt-P:nt;fe.push({x:Rt?Ys/2+(ke+.5)*yt.w:-Ys/2-(ke+.5)*yt.w,z:B[De]-he,face:De&1?-1:1,line:De})}}return{racks:fe,inW:Y,inD:L,lines:S,lineZ:B.map(De=>De-he),half:P,w:Y+fr,d:L}}function v(_,S){if(_=Math.max(1,Math.ceil(_)),_<=S)return{k:1,n:_};for(let T=0;T<12;T++)for(let P of[1,2,5]){let B=P*10**T;if(B>1&&Math.ceil(_/B)<=S)return{k:B,n:Math.ceil(_/B)}}return{k:1,n:S}}function Z(_){let S=C(xl),T=_.racks<1?1:Math.min(xl,Math.ceil(_.racks)),P=_.halls>1?S:C(T),B=v(Math.max(1,_.halls),pn?64:180),K=_.racks<1?0:B.n,re=_.halls>1?S.w:P.w,he=_.halls>1?S.d:P.d,L=K<=1?1:Math.ceil(Math.sqrt(K*1.5)),Y=K<=1?1:Math.ceil(K/L),fe=re+26,pe=he+30,De=[];for(let nt=0;nt<K;nt++){let Rt=nt%L,ke=Y-1-Math.floor(nt/L);De.push({x:(Rt-(L-1)/2)*fe,z:(ke-(Y-1)/2)*pe})}let Ie=K?{minX:-((L-1)/2)*fe-re/2-14,maxX:(L-1)/2*fe+re/2+14,minZ:-((Y-1)/2)*pe-he/2-14,maxZ:(Y-1)/2*pe+he/2+14}:{minX:-6,maxX:6,minZ:-6,maxZ:6};return{full:S,hero:P,nb:K,k:B.k,halls:De,bw:re,bd:he,campus:Ie,nHero:T}}function _e(_,S){let T=new ii;T.name="campus";let P=S.campus;Be(V.box,G.pad,[[(P.minX+P.maxX)/2,0,(P.minZ+P.maxZ)/2,P.maxX-P.minX,.06,P.maxZ-P.minZ]],T);let B=[],K=[],re=[],he=[],L=[],Y=[];return Ye.roofs=[],S.halls.forEach((fe,pe)=>{let De=fe.x-S.bw/2,Ie=fe.x+S.bw/2,nt=fe.z-S.bd/2,Rt=fe.z+S.bd/2;if(pe!==0){re.push([fe.x,.06,fe.z,S.bw,kn,S.bd]),he.push([fe.x,kn-1.4,fe.z,S.bw+.3,.35,S.bd+.3]),Le(B,De,.06,nt,Ie,kn+.06,Rt);for(let ke=0;ke<2;ke++)for(let ht=0;ht<7;ht++)L.push([De+12+ht*(S.bw-20)/6,kn+.06,fe.z+(ke?1:-1)*S.bd*.22,4,2,2.6]);Ye.roofs.push({x0:De+4,x1:Ie-4,z0:nt+4,z1:Rt-4,y:kn+2})}}),re.length&&(G.hallWall.map.repeat.set(S.bw/9.6,1),G.hallWall.needsUpdate=!0),Be(V.box,G.hallWall,re,T),Be(V.box,G.tealDim,he,T),Be(V.box,G.chiller,L,T),B.length&&ne(B,j.teal,T),S.nb&&ce(T,_,S),T}function ce(_,S,T){let P=T.hero,B=T.halls[0],K=S.c,he=B.x-(T.bw-P.w)/2+fr/2,L=B.z,Y=new ii;Y.position.set(he,0,L),_.add(Y);let fe=new ct(new bn(P.inW,.2,P.inD),G.floor.clone());fe.material.map=gt.clone(),fe.material.map.needsUpdate=!0,fe.material.map.repeat.set(P.inW/.6,P.inD/.6),fe.material.color.set(990509),fe.position.y=.1,Y.add(fe);let pe=.35,De=P.inW/2,Ie=P.inD/2,nt=[[0,.2,-Ie-pe/2,P.inW+2*pe,jn,pe],[De+pe/2,.2,0,pe,jn,P.inD],[-De-pe/2,.2,0,pe,jn,P.inD],[0,.2,Ie+pe/2,P.inW+2*pe,1.1,pe]];Be(V.box,G.wall,nt,Y);let Rt=[],ke=jn+.21,ht=1.31;Rt.push(-De-pe,ke,-Ie-pe,De+pe,ke,-Ie-pe,De+pe,ke,-Ie-pe,De+pe,ke,Ie,-De-pe,ke,-Ie-pe,-De-pe,ke,Ie,-De-pe,ht,Ie+pe,De+pe,ht,Ie+pe,De+pe,ke,Ie,De+pe,ht,Ie+pe,-De-pe,ke,Ie,-De-pe,ht,Ie+pe),ne(Rt,j.teal,Y);let Wt=[-De-pe-fr/2+pe/2,.2,0,fr-pe,jn,P.inD];Be(V.box,G.gallery,[Wt],Y);let vt=[];Le(vt,-De-fr,jn+.2,-Ie,-De-pe,jn+.2,Ie),ne(vt.slice(0,24),j.coral,Y);let $e=Math.max(2,Math.round(P.inD/6));Be(V.box,G.lamp,Array.from({length:$e},(bt,xt)=>[-De-pe-fr/2,jn+.2,-Ie+3+xt*(P.inD-6)/($e-1),.5,.08,.5]),Y);let it=[];Le(it,-De-fr,.2,-Ie,De,kn,Ie),ne(it,j.tealFaint,Y);let Dt=new ct(new bn(P.inW+fr,kn-jn,P.inD),G.ghostRoof);Dt.position.set(-fr/2,jn+(kn-jn)/2+.2,0),Y.add(Dt);let lt=-1;P.racks.forEach((bt,xt)=>{bt.line===0&&bt.x>0&&(lt<0||bt.x<P.racks[lt].x)&&(lt=xt)}),lt<0&&P.racks.forEach((bt,xt)=>{bt.line===0&&(lt<0||bt.x>P.racks[lt].x)&&(lt=xt)});let Gt=P.racks[lt],Vi=[],jt=[];Ye.racks=[],P.racks.forEach((bt,xt)=>{Ye.racks.push({x:he+bt.x,z:L+bt.z}),xt!==lt&&(Vi.push([bt.x,.2,bt.z,yt.w*.96,yt.h,yt.d]),jt.push([bt.x,.2+.12,bt.z+bt.face*(yt.d/2+.012),yt.w*.82,yt.h*.9,1,bt.face>0?0:Math.PI]))}),Be(V.box,G.rack,Vi,Y);let zt=rt.clone();zt.color=new ge(K.led).multiplyScalar(1.05);let Me=new ur(1,1);Me.translate(0,.5,0);let et=Be(Me,zt,jt,Y);et&&(et.renderOrder=2),Be(V.box,G.dark,P.lineZ.map(bt=>[0,3.3,bt,P.half*2*yt.w+Ys-.4,.1,.2]),Y),Be(V.box,G.busGlow,P.lineZ.map(bt=>[0,3.27,bt,P.half*2*yt.w+Ys-.4,.03,.05]),Y),Be(V.box,G.ghost,P.lineZ.filter((bt,xt)=>xt%2===0&&P.lineZ[xt+1]!==void 0).map((bt,xt)=>[0,yt.h+.22,bt-yt.d/2-gl/2,P.half*2*yt.w+Ys,.05,gl+.1]),Y);let mt=new ii;mt.position.set(Gt.x,.2,Gt.z),Y.add(mt);let wt=new ct(V.box,G.rack);wt.scale.set(yt.w,yt.h,yt.d),mt.add(wt);let ei=yt.d/2+.006,Ft=S.racks<1?S.chips:1/0,Yt=(bt,xt,pi=.5,Wi=.03)=>{let ri=new ct(V.box,xt);ri.scale.set(pi,Wi,.012),ri.position.set(0,bt,ei),mt.add(ri)},hi=$(K.led,1.35),Si=G.off;if(K.rack===72){let bt=[["p"],["p"],...Array(10).fill(["c"]),...Array(9).fill(["s"]),...Array(8).fill(["c"]),["p"],["p"]],xt=0;bt.forEach(([pi],Wi)=>{let ri=yt.h-.12-Wi*((yt.h-.24)/(bt.length-1));if(pi==="c"){let Se=xt*4<Ft;xt++,Yt(ri,Se?hi:Si),Yt(ri+.002,Se?G.lamp:Si,.05,.028)}else Yt(ri,pi==="p"?G.coral:G.blue,.5,.022)})}else{for(let bt=0;bt<4;bt++){let xt=.35+bt*.46,pi=bt*8<Ft,Wi=new ct(V.box,G.dark);Wi.scale.set(.54,.4,.01),Wi.position.set(0,xt,ei-.002),mt.add(Wi);for(let ri=0;ri<6;ri++)Yt(xt+.04+ri*.055,pi?hi:Si,.44,.016)}Yt(.12,G.coral),Yt(yt.h-.1,G.coral)}ue.heroRack=new y(he+Gt.x,.2,L+Gt.z),ue.heroFace=Gt.face,ue.heroHall={ix:he,iz:L,inW:P.inW,inD:P.inD,racks:P.racks,heroX:Gt.x,lines:P.lines},ue.hall={c:new y(he-fr/2,0,L),w:P.w,d:P.d},Bt.position.set(ue.heroRack.x+1.9,.2,ue.heroRack.z+Gt.face*(yt.d/2+1)),Bt.rotation.y=-.7,Ei.position.set(ue.heroRack.x+.3*Gt.face,2.8,ue.heroRack.z+Gt.face*(yt.d/2+.34)),F.position.set(he,16,L+6),F.intensity=Math.min(420,2*P.inW*P.inD/10)}function Ae(_,S,T){let P=new ii;P.name="grid";let B=S.campus,K=S.nb===0,re=K?10:74,he=K?8:52,L=B.minX-(K?16:60)-re/2,Y=K?ue.heroRack.z:0;ue.sub={c:new y(L,0,Y),w:re,d:he},Be(V.box,G.gravel,[[L,0,Y,re,.05,he]],P);let fe=[];Le(fe,L-re/2,.05,Y-he/2,L+re/2,2.4,Y+he/2),ne(fe,j.steel,P);let pe=K?1:Math.min(8,Math.max(2,Math.ceil(_.facMW/140)+1)),De=[],Ie=[],nt=[],Rt=[];for(let $e=0;$e<pe;$e++){let it=K?L:L-re/2+10+$e*((re-20)/Math.max(1,pe-1)),Dt=Y+(K?0:6),lt=K?.35:1;De.push([it,.05,Dt,6*lt,4.6*lt,4.4*lt]);for(let Gt=0;Gt<5;Gt++)Ie.push([it-2.4*lt+Gt*1.2*lt,.4,Dt+2.6*lt,.16,3.6*lt,.9*lt]);for(let Gt=-1;Gt<=1;Gt++)nt.push([it+Gt*1.7*lt,4.6*lt,Dt,.22*lt,2.2*lt,.22*lt]),Rt.push([it+Gt*1.7*lt,6.8*lt,Dt,.34*lt,.34*lt,.34*lt])}if(Be(V.box,G.steel,De,P),Be(V.box,G.dark,Ie,P),Be(V.cyl,G.concrete,nt,P),Be(V.ball,G.coral,Rt,P),!K){let $e=[];for(let it=0;it<4;it++){let Dt=L-re/2+8+it*((re-16)/3);$e.push(Dt,0,Y-16,Dt,16,Y-16,Dt,16,Y-16,Dt,16,Y-4,Dt,0,Y-4,Dt,16,Y-4)}$e.push(L-re/2+8,14,Y-10,L+re/2-8,14,Y-10),ne($e,j.steel,P)}let ke=[],ht=S.halls.slice(0,pn?18:48),Wt=B.minX+4;ht.forEach(($e,it)=>{let Dt=$e.x-S.bw/2+(it===0&&S.nb===1,0)+3,lt=[[L+re/2,.25,Y-10+it%5*1.2],[Wt-2+it%5*.8,.25,Y-10+it%5*1.2],[Wt-2+it%5*.8,.25,$e.z],[Dt,.25,$e.z]];ke.push(lt)}),K&&ke.push([[L+re/2,.25,Y],[ue.heroRack.x,.25,Y]]);let vt=[];if(ke.forEach($e=>{for(let it=0;it<$e.length-1;it++)vt.push(...$e[it],...$e[it+1])}),ne(vt,j.coral,P),Te.lines=[],Re(_)){let $e=[];for(let it=-1;it<=1;it++){let Dt=[new y(T.maxX-4,.3,Y+it*1.6),new y(L-re/2,.3,Y+it*1.6)];$e.push(...Dt[0].toArray(),...Dt[1].toArray()),Te.lines.push({pts:Dt,kind:"p",r:.7})}ne($e,j.coral,P),ue.line=null}else{let $e=new y(T.maxX+6,0,0),it=new y(L-re/2-4,0,Y),Dt=$e.distanceTo(it),lt=Math.max(2,Math.round(Dt/140)+1),Gt=[],Vi=[],jt=(et,mt,wt)=>{let hi=[0,9,18,27,34,38],Si=xt=>4.2+(1.1-4.2)*Math.min(1,xt/34),bt=xt=>{let pi=xt>=34?.77:Si(xt);return[[et-pi,xt,mt-pi],[et+pi,xt,mt-pi],[et+pi,xt,mt+pi],[et-pi,xt,mt+pi]]};for(let xt=0;xt<hi.length-1;xt++){let pi=bt(hi[xt]),Wi=bt(hi[xt+1]);for(let ri=0;ri<4;ri++)wt.push(...pi[ri],...Wi[ri],...pi[ri],...pi[(ri+1)%4],...pi[ri],...Wi[(ri+1)%4],...pi[(ri+1)%4],...Wi[ri])}wt.push(et,34,mt-9,et,34,mt+9,et,34,mt-9,et,30,mt-2.5,et,34,mt+9,et,30,mt+2.5,et,38,mt,et,34,mt-9,et,38,mt,et,34,mt+9)},zt=[];for(let et=0;et<lt;et++){let mt=et/(lt-1),wt=$e.x+(it.x-$e.x)*mt,ei=$e.z+(it.z-$e.z)*mt;jt(wt,ei,Gt),zt.push(new y(wt,0,ei))}ne(Gt,j.steel,P),Be(V.ball,G.beacon,zt.map(et=>[et.x,38.6,et.z,.55,.55,.55]),P),[[34,-8.4],[34,8.4],[38,0]].forEach(([et,mt])=>{let wt=[];for(let Ft=0;Ft<zt.length-1;Ft++)for(let Yt=0;Yt<=16;Yt++){let hi=Yt/16,Si=zt[Ft].clone().lerp(zt[Ft+1],hi);wt.push(new y(Si.x,et-3.4*4*hi*(1-hi)-.6,Si.z+mt))}let ei=[];for(let Ft=0;Ft<wt.length-1;Ft++)ei.push(wt[Ft].x,wt[Ft].y,wt[Ft].z,wt[Ft+1].x,wt[Ft+1].y,wt[Ft+1].z);ne(ei,j.wire,P),Te.lines.push({pts:wt,kind:"p",r:1.1})}),ue.line=zt[Math.floor(zt.length/2)].clone().setY(40)}if(ke.slice(S.nb?1:0,pn?8:20).forEach($e=>Te.lines.push({pts:$e.map(it=>new y(...it)),kind:"p",r:.3})),_.p.gas){let $e=T.minX-24,it=-2600,Dt=(T.minZ+T.maxZ)/2,lt=[new y($e,.9,it),new y($e,.9,Dt-6),new y($e+6,.9,Dt),new y(T.minX+2,.9,Dt)],Gt=new ct(new Fc(new Ns(lt,!1,"catmullrom",.05),120,.6,10,!1),G.steel);P.add(Gt);let Vi=[];for(let jt=it;jt<Dt-10;jt+=24)Vi.push([$e,0,jt,.3,.6,1.4]);Be(V.box,G.dark,Vi,P),Te.lines.push({pts:lt,kind:"g",r:.75}),ue.gas=new y($e,4,Math.max(it+300,Dt-420))}else ue.gas=null;return P}let Pe={turbine:{w:54,d:26,h:40,gx:22,gz:26,cap:120,aspect:1.4},aero:{w:30,d:12,h:18,gx:12,gz:14,cap:300,aspect:1.6},cell:{w:8.9,d:2.4,h:2.2,gx:1.4,gz:2.4,cap:pn?1400:3600,aspect:1.3},reactor:{w:270,d:230,h:152,gx:60,gz:60,cap:24,aspect:1.5}};function oe(_,S){let T=P=>S?P===G.coral||P===G.coralDim||P===G.teal||P===G.tealDim||P===G.lamp?G.coralDim:G.ghost:P;return _==="turbine"?[[V.box,T(G.pad),0,0,0,54,.4,26],[V.box,T(G.steel),-18,.4,0,12,6.5,6.5],[V.box,T(G.dark),-18,.4,9.5,6,5,5],[V.box,T(G.hall2),-2,.4,0,20,9,8],[V.box,T(G.steel),-5,9.4,0,10,8,13],[V.box,T(G.dark),-8,3,0,3,7,3],[V.box,T(G.steel),13,.4,0,8,7.5,7.5],[V.cyl,T(G.stack),21,.4,0,4.4,37,4.4],[V.cylOpen,T(G.dark),21,30,0,4.46,1.2,4.46],[V.cylOpen,T(G.coral),21,37,0,4.48,.9,4.48],[V.box,T(G.coralDim),-2,9.1,0,20.2,.25,8.2],[V.box,T(G.lamp),-12.2,6,4.1,.5,.3,.2],[V.box,T(G.lamp),8.2,6,4.1,.5,.3,.2],[V.box,T(G.lamp),-18,6.6,3.35,.5,.3,.2],[V.box,T(G.lamp),-5,17.5,6.6,.6,.3,.2],[V.box,T(G.lamp),17,7.6,3.85,.5,.3,.2]]:_==="aero"?[[V.box,T(G.pad),0,0,0,30,.3,12],[V.box,T(G.hall2),-2,.3,0,14,5.5,4.6],[V.box,T(G.steel),-6,5.8,0,5,4,5.6],[V.box,T(G.steel),-11.5,.3,0,6,4,4],[V.cyl,T(G.dark),8,.3,0,1.7,16,1.7],[V.cylOpen,T(G.coral),8,16.2,0,1.76,.5,1.76],[V.box,T(G.coralDim),-2,5.75,0,14.2,.18,4.8],[V.box,T(G.lamp),-6,3.6,2.35,.4,.25,.15],[V.box,T(G.lamp),3,3.6,2.35,.4,.25,.15]]:_==="cell"?[[V.box,T(G.cell),0,0,0,8.9,2.1,2.4],[V.box,T(G.tealDim),0,1.72,0,8.94,.1,2.44],[V.box,T(G.dark),0,2.1,0,8.6,.14,2.1]]:[[V.box,T(G.pad),0,0,0,270,.5,230],[V.cyl,T(G.concrete),-80,.5,-40,21.5,58,21.5],[V.ball,T(G.concrete),-80,58.5,-40,21.5,11,21.5],[V.cylOpen,T(G.steel),-80,50,-40,21.8,3.2,21.8],[V.box,T(G.concrete),-80,.5,12,50,30,40],[V.box,T(G.hall2),10,.5,-55,92,36,44],[V.box,T(G.wall),10,.5,-20,60,14,20],[V.box,T(G.coralDim),10,34.6,-32.8,92.2,.5,.2],[V.box,T(G.lamp),-20,12,-32.8,1.2,.5,.2],[V.box,T(G.lamp),40,12,-32.8,1.2,.5,.2]]}let se=(()=>{let _=[[0,0],[62,0],[52,40],[40,100],[37,118],[38,136],[41,152],[40.4,152],[36.6,136],[35.8,118],[38.8,100],[50.8,40],[60.8,0]].map(([S,T])=>new le(S,T));return new Fs(_,64)})(),Re=_=>_.p.shape==="cell"||_.facMW<20;function N(_){let S=new ii;S.name="plant";let T=Pe[_.p.shape],P=!_.many,B=v(P?1:_.build,T.cap),K=B.n,re=Math.max(1,Math.ceil(Math.sqrt(K*T.aspect*T.d/T.w)));_.p.shape==="cell"&&(re=Math.max(1,Math.ceil(Math.sqrt(K*3.4)))),re=Math.min(K,re);let he=Math.ceil(K/re),L=_.p.shape==="cell"?8:0,Y=vt=>{let $e=vt%re;return $e*(T.w+T.gx)+(L?Math.floor($e/10)*L:0)},fe=vt=>{let $e=Math.floor(vt/re);return $e*(T.d+T.gz)+(L?Math.floor($e/10)*L:0)},pe=Y(re-1)+T.w,De=fe((he-1)*re)+T.d,Ie=16+(_.p.shape==="reactor"?30:0),nt=ue.sub.c.x-ue.sub.w/2-(Re(_)?28:Math.max(260,Math.min(700,(pe+De)*.35))),Rt=nt-pe,ke=-De/2,ht={minX:Rt-Ie,maxX:nt+Ie,minZ:ke-Ie,maxZ:ke+De+Ie};Be(V.box,G.gravel,[[(ht.minX+ht.maxX)/2,0,(ht.minZ+ht.maxZ)/2,ht.maxX-ht.minX,.04,ht.maxZ-ht.minZ]],S);let Wt=Array.from({length:K},(vt,$e)=>[Rt+Y($e)+T.w/2,ke+fe($e)+T.d/2]);if(oe(_.p.shape,P).forEach(([vt,$e,it,Dt,lt,Gt,Vi,jt])=>{if(Be(vt,$e,Wt.map(([zt,Me])=>[zt+it,Dt,Me+lt,Gt,Vi,jt]),S),P&&$e===G.ghost){let zt=new Jr(new rl(vt,25),j.ghost);zt.position.set(Wt[0][0]+it,Dt,Wt[0][1]+lt),zt.scale.set(Gt,Vi,jt),S.add(zt)}}),Ye.heat=[],Ye.steam=[],_.p.shape==="reactor"){if(Be(se,P?G.ghost:G.tower,Wt.map(([vt,$e])=>[vt+75,.5,$e+55]),S),P){let vt=new Jr(new rl(se,8),j.ghost);vt.position.set(Wt[0][0]+75,.5,Wt[0][1]+55),S.add(vt)}Be(V.ball,G.coral,Wt.flatMap(([vt,$e])=>[0,1,2,3].map(it=>[vt+75+Math.cos(it*1.57)*41,153,$e+55+Math.sin(it*1.57)*41,.9,.9,.9])),S),P||Wt.slice(0,8).forEach(([vt,$e])=>Ye.steam.push(new y(vt+75,150,$e+55)))}else if(!P&&_.p.shape!=="cell"){let vt=_.p.shape==="turbine"?21:8,$e=_.p.shape==="turbine"?38:16.6;Wt.slice(0,pn?10:28).forEach(([it,Dt])=>Ye.heat.push(new y(it+vt,$e,Dt)))}return ue.plant={c:new y((ht.minX+ht.maxX)/2,0,(ht.minZ+ht.maxZ)/2),w:ht.maxX-ht.minX,d:ht.maxZ-ht.minZ,h:T.h,k:B.k,n:K},ue.P=ht,te.position.set(ue.plant.c.x,T.h*1.4,ue.plant.c.z),te.intensity=P||_.p.shape==="cell"?0:Math.min(24e3,70*Math.sqrt(K)*T.h*T.h/10),{g:S,P:ht}}function ae(_,S,T){let P=new ii;P.name="refs";let B=T.maxX-40,K=T.maxZ+10;Be(V.box,G.truck,[[B,.9,K,13.6,3.1,2.6]],P),Be(V.box,G.steel,[[B+8.6,.6,K,2.6,3.2,2.5]],P),Be(V.box,G.dark,[[B+2,0,K,17,.9,2.4]],P),Be(V.box,G.coral,[[B-6.85,1.3,K+.9,.08,.25,.3],[B-6.85,1.3,K-.9,.08,.25,.3]],P),ue.truck=new y(B+2,4.5,K),ue.truckTop=new y(B-3.5,4,K+.2);let re=S.campus,he=S.nb?re.maxX-55-10:re.maxX+80,L=S.nb?re.maxZ+52:0,Y=109.7,fe=48.8,pe=[];Le(pe,he-Y/2,.08,L-fe/2,he+Y/2,.08,L+fe/2);for(let De=0;De<=10;De++){let Ie=he-45.72+De*9.144;pe.push(Ie,.08,L-fe/2,Ie,.08,L+fe/2)}return ne(pe.slice(0,24).concat(pe.slice(72)),j.field,P),ue.field=new y(he,2.5,L),ue.fieldC=S.nb?new y(he,0,L):null,Be(V.box,G.road,[[(T.maxX+re.minX)/2,0,(S.nb?re.maxZ:6)+8,re.minX-T.maxX+40,.05,7]],P),P}let ie=Tt("#labels"),be={token:{r:[.8,4.6]},rack:{r:[2.4,60]},person:{r:[2.2,34]},hall:{r:[22,600]},field:{r:[90,1800]},campus:{r:[160,12e3]},flow:{r:[70,12e3]},sub:{r:[60,900]},plant:{r:[90,2e4]},truck:{r:[25,460]},gas:{r:[140,4e3]}};Object.entries(be).forEach(([_,S])=>{let T=document.createElement("div");T.className=`lb lb-${_}`,ie.appendChild(T),S.el=T,S.p=new y,S.on=!1,S.o=0});function ye(_,S){let T=_.c,P=_.p,B=(re,he,L)=>{be[re].el.innerHTML=he,L&&be[re].p.copy(L),be[re].on=!!L};B("token",`<b>1 token</b><small>${lh(_.jTok)} at the wall</small>`,Ei.position.clone().add(new y(0,.3,0))),B("rack",`<b>${si(T.kw*T.rack,3)} kW</b><small>one ${T.n} rack, ${T.rack} GPUs</small>`,ue.heroRack.clone().add(new y(-.55,yt.h+.05,ue.heroFace*.3))),B("person","<b>1.8 m</b><small>a person, for scale</small>",Bt.position.clone().add(new y(0,1.95,0))),B("hall",S.nb?`<b>${ro(_.racks)} racks</b><small>${ro(_.chips)} chips${_.halls>1?` in ${mn(_.halls)} halls`:""}</small>`:`<b>${si(_.chips,2)} chips</b><small>less than one rack</small>`,S.nb?ue.hall.c.clone().add(new y(0,kn+5,0)):ue.heroRack.clone().add(new y(0,4.2,0))),B("campus",`<b>${Hn(_.facMW)}</b><small>${S.k>1?`each hall drawn stands for ${mn(S.k)}`:`at the wall, PUE ${qt.pue.toFixed(2)}`}</small>`,S.nb>1?new y((S.campus.minX+S.campus.maxX)/2,kn+20+(S.campus.maxX-S.campus.minX)*.05,(S.campus.minZ+S.campus.maxZ)/2):null),B("flow",`<b>${oo(_.tps)}</b><small>tokens a second, out to the world</small>`,(S.nb?ue.hall.c.clone():ue.heroRack.clone()).add(new y(0,S.nb?70:9,0))),B("field","<b>110 m</b><small>a football field</small>",S.nb?ue.field:null),B("sub",`<b>Substation</b><small>${Hn(_.facMW)} stepped down</small>`,ue.sub.c.clone().add(new y(0,S.nb?20:4,0)));let K=ue.plant;B("plant",_.many?`<b>${mn(_.build)} ${_.build===1?P.one:P.many}</b><small>${K.k>1?`each one drawn stands for ${mn(K.k)}`:`${Hn(_.build*P.mw)} of ${P.m}`}</small>`:`<b>${Zs(_)}</b><small>of one ${P.one}, drawn as a ghost</small>`,K.c.clone().add(new y(0,K.h+14+K.w*.03,0))),B("truck","<b>16 m</b><small>a semi-truck</small>",ue.truck),B("gas","<b>Gas in</b><small>the molecules are the easy part</small>",ue.gas)}let Ee=new y,Je=[],ft={cx:0,cy:0,k:1};function ve(){let _=n.getBoundingClientRect(),S=De=>{let Ie=Tt(De);if(!Ie)return null;let nt=Ie.getBoundingClientRect();return nt.width?{l:nt.left-_.left,r:nt.right-_.left,t:nt.top-_.top,b:nt.bottom-_.top}:null},T=S("#nav"),P=S(".title"),B=S("#card"),K=S(".dock"),re=0,he=sn,L=T?Math.max(0,T.b):0,Y=Ri;document.body.classList.contains("open")&&ph()&&(he=sn-Tt("#console").offsetWidth-24),K&&(Y=Math.min(Y,K.t-6)),pn?(P&&(L=Math.max(L,P.b)),B&&(Y=Math.min(Y,B.t-6))):(P&&(L=Math.max(L,P.t+(P.b-P.t)*.45)),B&&(Y=Math.min(Y,B.t+(B.b-B.t)*.3)),re=Math.max(P?P.r:0,B?B.r:0)*.38);let fe=Math.max(120,he-re),pe=Math.max(120,Y-L);ft={cx:(re+he)/2,cy:(L+Y)/2,k:Math.min(1.55,Math.max(1,Math.pow(Math.max(Ri/pe,sn/fe*.7),.62)))}}let je=()=>{let _=n.getBoundingClientRect(),S=document.createRange();ve(),Je=dr("#nav, .title h1, .title .ans, .title .kicker, #card, .dock > *, .console").filter(T=>getComputedStyle(T).visibility!=="hidden").map(T=>{let P;return T.matches("h1, .ans")?(S.selectNodeContents(T),P=S.getBoundingClientRect()):P=T.getBoundingClientRect(),{l:P.left-_.left-8,r:P.right-_.left+8,t:P.top-_.top-6,b:P.bottom-_.top+6}}).filter(T=>T.r>T.l&&T.b>T.t)},_t=["plant","campus","hall","rack","token","sub","flow","gas","person","truck","field"];function Ne(_){let S=[];_t.map(T=>be[T]).forEach(T=>{let P=0,B=0,K=0,re=!1;if(T.on){let he=o.position.distanceTo(T.p);if(Ee.copy(T.p).project(o),B=(Ee.x+1)/2*sn,K=(1-Ee.y)/2*Ri,Ee.z<1&&he>T.r[0]&&he<T.r[1]&&B>-40&&B<sn+40&&K>20&&K<Ri){let L=T.el.offsetWidth/2,Y=T.el.offsetHeight,fe=(pe,De)=>Je.some(Ie=>B+L>Ie.l&&B-L<Ie.r&&De>Ie.t&&pe<Ie.b)||S.some(Ie=>B+L+4>Ie.l&&B-L-4<Ie.r&&De>Ie.t&&pe<Ie.b);fe(K-Y,K)?!fe(K,K+Y)&&K+Y<Ri-10&&(P=1,re=!0):P=1,P&&S.push({l:B-L,r:B+L,t:re?K:K-Y,b:re?K+Y:K}),P*=Math.min(1,(he-T.r[0])/(T.r[0]*.5+.01),(T.r[1]-he)/(T.r[1]*.25))}}if(T.o+=(P-T.o)*Math.min(1,_*7),T.o<.01){T.el.style.opacity!=="0"&&(T.el.style.opacity="0");return}T.el.style.opacity=T.o.toFixed(3),P&&re!==T.flip&&(T.flip=re,T.el.classList.toggle("flip",re)),T.el.style.transform=`translate(-50%,${T.flip?"0":"-100%"}) translate(${B.toFixed(1)}px,${K.toFixed(1)}px)`})}let ot=(()=>{let _=(Se,qe,ze)=>{let Ct=Math.min(1,Math.max(0,(ze-Se)/(qe-Se)));return Ct*Ct*(3-2*Ct)},pe=Se=>Se<=0?.333:Se<.1?.333+.13*Math.sqrt(Math.max(0,1-((.1-Se)/.1)**2)):Se<=.64?.463:Se>=1?0:.463*Math.pow(1-Math.pow((Se-.64)/.36,2.2),.45454545454545453),De=Se=>.82+.1*Math.max(0,Math.cos(Se))**2,Ie=(Se,qe,ze=new y,Ct=0)=>{let ut=pe(qe)+Ct;return ze.set(ut*Math.sin(Se),qe+.09,ut*Math.cos(Se)*De(Se))},nt=(Se,qe)=>{let ze=Ie(Se-.002,qe),Ct=Ie(Se+.002,qe),ut=Ie(Se,qe-.002),Kt=Ie(Se,qe+.002);return Ct.sub(ze).cross(Kt.sub(ut)).normalize()},Rt=(Se,qe,ze,Ct=0)=>(Se.position.copy(Ie(qe,ze)).addScaledVector(nt(qe,ze),Ct),Se.quaternion.setFromUnitVectors(new y(0,0,1),nt(qe,ze)),Se),ke=[];for(let Se=0;Se<=5;Se++)ke.push([(.463-.13)*Se/5,0]);for(let Se=1;Se<=16;Se++){let qe=-Math.PI/2+Se/16*Math.PI/2;ke.push([.463-.13+.13*Math.cos(qe),.1+.1*Math.sin(qe)])}for(let Se=1;Se<=14;Se++)ke.push([.463,.1+(.64-.1)*Se/14]);for(let Se=1;Se<=40;Se++){let qe=Se/40*Math.PI/2;ke.push([.463*Math.pow(Math.cos(qe),2/2.2),.64+.36*Math.pow(Math.sin(qe),2/2.2)])}ke[ke.length-1][0]=0;let ht=Se=>new ge(Se),Wt={shellLo:ht(7098354),shell:ht(9402111),shellHi:ht(11772671),belly:ht(15986943),bellyEdge:ht(14471935),base:ht(5914582),finHi:ht(10323711),finLo:ht(6637548),footHi:ht(15130623),footLo:ht(12035572)},vt=Math.asin(.85),$e=(()=>{let qe=[],ze=[],Ct=[],ut=new ge;ke.forEach(([ui,oi])=>{for(let Mn=0;Mn<=120;Mn++){let en=Math.PI+Mn/120*Math.PI*2;qe.push(ui*Math.sin(en),oi+.09,ui*Math.cos(en)*De(en));let Er=Math.abs(Math.atan2(Math.sin(en),Math.cos(en))),ho=(1-_(vt-.035,vt+.035,Er))*(1-_(.955,.985,oi))*(oi<.002?0:1);ut.copy(Wt.shellLo).lerp(Wt.shell,_(0,.45,oi)).lerp(Wt.shellHi,_(.6,1,oi)*.8),oi<.002&&ut.copy(Wt.base);let xr=Wt.belly.clone().lerp(Wt.bellyEdge,Math.max(_(vt-.45,vt,Er)*.85,_(.22,0,oi)*.7));ut.lerp(xr,ho),ze.push(ut.r,ut.g,ut.b)}});let Kt=ke.length,ji=121;for(let ui=0;ui<Kt-1;ui++)for(let oi=0;oi<120;oi++){let Mn=ui*ji+oi,en=Mn+ji;Ct.push(Mn,Mn+1,en,Mn+1,en+1,en)}let vn=new Mt;vn.setAttribute("position",new Ke(qe,3)),vn.setAttribute("color",new Ke(ze,3)),vn.setIndex(Ct),vn.computeVertexNormals();let yi=vn.attributes.normal;for(let ui=0;ui<Kt;ui++){let oi=ui*ji,Mn=oi+120,en=yi.getX(oi)+yi.getX(Mn),Er=yi.getY(oi)+yi.getY(Mn),ho=yi.getZ(oi)+yi.getZ(Mn),xr=Math.hypot(en,Er,ho)||1;if(yi.setXYZ(oi,en/xr,Er/xr,ho/xr),yi.setXYZ(Mn,en/xr,Er/xr,ho/xr),ui===0||ui===Kt-1)for(let Wn=0;Wn<=120;Wn++)yi.setXYZ(oi+Wn,0,ui?1:-1,0)}for(let ui=0;ui<5;ui++)for(let oi=0;oi<=120;oi++)yi.setXYZ(ui*ji+oi,0,-1,0);return vn})(),it=(()=>{let Se=[];for(let Kt=0;Kt<=28;Kt++){let ji=Kt/28;Se.push(new le(Math.max(1e-4,.5*Math.pow(Math.sin(Math.PI*Math.pow(ji,1.55)),.72)),-ji))}let qe=new Fs(Se,36);qe.scale(.17,.56,.27);let ze=qe.attributes.position,Ct=[],ut=new ge;for(let Kt=0;Kt<ze.count;Kt++)ut.copy(Wt.finHi).lerp(Wt.finLo,_(0,-.56,ze.getY(Kt))),Ct.push(ut.r,ut.g,ut.b);return qe.setAttribute("color",new Ke(Ct,3)),qe})(),Dt=(()=>{let Se=new Dr(1,36,22),qe=Se.attributes.position,ze=[],Ct=new ge;for(let ut=0;ut<qe.count;ut++)Ct.copy(Wt.footLo).lerp(Wt.footHi,_(-.6,.8,qe.getY(ut))),ze.push(Ct.r,Ct.g,Ct.b);return Se.setAttribute("color",new Ke(ze,3)),Se})(),lt=new Dr(1,28,18),Gt=new Ds(1,1,1,32),Vi=(Se,qe,ze,Ct={})=>{let ut=new Qr({vertexColors:!0,roughness:Se,metalness:0,...Ct});return ut.userData.u={uSelf:{value:qe},uRim:{value:ze},uRimC:{value:new ge(10475775)},uTint:{value:new ge(0,0,0)}},ut.onBeforeCompile=Kt=>{Object.assign(Kt.uniforms,ut.userData.u),Kt.fragmentShader=Kt.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSelf, uRim; uniform vec3 uRimC, uTint;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uSelf + uTint;`).replace("#include <opaque_fragment>",`outgoingLight += uRimC * uRim * pow(1. - saturate(dot(normal, geometryViewDir)), 3.);
#include <opaque_fragment>`)},ut.customProgramCacheKey=()=>"echo-skin",ut},jt=(Se,qe,ze,Ct)=>{let ut=Vi(qe,ze,.25,Ct);return ut.vertexColors=!1,ut.color=new ge(Se),ut},zt={skin:Vi(.52,.21,.3),balloon:Vi(.34,.23,.4),eye:jt(1774896,.22,0),shine:new Li({color:16777215}),gill:new Li({color:5190600}),nose:jt(14011383,.6,.2),blush:jt(16752052,.7,.35),hat:jt(4183752,.38,.22),brim:jt(2795933,.45,.18),lamp:new Li({color:new ge(16773852).multiplyScalar(.95)}),ball:jt(9393204,.6,.15),lace:new Li({color:15921128}),cart:jt(2242639,.5,.12),cartTrim:new Li({color:new ge(4183752).multiplyScalar(1.6)}),tire:jt(857116,.8,0),crate:jt(2901344,.5,.12),tray:jt(1582646,.45,.1),off:new Li({color:1714746}),on:new Li({color:new ge(4183752).multiplyScalar(2)}),crateGlow:new Li({color:new ge(4183752).multiplyScalar(.9)}),fan:jt(16029562,.6,.3,{side:Xi}),rope:new Pn({color:13227746,transparent:!0,opacity:.5})},Me={x0:16,x1:84,y0:8,y1:48,k:16},et={awake:{box:"M34 10.8 Q50 8.51 66 10.8 C78.16 11.21 82 17.95 82 28.25 C82 37.84 78.16 46 66 46 L34 46 C21.84 46 18 37.84 18 28.25 C18 17.95 21.84 11.21 34 10.8 Z",beat:"M28.88 28.04 H40.53 L42.96 24.84 L46.16 31.23 L49.62 23.42 L52.56 30.03 L54.61 28.04 H71.12",teeth:["M26.96 15.47 C26.96 13.28 28.96 12.25 31.96 12.1 Q50 10.89 68.04 12.1 C71.04 12.25 73.04 13.28 73.04 15.47 C73.04 18.35 70.74 19.3 67.28 19.3 C63.82 19.3 62.32 18.74 61.52 17.03 C60.72 18.74 59.22 19.3 55.76 19.3 C52.3 19.3 50.8 18.74 50 17.03 C49.2 18.74 47.7 19.3 44.24 19.3 C40.78 19.3 39.28 18.74 38.48 17.03 C37.68 18.74 36.18 19.3 32.72 19.3 C29.26 19.3 26.96 18.35 26.96 15.47 Z","M26.96 41.03 C26.96 43.22 28.96 44.25 31.96 44.4 Q50 45.61 68.04 44.4 C71.04 44.25 73.04 43.22 73.04 41.03 C73.04 38.15 70.74 37.2 67.28 37.2 C63.82 37.2 62.32 37.76 61.52 39.47 C60.72 37.76 59.22 37.2 55.76 37.2 C52.3 37.2 50.8 37.76 50 39.47 C49.2 37.76 47.7 37.2 44.24 37.2 C40.78 37.2 39.28 37.76 38.48 39.47 C37.68 37.76 36.18 37.2 32.72 37.2 C29.26 37.2 26.96 38.15 26.96 41.03 Z"]},sleep:{box:"M37.5 20.13 Q50 19.1 62.5 20.13 C72 20.32 75 23.36 75 28 C75 32.32 72 36 62.5 36 L37.5 36 C28 36 25 32.32 25 28 C25 23.36 28 20.32 37.5 20.13 Z",beat:"M33.5 27.9 H42.6 L44.5 26.46 L47 29.34 L49.7 25.82 L52 28.8 L53.6 27.9 H66.5",teeth:["M32 22.24 C32 21.25 34 20.87 37 20.72 Q50 20.18 63 20.72 C66 20.87 68 21.25 68 22.24 C68 23.54 66.2 23.97 63.5 23.97 C60.8 23.97 59.8 23.71 59 22.94 C58.2 23.71 57.2 23.97 54.5 23.97 C51.8 23.97 50.8 23.71 50 22.94 C49.2 23.71 48.2 23.97 45.5 23.97 C42.8 23.97 41.8 23.71 41 22.94 C40.2 23.71 39.2 23.97 36.5 23.97 C33.8 23.97 32 23.54 32 22.24 Z","M32 33.76 C32 34.75 34 35.13 37 35.28 Q50 35.82 63 35.28 C66 35.13 68 34.75 68 33.76 C68 32.46 66.2 32.03 63.5 32.03 C60.8 32.03 59.8 32.29 59 33.06 C58.2 32.29 57.2 32.03 54.5 32.03 C51.8 32.03 50.8 32.29 50 33.06 C49.2 32.29 48.2 32.03 45.5 32.03 C42.8 32.03 41.8 32.29 41 33.06 C40.2 32.29 39.2 32.03 36.5 32.03 C33.8 32.03 32 32.46 32 33.76 Z"]}},mt=(Se,qe)=>Qe((Me.x1-Me.x0)*Me.k,(Me.y1-Me.y0)*Me.k,ze=>{if(ze.setTransform(Me.k,0,0,Me.k,-Me.x0*Me.k,-Me.y0*Me.k),qe){ze.lineJoin=ze.lineCap="round",ze.strokeStyle="#fff",[[4.4,.07],[3,.14],[2,.3],[1.3,1]].forEach(([Kt,ji])=>{ze.globalAlpha=ji,ze.lineWidth=Kt,ze.stroke(new Path2D(Se.beat))});return}let Ct=new Path2D(Se.box);ze.fillStyle="#241a3a",ze.fill(Ct),ze.save(),ze.clip(Ct);let ut=ze.createLinearGradient(0,8,0,46);ut.addColorStop(0,"rgba(160,150,255,.22)"),ut.addColorStop(.45,"rgba(160,150,255,0)"),ut.addColorStop(1,"rgba(0,0,0,.25)"),ze.fillStyle=ut,ze.fillRect(16,8,68,40),ze.restore(),ze.fillStyle="#ffffff",Se.teeth.forEach(Kt=>ze.fill(new Path2D(Kt))),ze.lineJoin=ze.lineCap="round",ze.strokeStyle="rgba(79,210,255,.45)",ze.lineWidth=1.3,ze.stroke(new Path2D(Se.beat)),ze.strokeStyle="rgba(255,255,255,.07)",ze.lineWidth=.8,ze.stroke(Ct)}),wt={awake:mt(et.awake),sleep:mt(et.sleep),glow:mt(et.awake,!0),glowSleep:mt(et.sleep,!0)};Object.values(wt).forEach(Se=>{Se.anisotropy=8}),wt.awake.colorSpace=wt.sleep.colorSpace=Yi;let ei=Se=>{let qe=new ur(1,1,36,18),ze=qe.attributes.position,Ct=new y;for(let ut=0;ut<ze.count;ut++){let Kt=Me.x0+(ze.getX(ut)+.5)*(Me.x1-Me.x0),ji=Me.y1-(ze.getY(ut)+.5)*(Me.y1-Me.y0),vn=(Kt-50)*.0105,yi=(95-ji)/94.5,ui=pe(yi),oi=Math.asin(Math.max(-.985,Math.min(.985,vn/Math.max(ui,.001))));Ie(oi,yi,Ct,Se),ze.setXYZ(ut,Ct.x,Ct.y,Ct.z)}return qe.computeVertexNormals(),qe},Ft=ei(.004),Yt=ei(.007),hi=()=>new Qt({uniforms:{map:{value:wt.glow},color:{value:new ge(5231359).multiplyScalar(1.5)},t:{value:0},amp:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D map; uniform vec3 color; uniform float t, amp; varying vec2 vUv;
        void main(){ float a = texture2D(map, vUv).a; float x = (vUv.x - .19) / .62; float d = fract(t) * 1.5 - .2 - x;
          float trail = d >= 0. ? exp(-d * 4.5) : exp(d * 50.); float k = a * (.22 + 1.25 * trail) * amp;
          if (k < .003) discard; gl_FragColor = vec4(color * k, k); }`,transparent:!0,depthWrite:!1,blending:Yn}),Si=Qe(128,128,Se=>{let qe=Se.createRadialGradient(64,64,0,64,64,64);qe.addColorStop(0,"rgba(0,0,0,.55)"),qe.addColorStop(.55,"rgba(0,0,0,.28)"),qe.addColorStop(1,"rgba(0,0,0,0)"),Se.fillStyle=qe,Se.fillRect(0,0,128,128)}),bt=new ur(1,1);bt.rotateX(-Math.PI/2);let xt=(Se,qe,ze,Ct,ut,Kt,ji,vn,yi)=>{let ui=new ct(Se,qe);return ui.position.set(ze,Ct,ut),ui.scale.set(Kt,ji??Kt,vn??Kt),yi&&yi.add(ui),ui},pi=(()=>{let Se=[[0,.29],[.07,.287],[.14,.276],[.2,.258],[.25,.232],[.29,.2],[.32,.162],[.34,.118],[.352,.07],[.357,.03],[.36,.012],[.4,.006],[.44,0],[.462,-.008],[.468,-.02],[.458,-.028],[.43,-.022],[.37,-.014],[.33,-.01]],qe=new Fs(Se.map(([ze,Ct])=>new le(ze,Ct)),64);return qe.scale(1,1,.96),qe})();function Wi(Se={}){let qe=new ii,ze=new ii;qe.add(ze);let Ct=Se.shadow!==!1?xt(bt,new Li({map:Si,transparent:!0,depthWrite:!1,opacity:.9}),0,.006,.05,1.05,1,.95,qe):null,ut=Se.mode==="balloon"?zt.balloon:zt.skin,Kt=new ct($e,ut);ze.add(Kt);let ji=new ct(Ft,new Li({map:Se.sleep?wt.sleep:wt.awake,color:12894930,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));ji.renderOrder=3,ze.add(ji);let vn=new ct(Yt,hi());vn.renderOrder=4,Se.sleep&&(vn.material.uniforms.map.value=wt.glowSleep),ze.add(vn);let yi=new ii;yi.position.y=.805+.09,ze.add(yi),[-1,1].forEach(Fi=>{let ti=Rt(new ct(lt,zt.eye),Fi*1.07,.805,-.006);ti.position.y-=.805+.09,ti.scale.set(.04,.047,.026),yi.add(ti);let uo=nt(Fi*1.07,.805),js=new ct(lt,zt.shine);js.position.copy(ti.position).addScaledVector(uo,.019).add(new y(-Fi*.011,.015,.007)),js.scale.setScalar(.012),yi.add(js)}),[-1,1].forEach(Fi=>[.575,.54].forEach(ti=>{let uo=Rt(new ct(new nl(.0055,.026,4,10),zt.gill),Fi*1.2,ti,.001),js=Ie(Fi*1.2+.01,ti).sub(Ie(Fi*1.2-.01,ti)).normalize();uo.quaternion.setFromUnitVectors(new y(0,1,0),js),ze.add(uo)})),[-1,1].forEach(Fi=>{let ti=Rt(new ct(lt,zt.nose),Fi*.36,.93,-.002);ti.scale.set(.013,.009,.006),ze.add(ti)});let ui=[-1,1].map(Fi=>{let ti=Rt(new ct(lt,zt.blush),Fi*.82,.66,-.002);return ti.scale.set(.05,.026,.008),ti.visible=!1,ze.add(ti),ti}),oi=Fi=>{let ti=new ii;ti.position.set(Fi*.44,.62+.09,.02),ze.add(ti);let uo=new ct(it,ut);return uo.position.set(Fi*.025,0,0),ti.add(uo),ti.rotation.z=Fi*.14,ti},Mn=oi(-1),en=oi(1),Er=Fi=>{let ti=new ii;return ti.position.set(Fi*.2,.1,.06),ze.add(ti),Se.mode==="sit"?xt(Dt,ut,0,-.02,.09,.135,.13,.15,ti):xt(Dt,ut,0,-.01,.06,.19,.1,.21,ti),ti},ho=Er(-1),xr=Er(1),Wn=null,Mh=null;if(Se.hat){Wn=new ii,Wn.position.set(0,.91+.09,.01),Wn.rotation.x=-.07,ze.add(Wn);let Fi=new ct(pi,zt.hat);Wn.add(Fi),xt(Gt,zt.brim,0,.12,.33,.055,.03,.055,Wn).rotation.x=Math.PI/2-.35,Mh=xt(lt,zt.lamp,0,.125,.345,.036,.036,.016,Wn),Mh.rotation.x=-.35}let Uu=null;return Se.ball&&(Uu=xt(lt,zt.ball,0,-.5,.12,.1,.065,.065,en),xt(Gt,zt.lace,0,-.5+.06,.12,.004,.02,.05,en).rotation.z=Math.PI/2),{root:qe,body:ze,shell:Kt,visor:ji,pulse:vn,eyes:yi,finL:Mn,finR:en,footL:ho,footR:xr,hat:Wn,lamp:Mh,ball:Uu,blush:ui,shadow:Ct,o:Se,seed:Math.random()*20,hop:-1,wave:-1,cheer:-1,excite:0,yaw:0,pitch:0,beatT:Math.random(),nextBlink:1+Math.random()*3,blinkT:-1,mode:Se.mode||"stand",sleep:!!Se.sleep}}return{make:Wi,mat:zt,m:xt,sphere:lt,cylG:Gt,setSleep:(Se,qe)=>{Se.sleep!==qe&&(Se.sleep=qe,Se.visor.material.map=qe?wt.sleep:wt.awake,Se.pulse.material.uniforms.map.value=qe?wt.glowSleep:wt.glow,Se.visor.material.needsUpdate=!0)},LIFT:.09}})();function wi(){let _=new ii,S=ot.mat,T=ot.m,P=new bn(1,1,1);T(P,S.cart,0,.3,0,.78,.22,1.25,_),T(P,S.cartTrim,0,.3,.63,.8,.04,.02,_),T(P,S.crate,0,.58,.28,.62,.34,.5,_),T(P,S.crateGlow,0,.76,.28,.5,.02,.38,_),[[-.4,.45],[.4,.45],[-.4,-.42],[.4,-.42]].forEach(([K,re])=>{let he=T(ot.cylG,S.tire,K,.14,re,.14,.08,.14,_);he.rotation.z=Math.PI/2}),T(ot.sphere,S.lamp,0,.34,.66,.06,.045,.02,_),T(ot.cylG,S.cart,-.3,.85,-.5,.015,.9,.015,_);let B=T(ot.sphere,G.beacon,-.3,1.32,-.5,.05,.05,.05,_);return{g:_,beacon:B}}let li={},$s=new ii;r.add($s);let so=10,Fo=new Mt;Fo.setAttribute("position",new Ke(new Float32Array(6*so*2*3),3).setUsage(Ga));let Js=new Jr(Fo,ot.mat.rope);Js.frustumCulled=!1,r.add(Js);let rn=gn(48,gi(ni,new ge(9300191).multiplyScalar(1.6),{blending:Yn}));rn.st.forEach(_=>{_.age=_.life=1});function yr(_){let S=_.root.scale.x;_.root.updateMatrixWorld();let T=new y(0,.8,.2).applyMatrix4(_.root.matrixWorld),P=0;for(let B of rn.st){if(B.age<B.life)continue;let K=Math.random()*Math.PI*2,re=.5+Math.random();if(B.x=T.x,B.y=T.y,B.z=T.z,B.vx=Math.cos(K)*S*1.4,B.vz=Math.sin(K)*S*1.4,B.vy=re*S*1.6,B.age=0,B.life=.7+Math.random()*.4,B.s0=S*.09,B.s1=S*.02,B.gr=S*2.4,++P>=12)break}}{let _=(he,L)=>{let Y=ot.make(L);return Y.k=he,$s.add(Y.root),li[he]=Y,Y};_("sitter",{mode:"sit",shadow:!1});let S=_("tech",{mode:"tech",hat:!0});S.tray=new ii,S.root.add(S.tray),ot.m(new bn(1,1,1),ot.mat.tray,0,0,0,.5,.05,.62,S.tray),S.led=ot.m(new bn(1,1,1),ot.mat.off,0,0,-.315,.42,.025,.012,S.tray);let T=_("cart",{mode:"cart",shadow:!1});T.cart=wi(),T.root.add(T.cart.g),_("campus",{mode:"balloon",shadow:!1}),_("plant",{mode:"balloon",hat:!0,shadow:!1}),_("rider",{mode:"sit",shadow:!1}),_("runner",{mode:"run",ball:!0});let P=_("hot",{mode:"hot"});P.fan=new ii,P.fan.position.set(.02,-.5,.1),P.finL.add(P.fan);let B=new Tc(1,24,0,Math.PI),K=new ct(B,ot.mat.fan);K.scale.setScalar(.22),K.rotation.y=Math.PI/2,P.fan.add(K),ot.m(ot.cylG,ot.mat.fan,0,-.06,0,.012,.14,.012,P.fan);let re=Qe(64,64,he=>{he.fillStyle="#fff",he.font='900 52px "Big Shoulders Display","Arial Narrow",sans-serif',he.textAlign="center",he.textBaseline="middle",he.fillText("z",32,34)});li.plant.zs=[0,1,2].map(()=>{let he=new Ts(new $r({map:re,color:new ge(13624319),transparent:!0,depthWrite:!1}));return he.visible=!1,r.add(he),he})}function Qs(_){let S=li,T=ue.heroRack,P=ue.heroFace||1;S.sitter.root.position.set(T.x-.12*P,T.y+yt.h,T.z+P*(yt.d/2-.2)),S.sitter.root.rotation.y=P>0?0:Math.PI,S.sitter.root.scale.setScalar(.62);let B=ue.heroHall,K=B&&(B.racks.find(fe=>fe.line===0&&Math.abs(fe.x-(B.heroX+7.2))<.31)||B.racks.find(fe=>fe.line===0&&Math.abs(fe.x-(B.heroX+3.6))<.31));S.tech.root.visible=!!K,K&&(S.tech.root.position.set(B.ix+K.x,.2,B.iz+K.z+P*(yt.d/2+.78)),S.tech.root.rotation.y=P>0?Math.PI:0,S.tech.root.scale.setScalar(.95)),S.cart.root.visible=!!(B&&B.lines>=3),B&&(S.cart.path={x:B.ix,z0:B.iz+B.inD/2-sh-2*yt.d-gl-1,z1:B.iz-B.inD/2+1.6},S.cart.root.scale.setScalar(1));let re=xe.campus,he=xe.nb>0;S.campus.anchor=he?new y(re.minX+(re.maxX-re.minX)*.62,0,re.minZ-6):new y(T.x-1.4,.2,T.z-.9),S.campus.size=he?Math.min(46,30+(re.maxX-re.minX)*.02):1.15,S.campus.lift=he?30+S.campus.size*.5:4.4,S.campus.drift=he?new y(4,0,-10):new y(-.5,0,.4);let L=ue.plant,Y=ue.P;if(S.plant.anchor=new y(Y.maxX-8,0,Y.minZ+8),S.plant.size=_.p.shape==="reactor"?56:_.p.shape==="cell"?12:_.p.shape==="aero"?20:30,S.plant.lift=L.h+S.plant.size*.75+(_.p.shape==="cell"?6:10),S.plant.drift=new y(-S.plant.size*.5,0,S.plant.size*.4),S.plant.sleep&&_.many&&(S.plant.cheer=performance.now()),ot.setSleep(S.plant,!_.many),S.hot.root.visible=!!B,B){let fe=xe.halls[1];fe?S.hot.root.position.set(fe.x-xe.bw/2+12+(xe.bw-20)/6*.5,kn+.06,fe.z):S.hot.root.position.set(B.ix-B.inW/2-fr/2,jn+.2,B.iz+2),S.hot.root.rotation.y=.5,S.hot.root.scale.setScalar(1.1)}S.hot.pue=qt.pue,S.hot.blush.forEach(fe=>{fe.visible=qt.pue>=1.3}),S.rider.root.position.copy(ue.truckTop),S.rider.root.rotation.y=0,S.rider.root.scale.setScalar(1.05),S.runner.root.visible=!!ue.fieldC,ue.fieldC&&(S.runner.path={x0:ue.fieldC.x-46,x1:ue.fieldC.x+46,z:ue.fieldC.z+6}),br.k&&yl()}let tr=new y,ir=new y,ao=(_,S)=>{ir.copy(S),_.root.worldToLocal(ir);let T=Math.atan2(ir.x,ir.z),P=Math.atan2(ir.y-.8,Math.hypot(ir.x,ir.z));return{yaw:T,pitch:P,d:ir.length()}},lo=(_,S,T)=>Math.min(T,Math.max(S,_));function Ml(_,S){let T=li,P=_/1e3,B=En,K=ot.LIFT,re=0,he=Fo.attributes.position.array;Object.values(T).forEach(L=>{if(!L.root.visible)return;let Y=B?L.seed:P+L.seed,fe=L.root.scale.x;!B&&!L.sleep&&(L.nextBlink-=S,L.nextBlink<=0&&(L.blinkT=0,L.nextBlink=Math.random()<.25?.32:2.2+Math.random()*3.6),L.blinkT>=0&&(L.blinkT+=S,L.blinkT>.16&&(L.blinkT=-1))),L.eyes.scale.y=L.sleep?.14:L.blinkT>=0?.12+Math.abs(L.blinkT-.08)/.08*.88:1,L.excite=Math.max(0,L.excite-S*.35),L.beatT+=B?0:S*(L.sleep?.35:.75+L.excite*1.4),L.pulse.material.uniforms.t.value=B?.55:L.beatT,L.pulse.material.uniforms.amp.value=L.sleep?.55:1;let pe=B?0:Math.sin(Y*2.1),De=Math.sin(Y*2.4)*.01,Ie=B?0:Math.sin(Y*1.9)*.06,nt=0,Rt=0,ke=0,ht=0;L.finL.rotation.set(0,0,-.14-Ie),L.finR.rotation.set(0,0,.14+Ie),L.footL.rotation.set(0,0,0),L.footR.rotation.set(0,0,0),L.footL.position.set(-.2,.1,.06),L.footR.position.set(.2,.1,.06);let Wt=ao(L,o.position),vt=lo(1-(Wt.d-3)/10,0,1),$e=Wt,it=.7;if(L.mode==="sit"){if(nt=-K,L.footL.position.set(-.2,.07,.36),L.footR.position.set(.2,.07,.36),L.footL.rotation.x=1+Math.sin(Y*3.2)*.4,L.footR.rotation.x=1+Math.sin(Y*3.2+2.2)*.4,L.k==="sitter"){let Me=B?0:Math.max(0,Math.sin(Y*.9))**6;L.finR.rotation.set(-1*Me,0,.14+Ie+1.4*Me),Y%9<6||vt<.2?($e=ao(L,Ei.position),ke=1,it=.9):ke=vt,Rt=Me*.12}else{let Me=B?0:Math.max(0,Math.sin(Y*.7))**4;L.finL.rotation.set(0,0,-.14-2.4*Me+Math.sin(Y*9)*.25*Me),ke=vt}De*=.4}else if(L.mode==="tech"){let Me=Y%7/7,et=Me<.17?Me/.17:Me<.4?1:Me<.57?1-(Me-.4)/.17:0;L.tray.position.set(0,.66,.62-.34*(1-et)+.05),L.finL.rotation.set(-1.25,0,-.32),L.finR.rotation.set(-1.25,0,.32),Rt=.1-.12*et,L.body.position.z=-.12*et,L.led.material=et<.02&&Me>.6?ot.mat.on:ot.mat.off,ke=Me>.7?vt:0,Me>.7&&vt>.3&&L.finR.rotation.set(-.2,0,.3+Math.max(0,Math.sin((Me-.7)/.3*Math.PI))*2.2)}else if(L.mode==="cart"){let Me=L.path;if(Me){let et=Math.abs(Me.z1-Me.z0),mt=2.4,wt=et/mt+1.2,ei=2*wt,Ft=B?.3:(P*1+L.seed)%ei,Yt,hi;if(Ft<wt){let Si=Math.min(1,Ft/(et/mt));Yt=Me.z0+(Me.z1-Me.z0)*Si,hi=Math.sign(Me.z1-Me.z0),Ft>et/mt&&(hi*=Math.cos(Math.min(1,(Ft-et/mt)/1.2)*Math.PI))}else{let Si=Math.min(1,(Ft-wt)/(et/mt));Yt=Me.z1+(Me.z0-Me.z1)*Si,hi=Math.sign(Me.z0-Me.z1),Ft-wt>et/mt&&(hi*=Math.cos(Math.min(1,(Ft-wt-et/mt)/1.2)*Math.PI))}L.root.position.set(Me.x+.2,.2,Yt),L.root.rotation.y=hi>=0?0:Math.PI}L.finL.rotation.set(-1.1,0,-.2),L.finR.rotation.set(-1.1,0,.2),L.cart.beacon.visible=B||Math.sin(P*9)>0,nt=.41-K*.82,L.body.position.z=-.38,De=Math.abs(Math.sin(Y*7))*.01,ke=vt*.6}else if(L.mode==="balloon"){let Me=L.size||20,et=B?0:Math.sin(Y*.23)*.6+Math.sin(Y*.61+2)*.4,mt=B?0:Math.sin(Y*.35)*.5,wt=B?0:Math.sin(Y*.27+1)*.5;L.root.scale.setScalar(Me),L.root.position.set(L.anchor.x+L.drift.x*(1+mt*.15+et*.08),L.anchor.y+L.lift+(B?0:Math.sin(Y*.6)*Me*.045),L.anchor.z+L.drift.z*(1+wt*.15));let ei=0;if(L.cheer>=0){let Yt=(_-L.cheer)/1800;Yt>=1?L.cheer=-1:ei=Yt}ht=ei?(1-Math.pow(1-ei,3))*Math.PI*2:0,L.root.rotation.set(mt*.06+et*.03,.5+mt*.25+ht,wt*.05),L.root.updateMatrixWorld();let Ft=B?0:Math.sin(Y*1.1);L.finL.rotation.set(Ft*.25,0,-.3-Math.sin(Y*.8)*.14-(ei?Math.sin(ei*Math.PI)*2.2:0)),L.finR.rotation.set(-Ft*.25,0,.3+Math.sin(Y*.8+1)*.14+(ei?Math.sin(ei*Math.PI)*2.2:0)),L.footL.rotation.x=.3+Ft*.15,L.footR.rotation.x=.3-Ft*.15,De=0,ke=vt*.5,it=.5,L.zs&&L.zs.forEach((Yt,hi)=>{if(Yt.visible=L.sleep,!L.sleep)return;let Si=(B?.3*hi:P*.35+hi/3)%1;tr.set(.32+Si*.5,1.15+Si*.7,.1).applyMatrix4(L.root.matrixWorld),Yt.position.copy(tr),Yt.scale.setScalar(Me*(.14+Si*.16)),Yt.material.opacity=Math.sin(Math.PI*Si)*.9}),[[-.3,.2],[.3,.2],[0,-.28]].forEach(([Yt,hi],Si)=>{let bt=new y(Yt,K+.02,hi).applyMatrix4(L.root.matrixWorld),xt=new y(L.anchor.x+(Si-1)*Me*.06,L.anchor.y+.05,L.anchor.z+(Si===2?-Me*.05:Me*.03)),pi=Me*(.05+.02*et),Wi=bt.clone();for(let ri=1;ri<=so;ri++){let Se=ri/so,qe=bt.clone().lerp(xt,Se),ze=Math.sin(Math.PI*Se)*pi;qe.x+=ze*.8,qe.z-=ze*.5,he.set([Wi.x,Wi.y,Wi.z,qe.x,qe.y,qe.z],re),re+=6,Wi=qe}})}else if(L.mode==="hot"){let Me=3+(L.pue-1)*40;L.finL.rotation.set(-.6,0,-.9-Math.abs(Math.sin(Y*Me*.5))*.5),L.fan.rotation.set(0,0,Math.sin(Y*Me)*.5),L.body.rotation.z=Math.sin(Y*.8)*.03,ke=vt*.8}else if(L.mode==="run"){let Me=L.path;if(Me){let mt=Me.x1-Me.x0,wt=5.2,ei=mt/wt,Ft=B?.2:(P+L.seed)%(2*ei),Yt=Ft<ei,hi=Yt?Ft/ei:(Ft-ei)/ei;L.root.position.set(Yt?Me.x0+mt*hi:Me.x1-mt*hi,0,Me.z),L.root.rotation.y=Yt?Math.PI/2:-Math.PI/2}let et=Y*11;L.footL.rotation.x=Math.sin(et)*.7,L.footR.rotation.x=-Math.sin(et)*.7,L.finL.rotation.set(Math.sin(et)*.6,0,-.25),L.finR.rotation.set(-.5,0,.55),Rt=.16,De=Math.abs(Math.sin(et))*.06}else{let Me=Math.sin(Y*.9);L.footL.rotation.x=Math.max(0,Me)*.25,L.footR.rotation.x=Math.max(0,-Me)*.25,ke=vt}if(L.wave>=0){let Me=(_-L.wave)/1400;if(Me>=1)L.wave=-1;else{let et=Math.sin(Math.PI*Math.min(1,Me*1.6))**.5*(Me<.85?1:(1-Me)/.15);L.finL.rotation.set(-.2*et,0,-.14-2.5*et+Math.sin(Me*28)*.3*et),ke=Math.max(ke,1),$e=Wt,it=.9}}let Dt=ke?lo($e.yaw,-it,it)*ke:0,lt=ke?lo($e.pitch,-.3,.35)*ke:0,Gt=Math.min(1,S*(B?60:3.2));L.yaw+=(Dt-L.yaw)*Gt,L.pitch+=(lt-L.pitch)*Gt,L.body.rotation.y=L.yaw,L.body.rotation.x=Rt-L.pitch*.35,L.mode!=="tech"&&L.mode!=="cart"&&(L.body.position.z=0);let Vi=0,jt=0;if(L.hop>=0){let Me=(_-L.hop)/700;Me>=1?L.hop=-1:(Vi=Math.sin(Math.PI*lo((Me-.12)/.76,0,1))*.34,jt=Me<.12?-Math.sin(Me/.12*Math.PI)*.1:Me>.88?-Math.sin((Me-.88)/.12*Math.PI)*.08:.04)}let zt=L.mode==="cart"?.82:1;if(L.body.scale.set(zt*(1-.012*pe-jt*.6),zt*(1+.016*pe+jt),zt*(1-.012*pe-jt*.6)),L.body.position.y=nt+De+Vi,L.shadow){let Me=1-Vi*1.3;L.shadow.scale.set(1.05*Me,1,.95*Me),L.shadow.material.opacity=.9*Me}});for(let L=re;L<he.length;L++)he[L]=0;Fo.attributes.position.needsUpdate=!0;for(let L=0;L<rn.n;L++){let Y=rn.st[L];if(Y.age>=Y.life){rn.alpha[L]=0;continue}Y.age+=S;let fe=Y.age,pe=fe/Y.life;rn.pos[L*3]=Y.x+Y.vx*fe,rn.pos[L*3+1]=Y.y+Y.vy*fe-Y.gr*fe*fe,rn.pos[L*3+2]=Y.z+Y.vz*fe,rn.size[L]=Y.s0+(Y.s1-Y.s0)*pe,rn.alpha[L]=(1-pe)*.95}rn.g.attributes.position.needsUpdate=!0,rn.g.attributes.aSize.needsUpdate=!0,rn.g.attributes.aAlpha.needsUpdate=!0}let on=document.createElement("div");on.className="bubble3d",on.setAttribute("role","status"),ie.parentNode.appendChild(on);let br={k:null,until:0};function Sl(_){let S=dh,T=S.p,P=si(S.c.kw*S.c.rack,3);return{sitter:`That token cost ${lh(S.jTok)}. Worth it.`,tech:`Hot swap! This rack draws ${P} kW.`,cart:`Delivering ${oo(S.tps)} tokens a second.`,campus:xe.nb?`${Hn(S.facMW)} and counting!`:`It\u2019s a party: ${si(S.chips,2)} chips\u2019 worth.`,plant:S.many?`${mn(S.build)} ${S.build===1?T.one:T.many}, coming up.`:`I only need ${Zs(S)} of this one. Zzz.`,hot:qt.pue>=1.3?`PUE ${qt.pue.toFixed(2)}. It\u2019s getting hot up here.`:`PUE ${qt.pue.toFixed(2)}. Cooling adds ${Math.round((qt.pue-1)*100)}%.`,rider:T.gas?"Next stop: the turbine queue.":"Special delivery!",runner:"110 meters. I paced it out."}[_]}function co(_,S,T=3200){let P=li[_];P&&(br.k=_,br.until=performance.now()+T,on.textContent=S||Sl(_),on.classList.add("on"),En||(P.hop=performance.now(),P.excite=1,yr(P)))}function yl(){let _=br.k;if(!_)return;let S=li[_];if(performance.now()>br.until||!S.root.visible){on.classList.remove("on"),performance.now()>br.until+400&&(br.k=null);return}tr.set(0,S.hat?1.36:1.2,0).applyMatrix4(S.root.matrixWorld).project(o);let T=(tr.x+1)/2*sn,P=(1-tr.y)/2*Ri,B=tr.z>1||T<-60||T>sn+60||P<-40||P>Ri+40;on.style.opacity=B?"0":"";let K=on.offsetWidth,re=on.offsetHeight,he=Math.min(sn-K-12,Math.max(12,T-18)),L=P;for(let Y=0;Y<3;Y++){let fe=Je.find(pe=>he+K>pe.l&&he<pe.r&&L>pe.t&&L-re<pe.b);if(!fe)break;L=fe.t<Ri/2?fe.b+re+10:fe.t-10}on.style.transform=`translate(${he.toFixed(1)}px,${L.toFixed(1)}px) translate(0,-100%)`}function mh(_){let S=li[_],T=S.root.scale.x;S.root.updateMatrixWorld();let P=new y(0,S.mode==="sit"?.5:.62,0).applyMatrix4(S.root.matrixWorld),B=S.mode==="tech"?ue.heroFace>0?1.3:Math.PI+1.3:S.mode==="cart"?S.root.rotation.y+.25:S.mode==="run"?S.root.rotation.y+.75:S.root.rotation.y+.38,K=S.mode==="balloon"?T*3.4:S.mode==="cart"?5.5:S.mode==="run"?7:S.mode==="hot"?6:Math.max(3.2,T*4.2);return{target:P,dist:K,az:B,el:S.mode==="balloon"?.05:S.mode==="cart"?.3:.16,follow:S.mode==="cart"||S.mode==="run"?_:null}}function gh(_){let S=li[_],T=S.root.scale.x,P=o.position.distanceTo(tr.set(0,.5,0).applyMatrix4(S.root.matrixWorld));return T/(2*P*Math.tan(o.fov*Math.PI/360))*Ri}function bl(_){let S=null,T=1/0;return Object.values(li).forEach(P=>{if(!P.root.visible)return;let B=P.root.scale.x,K=tr.set(0,.6,0).applyMatrix4(P.root.matrixWorld),re=2*o.position.distanceTo(K)*Math.tan(o.fov*Math.PI/360)/Ri,he=new Ki(K.clone(),Math.max(.66*B*(P.mode==="cart"?1.4:1),re*16));if(_.intersectsSphere(he)){let L=_.origin.distanceTo(K);L<T&&(T=L,S=P.k)}}),S}function M(_){let S=(fe,pe,De,Ie)=>({target:fe,dist:pe,az:De,el:Ie}),T=new un().setFromPoints([new y(ue.plant.c.x-ue.plant.w/2,0,ue.plant.c.z-ue.plant.d/2),new y(xe.campus.maxX,0,xe.campus.maxZ),new y(xe.campus.minX,0,xe.campus.minZ),new y(ue.plant.c.x+ue.plant.w/2,0,ue.plant.c.z+ue.plant.d/2)]);ue.field&&xe.nb&&T.expandByPoint(ue.field.clone().add(new y(60,0,30)));let P=T.getSize(new y),B=T.getCenter(new y),K=ft.k,re=1,he=ue.heroFace||1,L=he>0?0:Math.PI,Y=ue.heroRack;if(_==="token")return S(new y(Y.x+.1*he,2.86,Y.z+he*(yt.d/2+.1)),2.5*K,L-.32,.1);if(_==="rack")return S(new y(Y.x+.45,2.05,Y.z+he*(yt.d/2+.45)),5.1*K,L-.3,.05);if(_==="hall")return xe.nb?S(ue.hall.c.clone().add(new y(0,1,0)),(Math.max(ue.hall.w,ue.hall.d)*1.12+16)*K,.45,.66):S(ue.heroRack.clone().add(new y(0,1,0)),14*K,.6,.5);if(_==="campus"){let fe=xe.campus,pe=fe.maxX-fe.minX,De=fe.maxZ-fe.minZ;return S(new y((fe.minX+fe.maxX)/2,0,(fe.minZ+fe.maxZ)/2+De*.05),(Math.max(pe,De*1.3)*.9+70)*K*re,.62,.62)}if(_==="power"){let fe=li.plant.lift+li.plant.size*1.1;return S(ue.plant.c.clone().add(new y(ue.plant.w*.1,Math.max(ue.plant.h*.3,fe*.38),0)),(Math.max(ue.plant.w,ue.plant.d)*1.05+Math.max(ue.plant.h*1.6,fe*1.15)+50)*K*re,-.72,.3)}return pn?S(B.setY(0),Math.max(P.x*.7,P.z*1.5)+160,1.42,.42):S(B.setY(0),(Math.max(P.x,P.z*1.6)*.92+150)*K*re,.34,.3)}let O=_=>new y(Math.sin(_.az)*Math.cos(_.el),Math.sin(_.el),Math.cos(_.az)*Math.cos(_.el)).multiplyScalar(_.dist);function J(_){s.target.copy(_.target),o.position.copy(_.target).add(O(_)),o.lookAt(_.target),s.update()}let W=null,q=!1,Ce=!1,Ve=null;function we(_,S,T=!1){if(En){J(_);return}let P=o.position.clone().sub(s.target),B=P.length(),K=Math.atan2(P.x,P.z),re=Math.asin(Math.min(1,P.y/B)),he=_.az-K;he=((he+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,W={t0:performance.now(),dur:S??Math.min(4200,1200+520*Math.abs(Math.log10(_.dist/B))),from:{t:s.target.clone(),d:B,az:K,el:re},to:_,daz:he},q=T,s.enabled=!1,s.autoRotate=!1,Ve=null}let Oe=_=>_<.5?4*_*_*_:1-Math.pow(-2*_+2,3)/2,Ze=new y;function pt(){if(!Ve||W)return;let _=li[Ve];if(!_||!_.root.visible){Ve=null;return}Ze.set(0,.55,0).applyMatrix4(_.root.matrixWorld).sub(s.target),s.target.add(Ze),o.position.add(Ze)}function Pt(_){if(!W)return;let S=W,T=Math.min(1,(_-S.t0)/S.dur),P=Oe(T);if(S.to.follow){let fe=li[S.to.follow];S.to.target.set(0,.55,0).applyMatrix4(fe.root.matrixWorld)}let B=Math.exp(Math.log(S.from.d)+(Math.log(S.to.dist)-Math.log(S.from.d))*P),K=S.to.dist-S.from.d,he=(Math.abs(K)<1e-6?P:Math.min(1,Math.max(0,(B-S.from.d)/K)))*.75+P*.25;s.target.copy(S.from.t).lerp(S.to.target,he);let L=S.from.az+S.daz*P,Y=S.from.el+(S.to.el-S.from.el)*P;if(o.position.copy(s.target).add(O({dist:B,az:L,el:Y})),o.lookAt(s.target),q){let fe="token";for(let pe of["rack","hall","campus","all"])B>=M(pe).dist*.7&&(fe=pe);fe!==Qi&&(Qi=fe,Ur(fe))}T>=1&&(W=null,s.enabled=!0,s.update(),q&&(q=!1,document.body.classList.remove("intro"),Qi="all",Ur("all")),S.done&&S.done(),S.to.follow&&(Ve=S.to.follow),s.autoRotate=!En&&Qi==="all"&&!Ce)}let Xe=Tt("#scale"),Lt=Tt("i",Xe),Mi=Tt("span",Xe),$t="",Jt=_=>{let S=2*_*Math.tan(o.fov*Math.PI/360)/Ri,T=(pn?70:110)*S,P=Math.floor(Math.log10(T)),B=10**P,K=[5,2,1].map(re=>re*B).find(re=>re<=T)||B;return{wpp:S,nice:K,txt:K<1?`${Math.round(K*100)} cm`:K<1e3?`${mn(K)} m`:`${si(K/1e3,2)} km`}};function ki(){let{wpp:_,nice:S,txt:T}=Jt(o.position.distanceTo(s.target));T!==$t&&(Mi.textContent=T,$t=T),Lt.style.width=`${(S/_).toFixed(1)}px`}let xe=null,Hi=-1e9,Ut=null,nr=!1;function Ni(_){xe=Z(_);let S=`${xe.nb}|${xe.k}|${xe.nHero}|${_.c.k}|${xe.bw.toFixed(1)}`,T=`${_.p.k}|${_.many?_.build:"ghost"}`,P=`${S}|${T}|${Math.min(8,Math.max(2,Math.ceil(_.facMW/140)+1))}`,B=!1;if(S!==ai.c&&(me.campus&&We(me.campus),me.campus=_e(_,xe),r.add(me.campus),ai.c=S,B=!0,!xe.nb)){let K=me.campus,re=new ii;K.add(re),Oo(re,_,{racks:[{x:0,z:0,face:1,line:0}],inW:4,inD:4,lines:1,lineZ:[0],half:1,w:4,d:4})}if(T!==ai.p||P!==ai.g||B){me.plant&&We(me.plant),me.grid&&We(me.grid),me.refs&&We(me.refs);let K={c:new y(xe.campus.minX-60-37,0,0),w:74};ue.sub=K;let re=N(_);me.plant=re.g,r.add(re.g),me.grid=Ae(_,xe,re.P),r.add(me.grid),me.refs=ae(_,xe,re.P),r.add(me.refs),Ot(_),ai.p=T,ai.g=P,B=!0}B&&Qs(_),B&&nr&&(Hi=performance.now()),nr=!1,ye(_,xe),rr=Math.max(.15,Math.min(1,(Math.log10(Math.max(10,_.tps))-1)/8)),mr=Math.max(.25,Math.min(1.6,Math.log10(Math.max(.001,_.facMW)*1e3+10)/4)),requestAnimationFrame(je)}function Oo(_,S,T){let P=S.c;Be(V.box,G.pad,[[0,0,0,5,.2,5]],_);let B=new ii;B.position.set(0,.2,0),_.add(B);let K=new ct(V.box,G.rack);K.scale.set(yt.w,yt.h,yt.d),B.add(K);let re=yt.d/2+.006,he=S.chips,L=$(P.led,1.35),Y=(fe,pe,De=.5,Ie=.03)=>{let nt=new ct(V.box,pe);nt.scale.set(De,Ie,.012),nt.position.set(0,fe,re),B.add(nt)};if(P.rack===72){let fe=[["p"],["p"],...Array(10).fill(["c"]),...Array(9).fill(["s"]),...Array(8).fill(["c"]),["p"],["p"]],pe=0;fe.forEach(([De],Ie)=>{let nt=yt.h-.12-Ie*((yt.h-.24)/(fe.length-1));if(De==="c"){let Rt=pe*4<he;pe++,Y(nt,Rt?L:G.off),Y(nt+.002,Rt?G.lamp:G.off,.05,.028)}else Y(nt,De==="p"?G.coral:G.blue,.5,.022)})}else{for(let fe=0;fe<4;fe++){let pe=.35+fe*.46,De=fe*8<he,Ie=new ct(V.box,G.dark);Ie.scale.set(.54,.4,.01),Ie.position.set(0,pe,re-.002),B.add(Ie);for(let nt=0;nt<6;nt++)Y(pe+.04+nt*.055,De?L:G.off,.44,.016)}Y(.12,G.coral),Y(yt.h-.1,G.coral)}ue.heroRack=new y(0,.2,0),ue.heroFace=1,ue.heroHall=null,ue.hall={c:new y(0,0,0),w:5,d:5},Ye.racks=[{x:0,z:0}],Ye.roofs=[],Bt.position.set(1.4,.2,yt.d/2+1),Bt.rotation.y=-.7,Ei.position.set(.3,2.8,yt.d/2+.34),F.position.set(0,6,3),F.intensity=60}let rr=.5,mr=1;function Ot(_){Te.m&&(Te.m.parent.remove(Te.m),Te.m.dispose(),Te.m=null),Te.mb&&(Te.mb.parent.remove(Te.mb),Te.mb.dispose(),Te.mb=null),Te.list=[],Te.lines.forEach((P,B)=>{let K=[0];for(let he=1;he<P.pts.length;he++)K.push(K[he-1]+P.pts[he].distanceTo(P.pts[he-1]));P.len=K[K.length-1],P.cum=K;let re=Math.max(2,Math.min(P.kind==="g"?60:26,Math.round(P.len/(P.r>1?34:P.kind==="g"?46:22))));for(let he=0;he<re;he++)Te.list.push({li:B,u:he/re,kind:P.kind})});let S=Te.list.filter(P=>P.kind==="p").length,T=Te.list.length-S;Te.m=new Ao(V.ball,$(16029562,3.4),Math.max(1,S)),Te.m.frustumCulled=!1,r.add(Te.m),Te.mb=new Ao(V.ball,$(6990079,2.6),Math.max(1,T)),Te.mb.frustumCulled=!1,r.add(Te.mb),Te.m.count=S,Te.mb.count=T}let Ui=(_,S,T)=>{let P=S*_.len,B=1;for(;B<_.cum.length-1&&_.cum[B]<P;)B++;let K=_.cum[B-1],re=_.cum[B],he=re>K?(P-K)/(re-K):0;return T.copy(_.pts[B-1]).lerp(_.pts[B],he)},_n=new al,ci=new le,Ai=new y;function Vn(_){let S=e.getBoundingClientRect();ci.set((_.clientX-S.left)/S.width*2-1,-((_.clientY-S.top)/S.height)*2+1),_n.setFromCamera(ci,o);let T=bl(_n.ray);if(T)return"echo:"+T;let P=(K,re,he,L)=>new un(new y(K.x-re/2,0,K.z-L/2),new y(K.x+re/2,he,K.z+L/2)),B=[["rack",P(ue.heroRack,1.4,2.6,2),0],["hall",xe.nb?P(ue.hall.c,ue.hall.w,kn,ue.hall.d):null,0],["power",P(ue.plant.c,ue.plant.w,ue.plant.h,ue.plant.d),0],["campus",P(new y((xe.campus.minX+xe.campus.maxX)/2,0,(xe.campus.minZ+xe.campus.maxZ)/2),xe.campus.maxX-xe.campus.minX,kn+2,xe.campus.maxZ-xe.campus.minZ),0]];for(let[K,re]of B)if(re&&_n.ray.intersectBox(re,Ai))return K;return null}let gr=null;e.addEventListener("pointerdown",_=>{gr={x:_.clientX,y:_.clientY,t:performance.now()},W&&(W=null,s.enabled=!0,q&&(q=!1,document.body.classList.remove("intro")))}),e.addEventListener("pointerup",_=>{if(!gr)return;let S=Math.hypot(_.clientX-gr.x,_.clientY-gr.y)<6&&performance.now()-gr.t<450;if(gr=null,!S)return;let T=Vn(_);if(T&&T.startsWith("echo:")){let P=T.slice(5);gh(P)<70?(we(mh(P)),W&&(W.done=()=>co(P)),W||co(P)):co(P);return}T&&T!==Qi?Fr(T):T&&Fr(T==="hall"?"rack":T==="campus"?"hall":T)});let xh=!1;e.addEventListener("pointermove",_=>{gr||xh||_.pointerType!=="mouse"||(xh=!0,requestAnimationFrame(()=>{xh=!1;let S=Vn(_);e.style.cursor=S?"pointer":"";let T=S&&S.startsWith("echo:")&&li[S.slice(5)],P=performance.now();T&&!En&&T.wave<0&&P-(T.waved||0)>2600&&(T.wave=P,T.waved=P)}))});let a0=Tt("#recenter"),_h=_=>{Ce=_,a0.hidden=!_};s.addEventListener("start",()=>{_h(!0),Ve=null,s.autoRotate=!1,n.classList.add("touched")}),e.addEventListener("wheel",()=>{_h(!0),s.autoRotate=!1,n.classList.add("touched")},{passive:!0});let sn=1,Ri=1,El=0,Tl=0,Au=()=>{sn=n.clientWidth,Ri=n.clientHeight,t.setSize(sn,Ri,!1),a&&(a.setPixelRatio(i),a.setSize(sn,Ri)),o.aspect=sn/Ri,Ht.value=Ri*i/(2*Math.tan(o.fov*Math.PI/360)),Ru(!0),je()};function Ru(_){if(je(),_===!0){El=sn/2-ft.cx,Tl=Ri/2-ft.cy;return}clearTimeout(Cu),Cu=setTimeout(()=>{je(),!W&&!Ce&&!q&&we(M(Qi),900)},120)}let Cu=0;new ResizeObserver(Au).observe(n);let Pu=!0,vh=performance.now(),Lu=0;new IntersectionObserver(_=>{Pu=_[0].isIntersecting}).observe(n),document.addEventListener("visibilitychange",()=>{document.hidden||(vh=performance.now())});let Du=new y;function l0(_){if(Ye.roofs.length&&Math.random()<.45){let T=Ye.roofs[Math.random()*Ye.roofs.length|0];_.x=T.x0+Math.random()*(T.x1-T.x0),_.z=T.z0+Math.random()*(T.z1-T.z0),_.y=T.y,_.vy=9+Math.random()*10,_.vx=(Math.random()-.5)*1.4,_.vz=(Math.random()-.5)*1.4,_.life=6+Math.random()*6,_.s0=2.6,_.s1=7}else{let T=Math.random()<(Ye.racks.length>1?.12:1),P=T?{x:ue.heroRack.x,z:ue.heroRack.z}:Ye.racks[Math.random()*Ye.racks.length|0];_.x=P.x+(Math.random()-.5)*.5,_.z=P.z+(Math.random()-.5)*1,_.y=2.3+Math.random()*.3,_.vy=.45+Math.random()*.5,_.vx=(Math.random()-.5)*.12,_.vz=(Math.random()-.5)*.12,_.life=T?7+Math.random()*6:14+Math.random()*10,_.s0=.15,_.s1=T?.28:1.4,T||(_.vy=2.2+Math.random()*3,_.s0=.3,_.s1=3.2)}_.age=0}Nt.st.forEach(_=>{_.age=1e9});function c0(_,S){let T=Math.round(Nt.n*rr);for(let L=0;L<Nt.n;L++){let Y=Nt.st[L];if(Y.age>=Y.life)if(L<T&&ue.heroRack)l0(Y),Y.age=En?Math.random()*Y.life:-Math.random()*3,Nt.cell[L]=Math.random()*yu.length|0;else{Nt.alpha[L]=0;continue}Y.age+=En?0:_;let fe=Math.max(0,Y.age),pe=fe/Y.life;Nt.pos[L*3]=Y.x+Y.vx*fe,Nt.pos[L*3+1]=Y.y+Y.vy*fe+(Y.s1>3?fe*fe*.8:0),Nt.pos[L*3+2]=Y.z+Y.vz*fe,Nt.size[L]=Y.s0+(Y.s1-Y.s0)*pe,Nt.alpha[L]=Y.age<0?0:Math.min(1,pe*8)*(1-pe)*(1-pe)*.95}Nt.g.attributes.position.needsUpdate=!0,Nt.g.attributes.aSize.needsUpdate=!0,Nt.g.attributes.aAlpha.needsUpdate=!0,Nt.g.attributes.aCell.needsUpdate=!0;let P=(L,Y,fe,pe,De,Ie,nt)=>{for(let Rt=0;Rt<L.n;Rt++){let ke=L.st[Rt];if(!Y.length){L.alpha[Rt]=0;continue}if(ke.age>=ke.life){let vt=Y[Rt%Y.length];ke.x=vt.x,ke.y=vt.y,ke.z=vt.z,ke.vx=(Math.random()-.5)*pe+1.5*pe,ke.vz=(Math.random()-.5)*pe,ke.vy=fe*(.7+Math.random()*.6),ke.life=nt*(.7+Math.random()*.6),ke.age=En?Math.random()*ke.life:-Math.random()*nt}ke.age+=En?0:_;let ht=Math.max(0,ke.age),Wt=ht/ke.life;L.pos[Rt*3]=ke.x+ke.vx*ht,L.pos[Rt*3+1]=ke.y+ke.vy*ht,L.pos[Rt*3+2]=ke.z+ke.vz*ht,L.size[Rt]=De+(Ie-De)*Wt,L.alpha[Rt]=ke.age<0?0:Math.sin(Math.PI*Math.min(1,Wt))*.55}L.g.attributes.position.needsUpdate=!0,L.g.attributes.aSize.needsUpdate=!0,L.g.attributes.aAlpha.needsUpdate=!0};P(Tn,Ye.heat,6,2,2.5,11,4),P(wn,Ye.steam,9,5,30,120,14);let B=0,K=0;Te.list.forEach(L=>{let Y=Te.lines[L.li];!Y||!Y.len||(En||(L.u=(L.u+_*(L.kind==="g"?9:26*mr)/Y.len*(Y.r>1?2.2:1))%1),Ui(Y,L.u,Du),Ge.position.copy(Du),Ge.scale.setScalar(Y.r),Ge.rotation.set(0,0,0),Ge.updateMatrix(),L.kind==="g"?Te.mb.setMatrixAt(K++,Ge.matrix):Te.m.setMatrixAt(B++,Ge.matrix))}),Te.m&&(Te.m.instanceMatrix.needsUpdate=!0),Te.mb&&(Te.mb.instanceMatrix.needsUpdate=!0),Ei.position.y+=Math.sin(S/700)*9e-4,Ei.material.opacity=1,G.beacon.color.setRGB(3,1.1,.7).multiplyScalar(En?.8:Math.sin(S/260)>.55?1:.08);let re=Math.min(1,(S-Hi)/900),he=1-Math.pow(1-re,3);[me.campus,me.plant,me.grid,me.refs].forEach(L=>{L&&(L.scale.y=En?1:Math.max(.001,he))})}function Iu(_){if(requestAnimationFrame(Iu),!Pu||document.hidden)return;let S=Math.min(.05,(_-vh)/1e3);vh=_,Lu++,Ut&&(Ni(Ut),Ut=null),Pt(_),pt(),W||s.update(),El+=(sn/2-ft.cx-El)*Math.min(1,S*6),Tl+=(Ri/2-ft.cy-Tl)*Math.min(1,S*6),o.setViewOffset(sn,Ri,El,Tl,sn,Ri);let T=o.position.distanceTo(s.target);r.fog.density=.26/(T+18),U.uniforms.fogD.value=r.fog.density,o.near=Math.min(6,Math.max(.03,T*.004)),o.updateProjectionMatrix(),u.position.copy(o.position),m.position.copy(o.position),I.position.copy(o.position),z.position.copy(o.position),H.position.set(Math.round(o.position.x/1e3)*1e3,0,Math.round(o.position.z/1e3)*1e3),l&&(l.strength=(pn?.5:.62)*Math.min(1,.45+T/160)),c0(S,_),Ml(_,S),Ne(S),yl(),Lu%3===0&&ki(),a?a.render():t.render(r,o)}let Nu=0;return{update(_){xe?Ut=_:Ni(_)},settle(_){if(_&&(nr=!0),clearTimeout(Nu),Nu=setTimeout(()=>{q||we(M(Qi),1300)},420),_&&!En){let S=performance.now();li.campus.cheer=S,li.plant.cheer=S+250}},visit(_){_h(!1),we(M(_))},frameSide:Ru,start(){Au(),En||location.hash==="#all"?(document.body.classList.remove("intro"),Qi="all",Ur("all"),J(M("all")),s.autoRotate=!1):(Qi="token",Ur("token"),J(M("token")),setTimeout(()=>{co("sitter","Hi, I\u2019m Echo! \u{1F44B} Follow this token.",2600),li.sitter.wave=performance.now()},450),setTimeout(()=>{Ce?document.body.classList.remove("intro"):we(M("all"),8200,!0)},2700)),requestAnimationFrame(Iu)}}}
