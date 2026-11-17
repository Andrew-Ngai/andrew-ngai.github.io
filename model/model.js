/*! three.js r187 | MIT License | Copyright © 2010-2025 three.js authors */
var Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fc=0,ll=1,Oc=2;var Mn=1,Bc=2,Yn=3,Ni=0,_t=1,Mi=2,Ji=0,Sn=1,_r=2,cl=3,hl=4,zc=5;var bn=100,kc=101,Gc=102,Vc=103,Hc=104,Wc=200,Xc=201,qc=202,Yc=203,No=204,Uo=205,Zc=206,Jc=207,Kc=208,$c=209,jc=210,Qc=211,eh=212,th=213,ih=214,ms=0,gs=1,xs=2,Tn=3,_s=4,ys=5,vs=6,Ms=7,yr=0,nh=1,rh=2,Si=0,Fo=1,Oo=2,Bo=3,vr=4,zo=5,ko=6,Go=7;var Vo=300,Ui=301,rn=302,Ss=303,bs=304,wn=1e3,Kt=1001,Mr=1002,dt=1003,ul=1004;var Sr=1005;var gt=1006,Ts=1007;var fi=1008;var Rt=1009,Ho=1010,Wo=1011,sn=1012,br=1013,Ot=1014,Ct=1015,Xt=1016,Tr=1017,wr=1018,Gi=1020,Xo=35902,qo=35899,Yo=1021,Zo=1022,qt=1023,xi=1026,bi=1027,Ar=1028,Zn=1029,Ti=1030,Er=1031;var Rr=1033,Cr=33776,Pr=33777,Ir=33778,Lr=33779,ws=35840,As=35841,Es=35842,Rs=35843,Cs=36196,Ps=37492,Is=37496,Ls=37488,Ds=37489,Jn=37490,Ns=37491,Us=37808,Fs=37809,Os=37810,Bs=37811,zs=37812,ks=37813,Gs=37814,Vs=37815,Hs=37816,Ws=37817,Xs=37818,qs=37819,Ys=37820,Zs=37821,Js=36492,Ks=36494,$s=36495,js=36283,Qs=36284,Kn=36285,eo=36286;var $n=2300,Jo=2301,Ko=2302,fl=2303,$o=2400,jo=2401,Qo=2402;var sh=3200;var Ki=0,oh=1,Fi="",Bt="srgb",jn="srgb-linear",Qn="linear",Qe="srgb";var ea=7680;var ah=519,lh=512,ch=513,hh=514,ta=515,uh=516,fh=517,ia=518,na=519,ra=35044,to=35048;var dl="300 es",Yt=2e3,$i=2001;function ph(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pl(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ml(){let n=er("canvas");return n.style.display="block",n}var dh={},Dr=null;function io(...n){let e="THREE."+n.shift();Dr?Dr("log",e,...n):console.log(e,...n)}function mh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function pe(...n){n=mh(n);let e="THREE."+n.shift();if(Dr)Dr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ee(...n){n=mh(n);let e="THREE."+n.shift();if(Dr)Dr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ji(...n){let e=n.join(" ");e in dh||(dh[e]=!0,pe(...n))}function gh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var xh={[ms]:ms,[xs]:vs,[_s]:_s,[Tn]:ys,[gs]:gs,[vs]:xs,[Ms]:Ms,[ys]:Tn};var Pt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};var ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_h=1234567,on=Math.PI/180,An=180/Math.PI;function ri(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ni[n&255]+ni[n>>8&255]+ni[n>>16&255]+ni[n>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function sa(n,e){return(n%e+e)%e}function cm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function hm(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function um(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function fm(n,e=1){return e-Math.abs(sa(n,e*2)-e)}function dm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gm(n,e){return n+Math.random()*(e-n)}function xm(n){return n*(.5-Math.random())}function _m(n){n!==void 0&&(_h=n);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ym(n){return n*on}function vm(n){return n*An}function Mm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Sm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bm(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),p=s((e-i)/2),f=o((e-i)/2),u=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*p,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*p,a*l);break;case"ZXZ":n.set(c*p,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*u,a*l);break;case"YXY":n.set(c*u,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*u,a*h,a*l);break;default:pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function no(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oa(n,e){if(e.constructor===Float32Array)return n;let t=no(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function aa(n,e){if(e.constructor===Float32Array)return n;let t=no(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var xl={DEG2RAD:on,RAD2DEG:An,generateUUID:ri,clamp:Ge,euclideanModulo:sa,mapLinear:cm,inverseLerp:hm,lerp:Nr,damp:um,pingpong:fm,smoothstep:dm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:xm,seededRandom:_m,degToRad:ym,radToDeg:vm,isPowerOfTwo:Mm,ceilPowerOfTwo:Sm,floorPowerOfTwo:gl,setQuaternionFromProperEuler:bm,normalize:aa,denormalize:oa};var _l=class _l{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_l.prototype.isVector2=!0;var oe=_l;var bt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],p=i[r+3],f=s[o+0],u=s[o+1],g=s[o+2],v=s[o+3];if(p!==v||c!==f||l!==u||h!==g){let m=c*f+l*u+h*g+p*v;m<0&&(f=-f,u=-u,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);d=Math.sin(d*M)/A,a=Math.sin(a*M)/A,c=c*d+f*a,l=l*d+u*a,h=h*d+g*a,p=p*d+v*a}else{c=c*d+f*a,l=l*d+u*a,h=h*d+g*a,p=p*d+v*a;let M=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=M,l*=M,h*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],p=s[o],f=s[o+1],u=s[o+2],g=s[o+3];return e[t]=a*g+h*p+c*u-l*f,e[t+1]=c*g+h*f+l*p-a*u,e[t+2]=l*g+h*u+a*f-c*p,e[t+3]=h*g-a*p-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),p=a(s/2),f=c(i/2),u=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*p+l*u*g,this._y=l*u*p-f*h*g,this._z=l*h*g+f*u*p,this._w=l*h*p-f*u*g;break;case"YXZ":this._x=f*h*p+l*u*g,this._y=l*u*p-f*h*g,this._z=l*h*g-f*u*p,this._w=l*h*p+f*u*g;break;case"ZXY":this._x=f*h*p-l*u*g,this._y=l*u*p+f*h*g,this._z=l*h*g+f*u*p,this._w=l*h*p-f*u*g;break;case"ZYX":this._x=f*h*p-l*u*g,this._y=l*u*p+f*h*g,this._z=l*h*g-f*u*p,this._w=l*h*p+f*u*g;break;case"YZX":this._x=f*h*p+l*u*g,this._y=l*u*p+f*h*g,this._z=l*h*g-f*u*p,this._w=l*h*p-f*u*g;break;case"XZY":this._x=f*h*p-l*u*g,this._y=l*u*p-f*h*g,this._z=l*h*g+f*u*p,this._w=l*h*p+f*u*g;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],f=i+a+p;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(i>a&&i>p){let u=2*Math.sqrt(1+i-a-p);this._w=(h-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>p){let u=2*Math.sqrt(1+a-i-p);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-i-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var vl=class vl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),p=2*(s*i-o*t);return this.x=t+c*l+o*p-a*h,this.y=i+c*h+a*l-s*p,this.z=r+c*p+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yl.copy(this).projectOnVector(e),this.sub(yl)}reflect(e){return this.sub(yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vl.prototype.isVector3=!0;var R=vl,yl=new R,yh=new bt;var Sl=class Sl{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],p=i[7],f=i[2],u=i[5],g=i[8],v=r[0],m=r[3],d=r[6],M=r[1],A=r[4],T=r[7],C=r[2],w=r[5],x=r[8];return s[0]=o*v+a*M+c*C,s[3]=o*m+a*A+c*w,s[6]=o*d+a*T+c*x,s[1]=l*v+h*M+p*C,s[4]=l*m+h*A+p*w,s[7]=l*d+h*T+p*x,s[2]=f*v+u*M+g*C,s[5]=f*m+u*A+g*w,s[8]=f*d+u*T+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,f=a*c-h*s,u=l*s-o*c,g=t*p+i*f+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=p*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=u*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sl.prototype.isMatrix3=!0;var Ne=Sl,Ml=new Ne;var vh=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let n={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Qe&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?Qn:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jn]:{primaries:e,whitePoint:i,transfer:Qn,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),n}var He=Tm();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ur,ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=er("canvas")),Ur.width=e.width,Ur.height=e.height;let r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=er("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var wm=0,Hi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bl(r[o].image)):s.push(bl(r[o]))}else s=bl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ro.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}var Am=0,Tl=new R,at=class n extends Pt{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Kt,r=Kt,s=gt,o=fi,a=qt,c=Rt,l=n.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ri(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};at.DEFAULT_IMAGE=null;at.DEFAULT_MAPPING=Vo;at.DEFAULT_ANISOTROPY=1;var wl=class wl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],p=c[8],f=c[1],u=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,T=(u+1)/2,C=(d+1)/2,w=(h+f)/4,x=(p+v)/4,b=(g+m)/4;return A>T&&A>C?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=w/i,s=x/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=w/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=x/s,r=b/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-v)/M,this.z=(f-h)/M,this.w=Math.acos((l+u+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wl.prototype.isVector4=!0;var tt=wl;var Fr=class extends Pt{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new at({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Dt=class extends Fr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};var En=class extends at{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ir=class extends at{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ca=class ca{constructor(e,t,i,r,s,o,a,c,l,h,p,f,u,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,p,f,u,g,v,m)}set(e,t,i,r,s,o,a,c,l,h,p,f,u,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=f,d[3]=u,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=o*h,u=o*p,g=a*h,v=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=u+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+u*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,u=c*p,g=l*h,v=l*p;t[0]=f+v*a,t[4]=g*a-u,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,u=c*p,g=l*h,v=l*p;t[0]=f-v*a,t[4]=-o*p,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,u=o*p,g=a*h,v=a*p;t[0]=c*h,t[4]=g*l-u,t[8]=f*l+v,t[1]=c*p,t[5]=v*l+f,t[9]=u*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,u=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-f*p,t[8]=g*p+u,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*p+g,t[10]=f-v*p}else if(e.order==="XZY"){let f=o*c,u=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=f*p+v,t[5]=o*h,t[9]=u*p-g,t[2]=g*p-u,t[6]=a*h,t[10]=v*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Rm)}lookAt(e,t,i){let r=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Rn.crossVectors(i,wi),Rn.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Rn.crossVectors(i,wi)),Rn.normalize(),la.crossVectors(wi,Rn),r[0]=Rn.x,r[4]=la.x,r[8]=wi.x,r[1]=Rn.y,r[5]=la.y,r[9]=wi.y,r[2]=Rn.z,r[6]=la.z,r[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],p=i[5],f=i[9],u=i[13],g=i[2],v=i[6],m=i[10],d=i[14],M=i[3],A=i[7],T=i[11],C=i[15],w=r[0],x=r[4],b=r[8],L=r[12],E=r[1],F=r[5],B=r[9],X=r[13],I=r[2],k=r[6],Z=r[10],V=r[14],se=r[3],H=r[7],Q=r[11],te=r[15];return s[0]=o*w+a*E+c*I+l*se,s[4]=o*x+a*F+c*k+l*H,s[8]=o*b+a*B+c*Z+l*Q,s[12]=o*L+a*X+c*V+l*te,s[1]=h*w+p*E+f*I+u*se,s[5]=h*x+p*F+f*k+u*H,s[9]=h*b+p*B+f*Z+u*Q,s[13]=h*L+p*X+f*V+u*te,s[2]=g*w+v*E+m*I+d*se,s[6]=g*x+v*F+m*k+d*H,s[10]=g*b+v*B+m*Z+d*Q,s[14]=g*L+v*X+m*V+d*te,s[3]=M*w+A*E+T*I+C*se,s[7]=M*x+A*F+T*k+C*H,s[11]=M*b+A*B+T*Z+C*Q,s[15]=M*L+A*X+T*V+C*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],f=e[10],u=e[14],g=e[3],v=e[7],m=e[11],d=e[15],M=c*u-l*f,A=a*u-l*p,T=a*f-c*p,C=o*u-l*h,w=o*f-c*h,x=o*p-a*h;return t*(v*M-m*A+d*T)-i*(g*M-m*C+d*w)+r*(g*A-v*C+d*x)-s*(g*T-v*w+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(s*h-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],f=e[10],u=e[11],g=e[12],v=e[13],m=e[14],d=e[15],M=t*a-i*o,A=t*c-r*o,T=t*l-s*o,C=i*c-r*a,w=i*l-s*a,x=r*l-s*c,b=h*v-p*g,L=h*m-f*g,E=h*d-u*g,F=p*m-f*v,B=p*d-u*v,X=f*d-u*m,I=M*X-A*B+T*F+C*E-w*L+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(a*X-c*B+l*F)*k,e[1]=(r*B-i*X-s*F)*k,e[2]=(v*x-m*w+d*C)*k,e[3]=(f*w-p*x-u*C)*k,e[4]=(c*E-o*X-l*L)*k,e[5]=(t*X-r*E+s*L)*k,e[6]=(m*T-g*x-d*A)*k,e[7]=(h*x-f*T+u*A)*k,e[8]=(o*B-a*E+l*b)*k,e[9]=(i*E-t*B-s*b)*k,e[10]=(g*w-v*T+d*M)*k,e[11]=(p*T-h*w-u*M)*k,e[12]=(a*L-o*F-c*b)*k,e[13]=(t*F-i*L+r*b)*k,e[14]=(v*A-g*C-m*M)*k,e[15]=(h*C-p*A+f*M)*k,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,p=a+a,f=s*l,u=s*h,g=s*p,v=o*h,m=o*p,d=a*p,M=c*l,A=c*h,T=c*p,C=i.x,w=i.y,x=i.z;return r[0]=(1-(v+d))*C,r[1]=(u+T)*C,r[2]=(g-A)*C,r[3]=0,r[4]=(u-T)*w,r[5]=(1-(f+d))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+A)*x,r[9]=(m-M)*x,r[10]=(1-(f+v))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Or.set(r[0],r[1],r[2]).length(),a=Or.set(r[4],r[5],r[6]).length(),c=Or.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Wi.copy(this);let l=1/o,h=1/a,p=1/c;return Wi.elements[0]*=l,Wi.elements[1]*=l,Wi.elements[2]*=l,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=p,Wi.elements[9]*=p,Wi.elements[10]*=p,t.setFromRotationMatrix(Wi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=Yt,c=!1){let l=this.elements,h=2*s/(t-e),p=2*s/(i-r),f=(t+e)/(t-e),u=(i+r)/(i-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===Yt)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===$i)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Yt,c=!1){let l=this.elements,h=2/(t-e),p=2/(i-r),f=-(t+e)/(t-e),u=-(i+r)/(i-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===Yt)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===$i)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ca.prototype.isMatrix4=!0;var ke=ca,Or=new R,Wi=new ke,Em=new R(0,0,0),Rm=new R(1,1,1),Rn=new R,la=new R,wi=new R;var Sh=new ke,bh=new bt,di=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],p=r[2],f=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var Cm=0,Th=new R,Br=new bt,an=new ke,ha=new R,so=new R,Pm=new R,Im=new bt,wh=new R(1,0,0),Ah=new R(0,1,0),Eh=new R(0,0,1),Rh={type:"added"},Lm={type:"removed"},zr={type:"childadded",child:null},Al={type:"childremoved",child:null},Ye=class n extends Pt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new di,i=new bt,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ne}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(so,ha,this.up):an.lookAt(ha,so,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(an),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ee("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),zr.child=e,this.dispatchEvent(zr),zr.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lm),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,Pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),f=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new R(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Dm={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),u=.02,g=.005;l.inputState.pinching&&f>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ua={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=sa(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=El(o,s,e+1/3),this.g=El(o,s,e),this.b=El(o,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let i=Ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return He.workingToColorSpace(si.copy(this),e),Math.round(Ge(si.r*255,0,255))*65536+Math.round(Ge(si.g*255,0,255))*256+Math.round(Ge(si.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(si.copy(this),t);let i=si.r,r=si.g,s=si.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Bt){He.workingToColorSpace(si.copy(this),e);let t=si.r,i=si.g,r=si.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(ua);let i=Nr(Pn.h,ua.h,t),r=Nr(Pn.s,ua.s,t),s=Nr(Pn.l,ua.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new be;be.NAMES=Ch;var kr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};var Gr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Xi=new R,ln=new R,Rl=new R,cn=new R,Vr=new R,Hr=new R,Ph=new R,Cl=new R,Pl=new R,Il=new R,Ll=new tt,Dl=new tt,Nl=new tt,Oi=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xi.subVectors(e,t),r.cross(Xi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xi.subVectors(r,t),ln.subVectors(i,t),Rl.subVectors(e,t);let o=Xi.dot(Xi),a=Xi.dot(ln),c=Xi.dot(Rl),l=ln.dot(ln),h=ln.dot(Rl),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;let f=1/p,u=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-u-g,g,u)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,cn.x),c.addScaledVector(o,cn.y),c.addScaledVector(a,cn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ll.setScalar(0),Dl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ll,s.x),o.addScaledVector(Dl,s.y),o.addScaledVector(Nl,s.z),o}static isFrontFacing(e,t,i,r){return Xi.subVectors(i,t),ln.subVectors(e,t),Xi.cross(ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xi.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Vr.subVectors(r,i),Hr.subVectors(s,i),Cl.subVectors(e,i);let c=Vr.dot(Cl),l=Hr.dot(Cl);if(c<=0&&l<=0)return t.copy(i);Pl.subVectors(e,r);let h=Vr.dot(Pl),p=Hr.dot(Pl);if(h>=0&&p<=h)return t.copy(r);let f=c*p-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(i).addScaledVector(Vr,o);Il.subVectors(e,s);let u=Vr.dot(Il),g=Hr.dot(Il);if(g>=0&&u<=g)return t.copy(s);let v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Hr,a);let m=h*g-u*p;if(m<=0&&p-h>=0&&u-g>=0)return Ph.subVectors(s,r),a=(p-h)/(p-h+(u-g)),t.copy(r).addScaledVector(Ph,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Vr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var $t=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),da.subVectors(this.max,oo),Wr.subVectors(e.a,oo),Xr.subVectors(e.b,oo),qr.subVectors(e.c,oo),In.subVectors(Xr,Wr),Ln.subVectors(qr,Xr),rr.subVectors(Wr,qr);let t=[0,-In.z,In.y,0,-Ln.z,Ln.y,0,-rr.z,rr.y,In.z,0,-In.x,Ln.z,0,-Ln.x,rr.z,0,-rr.x,-In.y,In.x,0,-Ln.y,Ln.x,0,-rr.y,rr.x,0];return!Ul(t,Wr,Xr,qr,da)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,Wr,Xr,qr,da))?!1:(pa.crossVectors(In,Ln),t=[pa.x,pa.y,pa.z],Ul(t,Wr,Xr,qr,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hn=[new R,new R,new R,new R,new R,new R,new R,new R],qi=new R,fa=new $t,Wr=new R,Xr=new R,qr=new R,In=new R,Ln=new R,rr=new R,oo=new R,da=new R,pa=new R,sr=new R;function Ul(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){sr.fromArray(n,s);let a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),c=e.dot(sr),l=t.dot(sr),h=i.dot(sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Nt=new R,ma=new oe,Nm=0,Tt=class extends Pt{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ra,this.updateRanges=[],this.gpuType=Ct,this.version=0,this._normalizationScale=e!==void 0?no(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oa(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):aa(e,this.array)}};var Yr=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zr=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Um=new $t,ao=new R,Fl=new R,Ut=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Um.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);let t=ao.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Fl)),this.expandByPoint(ao.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var Fm=0,Bi=new ke,Ol=new Ye,Jr=new R,Ei=new $t,lo=new $t,Zt=new R,Be=class n extends Pt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?Zr:Yr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,i){return Bi.makeTranslation(e,t,i),this.applyMatrix4(Bi),this}scale(e,t,i){return Bi.makeScale(e,t,i),this.applyMatrix4(Bi),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Ei.min,lo.min),Ei.expandByPoint(Zt),Zt.addVectors(Ei.max,lo.max),Ei.expandByPoint(Zt)):(Ei.expandByPoint(lo.min),Ei.expandByPoint(lo.max))}Ei.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Zt.fromBufferAttribute(a,l),c&&(Jr.fromBufferAttribute(e,l),Zt.add(Jr)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Tt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new R,c[L]=new R;let h=new R,p=new R,f=new R,u=new oe,g=new oe,v=new oe,m=new R,d=new R;function M(L,E,F){l[L]=l[E]=l[F]=1,h.fromBufferAttribute(i,L),p.fromBufferAttribute(i,E),f.fromBufferAttribute(i,F),u.fromBufferAttribute(s,L),g.fromBufferAttribute(s,E),v.fromBufferAttribute(s,F),p.sub(h),f.sub(h),g.sub(u),v.sub(u);let B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(m.copy(p).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(B),d.copy(f).multiplyScalar(g.x).addScaledVector(p,-v.x).multiplyScalar(B),a[L].add(m),a[E].add(m),a[F].add(m),c[L].add(d),c[E].add(d),c[F].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,E=A.length;L<E;++L){let F=A[L],B=F.start,X=F.count;for(let I=B,k=B+X;I<k;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let T=new R,C=new R,w=new R,x=new R;function b(L){w.fromBufferAttribute(r,L),x.copy(w);let E=a[L];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),C.crossVectors(x,E);let B=C.dot(c[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,B)}for(let L=0,E=i.count;L<E;++L)l[L]&&b(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,p=new R;if(e)for(let f=0,u=e.count;f<u;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,f=new l.constructor(c.length*h),u=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?u=c[v]*a.data.stride+a.offset:u=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[u++]}return new Tt(f,h,p)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,p=l.length;h<p;h++){let f=l[h],u=e(f,i);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){let u=l[p];h.push(u.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],p=s[l];for(let f=0,u=p.length;f<u;f++)h.push(p[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bl=new R,Om=new R,Bm=new Ne,oi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Bl.subVectors(i,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Bl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bm.getNormalMatrix(e),r=this.coplanarPoint(Bl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var zm=0,mt=class extends Pt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Sn,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Uo,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Tn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){pe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var un=new R,kl=new R,ga=new R,xa=new R,Ri=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){kl.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),xa.copy(this.origin).sub(kl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ga),a=xa.dot(this.direction),c=-xa.dot(ga),l=xa.lengthSq(),h=Math.abs(1-o*o),p,f,u,g;if(h>0)if(p=o*c-a,f=o*a-c,g=s*h,p>=0)if(f>=-g)if(f<=g){let v=1/h;p*=v,f*=v,u=p*(p+o*f+2*a)+f*(o*p+f+2*c)+l}else f=s,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*c)+l;else f=-s,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-o*s+a)),f=p>0?-s:Math.min(Math.max(-s,-c),s),u=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-s,-c),s),u=f*(f+2*c)+l):(p=Math.max(0,-(o*s+a)),f=p>0?s:Math.min(Math.max(-s,-c),s),u=-p*p+f*(f+2*c)+l);else f=o>0?-s:s,p=Math.max(0,-(o*f+a)),u=-p*p+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(kl).addScaledVector(ga,f),u}intersectSphere(e,t){if(e.radius<0)return null;un.subVectors(e.center,this.origin);let i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,p=e.x-o.x,f=e.y-o.y,u=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,d=i.x-o.x,M=i.y-o.y,A=i.z-o.z,T=Math.abs(c),C=Math.abs(l),w=Math.abs(h),x,b,L,E,F,B,X,I,k,Z,V,se;if(T>=C&&T>=w?(L=c,B=p,k=g,se=d,c>=0?(x=l,b=h,E=f,F=u,X=v,I=m,Z=M,V=A):(x=h,b=l,E=u,F=f,X=m,I=v,Z=A,V=M)):C>=w?(L=l,B=f,k=v,se=M,l>=0?(x=h,b=c,E=u,F=p,X=m,I=g,Z=A,V=d):(x=c,b=h,E=p,F=u,X=g,I=m,Z=d,V=A)):(L=h,B=u,k=m,se=A,h>=0?(x=c,b=l,E=p,F=f,X=g,I=v,Z=d,V=M):(x=l,b=c,E=f,F=p,X=v,I=g,Z=M,V=d)),L===0)return null;let H=x/L,Q=b/L,te=1/L,Ie=E-H*B,Ve=F-Q*B,$=X-H*k,ve=I-Q*k,Ae=Z-H*se,De=V-Q*se,fe=Ae*ve-De*$,We=Ie*De-Ve*Ae,vt=$*Ve-ve*Ie;if(r){if(fe<0||We<0||vt<0)return null}else if((fe<0||We<0||vt<0)&&(fe>0||We>0||vt>0))return null;let Fe=fe+We+vt;if(Fe===0)return null;let rt=te*(fe*B+We*k+vt*se);return(Fe>0?rt<0:rt>0)?null:this.at(rt/Fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var Ci=class extends mt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dh=new ke,or=new Ri,_a=new Ut,Nh=new R,ya=new R,va=new R,Ma=new R,Gl=new R,Sa=new R,Uh=new R,ba=new R,lt=class extends Ye{constructor(e=new Be,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],p=s[c];h!==0&&(Gl.fromBufferAttribute(p,e),o?Sa.addScaledVector(Gl,h):Sa.addScaledVector(Gl.sub(t),h))}t.add(Sa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(_a.containsPoint(or.origin)===!1&&(or.intersectSphere(_a,Nh)===null||or.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Dh.copy(s).invert(),or.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,u.start),A=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let T=M,C=A;T<C;T+=3){let w=a.getX(T),x=a.getX(T+1),b=a.getX(T+2);r=Ta(this,d,e,i,l,h,p,w,x,b),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=g,d=v;m<d;m+=3){let M=a.getX(m),A=a.getX(m+1),T=a.getX(m+2);r=Ta(this,o,e,i,l,h,p,M,A,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,u.start),A=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let T=M,C=A;T<C;T+=3){let w=T,x=T+1,b=T+2;r=Ta(this,d,e,i,l,h,p,w,x,b),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=g,d=v;m<d;m+=3){let M=m,A=m+1,T=m+2;r=Ta(this,o,e,i,l,h,p,M,A,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function km(n,e,t,i,r,s,o,a){let c;if(e.side===_t?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ni,a),c===null)return null;ba.copy(a),ba.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ba);return l<t.near||l>t.far?null:{distance:l,point:ba.clone(),object:n}}function Ta(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ya),n.getVertexPosition(c,va),n.getVertexPosition(l,Ma);let h=km(n,e,t,i,ya,va,Ma,Uh);if(h){let p=new R;Oi.getBarycoord(Uh,ya,va,Ma,p),r&&(h.uv=Oi.getInterpolatedAttribute(r,a,c,l,p,new oe)),s&&(h.uv1=Oi.getInterpolatedAttribute(s,a,c,l,p,new oe)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,c,l,p,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new R,materialIndex:0};Oi.getNormal(ya,va,Ma,f.normal),h.face=f,h.barycoord=p}return h}var Yi=class extends at{constructor(e=null,t=1,i=1,r,s,o,a,c,l=dt,h=dt,p,f){super(null,o,a,c,l,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class extends Tt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Kr=new ke,Oh=new ke,wa=[],Bh=new $t,Gm=new ke,co=new lt,ho=new Ut,Qi=class extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Gm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),Bh.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(Bh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ut),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),ho.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),e.ray.intersectsSphere(ho)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Kr),Oh.multiplyMatrices(i,Kr),co.matrixWorld=Oh,co.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){let c=wa[o];c.instanceId=s,c.object=this,t.push(c)}wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yi(new Float32Array(r*this.count),r,this.count,Ar,Ct));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;return s[c]=a,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};var ar=new Ut,Vm=new oe(.5,.5),Aa=new R,Pi=class{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yt,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],p=s[5],f=s[6],u=s[7],g=s[8],v=s[9],m=s[10],d=s[11],M=s[12],A=s[13],T=s[14],C=s[15];if(r[0].setComponents(l-o,u-h,d-g,C-M).normalize(),r[1].setComponents(l+o,u+h,d+g,C+M).normalize(),r[2].setComponents(l+a,u+p,d+v,C+A).normalize(),r[3].setComponents(l-a,u-p,d-v,C-A).normalize(),i)r[4].setComponents(c,f,m,T).normalize(),r[5].setComponents(l-c,u-f,d-m,C-T).normalize();else if(r[4].setComponents(l-c,u-f,d-m,C-T).normalize(),t===Yt)r[5].setComponents(l+c,u+f,d+m,C+T).normalize();else if(t===$i)r[5].setComponents(c,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=Vm.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Aa.x=r.normal.x>0?e.max.x:e.min.x,Aa.y=r.normal.y>0?e.max.y:e.min.y,Aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zh=new ke,$r=class n{constructor(){this.coordinateSystem=Yt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];zh.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Pi),i[r].setFromProjectionMatrix(zh,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Pi),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var wt=class extends mt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var Ca=new R,Pa=new R,kh=new ke,uo=new Ri,Ea=new Ut,Vl=new R,Gh=new R,zi=class extends Ye{constructor(e=new Be,t=new wt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ca.fromBufferAttribute(t,r-1),Pa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new Oe(i,1))}else pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;kh.copy(r).invert(),uo.copy(e.ray).applyMatrix4(kh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=u,m=g-1;v<m;v+=l){let d=h.getX(v),M=h.getX(v+1),A=Ra(this,e,uo,c,d,M,v);A&&t.push(A)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(u),d=Ra(this,e,uo,c,v,m,g-1);d&&t.push(d)}}else{let u=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=u,m=g-1;v<m;v+=l){let d=Ra(this,e,uo,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=Ra(this,e,uo,c,g-1,u,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ra(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Ca.fromBufferAttribute(a,r),Pa.fromBufferAttribute(a,s),t.distanceSqToSegment(Ca,Pa,Vl,Gh)>i)return;Vl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Vl);if(!(l<e.near||l>e.far))return{distance:l,point:Gh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Vh=new R,Hh=new R,pi=class extends zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vh.fromBufferAttribute(t,r),Hh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vh.distanceTo(Hh);e.setAttribute("lineDistance",new Oe(i,1))}else pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fn=class extends mt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Wh=new ke,Hl=new Ri,Ia=new Ut,La=new R,lr=class extends Ye{constructor(e=new Be,t=new fn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,e.ray.intersectsSphere(Ia)===!1)return;Wh.copy(r).invert(),Hl.copy(e.ray).applyMatrix4(Wh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,p=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let g=f,v=u;g<v;g++){let m=l.getX(g);La.fromBufferAttribute(p,m),Xh(La,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let g=f,v=u;g<v;g++)La.fromBufferAttribute(p,g),Xh(La,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xh(n,e,t,i,r,s,o){let a=Hl.distanceSqToPoint(n);if(a<t){let c=new R;Hl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var dn=class extends at{constructor(e=[],t=Ui,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var jr=class extends at{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends at{constructor(e,t,i=Ot,r,s,o,a=dt,c=dt,l,h=xi,p=1){if(h!==xi&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var cr=class extends _i{constructor(e,t=Ot,i=Ui,r,s,o=dt,a=dt,c,l=xi){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var hr=class extends at{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var jt=class n extends Be{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],p=[],f=0,u=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(p,2));function g(v,m,d,M,A,T,C,w,x,b,L){let E=T/x,F=C/b,B=T/2,X=C/2,I=w/2,k=x+1,Z=b+1,V=0,se=0,H=new R;for(let Q=0;Q<Z;Q++){let te=Q*F-X;for(let Ie=0;Ie<k;Ie++){let Ve=Ie*E-B;H[v]=Ve*M,H[m]=te*A,H[d]=I,l.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[d]=w>0?1:-1,h.push(H.x,H.y,H.z),p.push(Ie/x),p.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let te=0;te<x;te++){let Ie=f+te+k*Q,Ve=f+te+k*(Q+1),$=f+(te+1)+k*(Q+1),ve=f+(te+1)+k*Q;c.push(Ie,Ve,ve),c.push(Ve,$,ve),se+=6}a.addGroup(u,se,L),u+=se,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Nn=class n extends Be{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],f=[],u=[],g=0,v=[],m=i/2,d=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(u,2));function M(){let T=new R,C=new R,w=0,x=(t-e)/i;for(let b=0;b<=s;b++){let L=[],E=b/s,F=E*(t-e)+e;for(let B=0;B<=r;B++){let X=B/r,I=X*c+a,k=Math.sin(I),Z=Math.cos(I);C.x=F*k,C.y=-E*i+m,C.z=F*Z,p.push(C.x,C.y,C.z),T.set(k,x,Z).normalize(),f.push(T.x,T.y,T.z),u.push(X,1-E),L.push(g++)}v.push(L)}for(let b=0;b<r;b++)for(let L=0;L<s;L++){let E=v[L][b],F=v[L+1][b],B=v[L+1][b+1],X=v[L][b+1];(e>0||L!==0)&&(h.push(E,F,X),w+=3),(t>0||L!==s-1)&&(h.push(F,B,X),w+=3)}l.addGroup(d,w,0),d+=w}function A(T){let C=g,w=new oe,x=new R,b=0,L=T===!0?e:t,E=T===!0?1:-1;for(let B=1;B<=r;B++)p.push(0,m*E,0),f.push(0,E,0),u.push(.5,.5),g++;let F=g;for(let B=0;B<=r;B++){let I=B/r*c+a,k=Math.cos(I),Z=Math.sin(I);x.x=L*Z,x.y=m*E,x.z=L*k,p.push(x.x,x.y,x.z),f.push(0,E,0),w.x=k*.5+.5,w.y=Z*.5*E+.5,u.push(w.x,w.y),g++}for(let B=0;B<r;B++){let X=C+B,I=F+B;T===!0?h.push(I,I+1,X):h.push(I+1,I,X),b+=3}l.addGroup(d,b,T===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Da=new R,Na=new R,ql=new R,Ua=new Oi,Fa=class extends Be{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(on*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),f=new Map,u=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:m,c:d}=Ua;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),Ua.getNormal(ql),p[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let M=0;M<3;M++){let A=(M+1)%3,T=p[M],C=p[A],w=Ua[h[M]],x=Ua[h[A]],b=`${T}_${C}`,L=`${C}_${T}`,E=f.get(L);E?(ql.dot(E.normal)<=s&&(u.push(w.x,w.y,w.z),u.push(x.x,x.y,x.z)),f.set(L,null)):f.has(b)||f.set(b,{index0:l[M],index1:l[A],normal:ql.clone()})}}for(let g of f.values())if(g){let{index0:v,index1:m}=g;Da.fromBufferAttribute(a,v),Na.fromBufferAttribute(a,m),u.push(Da.x,Da.y,Da.z),u.push(Na.x,Na.y,Na.z)}this.setAttribute("position",new Oe(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let h=i[r],f=i[r+1]-h,u=(o-h)/f;return(r+u)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new oe:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],s=[],o=[],a=new R,c=new ke;for(let u=0;u<=e;u++){let g=u/e;r[u]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),p<=l&&(l=p,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(r[u-1],r[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ge(r[u-1].dot(r[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(r[u],s[u])}if(t===!0){let u=Math.acos(Ge(s[0].dot(s[e]),-1,1));u/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],u*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function Kl(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,p){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+p)+(c-a)/p;f*=h,u*=h,r(o,a,f,u)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Yh=new R,Zh=new R,Yl=new Kl,Zl=new Kl,Jl=new Kl,fo=class extends yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Zh.subVectors(r[0],r[1]).add(r[0]),l=Zh);let p=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Yh.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Yh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(p),u),v=Math.pow(p.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Yl.initNonuniformCatmullRom(l.x,p.x,f.x,h.x,g,v,m),Zl.initNonuniformCatmullRom(l.y,p.y,f.y,h.y,g,v,m),Jl.initNonuniformCatmullRom(l.z,p.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(l.x,p.x,f.x,h.x,this.tension),Zl.initCatmullRom(l.y,p.y,f.y,h.y,this.tension),Jl.initCatmullRom(l.z,p.z,f.z,h.z,this.tension));return i.set(Yl.calc(c),Zl.calc(c),Jl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Ba=class n extends Be{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ge(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/t,p=new R,f=new oe,u=new R,g=new R,v=new R,m=0,d=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,u.x=d*1,u.y=-m,u.z=d*0,v.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,d=e[M+1].y-e[M].y,u.x=d*1,u.y=-m,u.z=d*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),c.push(u.x,u.y,u.z),v.copy(g)}for(let M=0;M<=t;M++){let A=i+M*h*r,T=Math.sin(A),C=Math.cos(A);for(let w=0;w<=e.length-1;w++){p.x=e[w].x*T,p.y=e[w].y,p.z=e[w].x*C,o.push(p.x,p.y,p.z),f.x=M/t,f.y=w/(e.length-1),a.push(f.x,f.y);let x=c[3*w+0]*T,b=c[3*w+1],L=c[3*w+0]*C;l.push(x,b,L)}}for(let M=0;M<t;M++)for(let A=0;A<e.length-1;A++){let T=A+M*e.length,C=T,w=T+e.length,x=T+e.length+1,b=T+1;s.push(C,w,b),s.push(x,b,w)}this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Un=class n extends Be{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,p=e/a,f=t/c,u=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let M=d*f-o;for(let A=0;A<l;A++){let T=A*p-s;g.push(T,-M,0),v.push(0,0,1),m.push(A/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let A=M+l*d,T=M+l*(d+1),C=M+1+l*(d+1),w=M+1+l*d;u.push(A,T,w),u.push(T,C,w)}this.setIndex(u),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ur=class n extends Be{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new R,f=new R,u=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){let M=[],A=d/i,T=o+A*a,C=e*Math.cos(T),w=Math.sqrt(e*e-C*C),x=0;d===0&&o===0?x=.5/t:d===i&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let L=b/t,E=r+L*s;p.x=-w*Math.cos(E),p.y=C,p.z=w*Math.sin(E),g.push(p.x,p.y,p.z),f.copy(p).normalize(),v.push(f.x,f.y,f.z),m.push(L+x,1-A),M.push(l++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let A=h[d][M+1],T=h[d][M],C=h[d+1][M],w=h[d+1][M+1];(d!==0||o>0)&&u.push(A,T,w),(d!==i-1||c<Math.PI)&&u.push(T,C,w)}this.setIndex(u),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function pn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Kh(r))r.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Kh(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ai(n){let e={};for(let t=0;t<n.length;t++){let i=pn(n[t]);for(let r in i)e[r]=i[r]}return e}function Kh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $h(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function za(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Ql={clone:pn,merge:ai};var jh=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Qh=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var Qt=class extends mt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pn(e.uniforms),this.uniformsGroups=$h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new be().setHex(r.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ke().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var Qr=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var mi=class extends mt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ki,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var es=class extends mt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var ts=class extends mt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fn(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function is(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ii=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};var po=class extends Ii{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jo:s=e,a=2*t-i;break;case Qo:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case jo:o=e,c=2*i-t;break;case Qo:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,M=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,A=(-1-u)*m+(1.5+u)*v+.5*g,T=u*m-u*v;for(let C=0;C!==a;++C)s[C]=d*o[h+C]+M*o[l+C]+A*o[c+C]+T*o[p+C];return s}};var ns=class extends Ii{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),p=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*p+o[c+f]*h;return s}};var mo=class extends Ii{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}};var go=class extends Ii{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(i-t)/(r-t),v=1-g;for(let m=0;m!==a;++m)s[m]=o[l+m]*v+o[c+m]*g;return s}let f=a*2,u=e-1;for(let g=0;g!==a;++g){let v=o[l+g],m=o[c+g],d=u*f+g*2,M=p[d],A=p[d+1],T=e*f+g*2,C=h[T],w=h[T+1],x=cg(i,t,M,C,r);s[g]=tu(x,v,A,w,m)}return s}};function tu(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function lg(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function cg(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=tu(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let c=lg(s,e,t,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var Ft=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fn(t,this.TimeBufferType),this.values=Fn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fn(e.times,Array),values:Fn(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),is(e.settings)&&(i.settings={inTangents:Fn(e.settings.inTangents,Array),outTangents:Fn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ns(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $n:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break;case fl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $n;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;is(this.settings)&&(iu(this.settings.inTangents,e),iu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;is(this.settings)&&(nu(this.settings.inTangents,e),nu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ee("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ee("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ee("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ee("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&pl(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Ee("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ko,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let p=a*i,f=p-i,u=p+i;for(let g=0;g!==i;++g){let v=t[p+g];if(v!==t[f+g]||v!==t[u+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*i,f=o*i;for(let u=0;u!==i;++u)t[f+u]=t[p+u]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,is(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function iu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function nu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Ft.prototype.ValueTypeName="";Ft.prototype.TimeBufferType=Float32Array;Ft.prototype.ValueBufferType=Float32Array;Ft.prototype.DefaultInterpolation=Jo;var mn=class extends Ft{constructor(e,t,i){super(e,t,i)}};mn.prototype.ValueTypeName="bool";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=$n;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}};xo.prototype.ValueTypeName="color";var _o=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}};_o.prototype.ValueTypeName="number";var yo=class extends Ii{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)bt.slerpFlat(s,0,o,l-a,o,l,c);return s}};var rs=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var gn=class extends Ft{constructor(e,t,i){super(e,t,i)}};gn.prototype.ValueTypeName="string";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=$n;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}};vo.prototype.ValueTypeName="vector";var Mo=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=l.length;p<f;p+=2){let u=l[p],g=l[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ec=new Mo;var li=class{constructor(e){this.manager=e!==void 0?e:ec,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Li=class extends Ye{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ss=class extends Li{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var rc=new ke,su=new R,ou=new R,dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Rt,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===$i||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ka=new R,Ga=new bt,en=new R,On=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Ga,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ka,Ga,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var Bn=new R,au=new oe,lu=new oe,At=class extends On{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=An*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(on*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return An*2*Math.atan(Math.tan(on*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,au,lu),t.subVectors(lu,au)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(on*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zn=class extends On{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Va=class extends dr{constructor(){super(new zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var pr=class extends Li{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Va}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var os=class extends Li{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var as=-90,ls=1,kn=class extends Ye{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new At(as,ls,e,t);r.layers=this.layers,this.add(r);let s=new At(as,ls,e,t);s.layers=this.layers,this.add(s);let o=new At(as,ls,e,t);o.layers=this.layers,this.add(o);let a=new At(as,ls,e,t);a.layers=this.layers,this.add(a);let c=new At(as,ls,e,t);c.layers=this.layers,this.add(c);let l=new At(as,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Yt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$i)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}};var So=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var oc="\\[\\]\\.:\\/",Rg=new RegExp("["+oc+"]","g"),ac="[^"+oc+"]",Cg="[^"+oc.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",ac),Ig=/(WCOD+)?/.source.replace("WCOD",Cg),Lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Ng=new RegExp("^"+Pg+Ig+Lg+Dg+"$"),Ug=["material","materials","bones","map"],sc=class{constructor(e,t,i){let r=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(e){let t=Ng.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Ug.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;Ee("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=sc;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DL=new Float32Array(1);var cs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var cc=class cc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};cc.prototype.isMatrix2=!0;var lc=cc;var bo=class extends pi{constructor(e=10,t=10,i=4473924,r=8947848){i=new be(i),r=new be(r);let s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,u=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let v=f===s?i:r;v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3}let h=new Be;h.setAttribute("position",new Oe(c,3)),h.setAttribute("color",new Oe(l,3));let p=new wt({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var To=class extends Pt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function hc(n,e,t,i){let r=zg(i);switch(t){case Yo:return n*e;case Ar:return n*e/r.components*r.byteLength;case Zn:return n*e/r.components*r.byteLength;case Ti:return n*e*2/r.components*r.byteLength;case Er:return n*e*2/r.components*r.byteLength;case Zo:return n*e*3/r.components*r.byteLength;case qt:return n*e*4/r.components*r.byteLength;case Rr:return n*e*4/r.components*r.byteLength;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Lr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case As:case Rs:return Math.max(n,16)*Math.max(e,8)/4;case ws:case Es:return Math.max(n,8)*Math.max(e,8)/2;case Cs:case Ps:case Ls:case Ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Is:case Jn:case Ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Os:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ks:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ws:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ys:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zs:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Js:case Ks:case $s:return Math.ceil(n/4)*Math.ceil(e/4)*16;case js:case Qs:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kn:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(n){switch(n){case Rt:case Ho:return{byteLength:1,components:1};case sn:case Wo:case Xt:return{byteLength:2,components:1};case Tr:case wr:return{byteLength:2,components:4};case Ot:case br:case Ct:return{byteLength:4,components:1};case Xo:case qo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wa(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uu(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,c,l){let h=c.array,p=c.updateRanges;if(n.bindBuffer(l,a),p.length===0)n.bufferSubData(l,0,h);else{p.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<p.length;u++){let g=p[f],v=p[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,p[f]=v)}p.length=f+1;for(let u=0,g=p.length;u<g;u++){let v=p[u];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fu=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var du=`
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
`;var pu=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var mu=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var gu=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var xu=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var _u=`
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
`;var yu=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var vu=`
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
`;var Mu=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Su=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var bu=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Tu=`

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

`;var wu=`

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

`;var Au=`
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
`;var Eu=`
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
`;var Ru=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Cu=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Pu=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Iu=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Lu=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Du=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var Nu=`
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
`;var Uu=`
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
`;var Fu=`

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
`;var Ou=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Bu=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var zu=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var ku=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Gu=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Vu=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var Hu=`
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
`;var Wu=`
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
`;var Xu=`
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
`;var qu=`
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
`;var Yu=`
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
`;var Zu=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Ju=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Ku=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var $u=`
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
`;var ju=`

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
`;var Qu=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var ef=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var tf=`
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
`;var nf=`
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
`;var rf=`
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
`;var sf=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var of=`
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
`;var af=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var lf=`
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
`;var cf=`
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
`;var hf=`

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
`;var uf=`
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
`;var ff=`
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
`;var df=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var pf=`
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
`;var mf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var gf=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var xf=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var _f=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var yf=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var vf=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Mf=`
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
`;var Sf=`
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
`;var bf=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Tf=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var wf=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var Af=`
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
`;var Ef=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Rf=`
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
`;var Cf=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Pf=`
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

`;var If=`

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
`;var Lf=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Df=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Nf=`
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
`;var Uf=`
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
`;var Ff=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Of=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Bf=`

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
`;var zf=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var kf=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Gf=`
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
`;var Vf=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Hf=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Wf=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Xf=`
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
`;var qf=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Yf=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Zf=`
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
`;var Jf=`

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
`;var Kf=`

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


`;var $f=`
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
`;var jf=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Qf=`
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
`;var ed=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var td=`
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
`;var id=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var nd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var rd=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var sd=`
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
`;var od=`
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
`;var ad=`
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
`;var ld=`
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
`;var cd=`
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
`;var hd=`
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
`;var ud=`
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
`;var fd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,dd=`
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
`;var pd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,md=`

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
`;var gd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,xd=`
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
`;var _d=`
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
`,yd=`
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
`;var vd=`
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
`,Md=`
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
`;var Sd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,bd=`
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
`;var Td=`
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
`,wd=`
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
`;var Ad=`
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
`,Ed=`
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
`;var Rd=`
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
`,Cd=`
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
`;var Pd=`
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
`,Id=`
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
`;var Ld=`
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
`,Dd=`
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
`;var Nd=`
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
`,Ud=`
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
`;var Fd=`
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
`,Od=`
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
`;var Bd=`
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
`,zd=`
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
`;var kd=`
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
`,Gd=`
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
`;var Vd=`
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
`,Hd=`
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
`;var Wd=`
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
`,Xd=`
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
`;var qe={alphahash_fragment:fu,alphahash_pars_fragment:du,alphamap_fragment:pu,alphamap_pars_fragment:mu,alphatest_fragment:gu,alphatest_pars_fragment:xu,aomap_fragment:_u,aomap_pars_fragment:yu,batching_pars_vertex:vu,batching_vertex:Mu,begin_vertex:Su,beginnormal_vertex:bu,bsdfs:Tu,iridescence_fragment:wu,bumpmap_pars_fragment:Au,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Cu,clipping_planes_vertex:Pu,color_fragment:Iu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:Nu,common:Uu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Ou,displacementmap_vertex:Bu,emissivemap_fragment:zu,emissivemap_pars_fragment:ku,colorspace_fragment:Gu,colorspace_pars_fragment:Vu,envmap_fragment:Hu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:rf,envmap_vertex:Yu,fog_vertex:Zu,fog_pars_vertex:Ju,fog_fragment:Ku,fog_pars_fragment:$u,gradientmap_pars_fragment:ju,lightmap_pars_fragment:Qu,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:sf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:ff,lights_fragment_end:df,lightprobes_pars_fragment:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:_f,map_fragment:yf,map_pars_fragment:vf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Tf,morphinstance_vertex:wf,morphcolor_vertex:Af,morphnormal_vertex:Ef,morphtarget_pars_vertex:Rf,morphtarget_vertex:Cf,normal_fragment_begin:Pf,normal_fragment_maps:If,normal_pars_fragment:Lf,normal_pars_vertex:Df,normal_vertex:Nf,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Bf,iridescence_pars_fragment:zf,opaque_fragment:kf,packing:Gf,premultiplied_alpha_fragment:Vf,project_vertex:Hf,dithering_fragment:Wf,dithering_pars_fragment:Xf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:Jf,shadowmap_vertex:Kf,shadowmask_pars_fragment:$f,skinbase_vertex:jf,skinning_pars_vertex:Qf,skinning_vertex:ed,skinnormal_vertex:td,specularmap_fragment:id,specularmap_pars_fragment:nd,tonemapping_fragment:rd,tonemapping_pars_fragment:sd,transmission_fragment:od,transmission_pars_fragment:ad,uv_pars_fragment:ld,uv_pars_vertex:cd,uv_vertex:hd,worldpos_vertex:ud,background_vert:fd,background_frag:dd,backgroundCube_vert:pd,backgroundCube_frag:md,cube_vert:gd,cube_frag:xd,depth_vert:_d,depth_frag:yd,distance_vert:vd,distance_frag:Md,equirect_vert:Sd,equirect_frag:bd,linedashed_vert:Td,linedashed_frag:wd,meshbasic_vert:Ad,meshbasic_frag:Ed,meshlambert_vert:Rd,meshlambert_frag:Cd,meshmatcap_vert:Pd,meshmatcap_frag:Id,meshnormal_vert:Ld,meshnormal_frag:Dd,meshphong_vert:Nd,meshphong_frag:Ud,meshphysical_vert:Fd,meshphysical_frag:Od,meshtoon_vert:Bd,meshtoon_frag:zd,points_vert:kd,points_frag:Gd,shadow_vert:Vd,shadow_frag:Hd,sprite_vert:Wd,sprite_frag:Xd};var ye={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}};var Di={basic:{uniforms:ai([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:ai([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:ai([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:ai([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:ai([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new be(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:ai([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:ai([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:ai([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:ai([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:ai([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:ai([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:ai([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:ai([ye.lights,ye.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Di.physical={uniforms:ai([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Xa={r:0,b:0,g:0},nx=new ke,qd=new Ne;qd.set(-1,0,0,0,1,0,0,0,1);function Yd(n,e,t,i,r,s){let o=new be(0),a=r===!0?0:1,c,l,h=null,p=0,f=null;function u(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let T=M.backgroundBlurriness>0;A=e.get(A,T)}return A}function g(M){let A=!1,T=u(M);T===null?m(o,a):T&&T.isColor&&(m(T,1),A=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,A){let T=u(A);T&&T.isCubeTexture?(l===void 0&&(l=new lt(new jt(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:pn(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nx.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qd),l.material.toneMapped=He.getTransfer(T.colorSpace)!==Qe,(h!==T||p!==T.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,p=T.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new lt(new Un(2,2),new Qt({name:"BackgroundMaterial",uniforms:pn(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=He.getTransfer(T.colorSpace)!==Qe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||p!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,p=T.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(Xa,za(n)),t.buffers.color.setClear(Xa.r,Xa.g,Xa.b,A,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:d}}function Zd(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(F,B,X,I,k){let Z=!1,V=p(F,I,X,B);s!==V&&(s=V,l(s.object)),Z=u(F,I,X,k),Z&&g(F,I,X,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,T(F,B,X,I),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function p(F,B,X,I){let k=I.wireframe===!0,Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);let V=F.isInstancedMesh===!0?F.id:0,se=Z[V];se===void 0&&(se={},Z[V]=se);let H=se[X.id];H===void 0&&(H={},se[X.id]=H);let Q=H[k];return Q===void 0&&(Q=f(c()),H[k]=Q),Q}function f(F){let B=[],X=[],I=[];for(let k=0;k<t;k++)B[k]=0,X[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:I,object:F,attributes:{},index:null}}function u(F,B,X,I){let k=s.attributes,Z=B.attributes,V=0,se=X.getAttributes();for(let H in se)if(se[H].location>=0){let te=k[H],Ie=Z[H];if(Ie===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),te===void 0||te.attribute!==Ie||Ie&&te.data!==Ie.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function g(F,B,X,I){let k={},Z=B.attributes,V=0,se=X.getAttributes();for(let H in se)if(se[H].location>=0){let te=Z[H];te===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(te=F.instanceColor));let Ie={};Ie.attribute=te,te&&te.data&&(Ie.data=te.data),k[H]=Ie,V++}s.attributes=k,s.attributesNum=V,s.index=I}function v(){let F=s.newAttributes;for(let B=0,X=F.length;B<X;B++)F[B]=0}function m(F){d(F,0)}function d(F,B){let X=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;X[F]=1,I[F]===0&&(n.enableVertexAttribArray(F),I[F]=1),k[F]!==B&&(n.vertexAttribDivisor(F,B),k[F]=B)}function M(){let F=s.newAttributes,B=s.enabledAttributes;for(let X=0,I=B.length;X<I;X++)B[X]!==F[X]&&(n.disableVertexAttribArray(X),B[X]=0)}function A(F,B,X,I,k,Z,V){V===!0?n.vertexAttribIPointer(F,B,X,k,Z):n.vertexAttribPointer(F,B,X,I,k,Z)}function T(F,B,X,I){v();let k=I.attributes,Z=X.getAttributes(),V=B.defaultAttributeValues;for(let se in Z){let H=Z[se];if(H.location>=0){let Q=k[se];if(Q===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let te=Q.normalized,Ie=Q.itemSize,Ve=e.get(Q);if(Ve===void 0)continue;let $=Ve.buffer,ve=Ve.type,Ae=Ve.bytesPerElement,De=ve===n.INT||ve===n.UNSIGNED_INT||Q.gpuType===br;if(Q.isInterleavedBufferAttribute){let fe=Q.data,We=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,vt=Q.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Fe=0;Fe<H.locationSize;Fe++)d(H.location+Fe,fe.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)m(H.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Fe=0;Fe<H.locationSize;Fe++)A(H.location+Fe,Ie/H.locationSize,ve,te,We*Ae,(vt+Ie/H.locationSize*Fe)*Ae,De)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)d(H.location+fe,Q.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<H.locationSize;fe++)m(H.location+fe);n.bindBuffer(n.ARRAY_BUFFER,$);for(let fe=0;fe<H.locationSize;fe++)A(H.location+fe,Ie/H.locationSize,ve,te,Ie*Ae,Ie/H.locationSize*fe*Ae,De)}}else if(V!==void 0){let te=V[se];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(H.location,te);break;case 3:n.vertexAttrib3fv(H.location,te);break;case 4:n.vertexAttrib4fv(H.location,te);break;default:n.vertexAttrib1fv(H.location,te)}}}}M()}function C(){L();for(let F in i){let B=i[F];for(let X in B){let I=B[X];for(let k in I){let Z=I[k];for(let V in Z)h(Z[V].object),delete Z[V];delete I[k]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;let B=i[F.id];for(let X in B){let I=B[X];for(let k in I){let Z=I[k];for(let V in Z)h(Z[V].object),delete Z[V];delete I[k]}}delete i[F.id]}function x(F){for(let B in i){let X=i[B];for(let I in X){let k=X[I];if(k[F.id]===void 0)continue;let Z=k[F.id];for(let V in Z)h(Z[V].object),delete Z[V];delete k[F.id]}}}function b(F){for(let B in i){let X=i[B],I=F.isInstancedMesh===!0?F.id:0,k=X[I];if(k!==void 0){for(let Z in k){let V=k[Z];for(let se in V)h(V[se].object),delete V[se];delete k[Z]}delete X[I],Object.keys(X).length===0&&delete i[B]}}}function L(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Jd(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Kd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==qt&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Rt&&x!==Ct&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(pe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:T,maxSamples:C,samples:w}}function $d(n){let e=this,t=null,i=0,r=!1,s=!1,o=new oi,a=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let u=p.length!==0||f||i!==0||r;return r=f,i=p.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,u){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,d=n.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let M=s?0:i,A=M*4,T=d.clippingState||null;c.value=T,T=h(g,f,A,u);for(let C=0;C!==A;++C)T[C]=t[C];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,u,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let d=u+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,T=u;A!==v;++A,T+=4)o.copy(p[A]).applyMatrix4(M,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var xn=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dn(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jt(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:pn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:Ji});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=gt),new kn(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};var jd=256,rx=3,sx=20,ip=256,np=16,ox=3,ax=new R,lx=new be,hs=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new kn(1,10,null),this._boxMesh=new lt(new jt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=ax}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(lx));let m=new kn(i,r,h);return m.position.copy(a),m.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(jd,gl(e))}_fromTexture(e,t){e.mapping===Ui||e.mapping===rn?this._setSize(e.image.length===0?jd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Qd(e,!1,!1),i=Math.log2(e)-rx;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Qd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ui||e.mapping===rn?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ep()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cx(),this._integrationMaterial=hx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/np);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-ox)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(ip*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ux());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function Qd(n,e,t){return new xn(n,{minFilter:fi,generateMipmaps:e,type:Xt,colorSpace:jn,depthBuffer:t})}function wo(n,e,t){return new Qt({name:n,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:_t,blending:Ji,depthTest:!1,depthWrite:!1})}function cx(){return wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ip}u

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
	`)}function hx(){return wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:np}},`

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
	`)}function ux(){return wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sx}
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
	`)}function ep(){return wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function tp(){return wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rp(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,u=!1){return f==null?null:u?o(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===Ss||u===bs)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new xn(g.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,g=u===Ss||u===bs,v=u===Ui||u===rn;if(g||v){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new hs(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new hs(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Ss?f.mapping=Ui:u===bs&&(f.mapping=rn),f}function c(f){let u=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&u++;return u===g}function l(f){let u=f.target;u.removeEventListener("dispose",l);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function sp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ji("WebGLRenderer: "+i+" extension not supported."),r}}}function op(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(g=>delete r[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let v=s.get(g);v&&(e.remove(v),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,v){return r[v.id]!==void 0||(v.addEventListener("dispose",a),r[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let m in v)e.update(v[m],n.ARRAY_BUFFER)}function p(g){let v=g.index,m=g.attributes.position,d=0;if(m===void 0)return;let M=v!==null?v.array.length:m.array.length/3-1,A=m.count>=65535?Zr:Yr,T=new A(Math.ceil(M/3)*6,1),C=T.array;if(v!==null){let x=v.array;d=v.version;for(let b=0,L=0;b<M;b+=3){let E=x[b+0],F=x[b+1],B=x[b+2];C[L++]=E,C[L++]=F,C[L++]=F,C[L++]=B,C[L++]=B,C[L++]=E}}else{d=m.version;for(let x=0,b=0;x<M;x+=3){let L=x+0,E=x+1,F=x+2;C[b++]=L,C[b++]=E,C[b++]=E,C[b++]=F,C[b++]=F,C[b++]=L}}T.version=d;let w=s.get(g);w&&e.remove(w),s.set(g,T)}function f(g){let v=s.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&p(g)}else p(g);return s.get(g)}function u(){for(let g in r){let v=r[g].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function ap(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*o),t.update(f,i,1)}function l(p,f,u){u!==0&&(n.drawElementsInstanced(i,f,s,p*o,u),t.update(f,i,u))}function h(p,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,u);let v=0;for(let m=0;m<u;m++)v+=f[m];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function lp(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Ee("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cp(n,e,t){let i=new WeakMap,r=new tt;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==p){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;u===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let T=a.attributes.position.count*A,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let w=new Float32Array(T*C*4*p),x=new En(w,T,C,p);x.type=Ct,x.needsUpdate=!0;let b=A*4;for(let E=0;E<p;E++){let F=m[E],B=d[E],X=M[E],I=T*C*4*E;for(let k=0;k<F.count;k++){let Z=k*b;u===!0&&(r.fromBufferAttribute(F,k),w[I+Z+0]=r.x,w[I+Z+1]=r.y,w[I+Z+2]=r.z,w[I+Z+3]=0),g===!0&&(r.fromBufferAttribute(B,k),w[I+Z+4]=r.x,w[I+Z+5]=r.y,w[I+Z+6]=r.z,w[I+Z+7]=0),v===!0&&(r.fromBufferAttribute(X,k),w[I+Z+8]=r.x,w[I+Z+9]=r.y,w[I+Z+10]=r.z,w[I+Z+11]=X.itemSize===4?r.w:1)}}f={count:p,texture:x,size:new oe(T,C)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function hp(n,e,t,i,r){let s=new WeakMap;function o(l){let h=r.render.frame,p=l.geometry,f=e.get(l,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function a(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var fx={[Fo]:"LINEAR_TONE_MAPPING",[Oo]:"REINHARD_TONE_MAPPING",[Bo]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[ko]:"AGX_TONE_MAPPING",[Go]:"NEUTRAL_TONE_MAPPING",[zo]:"CUSTOM_TONE_MAPPING"};function up(n,e,t,i,r,s){let o=new Dt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Be;h.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let p=new Qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new lt(h,p),u=new zn(-1,1,1,-1,0,1),g=null,v=null,m=!1,d,M=null,A=[],T=!1;this.setSize=function(C,w){o.setSize(C,w),a!==null&&a.setSize(C,w),c!==null&&c.setSize(C,w);for(let x=0;x<A.length;x++){let b=A[x];b.setSize&&b.setSize(C,w)}},this.setEffects=function(C){A=C,T=A.length>0&&A[0].isRenderPass===!0;let w=o.width,x=o.height;A.length>0&&a===null&&(a=new Dt(w,x,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),c=new Dt(w,x,{type:Xt,depthBuffer:!1,stencilBuffer:!1}));let b=r===!0&&A.some(L=>L.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new _i(w,x),s===!0&&(l.format=bi,l.type=Gi)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let L=0;L<A.length;L++){let E=A[L];E.setSize&&E.setSize(w,x),b&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(l)}},this.begin=function(C,w){if(m||C.toneMapping===Si&&A.length===0)return!1;if(M=w,w!==null){let x=w.width,b=w.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return T===!1&&C.setRenderTarget(o),d=C.toneMapping,C.toneMapping=Si,!0},this.hasRenderPass=function(){return T},this.end=function(C,w){C.toneMapping=d,m=!0;let x=o,b=a;for(let L=0;L<A.length;L++){let E=A[L];E.enabled!==!1&&(E.render(C,b,x,w),E.needsSwap!==!1&&(x=b,b=b===a?c:a))}if(g!==C.outputColorSpace||v!==C.toneMapping){g=C.outputColorSpace,v=C.toneMapping,p.defines={},He.getTransfer(g)===Qe&&(p.defines.SRGB_TRANSFER="");let L=fx[v];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(M),C.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}var _p=new at,yp=new _i(1,1),vp=new cr(1),Mp=new En,Sp=new ir,bp=new dn,fp=[],dp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function us(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=fp[r];if(s===void 0&&(s=new Float32Array(r),fp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function xx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;gp.set(i),n.uniformMatrix2fv(this.addr,!1,gp),kt(t,i)}}function _x(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;mp.set(i),n.uniformMatrix3fv(this.addr,!1,mp),kt(t,i)}}function yx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;pp.set(i),n.uniformMatrix4fv(this.addr,!1,pp),kt(t,i)}}function vx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Tx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function Ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Ya(n){return n.version===0&&(n.compareFunction=na,n.needsUpdate=!0),n}function Rx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Ya(yp):s=_p,t.setTexture2D(e||s,r)}function Cx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sp,r)}function Px(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Ya(vp):s=bp,t.setTextureCube(e||s,r)}function Ix(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mp,r)}function Lx(n){switch(n){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return vx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return bx;case 5125:return Tx;case 36294:return wx;case 36295:return Ax;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Ix}}function Dx(n,e){n.uniform1fv(this.addr,e)}function Nx(n,e){let t=us(e,this.size,2);n.uniform2fv(this.addr,t)}function Ux(n,e){let t=us(e,this.size,3);n.uniform3fv(this.addr,t)}function Fx(n,e){let t=us(e,this.size,4);n.uniform4fv(this.addr,t)}function Ox(n,e){let t=us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bx(n,e){let t=us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zx(n,e){let t=us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kx(n,e){n.uniform1iv(this.addr,e)}function Gx(n,e){n.uniform2iv(this.addr,e)}function Vx(n,e){n.uniform3iv(this.addr,e)}function Hx(n,e){n.uniform4iv(this.addr,e)}function Wx(n,e){n.uniform1uiv(this.addr,e)}function Xx(n,e){n.uniform2uiv(this.addr,e)}function qx(n,e){n.uniform3uiv(this.addr,e)}function Yx(n,e){n.uniform4uiv(this.addr,e)}function Zx(n,e,t){let i=this.cache,r=e.length,s=qa(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ya(yp):o=_p;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Jx(n,e,t){let i=this.cache,r=e.length,s=qa(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sp,s[o])}function Kx(n,e,t){let i=this.cache,r=e.length,s=qa(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ya(vp):o=bp;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function $x(n,e,t){let i=this.cache,r=e.length,s=qa(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mp,s[o])}function jx(n){switch(n){case 5126:return Dx;case 35664:return Nx;case 35665:return Ux;case 35666:return Fx;case 35674:return Ox;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return kx;case 35667:case 35671:return Gx;case 35668:case 35672:return Vx;case 35669:case 35673:return Hx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return $x}}var fc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lx(t.type)}},dc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jx(t.type)}},pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},uc=/(\w+)(\])?(\[|\.)?/g;function xp(n,e){n.seq.push(e),n.map[e.id]=e}function Qx(n,e,t){let i=n.name,r=i.length;for(uc.lastIndex=0;;){let s=uc.exec(i),o=uc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){xp(t,l===void 0?new fc(a,n,e):new dc(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new pc(a),xp(t,p)),t=p}}}var Gn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Qx(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function mc(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var e0=37297,t0=0;function i0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Tp=new Ne;function n0(n){He._getMatrix(Tp,He.workingColorSpace,n);let e=`mat3( ${Tp.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(n)){case Qn:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+i0(n.getShaderSource(e),a)}else return s}function r0(n,e){let t=n0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var s0={[Fo]:"Linear",[Oo]:"Reinhard",[Bo]:"Cineon",[vr]:"ACESFilmic",[ko]:"AgX",[Go]:"Neutral",[zo]:"Custom"};function o0(n,e){let t=s0[e];return t===void 0?(pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Za=new R;function a0(){He.getLuminanceCoefficients(Za);let n=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function c0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ao(n){return n!==""}function Ap(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ep(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(u0,f0)}function f0(n,e){let t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return gc(t)}var d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(n){return n.replace(d0,p0)}function p0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var m0={[Mn]:"SHADOWMAP_TYPE_PCF",[Yn]:"SHADOWMAP_TYPE_VSM"};function g0(n){return m0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x0={[rn]:"ENVMAP_MODE_REFRACTION"};function _0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":x0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var y0={[yr]:"ENVMAP_BLENDING_MULTIPLY",[nh]:"ENVMAP_BLENDING_MIX",[rh]:"ENVMAP_BLENDING_ADD"};function v0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":y0[n.combine]||"ENVMAP_BLENDING_NONE"}function Pp(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=g0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=_0(t),p=v0(t),f=l0(t),u=c0(s),g=r.createProgram(),v,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ao).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ao).join(`
`),m.length>0&&(m+=`
`)):(v=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),m=[Cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?qe.tonemapping_pars_fragment:"",t.toneMapping!==Si?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,r0("linearToOutputTexel",t.outputColorSpace),a0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),o=gc(o),o=Ap(o,t),o=Ep(o,t),a=gc(a),a=Ap(a,t),a=Ep(a,t),o=Rp(o),a=Rp(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=d+v+o,A=d+m+a,T=mc(r,r.VERTEX_SHADER,M),C=mc(r,r.FRAGMENT_SHADER,A);r.attachShader(g,T),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(E){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(T)||"",X=r.getShaderInfoLog(C)||"",I=F.trim(),k=B.trim(),Z=X.trim(),V=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,T,C);else{let H=wp(r,T,"vertex"),Q=wp(r,C,"fragment");Ee("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+H+`
`+Q)}else I!==""?pe("WebGLProgram: Program Info Log:",I):(k===""||Z==="")&&(se=!1);se&&(E.diagnostics={runnable:V,programLog:I,vertexShader:{log:k,prefix:v},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(T),r.deleteShader(C),x=new Gn(r,g),b=h0(r,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(g,e0)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}var M0=0,Ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xc(e),t.set(e,i)),i}},xc=class{constructor(e){this.id=M0++,this.code=e,this.usedTimes=0}};function S0(n){return n===Ti||n===Jn||n===Kn}function Ip(n,e,t,i,r,s){let o=new Cn,a=new Ja,c=new Set,l=[],h=new Map,p=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,b,L,E,F,B){let X=E.fog,I=F.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||k,Z),se=f[x.type],H=i.precision;x.precision!==null&&(H=i.getMaxPrecision(x.precision),H!==x.precision&&pe("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=Q!==void 0?Q.length:0,Ie=0;I.morphAttributes.position!==void 0&&(Ie=1),I.morphAttributes.normal!==void 0&&(Ie=2),I.morphAttributes.color!==void 0&&(Ie=3);let Ve,$,ve,Ae;if(se){let Se=Di[se];Ve=Se.vertexShader,$=Se.fragmentShader}else{Ve=x.vertexShader,$=x.fragmentShader;let Se=a.getVertexShaderStage(x),ct=a.getFragmentShaderStage(x);a.update(x,Se,ct),ve=Se.id,Ae=ct.id}let De=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),We=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,Fe=!!x.map,rt=!!x.matcap,et=!!V,Je=et&&V.isPMREMTexture===!0,It=!!x.aoMap,Mt=!!x.lightMap,St=!!x.bumpMap&&x.wireframe===!1,nt=!!x.normalMap,gi=!!x.displacementMap,Et=!!x.emissiveMap,ci=!!x.metalnessMap,hi=!!x.roughnessMap,ei=x.anisotropy>0,N=x.clearcoat>0,re=x.diffuseRoughness>0,Me=x.dispersion>0,ie=x.retroreflectivity>0,J=x.iridescence>0,we=x.sheen>0,ne=x.transmission>0,de=ei&&!!x.anisotropyMap,S=N&&!!x.clearcoatMap,_=N&&!!x.clearcoatNormalMap,U=N&&!!x.clearcoatRoughnessMap,ee=re&&!!x.diffuseRoughnessMap,K=J&&!!x.iridescenceMap,le=J&&!!x.iridescenceThicknessMap,ae=we&&!!x.sheenColorMap,W=we&&!!x.sheenRoughnessMap,q=!!x.specularMap,ce=!!x.specularColorMap,P=!!x.specularIntensityMap,j=ne&&!!x.transmissionMap,Y=ne&&!!x.thicknessMap,ge=!!x.gradientMap,ue=!!x.alphaMap,me=x.alphaTest>0,Ue=!!x.alphaHash,Ke=!!x.extensions,he=Si;x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(he=n.toneMapping);let ze=Je?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ze={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:$,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:We,instancingColor:We&&F.instanceColor!==null,instancingMorph:We&&F.morphTexture!==null,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:rt,envMap:et,envMapMode:et&&V.mapping,envMapPMREM:Je,envMapMaxLod:Je?ze.length-1:null,envMapSize:Je?ze[0].width:null,aoMap:It,lightMap:Mt,bumpMap:St,normalMap:nt,displacementMap:gi,emissiveMap:Et,normalMapObjectSpace:nt&&x.normalMapType===oh,normalMapTangentSpace:nt&&x.normalMapType===Ki,packedNormalMap:nt&&x.normalMapType===Ki&&S0(x.normalMap.format),metalnessMap:ci,roughnessMap:hi,anisotropy:ei,anisotropyMap:de,clearcoat:N,clearcoatMap:S,clearcoatNormalMap:_,clearcoatRoughnessMap:U,diffuseRoughness:re,diffuseRoughnessMap:ee,dispersion:Me,retroreflection:ie,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:le,sheen:we,sheenColorMap:ae,sheenRoughnessMap:W,specularMap:q,specularColorMap:ce,specularIntensityMap:P,transmission:ne,transmissionMap:j,thicknessMap:Y,gradientMap:ge,opaque:x.transparent===!1&&x.blending===Sn&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:Ue,combine:x.combine,mapUv:Fe&&u(x.map.channel),aoMapUv:It&&u(x.aoMap.channel),lightMapUv:Mt&&u(x.lightMap.channel),bumpMapUv:St&&u(x.bumpMap.channel),normalMapUv:nt&&u(x.normalMap.channel),displacementMapUv:gi&&u(x.displacementMap.channel),emissiveMapUv:Et&&u(x.emissiveMap.channel),metalnessMapUv:ci&&u(x.metalnessMap.channel),roughnessMapUv:hi&&u(x.roughnessMap.channel),anisotropyMapUv:de&&u(x.anisotropyMap.channel),clearcoatMapUv:S&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:K&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&u(x.sheenRoughnessMap.channel),specularMapUv:q&&u(x.specularMap.channel),specularColorMapUv:ce&&u(x.specularColorMap.channel),specularIntensityMapUv:P&&u(x.specularIntensityMap.channel),transmissionMapUv:j&&u(x.transmissionMap.channel),thicknessMapUv:Y&&u(x.thicknessMap.channel),alphaMapUv:ue&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(nt||ei),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Fe||ue),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&nt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ie,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&He.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&He.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===_t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&x.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function v(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(b,x),d(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function d(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let b=f[x.type],L;if(b){let E=Di[b];L=Ql.clone(E.uniforms)}else L=x.uniforms;return L}function A(x,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new Pp(n,b,x,r),l.push(L),h.set(b,L)),L}function T(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:l,dispose:w}}function Lp(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function b0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Dp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Np(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,v,m,d){let M=n[e];return M===void 0?(M={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},n[e]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=g,M.materialVariant=o(f),M.groupOrder=v,M.renderOrder=f.renderOrder,M.z=m,M.group=d),e++,M}function c(f,u,g,v,m,d,M){M.reversedDepth===!0&&(m=-m);let A=a(f,u,g,v,m,d);g.transmission>0?i.push(A):g.transparent===!0?r.push(A):t.push(A)}function l(f,u,g,v,m,d){let M=a(f,u,g,v,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function h(f,u){t.length>1&&t.sort(f||b0),i.length>1&&i.sort(u||Dp),r.length>1&&r.sort(u||Dp)}function p(){for(let f=e,u=n.length;f<u;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:p,sort:h}}function Up(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Np,n.set(i,[o])):r>=s.length?(o=new Np,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function T0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new be};break;case"SpotLight":t={position:new R,direction:new R,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function w0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var A0=0;function E0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fp(n){let e=new T0,t=w0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let r=new R,s=new ke,o=new ke;function a(l){let h=0,p=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let u=0,g=0,v=0,m=0,d=0,M=0,A=0,T=0,C=0,w=0,x=0,b=0,L=0,E=0;l.sort(E0);for(let B=0,X=l.length;B<X;B++){let I=l[B],k=I.color,Z=I.intensity,V=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ti?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*Z,p+=k.g*Z,f+=k.b*Z;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],Z);E++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=te,i.sunShadowMap[g]=se;let Ie=Q.getViewportCount();for(let Ve=0;Ve<Ie;Ve++)i.sunShadowMatrix[v+Ve]=Q.getMatrix(Ve),i.sunShadowCascade[v+Ve]=Q._cascadeData[Ve];v+=Ie,g++}i.sun[u]=H,u++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=I.shadow.matrix,C++}i.directional[m]=H,m++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(k).multiplyScalar(Z),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[M]=H;let Q=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,Q.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[M]=Q.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[M]=te,i.spotShadowMap[M]=se,x++}M++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(k).multiplyScalar(Z),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=H,A++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[d]=te,i.pointShadowMap[d]=se,i.pointShadowMatrix[d]=I.shadow.matrix,w++}i.point[d]=H,d++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(Z),H.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[T]=H,T++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;let F=i.hash;(F.sunLength!==u||F.directionalLength!==m||F.pointLength!==d||F.spotLength!==M||F.rectAreaLength!==A||F.hemiLength!==T||F.numSunShadows!==g||F.numDirectionalShadows!==C||F.numPointShadows!==w||F.numSpotShadows!==x||F.numSpotMaps!==b||F.numLightProbes!==E)&&(i.sun.length=u,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=d,i.hemi.length=T,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=E,F.sunLength=u,F.directionalLength=m,F.pointLength=d,F.spotLength=M,F.rectAreaLength=A,F.hemiLength=T,F.numSunShadows=g,F.numDirectionalShadows=C,F.numPointShadows=w,F.numSpotShadows=x,F.numSpotMaps=b,F.numLightProbes=E,i.version=A0++)}function c(l,h){let p=0,f=0,u=0,g=0,v=0,m=0,d=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let T=l[M];if(T.isSunLight){let C=i.sun[p];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(d),p++}else if(T.isDirectionalLight){let C=i.directional[f];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(T.isSpotLight){let C=i.spot[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let C=i.rectArea[v];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),o.identity(),s.copy(T.matrixWorld),s.premultiply(d),o.extractRotation(s),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let C=i.point[u];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),u++}else if(T.isHemisphereLight){let C=i.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:i}}function Op(n){let e=new Fp(n),t=[],i=[],r=[];function s(p){h.camera=p,t.length=0,i.length=0,r.length=0}function o(p){p.isLightProbeGrid?r.push(p):t.push(p)}function a(p){i.push(p)}function c(){e.setup(t),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function l(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Bp(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Op(n),e.set(r,[a])):s>=o.length?(a=new Op(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,kp=`
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
`;var C0=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],P0=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Gp=new ke,Eo=new R,_c=new R;function Vp(n,e,t){let i=new Pi,r=new oe,s=new oe,o=new tt,a=new es,c=new ts,l={},h=t.maxTextureSize,p={[Ni]:_t,[_t]:Ni,[Mi]:Mi},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:zp,fragmentShader:kp}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mn;let d=this.type;this.render=function(w,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Bc&&(pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mn);let L=n.getRenderTarget(),E=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ji),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=d!==this.type;X&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=w.length;I<k;I++){let Z=w[I],V=Z.shadow;if(V===void 0){pe("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let se=V.getFrameExtents();r.multiply(se),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,V.mapSize.y=s.y));let H=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=H,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Yn){if(Z.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Dt(r.x,r.y,{format:Ti,type:Xt,minFilter:gt,magFilter:gt,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new _i(r.x,r.y,Ct),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=xi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=dt,V.map.depthTexture.magFilter=dt}else Z.isPointLight?(V.map=new xn(r.x),V.map.depthTexture=new cr(r.x,Ot)):(V.map=new Dt(r.x,r.y),V.map.depthTexture=new _i(r.x,r.y,Ot)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=xi,this.type===Mn?(V.map.depthTexture.compareFunction=H?ia:ta,V.map.depthTexture.minFilter=gt,V.map.depthTexture.magFilter=gt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=dt,V.map.depthTexture.magFilter=dt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,b);let te=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Ie=0;Ie<Q;Ie++){let Ve=V.getCamera(Ie);if(Z.isPointLight){let $=V.camera,ve=V.matrix,Ae=Z.distance||$.far;Ae!==$.far&&($.far=Ae,$.updateProjectionMatrix()),Eo.setFromMatrixPosition(Z.matrixWorld),$.position.copy(Eo),_c.copy($.position),_c.add(C0[Ie]),$.up.copy(P0[Ie]),$.lookAt(_c),$.updateMatrixWorld(),ve.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Gp.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Gp,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Ie),n.clear();else{Ie===0&&(n.setRenderTarget(V.map),n.clear());let $=V.getViewport(Ie);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),B.viewport(o)}i=V.getFrustum(Ie),T(x,b,Ve,Z,te,this.type)}V.isPointLightShadow!==!0&&this.type===Yn&&M(V,b),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(L,E,F)};function M(w,x){let b=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Dt(r.x,r.y,{format:Ti,type:Xt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,b,f,v,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,b,u,v,null)}function A(w,x,b,L){let E=null,F=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)E=F;else if(E=b.isPointLight===!0?c:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=E.uuid,X=x.uuid,I=l[B];I===void 0&&(I={},l[B]=I);let k=I[X];k===void 0&&(k=E.clone(),I[X]=k,x.addEventListener("dispose",C)),E=k}if(E.visible=x.visible,E.wireframe=x.wireframe,L===Yn?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:p[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let B=n.properties.get(E);B.light=b}return E}function T(w,x,b,L,E,F){if(w.visible===!1)return;if(w.layers.test(E)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Yn)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=e.update(w),k=w.material;if(Array.isArray(k)){let Z=I.groups;for(let V=0,se=Z.length;V<se;V++){let H=Z[V],Q=k[H.materialIndex];if(Q&&Q.visible){let te=A(w,Q,L,F);w.onBeforeShadow(n,w,x,b,I,te,H),n.renderBufferDirect(b,null,I,te,w,H),w.onAfterShadow(n,w,x,b,I,te,H)}}}else if(k.visible){let Z=A(w,k,L,F);w.onBeforeShadow(n,w,x,b,I,Z,null),n.renderBufferDirect(b,null,I,Z,w,null),w.onAfterShadow(n,w,x,b,I,Z,null)}}let X=w.children;for(let I=0,k=X.length;I<k;I++)T(X[I],x,b,L,E,F)}function C(w){w.target.removeEventListener("dispose",C);for(let b in l){let L=l[b],E=w.target.uuid;E in L&&(L[E].dispose(),delete L[E])}}}function Hp(n,e){function t(){let P=!1,j=new tt,Y=null,ge=new tt(0,0,0,0);return{setMask:function(ue){Y!==ue&&!P&&(n.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){P=ue},setClear:function(ue,me,Ue,Ke,he){he===!0&&(ue*=Ke,me*=Ke,Ue*=Ke),j.set(ue,me,Ue,Ke),ge.equals(j)===!1&&(n.clearColor(ue,me,Ue,Ke),ge.copy(j))},reset:function(){P=!1,Y=null,ge.set(-1,0,0,0)}}}function i(){let P=!1,j=!1,Y=null,ge=null,ue=null;return{setReversed:function(me){if(j!==me){let Ue=e.get("EXT_clip_control");me?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),j=me;let Ke=ue;ue=null,this.setClear(Ke)}},getReversed:function(){return j},setTest:function(me){me?fe(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(me){Y!==me&&!P&&(n.depthMask(me),Y=me)},setFunc:function(me){if(j&&(me=xh[me]),ge!==me){switch(me){case ms:n.depthFunc(n.NEVER);break;case gs:n.depthFunc(n.ALWAYS);break;case xs:n.depthFunc(n.LESS);break;case Tn:n.depthFunc(n.LEQUAL);break;case _s:n.depthFunc(n.EQUAL);break;case ys:n.depthFunc(n.GEQUAL);break;case vs:n.depthFunc(n.GREATER);break;case Ms:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=me}},setLocked:function(me){P=me},setClear:function(me){ue!==me&&(ue=me,j&&(me=1-me),n.clearDepth(me))},reset:function(){P=!1,Y=null,ge=null,ue=null,j=!1}}}function r(){let P=!1,j=null,Y=null,ge=null,ue=null,me=null,Ue=null,Ke=null,he=null;return{setTest:function(ze){P||(ze?fe(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(ze){j!==ze&&!P&&(n.stencilMask(ze),j=ze)},setFunc:function(ze,Ze,Se){(Y!==ze||ge!==Ze||ue!==Se)&&(n.stencilFunc(ze,Ze,Se),Y=ze,ge=Ze,ue=Se)},setOp:function(ze,Ze,Se){(me!==ze||Ue!==Ze||Ke!==Se)&&(n.stencilOp(ze,Ze,Se),me=ze,Ue=Ze,Ke=Se)},setLocked:function(ze){P=ze},setClear:function(ze){he!==ze&&(n.clearStencil(ze),he=ze)},reset:function(){P=!1,j=null,Y=null,ge=null,ue=null,me=null,Ue=null,Ke=null,he=null}}}let s=new t,o=new i,a=new r,c={},l=new WeakMap,h={},p={},f={},u=new WeakMap,g=[],v=null,m=!1,d=null,M=null,A=null,T=null,C=null,w=null,x=null,b=new be(0,0,0),L=0,E=!1,F=null,B=null,X=null,I=null,k=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,se=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=se>=1):H.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=se>=2);let Q=null,te={},Ie=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),$=new tt().fromArray(Ie),ve=new tt().fromArray(Ve);function Ae(P,j,Y,ge){let ue=new Uint8Array(4),me=n.createTexture();n.bindTexture(P,me),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<Y;Ue++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(j+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return me}let De={};De[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Tn),St(!1),nt(ll),fe(n.CULL_FACE),It(Ji);function fe(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function We(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function vt(P,j){return f[P]!==j?(n.bindFramebuffer(P,j),f[P]=j,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=j),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Fe(P,j){let Y=g,ge=!1;if(P){Y=u.get(j),Y===void 0&&(Y=[],u.set(j,Y));let ue=P.textures;if(Y.length!==ue.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Ue=ue.length;me<Ue;me++)Y[me]=n.COLOR_ATTACHMENT0+me;Y.length=ue.length,ge=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ge=!0);ge&&n.drawBuffers(Y)}function rt(P){return v!==P?(n.useProgram(P),v=P,!0):!1}let et={[bn]:n.FUNC_ADD,[kc]:n.FUNC_SUBTRACT,[Gc]:n.FUNC_REVERSE_SUBTRACT};et[Vc]=n.MIN,et[Hc]=n.MAX;let Je={[Wc]:n.ZERO,[Xc]:n.ONE,[qc]:n.SRC_COLOR,[No]:n.SRC_ALPHA,[jc]:n.SRC_ALPHA_SATURATE,[Kc]:n.DST_COLOR,[Zc]:n.DST_ALPHA,[Yc]:n.ONE_MINUS_SRC_COLOR,[Uo]:n.ONE_MINUS_SRC_ALPHA,[$c]:n.ONE_MINUS_DST_COLOR,[Jc]:n.ONE_MINUS_DST_ALPHA,[Qc]:n.CONSTANT_COLOR,[eh]:n.ONE_MINUS_CONSTANT_COLOR,[th]:n.CONSTANT_ALPHA,[ih]:n.ONE_MINUS_CONSTANT_ALPHA};function It(P,j,Y,ge,ue,me,Ue,Ke,he,ze){if(P===Ji){m===!0&&(We(n.BLEND),m=!1);return}if(m===!1&&(fe(n.BLEND),m=!0),P!==zc){if(P!==d||ze!==E){if((M!==bn||C!==bn)&&(n.blendEquation(n.FUNC_ADD),M=bn,C=bn),ze)switch(P){case Sn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _r:n.blendFunc(n.ONE,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ee("WebGLState: Invalid blending: ",P);break}else switch(P){case Sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cl:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",P);break}A=null,T=null,w=null,x=null,b.set(0,0,0),L=0,d=P,E=ze}return}ue=ue||j,me=me||Y,Ue=Ue||ge,(j!==M||ue!==C)&&(n.blendEquationSeparate(et[j],et[ue]),M=j,C=ue),(Y!==A||ge!==T||me!==w||Ue!==x)&&(n.blendFuncSeparate(Je[Y],Je[ge],Je[me],Je[Ue]),A=Y,T=ge,w=me,x=Ue),(Ke.equals(b)===!1||he!==L)&&(n.blendColor(Ke.r,Ke.g,Ke.b,he),b.copy(Ke),L=he),d=P,E=!1}function Mt(P,j){P.side===Mi?We(n.CULL_FACE):fe(n.CULL_FACE);let Y=P.side===_t;j&&(Y=!Y),St(Y),P.blending===Sn&&P.transparent===!1?It(Ji):It(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let ge=P.stencilWrite;a.setTest(ge),ge&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function St(P){F!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),F=P)}function nt(P){P!==Fc?(fe(n.CULL_FACE),P!==B&&(P===ll?n.cullFace(n.BACK):P===Oc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),B=P}function gi(P){P!==X&&(V&&n.lineWidth(P),X=P)}function Et(P,j,Y){P?(fe(n.POLYGON_OFFSET_FILL),(I!==j||k!==Y)&&(I=j,k=Y,o.getReversed()&&(j=-j,Y=-Y),n.polygonOffset(j,Y))):We(n.POLYGON_OFFSET_FILL)}function ci(P){P?fe(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function hi(P){P===void 0&&(P=n.TEXTURE0+Z-1),Q!==P&&(n.activeTexture(P),Q=P)}function ei(P,j,Y){Y===void 0&&(Q===null?Y=n.TEXTURE0+Z-1:Y=Q);let ge=te[Y];ge===void 0&&(ge={type:void 0,texture:void 0},te[Y]=ge),(ge.type!==P||ge.texture!==j)&&(Q!==Y&&(n.activeTexture(Y),Q=Y),n.bindTexture(P,j||De[P]),ge.type=P,ge.texture=j)}function N(){let P=te[Q];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(P){Ee("WebGLState:",P)}}function Me(){try{n.compressedTexImage3D(...arguments)}catch(P){Ee("WebGLState:",P)}}function ie(){try{n.texSubImage2D(...arguments)}catch(P){Ee("WebGLState:",P)}}function J(){try{n.texSubImage3D(...arguments)}catch(P){Ee("WebGLState:",P)}}function we(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Ee("WebGLState:",P)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Ee("WebGLState:",P)}}function de(){try{n.texStorage2D(...arguments)}catch(P){Ee("WebGLState:",P)}}function S(){try{n.texStorage3D(...arguments)}catch(P){Ee("WebGLState:",P)}}function _(){try{n.texImage2D(...arguments)}catch(P){Ee("WebGLState:",P)}}function U(){try{n.texImage3D(...arguments)}catch(P){Ee("WebGLState:",P)}}function ee(P){return p[P]!==void 0?p[P]:n.getParameter(P)}function K(P,j){p[P]!==j&&(n.pixelStorei(P,j),p[P]=j)}function le(P){$.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function ae(P){ve.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ve.copy(P))}function W(P,j){let Y=l.get(j);Y===void 0&&(Y=new WeakMap,l.set(j,Y));let ge=Y.get(P);ge===void 0&&(ge=n.getUniformBlockIndex(j,P.name),n.uniformBlockBinding(j,ge,ge),Y.set(P,ge))}function q(P,j,Y){let ue=l.get(j).get(P);c[ue]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,ue,Y),c[ue]=Y)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,te={},f={},c={},u=new WeakMap,g=[],v=null,m=!1,d=null,M=null,A=null,T=null,C=null,w=null,x=null,b=new be(0,0,0),L=0,E=!1,F=null,B=null,X=null,I=null,k=null,$.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:We,bindFramebuffer:vt,drawBuffers:Fe,useProgram:rt,setBlending:It,setMaterial:Mt,setFlipSided:St,setCullFace:nt,setLineWidth:gi,setPolygonOffset:Et,setScissorTest:ci,activeTexture:hi,bindTexture:ei,unbindTexture:N,compressedTexImage2D:re,compressedTexImage3D:Me,texImage2D:_,texImage3D:U,pixelStorei:K,getParameter:ee,updateUBOMapping:W,uniformBlockBinding:q,texStorage2D:de,texStorage3D:S,texSubImage2D:ie,texSubImage3D:J,compressedTexSubImage2D:we,compressedTexSubImage3D:ne,scissor:le,viewport:ae,reset:ce}}function Wp(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,p=new Set,f,u=new WeakMap,g=new Set,v=new FinalizationRegistry(S=>g.delete(S)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(S,_){return m?new OffscreenCanvas(S,_):er("canvas")}function M(S,_,U){let ee=1,K=de(S);if((K.width>U||K.height>U)&&(ee=U/Math.max(K.width,K.height)),ee<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let le=Math.floor(ee*K.width),ae=Math.floor(ee*K.height);f===void 0&&(f=d(le,ae));let W=_?d(le,ae):f;return W.width=le,W.height=ae,W.getContext("2d").drawImage(S,0,0,le,ae),pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+ae+")."),W}else return"data"in S&&pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function A(S){return S.generateMipmaps}function T(S){n.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,_,U,ee,K,le=!1){if(S!==null){if(n[S]!==void 0)return n[S];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ae;ee&&(ae=e.get("EXT_texture_norm16"),ae||pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===n.RED&&(U===n.FLOAT&&(W=n.R32F),U===n.HALF_FLOAT&&(W=n.R16F),U===n.UNSIGNED_BYTE&&(W=n.R8),U===n.UNSIGNED_SHORT&&ae&&(W=ae.R16_EXT),U===n.SHORT&&ae&&(W=ae.R16_SNORM_EXT)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.R8UI),U===n.UNSIGNED_SHORT&&(W=n.R16UI),U===n.UNSIGNED_INT&&(W=n.R32UI),U===n.BYTE&&(W=n.R8I),U===n.SHORT&&(W=n.R16I),U===n.INT&&(W=n.R32I)),_===n.RG&&(U===n.FLOAT&&(W=n.RG32F),U===n.HALF_FLOAT&&(W=n.RG16F),U===n.UNSIGNED_BYTE&&(W=n.RG8),U===n.UNSIGNED_SHORT&&ae&&(W=ae.RG16_EXT),U===n.SHORT&&ae&&(W=ae.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RG8UI),U===n.UNSIGNED_SHORT&&(W=n.RG16UI),U===n.UNSIGNED_INT&&(W=n.RG32UI),U===n.BYTE&&(W=n.RG8I),U===n.SHORT&&(W=n.RG16I),U===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RGB8UI),U===n.UNSIGNED_SHORT&&(W=n.RGB16UI),U===n.UNSIGNED_INT&&(W=n.RGB32UI),U===n.BYTE&&(W=n.RGB8I),U===n.SHORT&&(W=n.RGB16I),U===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),U===n.UNSIGNED_INT&&(W=n.RGBA32UI),U===n.BYTE&&(W=n.RGBA8I),U===n.SHORT&&(W=n.RGBA16I),U===n.INT&&(W=n.RGBA32I)),_===n.RGB&&(U===n.UNSIGNED_SHORT&&ae&&(W=ae.RGB16_EXT),U===n.SHORT&&ae&&(W=ae.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),_===n.RGBA){let q=le?Qn:He.getTransfer(K);U===n.FLOAT&&(W=n.RGBA32F),U===n.HALF_FLOAT&&(W=n.RGBA16F),U===n.UNSIGNED_BYTE&&(W=q===Qe?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ae&&(W=ae.RGBA16_EXT),U===n.SHORT&&ae&&(W=ae.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(S,_){let U;return S?_===null||_===Ot||_===Gi?U=n.DEPTH24_STENCIL8:_===Ct?U=n.DEPTH32F_STENCIL8:_===sn&&(U=n.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ot||_===Gi?U=n.DEPTH_COMPONENT24:_===Ct?U=n.DEPTH_COMPONENT32F:_===sn&&(U=n.DEPTH_COMPONENT16),U}function b(S,_){return A(S)===!0||S.isFramebufferTexture&&S.minFilter!==dt&&S.minFilter!==gt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function L(S){let _=new WeakRef(S);i.get(S).__ref=_,g.add(_),v.register(S,_,_)}function E(S){let _=i.get(S).__ref;_!==void 0&&(g.delete(_),v.unregister(_))}function F(S){X(S.target)}function B(S){I(S.target)}function X(S){S.removeEventListener("dispose",F),E(S),Z(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&p.delete(S)}function I(S){S.removeEventListener("dispose",B),E(S),se(S)}function k(){for(let S of g){let _=S.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):X(_))}g.clear(),p.clear()}function Z(S){let _=i.get(S);if(_.__webglInit===void 0)return;let U=S.source,ee=u.get(U);if(ee){let K=ee[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(S),Object.keys(ee).length===0&&u.delete(U)}i.remove(S)}function V(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let U=S.source,ee=u.get(U);delete ee[_.__cacheKey],o.memory.textures--}function se(S){let _=i.get(S);_.__depthDisposeCallback&&_.__depthDisposeCallback();let U=S.depthTexture;if(U&&U.renderTarget===S&&X(U),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let le=0;le<_.__webglFramebuffer[K].length;le++)n.deleteFramebuffer(_.__webglFramebuffer[K][le]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ee=S.textures;for(let K=0,le=ee.length;K<le;K++){let ae=i.get(ee[K]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(ee[K])}i.remove(S)}let H=0;function Q(){H=0}function te(){return H}function Ie(S){H=S}function Ve(){let S=H;return S>=r.maxTextures&&pe("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,S}function $(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.mipmapsAutoUpdate),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ve(S,_){let U=i.get(S);if(S.isVideoTexture&&we(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){let ee=S.image;if(ee===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(U,S,_);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function Ae(S,_){let U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Mt(U,S,_);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function De(S,_){let U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){Mt(U,S,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function fe(S,_){let U=i.get(S);if(S.version>0&&U.__version!==S.version){St(U,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}let We={[wn]:n.REPEAT,[Kt]:n.CLAMP_TO_EDGE,[Mr]:n.MIRRORED_REPEAT},vt={[dt]:n.NEAREST,[ul]:n.NEAREST_MIPMAP_NEAREST,[Sr]:n.NEAREST_MIPMAP_LINEAR,[gt]:n.LINEAR,[Ts]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},Fe={[lh]:n.NEVER,[na]:n.ALWAYS,[ch]:n.LESS,[ta]:n.LEQUAL,[hh]:n.EQUAL,[ia]:n.GEQUAL,[uh]:n.GREATER,[fh]:n.NOTEQUAL};function rt(S,_){if(_.type===Ct&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===gt||_.magFilter===Ts||_.magFilter===Sr||_.magFilter===fi||_.minFilter===gt||_.minFilter===Ts||_.minFilter===Sr||_.minFilter===fi)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,We[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,We[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,We[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,vt[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,vt[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dt||_.minFilter!==Sr&&_.minFilter!==fi||_.type===Ct&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function et(S,_){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",F),L(_));let ee=_.source,K=u.get(ee);K===void 0&&(K={},u.set(ee,K));let le=$(_);if(le!==S.__cacheKey){K[le]===void 0&&(K[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[le].usedTimes++;let ae=K[S.__cacheKey];ae!==void 0&&(K[S.__cacheKey].usedTimes--,ae.usedTimes===0&&V(_)),S.__cacheKey=le,S.__webglTexture=K[le].texture}return U}function Je(S,_,U){return Math.floor(Math.floor(S/U)/_)}function It(S,_,U,ee){let le=S.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,U,ee,_.data);else{le.sort((P,j)=>P.start-j.start);let ae=0;for(let P=1;P<le.length;P++){let j=le[ae],Y=le[P],ge=j.start+j.count,ue=Je(Y.start,_.width,4),me=Je(j.start,_.width,4);Y.start<=ge+1&&ue===me&&Je(Y.start+Y.count-1,_.width,4)===ue?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++ae,le[ae]=Y)}le.length=ae+1;let W=t.getParameter(n.UNPACK_ROW_LENGTH),q=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let P=0,j=le.length;P<j;P++){let Y=le[P],ge=Math.floor(Y.start/4),ue=Math.ceil(Y.count/4),me=ge%_.width,Ue=Math.floor(ge/_.width),Ke=ue,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(n.TEXTURE_2D,0,me,Ue,Ke,he,U,ee,_.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,W),t.pixelStorei(n.UNPACK_SKIP_PIXELS,q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Mt(S,_,U){let ee=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=n.TEXTURE_3D);let K=et(S,_),le=_.source;t.bindTexture(ee,S.__webglTexture,n.TEXTURE0+U);let ae=i.get(le);if(le.version!==ae.__version||K===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let he=He.getPrimaries(He.workingColorSpace),ze=_.colorSpace===Fi?null:He.getPrimaries(_.colorSpace),Ze=_.colorSpace===Fi||he===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let q=M(_.image,!1,r.maxTextureSize);q=ne(_,q);let ce=s.convert(_.format,_.colorSpace),P=s.convert(_.type),j=w(_.internalFormat,ce,P,_.normalized,_.colorSpace,_.isVideoTexture);rt(ee,_);let Y,ge=_.mipmaps,ue=_.isVideoTexture!==!0,me=ae.__version===void 0||K===!0,Ue=le.dataReady,Ke=b(_,q);if(_.isDepthTexture)j=x(_.format===bi,_.type),me&&(ue?t.texStorage2D(n.TEXTURE_2D,1,j,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,j,q.width,q.height,0,ce,P,null));else if(_.isDataTexture)if(ge.length>0){ue&&me&&t.texStorage2D(n.TEXTURE_2D,Ke,j,ge[0].width,ge[0].height);for(let he=0,ze=ge.length;he<ze;he++)Y=ge[he],ue?Ue&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Y.width,Y.height,ce,P,Y.data):t.texImage2D(n.TEXTURE_2D,he,j,Y.width,Y.height,0,ce,P,Y.data);_.generateMipmaps=!1}else ue?(me&&t.texStorage2D(n.TEXTURE_2D,Ke,j,q.width,q.height),Ue&&It(_,q,ce,P)):t.texImage2D(n.TEXTURE_2D,0,j,q.width,q.height,0,ce,P,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ue&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,j,ge[0].width,ge[0].height,q.depth);for(let he=0,ze=ge.length;he<ze;he++)if(Y=ge[he],_.format!==qt)if(ce!==null)if(ue){if(Ue)if(_.layerUpdates.size>0){let Ze=hc(Y.width,Y.height,_.format,_.type);for(let Se of _.layerUpdates){let ct=Y.data.subarray(Se*Ze/Y.data.BYTES_PER_ELEMENT,(Se+1)*Ze/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Se,Y.width,Y.height,1,ce,ct)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Y.width,Y.height,q.depth,ce,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,j,Y.width,Y.height,q.depth,0,Y.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Y.width,Y.height,q.depth,ce,P,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,j,Y.width,Y.height,q.depth,0,ce,P,Y.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ue&&me&&t.texStorage2D(n.TEXTURE_2D,Ke,j,ge[0].width,ge[0].height);for(let he=0,ze=ge.length;he<ze;he++)Y=ge[he],_.format!==qt?ce!==null?ue?Ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Y.width,Y.height,ce,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,he,j,Y.width,Y.height,0,Y.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Ue&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Y.width,Y.height,ce,P,Y.data):t.texImage2D(n.TEXTURE_2D,he,j,Y.width,Y.height,0,ce,P,Y.data)}else if(_.isDataArrayTexture)if(ue){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,j,q.width,q.height,q.depth),Ue)if(_.layerUpdates.size>0){let he=hc(q.width,q.height,_.format,_.type);for(let ze of _.layerUpdates){let Ze=q.data.subarray(ze*he/q.data.BYTES_PER_ELEMENT,(ze+1)*he/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ze,q.width,q.height,1,ce,P,Ze)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ce,P,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,q.width,q.height,q.depth,0,ce,P,q.data);else if(_.isData3DTexture)ue?(me&&t.texStorage3D(n.TEXTURE_3D,Ke,j,q.width,q.height,q.depth),Ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ce,P,q.data)):t.texImage3D(n.TEXTURE_3D,0,j,q.width,q.height,q.depth,0,ce,P,q.data);else if(_.isFramebufferTexture){if(me)if(ue)t.texStorage2D(n.TEXTURE_2D,Ke,j,q.width,q.height);else{let he=q.width,ze=q.height;for(let Ze=0;Ze<Ke;Ze++)t.texImage2D(n.TEXTURE_2D,Ze,j,he,ze,0,ce,P,null),he>>=1,ze>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),q.parentNode!==he){he.appendChild(q),p.add(_),he.onpaint=ze=>{let Ze=ze.changedElements;for(let Se of p)Ze.includes(Se.image)&&(Se.needsUpdate=!0)},he.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,q);else{let Ze=n.RGBA,Se=n.RGBA,ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ze,Se,ct,q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ge.length>0){if(ue&&me){let he=de(ge[0]);t.texStorage2D(n.TEXTURE_2D,Ke,j,he.width,he.height)}for(let he=0,ze=ge.length;he<ze;he++)Y=ge[he],ue?Ue&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ce,P,Y):t.texImage2D(n.TEXTURE_2D,he,j,ce,P,Y);_.generateMipmaps=!1}else if(ue){if(me){let he=de(q);t.texStorage2D(n.TEXTURE_2D,Ke,j,he.width,he.height)}Ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,P,q)}else t.texImage2D(n.TEXTURE_2D,0,j,ce,P,q);A(_)&&_.mipmapsAutoUpdate===!0&&T(ee),ae.__version=le.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function St(S,_,U){if(_.image.length!==6)return;let ee=et(S,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);let le=i.get(K);if(K.version!==le.__version||ee===!0){t.activeTexture(n.TEXTURE0+U);let ae=He.getPrimaries(He.workingColorSpace),W=_.colorSpace===Fi?null:He.getPrimaries(_.colorSpace),q=_.colorSpace===Fi||ae===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let ce=_.isCompressedTexture||_.image[0].isCompressedTexture,P=_.image[0]&&_.image[0].isDataTexture,j=[];for(let Se=0;Se<6;Se++)!ce&&!P?j[Se]=M(_.image[Se],!0,r.maxCubemapSize):j[Se]=P?_.image[Se].image:_.image[Se],j[Se]=ne(_,j[Se]);let Y=j[0],ge=s.convert(_.format,_.colorSpace),ue=s.convert(_.type),me=w(_.internalFormat,ge,ue,_.normalized,_.colorSpace),Ue=_.isVideoTexture!==!0,Ke=le.__version===void 0||ee===!0,he=K.dataReady,ze=b(_,Y);rt(n.TEXTURE_CUBE_MAP,_);let Ze;if(_.isDepthTexture){if(me=x(_.format===bi,_.type),Ke)if(Ue)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,me,Y.width,Y.height);else for(let Se=0;Se<6;Se++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,me,Y.width,Y.height,0,ge,ue,null)}else if(ce){Ue&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,me,Y.width,Y.height);for(let Se=0;Se<6;Se++){Ze=j[Se].mipmaps;for(let ct=0;ct<Ze.length;ct++){let Ht=Ze[ct];_.format!==qt?ge!==null?Ue?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct,0,0,Ht.width,Ht.height,ge,Ht.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct,me,Ht.width,Ht.height,0,Ht.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct,0,0,Ht.width,Ht.height,ge,ue,Ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct,me,Ht.width,Ht.height,0,ge,ue,Ht.data)}}}else{if(Ze=_.mipmaps,Ue&&Ke){Ze.length>0&&ze++;let Se=de(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,me,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(P){Ue?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,j[Se].width,j[Se].height,ge,ue,j[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,me,j[Se].width,j[Se].height,0,ge,ue,j[Se].data);for(let ct=0;ct<Ze.length;ct++){let yn=Ze[ct].image[Se].image;Ue?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct+1,0,0,yn.width,yn.height,ge,ue,yn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct+1,me,yn.width,yn.height,0,ge,ue,yn.data)}}else{Ue?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ge,ue,j[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,me,ge,ue,j[Se]);for(let ct=0;ct<Ze.length;ct++){let Ht=Ze[ct];Ue?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct+1,0,0,ge,ue,Ht.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ct+1,me,ge,ue,Ht.image[Se])}}}A(_)&&_.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),le.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function nt(S,_,U,ee,K,le){let ae=s.convert(U.format,U.colorSpace),W=s.convert(U.type),q=w(U.internalFormat,ae,W,U.normalized,U.colorSpace),ce=i.get(_),P=i.get(U);if(P.__renderTarget=_,!ce.__hasExternalTextures){let j=Math.max(1,_.width>>le),Y=Math.max(1,_.height>>le);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,le,q,j,Y,_.depth,0,ae,W,null):t.texImage2D(K,le,q,j,Y,0,ae,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),J(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,P.__webglTexture,0,ie(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,P.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function gi(S,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){let ee=_.depthTexture,K=ee&&ee.isDepthTexture?ee.type:null,le=x(_.stencilBuffer,K),ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;J(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(_),le,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(_),le,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,le,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,S)}else{let ee=_.textures;for(let K=0;K<ee.length;K++){let le=ee[K],ae=s.convert(le.format,le.colorSpace),W=s.convert(le.type),q=w(le.internalFormat,ae,W,le.normalized,le.colorSpace);J(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(_),q,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(S,_,U){let ee=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(_.depthTexture);K.__renderTarget=_;let le=ee?_.depthTexture.image[0]:_.depthTexture.image;(!K.__webglTexture||le.width!==_.width||le.height!==_.height)&&(le.width=_.width,le.height=_.height,_.depthTexture.needsUpdate=!0),ee?fe(_.depthTexture,0):ve(_.depthTexture,0);let ae=K.__webglTexture,W=ie(_),q=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,ce=_.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===xi)J(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,q,ae,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,ce,q,ae,0);else if(_.depthTexture.format===bi)J(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,q,ae,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,ce,q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ci(S){let _=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let ee=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",K)};ee.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=ee}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let ee=0;ee<6;ee++)Et(_.__webglFramebuffer[ee],S,ee);else S.texture.mipmaps.length>0?Et(_.__webglFramebuffer[0],S,0):Et(_.__webglFramebuffer,S,0);else if(U){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=n.createRenderbuffer(),gi(_.__webglDepthbuffer[ee],S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,le)}}else if(S.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),gi(_.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function hi(S,_,U){let ee=i.get(S);_!==void 0&&nt(ee.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ci(S)}function ei(S){let _=S.texture,U=i.get(S),ee=i.get(_);S.addEventListener("dispose",B),L(S);let K=S.textures,le=S.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=_.version,o.memory.textures++),le){U.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps.length>0){U.__webglFramebuffer[W]=[];for(let q=0;q<_.mipmaps.length;q++)U.__webglFramebuffer[W][q]=n.createFramebuffer()}else U.__webglFramebuffer[W]=n.createFramebuffer()}else{if(_.mipmaps.length>0){U.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)U.__webglFramebuffer[W]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ae)for(let W=0,q=K.length;W<q;W++){let ce=i.get(K[W]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&J(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let W=0;W<K.length;W++){let q=K[W];U.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[W]);let ce=s.convert(q.format,q.colorSpace),P=s.convert(q.type),j=w(q.internalFormat,ce,P,q.normalized,q.colorSpace,S.isXRRenderTarget===!0),Y=ie(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,U.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),gi(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)nt(U.__webglFramebuffer[W][q],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,q);else nt(U.__webglFramebuffer[W],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);A(_)?T(n.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ae){for(let W=0,q=K.length;W<q;W++){let ce=K[W],P=i.get(ce),j=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(j=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,P.__webglTexture),rt(j,ce),nt(U.__webglFramebuffer,S,ce,n.COLOR_ATTACHMENT0+W,j,0),A(ce)&&T(j)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(W=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,ee.__webglTexture),rt(W,_),_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)nt(U.__webglFramebuffer[q],S,_,n.COLOR_ATTACHMENT0,W,q);else nt(U.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,W,0);A(_)?T(W):_.mipmaps.length>0&&n.texParameteri(W,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}S.depthBuffer&&ci(S)}function N(S){let _=S.textures;for(let U=0,ee=_.length;U<ee;U++){let K=_[U];if(A(K)&&K.mipmapsAutoUpdate===!0){let le=C(S),ae=i.get(K).__webglTexture;t.bindTexture(le,ae),T(le),t.unbindTexture()}}}let re=[];function Me(S){if(S.samples>0){if(J(S)===!1){let _=S.textures,U=S.width,ee=S.height,K=n.COLOR_BUFFER_BIT,le=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(S),W=_.length>1;if(W)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),S.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);let P=i.get(_[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,U,ee,0,0,U,ee,K,n.NEAREST),c===!0&&(re.length=0,re.push(n.COLOR_ATTACHMENT0+ce),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&re.push(le),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);let P=i.get(_[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&c){let _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ie(S){return Math.min(r.maxSamples,S.samples)}function J(S){let _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function we(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ne(S,_){let U=S.colorSpace,ee=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==jn&&U!==Fi&&(He.getTransfer(U)===Qe?(ee!==qt||K!==Rt)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",U)),_}function de(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=Ve,this.resetTextureUnits=Q,this.getTextureUnits=te,this.setTextureUnits=Ie,this.setTexture2D=ve,this.setTexture2DArray=Ae,this.setTexture3D=De,this.setTextureCube=fe,this.rebindTextures=hi,this.setupRenderTarget=ei,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ci,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=J,this.dispose=k}function yc(n,e){function t(i,r=Fi){let s,o=He.getTransfer(r);if(i===Rt)return n.UNSIGNED_BYTE;if(i===Tr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ho)return n.BYTE;if(i===Wo)return n.SHORT;if(i===sn)return n.UNSIGNED_SHORT;if(i===br)return n.INT;if(i===Ot)return n.UNSIGNED_INT;if(i===Ct)return n.FLOAT;if(i===Xt)return n.HALF_FLOAT;if(i===Yo)return n.ALPHA;if(i===Zo)return n.RGB;if(i===qt)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===Ar)return n.RED;if(i===Zn)return n.RED_INTEGER;if(i===Ti)return n.RG;if(i===Er)return n.RG_INTEGER;if(i===Rr)return n.RGBA_INTEGER;if(i===Cr||i===Pr||i===Ir||i===Lr)if(o===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ws||i===As||i===Es||i===Rs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ws)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===As)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Es)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cs||i===Ps||i===Is||i===Ls||i===Ds||i===Jn||i===Ns)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cs||i===Ps)return o===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Is)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ls)return s.COMPRESSED_R11_EAC;if(i===Ds)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Jn)return s.COMPRESSED_RG11_EAC;if(i===Ns)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Us||i===Fs||i===Os||i===Bs||i===zs||i===ks||i===Gs||i===Vs||i===Hs||i===Ws||i===Xs||i===qs||i===Ys||i===Zs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Us)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Os)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ks)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ws)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ys)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zs)return o===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Js||i===Ks||i===$s)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Js)return o===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ks)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$s)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===js||i===Qs||i===Kn||i===eo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===js)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`,Ka=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Qt({vertexShader:I0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var $a=class extends Pt{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,f=null,u=null,g=null,v=typeof XRWebGLBinding<"u",m=new Ka,d={},M=t.getContextAttributes(),A=null,T=null,C=[],w=[],x=new oe,b=null,L=null,E=new At;E.viewport=new tt;let F=new At;F.viewport=new tt;let B=[E,F],X=new So,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ve=C[$];return ve===void 0&&(ve=new nr,C[$]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function($){let ve=C[$];return ve===void 0&&(ve=new nr,C[$]=ve),ve.getGripSpace()},this.getHand=function($){let ve=C[$];return ve===void 0&&(ve=new nr,C[$]=ve),ve.getHandSpace()};function Z($){let ve=w.indexOf($.inputSource);if(ve===-1)return;let Ae=C[ve];Ae!==void 0&&(Ae.update($.inputSource,$.frame,l||o),Ae.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",se);for(let $=0;$<C.length;$++){let ve=w[$];ve!==null&&(w[$]=null,C[$].disconnect(ve))}I=null,k=null,m.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(A),u=null,f=null,p=null,r=null,T=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),L!==null){let $=L.camera;$.fov=L.fov,$.zoom=L.zoom,$.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",se),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,De=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=M.stencil?bi:xi,De=M.stencil?Gi:Ot);let We={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Dt(f.textureWidth,f.textureHeight,{format:qt,type:Rt,depthTexture:new _i(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new Dt(u.framebufferWidth,u.framebufferHeight,{format:qt,type:Rt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se($){for(let ve=0;ve<$.removed.length;ve++){let Ae=$.removed[ve],De=w.indexOf(Ae);De>=0&&(w[De]=null,C[De].disconnect(Ae))}for(let ve=0;ve<$.added.length;ve++){let Ae=$.added[ve],De=w.indexOf(Ae);if(De===-1){for(let We=0;We<C.length;We++)if(We>=w.length){w.push(Ae),De=We;break}else if(w[We]===null){w[We]=Ae,De=We;break}if(De===-1)break}let fe=C[De];fe&&fe.connect(Ae)}}function H($,ve){ve===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ve.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ve=$.near,Ae=$.far;m.texture!==null&&(m.depthNear>0&&(ve=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),X.near=F.near=E.near=ve,X.far=F.far=E.far=Ae,(I!==X.near||k!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,k=X.far),X.layers.mask=$.layers.mask|6,E.layers.mask=X.layers.mask&-5,F.layers.mask=X.layers.mask&-3;let De=$.parent,fe=X.cameras;H(X,De);for(let We=0;We<fe.length;We++)H(fe[We],De);X.projectionMatrix.copy(E.projectionMatrix),X.projectionMatrixInverse.copy(E.projectionMatrixInverse),L===null&&$.isPerspectiveCamera&&(L={camera:$,fov:$.fov,zoom:$.zoom}),Q($,X,De)};function Q($,ve,Ae){Ae===null?$.matrix.copy(ve.matrixWorld):($.matrix.copy(Ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(ve.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ve.projectionMatrix),$.projectionMatrixInverse.copy(ve.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=An*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function($){return d[$]};let te=null;function Ie($,ve){if(h=ve.getViewerPose(l||o),g=ve,h!==null){let Ae=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let De=!1;Ae.length!==X.cameras.length&&(X.cameras.length=0,De=!0);for(let Fe=0;Fe<Ae.length;Fe++){let rt=Ae[Fe],et=null;if(u!==null)et=u.getViewport(rt);else{let It=p.getViewSubImage(f,rt);et=It.viewport,Fe===0&&(e.setRenderTargetTextures(T,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(T))}let Je=B[Fe];Je===void 0&&(Je=new At,Je.layers.enable(Fe),Je.viewport=new tt,B[Fe]=Je),Je.matrix.fromArray(rt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(rt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(et.x,et.y,et.width,et.height),Fe===0&&(X.matrix.copy(Je.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),De===!0&&X.cameras.push(Je)}let fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=i.getBinding();let Fe=p.getDepthInformation(Ae[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,r.renderState)}if(fe&&fe.includes("camera-access")&&v){e.state.unbindTexture(),p=i.getBinding();for(let Fe=0;Fe<Ae.length;Fe++){let rt=Ae[Fe].camera;if(rt){let et=d[rt];et||(et=new hr,d[rt]=et);let Je=p.getCameraImage(rt);et.sourceTexture=Je}}}}for(let Ae=0;Ae<C.length;Ae++){let De=w[Ae],fe=C[Ae];De!==null&&fe!==void 0&&fe.update(De,ve,l||o)}te&&te($,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}let Ve=new Wa;Ve.setAnimationLoop(Ie),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}};var D0=new ke,Xp=new Ne;Xp.set(-1,0,0,0,1,0,0,0,1);function qp(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,za(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,A,T){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&u(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===_t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===_t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),A=M.envMap,T=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xp),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,M){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yp(n,e,t,i){let r={},s={};function o(M,A){let T=A.program;i.uniformBlockBinding(M,T,r[M.id])}function a(M,A){let T=r[M.id];T===void 0&&(g(M),T=c(M),r[M.id]=T,M.addEventListener("dispose",m));let C=A.program;i.updateUBOMapping(M,C);let w=e.render.frame;s[M.id]!==w&&(l(M),s[M.id]=w)}function c(M){let A=n.createBuffer(),T=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),A}function l(M){let A=r[M.id],T=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let w=0,x=T.length;w<x;w++){let b=T[w];if(Array.isArray(b))for(let L=0,E=b.length;L<E;L++)h(b[L],w,L,C);else h(b,w,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,A,T,C){if(f(M,A,T,C)===!0){let w=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let L=0;L<x.length;L++){let E=x[L],F=v(E,!0);p(E,M.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,M.__data)}}function p(M,A,T){typeof M=="number"||typeof M=="boolean"?A[T]=M:M.isMatrix3?(A[T]=M.elements[0],A[T+1]=M.elements[1],A[T+2]=M.elements[2],A[T+3]=0,A[T+4]=M.elements[3],A[T+5]=M.elements[4],A[T+6]=M.elements[5],A[T+7]=0,A[T+8]=M.elements[6],A[T+9]=M.elements[7],A[T+10]=M.elements[8],A[T+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-T),T):M.toArray(A,T)}function f(M,A,T,C){let w=M.value,x=A+"_"+T;if(Array.isArray(w)){C[x]===void 0&&(C[x]=[]);let b=C[x],L=!1;for(let E=0;E<w.length;E++)u(w[E],b,E)===!0&&(L=!0);return L}return u(w,C,x)}function u(M,A,T){if(A[T]===void 0)return typeof M=="number"||typeof M=="boolean"?A[T]=M:ArrayBuffer.isView(M)?A[T]=M.slice():A[T]=M.clone(),!0;{let C=A[T];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(M){let A=M.uniforms,T=0,C=16;for(let x=0,b=A.length;x<b;x++){let L=Array.isArray(A[x])?A[x]:[A[x]];for(let E=0,F=L.length;E<F;E++){let B=L[E],X=Array.isArray(B.value)?B.value:[B.value],I=Array.isArray(A[x])||Array.isArray(B.value),k=T;for(let V=0,se=X.length;V<se;V++){let H=X[V],Q=v(H,I),te=T%C,Ie=te%Q.boundary,Ve=te+Ie;T+=Ie,Ve!==0&&C-Ve<Q.storage&&(T+=C-Ve),V===0&&(k=T),T+=Q.storage}let Z=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Z((T-k)/Float32Array.BYTES_PER_ELEMENT),B.__offset=k}}let w=T%C;return w>0&&(T+=C-w),M.__size=T,M.__cache={},this}function v(M,A){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=16,T.storage=48):M.isMatrix4?(T.boundary=16,T.storage=64):M.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):pe("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(M){let A=M.target;A.removeEventListener("dispose",m),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(let M in r)n.deleteBuffer(r[M]);r={},s={}}return{bind:o,update:a,dispose:d}}var N0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tn=null;function Zp(){return tn===null&&(tn=new Yi(N0,16,16,Ti,Xt),tn.name="DFG_LUT",tn.minFilter=gt,tn.magFilter=gt,tn.wrapS=Kt,tn.wrapT=Kt,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}var Ro=class{constructor(e={}){let{canvas:t=ml(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Rt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let v=u,m=new Set([Rr,Er,Zn]),d=new Set([Rt,Ot,sn,Gi,Tr,wr]),M=new Uint32Array(4),A=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},C=null,w=null,x=[],b=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,F=!1,B=null,X=null,I=null,k=null;this._outputColorSpace=Bt;let Z=0,V=0,se=null,H=-1,Q=null,te=new tt,Ie=new tt,Ve=null,$=new be(0),ve=0,Ae=t.width,De=t.height,fe=1,We=null,vt=null,Fe=new tt(0,0,Ae,De),rt=new tt(0,0,Ae,De),et=!1,Je=new Pi,It=new $r,Mt=!1,St=!1,nt=new ke,gi=new R,Et=new tt,ci={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},hi=!1;function ei(){return se===null?fe:1}let N=i;function re(y,D){return t.getContext(y,D)}let Me,ie,J,we,ne,de,S,_,U,ee,K,le,ae,W,q,ce,P,j,Y,ge,ue,me,Ue;try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Se,!1),N===null){let D="webgl2";if(N=re(D,y),N===null)throw re(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(y){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ee("WebGLRenderer: "+y.message),y}function Ke(){Me=new sp(N),Me.init(),ue=new yc(N,Me),ie=new Kd(N,Me,e,ue),J=new Hp(N,Me),ie.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),X=N.createFramebuffer(),I=N.createFramebuffer(),k=N.createFramebuffer(),we=new lp(N),ne=new Lp,de=new Wp(N,Me,J,ne,ie,ue,we),S=new rp(E),_=new uu(N),me=new Zd(N,_),U=new op(N,_,we,me),ee=new hp(N,U,_,me,we),j=new cp(N,ie,de),q=new $d(ne),K=new Ip(E,S,Me,ie,me,q),le=new qp(E,ne),ae=new Up,W=new Bp(Me),P=new Yd(E,S,J,ee,g,c),ce=new Vp(E,ee,ie),Ue=new Yp(N,we,ie,J),Y=new Jd(N,Me,we),ge=new ap(N,Me,we),we.programs=K.programs,E.capabilities=ie,E.extensions=Me,E.properties=ne,E.renderLists=ae,E.shadowMap=ce,E.state=J,E.info=we}v!==Rt&&(L=new up(v,t.width,t.height,a,r,s));let he=new $a(E,N);this.xr=he,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=Me.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Me.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(y){y!==void 0&&(fe=y,this.setSize(Ae,De,!1))},this.getSize=function(y){return y.set(Ae,De)},this.setSize=function(y,D,G=!0){if(he.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=y,De=D,t.width=Math.floor(y*fe),t.height=Math.floor(D*fe),G===!0&&(t.style.width=y+"px",t.style.height=D+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(Ae*fe,De*fe).floor()},this.setDrawingBufferSize=function(y,D,G){Ae=y,De=D,fe=G,t.width=Math.floor(y*G),t.height=Math.floor(D*G),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(v===Rt){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(Fe)},this.setViewport=function(y,D,G,O){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,D,G,O),J.viewport(te.copy(Fe).multiplyScalar(ei()).round())},this.getScissor=function(y){return y.copy(rt)},this.setScissor=function(y,D,G,O){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,D,G,O),J.scissor(Ie.copy(rt).multiplyScalar(ei()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){J.setScissorTest(et=y)},this.setOpaqueSort=function(y){We=y},this.setTransparentSort=function(y){vt=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,G=!0){let O=0;if(y){let z=!1;if(se!==null){let _e=se.texture.format;z=m.has(_e)}if(z){let _e=se.texture.type,Re=d.has(_e),xe=P.getClearColor(),Te=P.getClearAlpha(),Le=xe.r,Xe=xe.g,$e=xe.b;Re?(M[0]=Le,M[1]=Xe,M[2]=$e,M[3]=Te,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=Le,A[1]=Xe,A[2]=$e,A[3]=Te,N.clearBufferiv(N.COLOR,0,A))}else O|=N.COLOR_BUFFER_BIT}D&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),P.dispose(),ae.dispose(),W.dispose(),de.dispose(),ne.dispose(),S.dispose(),ee.dispose(),U.dispose(),me.dispose(),Ue.dispose(),K.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ac),he.removeEventListener("sessionend",Ec),Vn.stop()};function ze(y){y.preventDefault(),io("WebGLRenderer: Context Lost."),F=!0}function Ze(){io("WebGLRenderer: Context Restored."),F=!1;let y=we.autoReset,D=ce.enabled,G=ce.autoUpdate,O=ce.needsUpdate,z=ce.type;Ke(),we.autoReset=y,ce.enabled=D,ce.autoUpdate=G,ce.needsUpdate=O,ce.type=z}function Se(y){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ct(y){let D=y.target;D.removeEventListener("dispose",ct),Ht(D)}function Ht(y){yn(y),ne.remove(y)}function yn(y){let D=ne.get(y).programs;D!==void 0&&(D.forEach(function(G){K.releaseProgram(G)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,G,O,z,_e){D===null&&(D=ci);let Re=z.isMesh&&z.matrixWorld.determinantAffine()<0,xe=om(y,D,G,O,z);J.setMaterial(O,Re);let Te=G.index,Le=1;if(O.wireframe===!0){if(Te=U.getWireframeAttribute(G),Te===void 0)return;Le=2}let Xe=G.drawRange,$e=G.attributes.position,Ce=Xe.start*Le,je=(Xe.start+Xe.count)*Le;_e!==null&&(Ce=Math.max(Ce,_e.start*Le),je=Math.min(je,(_e.start+_e.count)*Le)),Te!==null?(Ce=Math.max(Ce,0),je=Math.min(je,Te.count)):$e!=null&&(Ce=Math.max(Ce,0),je=Math.min(je,$e.count));let Lt=je-Ce;if(Lt<0||Lt===1/0)return;me.setup(z,O,xe,G,Te);let ft,ht=Y;if(Te!==null&&(ft=_.get(Te),ht=ge,ht.setIndex(ft)),z.isMesh)O.wireframe===!0?(J.setLineWidth(O.wireframeLinewidth*ei()),ht.setMode(N.LINES)):ht.setMode(N.TRIANGLES);else if(z.isLine){let ti=O.linewidth;ti===void 0&&(ti=1),J.setLineWidth(ti*ei()),z.isLineSegments?ht.setMode(N.LINES):z.isLineLoop?ht.setMode(N.LINE_LOOP):ht.setMode(N.LINE_STRIP)}else z.isPoints?ht.setMode(N.POINTS):z.isSprite&&ht.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ti=z._multiDrawStarts,Pe=z._multiDrawCounts,ui=z._multiDrawCount,st=Te?_.get(Te).bytesPerElement:1,Hn=ne.get(O).currentProgram.getUniforms();for(let ii=0;ii<ui;ii++)Hn.setValue(N,"_gl_DrawID",ii),ht.render(ti[ii]/st,Pe[ii])}else if(z.isInstancedMesh)ht.renderInstances(Ce,Lt,z.count);else if(G.isInstancedBufferGeometry){let ti=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pe=Math.min(G.instanceCount,ti);ht.renderInstances(Ce,Lt,Pe)}else ht.render(Ce,Lt)};function wc(y,D,G,O){B!==null&&y.isNodeMaterial&&B.setObject(O,y),Mt===!0&&q.setState(y,G,!1),y.transparent===!0&&y.side===Mi&&y.forceSinglePass===!1?(y.side=_t,y.needsUpdate=!0,ps(y,D,O),y.side=Ni,y.needsUpdate=!0,ps(y,D,O),y.side=Mi):ps(y,D,O)}this.compile=function(y,D,G=null){G===null&&(G=y),B!==null&&B.renderStart(y,D,G),w=W.get(G),w.init(D),b.push(w),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),St=this.localClippingEnabled,Mt=q.init(this.clippingPlanes,St),Mt===!0&&q.setGlobalState(this.clippingPlanes,D),B!==null&&ce.render(w.state.shadowsArray,G,D);let O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let _e=z.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){let xe=_e[Re];wc(xe,G,D,z),O.add(xe)}else wc(_e,G,D,z),O.add(_e)}),w=b.pop(),B!==null&&B.renderEnd(),O},this.compileAsync=function(y,D,G=null){let O=this.compile(y,D,G);return new Promise(z=>{function _e(){if(O.forEach(function(Re){let Te=ne.get(Re).currentProgram;(Te===void 0||Te.isReady())&&O.delete(Re)}),O.size===0){z(y);return}setTimeout(_e,10)}Me.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ol=null;function rm(y){ol&&ol(y)}function Ac(){Vn.stop()}function Ec(){Vn.start()}let Vn=new Wa;Vn.setAnimationLoop(rm),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(y){ol=y,he.setAnimationLoop(y),y===null?Vn.stop():Vn.start()},he.addEventListener("sessionstart",Ac),he.addEventListener("sessionend",Ec),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(y,D);let G=he.enabled===!0&&he.isPresenting===!0,O=L!==null&&(se===null||G)&&L.begin(E,se);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,D,se),w=W.get(y,b.length),w.init(D),w.state.textureUnits=de.getTextureUnits(),b.push(w),nt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?It.setFromArrayCamera(D):Je.setFromProjectionMatrix(nt,Yt,D.reversedDepth),St=this.localClippingEnabled,Mt=q.init(this.clippingPlanes,St),C=ae.get(y,x.length),C.init(),x.push(C),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let Re=E.xr.getDepthSensingMesh();Re!==null&&al(Re,D,-1/0,E.sortObjects)}al(y,D,0,E.sortObjects),C.finish(),B!==null&&B.updateLights(w.state.lightsArray),E.sortObjects===!0&&C.sort(We,vt),hi=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,hi&&P.addToRenderList(C,y),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&q.beginShadows();let z=w.state.shadowsArray;if(ce.render(z,y,D),Mt===!0&&q.endShadows(),(O&&L.hasRenderPass())===!1){let Re=C.opaque,xe=C.transmissive;if(w.setupLights(),D.isArrayCamera){let Te=D.cameras;if(xe.length>0)for(let Le=0,Xe=Te.length;Le<Xe;Le++){let $e=Te[Le];Cc(Re,xe,y,$e)}hi&&P.render(y);for(let Le=0,Xe=Te.length;Le<Xe;Le++){let $e=Te[Le];Rc(C,y,$e,$e.viewport)}}else xe.length>0&&Cc(Re,xe,y,D),hi&&P.render(y),Rc(C,y,D)}se!==null&&V===0&&(de.updateMultisampleRenderTarget(se),de.updateRenderTargetMipmap(se)),O&&L.end(E),y.isScene===!0&&y.onAfterRender(E,y,D),me.resetDefaultState(),H=-1,Q=null,b.pop(),b.length>0?(w=b[b.length-1],de.setTextureUnits(w.state.textureUnits),Mt===!0&&q.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,B!==null&&B.renderEnd()};function al(y,D,G,O){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let Re=D.isArrayCamera?It:Je;if(!y.frustumCulled||y.intersectsFrustum(Re)){O&&Et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(nt);let xe=ee.update(y),Te=y.material;Te.visible&&C.push(y,xe,Te,G,Et.z,null,D)}}else if(y.isMesh||y.isLine||y.isPoints){let Re=D.isArrayCamera?It:Je;if(!y.frustumCulled||y.intersectsFrustum(Re)){let xe=ee.update(y),Te=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Et.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Et.copy(xe.boundingSphere.center)),Et.applyMatrix4(y.matrixWorld).applyMatrix4(nt)),Array.isArray(Te)){let Le=xe.groups;for(let Xe=0,$e=Le.length;Xe<$e;Xe++){let Ce=Le[Xe],je=Te[Ce.materialIndex];je&&je.visible&&C.push(y,xe,je,G,Et.z,Ce,D)}}else Te.visible&&C.push(y,xe,Te,G,Et.z,null,D)}}}let _e=y.children;for(let Re=0,xe=_e.length;Re<xe;Re++)al(_e[Re],D,G,O)}function Rc(y,D,G,O){let{opaque:z,transmissive:_e,transparent:Re}=y;w.setupLightsView(G),Mt===!0&&q.setGlobalState(E.clippingPlanes,G),O&&J.viewport(te.copy(O)),z.length>0&&Lo(z,D,G),_e.length>0&&Lo(_e,D,G),Re.length>0&&Lo(Re,D,G),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Cc(y,D,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let Ce=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Dt(1,1,{generateMipmaps:!0,type:Ce?Xt:Rt,minFilter:fi,samples:Math.max(4,ie.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}let _e=w.state.transmissionRenderTarget[O.id],Re=O.viewport||te;_e.setSize(Re.z*E.transmissionResolutionScale,Re.w*E.transmissionResolutionScale);let xe=E.getRenderTarget(),Te=E.getActiveCubeFace(),Le=E.getActiveMipmapLevel();E.setRenderTarget(_e),E.getClearColor($),ve=E.getClearAlpha(),ve<1&&E.setClearColor(16777215,.5),E.clear(),hi&&P.render(G);let Xe=E.toneMapping;E.toneMapping=Si;let $e=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),Mt===!0&&q.setGlobalState(E.clippingPlanes,O),Lo(y,G,O),de.updateMultisampleRenderTarget(_e),de.updateRenderTargetMipmap(_e),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let je=0,Lt=D.length;je<Lt;je++){let ft=D[je],{object:ht,geometry:ti,material:Pe,group:ui}=ft;if(Pe.side===Mi&&ht.layers.test(O.layers)){let st=Pe.side;Pe.side=_t,Pe.needsUpdate=!0,Pc(ht,G,O,ti,Pe,ui),Pe.side=st,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(de.updateMultisampleRenderTarget(_e),de.updateRenderTargetMipmap(_e))}E.setRenderTarget(xe,Te,Le),E.setClearColor($,ve),$e!==void 0&&(O.viewport=$e),E.toneMapping=Xe}function Lo(y,D,G){let O=D.isScene===!0?D.overrideMaterial:null;for(let z=0,_e=y.length;z<_e;z++){let Re=y[z],{object:xe,geometry:Te,group:Le}=Re,Xe=Re.material;Xe.allowOverride===!0&&O!==null&&(Xe=O),xe.layers.test(G.layers)&&Pc(xe,D,G,Te,Xe,Le)}}function Pc(y,D,G,O,z,_e){B!==null&&z.isNodeMaterial&&B.setObject(y,z),y.onBeforeRender(E,D,G,O,z,_e),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(E,D,G,O,y,_e),z.transparent===!0&&z.side===Mi&&z.forceSinglePass===!1?(z.side=_t,z.needsUpdate=!0,E.renderBufferDirect(G,D,O,z,y,_e),z.side=Ni,z.needsUpdate=!0,E.renderBufferDirect(G,D,O,z,y,_e),z.side=Mi):E.renderBufferDirect(G,D,O,z,y,_e),y.onAfterRender(E,D,G,O,z,_e)}function Ic(y){let D=0;for(let G of y)G.texture!==null&&D++;return D}function ps(y,D,G){D.isScene!==!0&&(D=ci);let O=ne.get(y),z=w.state.lights,_e=w.state.shadowsArray,Re=z.state.version,xe=K.getParameters(y,z.state,_e,D,G,w.state.lightProbeGridArray),Te=K.getProgramCacheKey(xe),Le=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;let Xe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=S.get(y.envMap||O.environment,Xe),O.envMapRotation=O.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Le===void 0&&(y.addEventListener("dispose",ct),Le=new Map,O.programs=Le,O.programVariants=new Map);let $e=Le.get(Te);if($e!==void 0){if(O.currentProgram===$e&&O.lightsStateVersion===Re)return Dc(y,xe),$e}else xe.uniforms=K.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,G,xe),y.onBeforeCompile(xe,E),$e=K.acquireProgram(xe,Te),Le.set(Te,$e),O.uniforms=xe.uniforms;let Ce=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=q.uniform),Dc(y,xe),O.needsLights=lm(y),O.lightsStateVersion=Re,O.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.sunLights.value=z.state.sun,Ce.sunLightShadows.value=z.state.sunShadow,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.sunShadowMatrix.value=z.state.sunShadowMatrix,Ce.sunShadowCascade.value=z.state.sunShadowCascade,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=Ic(w.state.lightProbeGridArray),O.currentProgram=$e,O.uniformsList=null,$e}function sm(y,D,G,O,z){let _e=ne.get(y),Re=_e.currentProgram.id+","+O+","+z,xe=_e.programVariants.get(Re);return xe===void 0?(xe=ps(y,D,G),_e.programVariants.set(Re,xe)):(_e.currentProgram=xe,_e.uniformsList=null,_e.outputColorSpace=O,_e.toneMapping=z),xe}function Lc(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=Gn.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Dc(y,D){let G=ne.get(y);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function om(y,D,G,O,z){D.isScene!==!0&&(D=ci),de.resetTextureUnits();let _e=D.fog,Re=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,xe=se===null?E.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:He.workingColorSpace,Te=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Le=S.get(O.envMap||Re,Te),Xe=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$e=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ce=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,Lt=!!G.morphAttributes.color,ft=Si;O.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ft=E.toneMapping);let ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ti=ht!==void 0?ht.length:0,Pe=ne.get(O),ui=w.state.lights;if(Mt===!0&&(St===!0||y!==Q)){let xt=y===Q&&O.id===H;q.setState(O,y,xt)}let st=!1,Hn=!1;O.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==ui.state.version||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==Le||O.fog===!0&&Pe.fog!==_e||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==q.numPlanes||Pe.numIntersection!==q.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==$e||Pe.morphTargets!==Ce||Pe.morphNormals!==je||Pe.morphColors!==Lt||Pe.morphTargetsCount!==ti||Pe.numLightProbeGrids!==Ic(w.state.lightProbeGridArray)?st=!0:(Pe.outputColorSpace!==xe||Pe.toneMapping!==ft)&&(Hn=!0):(st=!0,Pe.__version=O.version);let ii=Pe.currentProgram;(st===!0||Hn===!0)&&(ii=Hn===!0?sm(O,D,z,xe,ft):ps(O,D,z),B&&O.isNodeMaterial&&B.onUpdateProgram(O,ii,Pe));let Do=!1,vn=!1,Wn=!1,it=ii.getUniforms(),Jt=Pe.uniforms;if(J.useProgram(ii.program)&&(Do=!0,vn=!0,Wn=!0),O.id!==H&&(H=O.id,vn=!0),Do||Q!==y){J.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(N,"projectionMatrix",y.projectionMatrix),it.setValue(N,"viewMatrix",y.matrixWorldInverse);let Wt=it.map.cameraPosition;Wt!==void 0&&Wt.setValue(N,gi.setFromMatrixPosition(y.matrixWorld)),ie.logarithmicDepthBuffer&&it.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&it.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,vn=!0,Wn=!0)}if(Pe.needsLights&&(ui.state.sunShadowMap.length>0&&it.setValue(N,"sunShadowMap",ui.state.sunShadowMap,de),ui.state.directionalShadowMap.length>0&&it.setValue(N,"directionalShadowMap",ui.state.directionalShadowMap,de),ui.state.spotShadowMap.length>0&&it.setValue(N,"spotShadowMap",ui.state.spotShadowMap,de),ui.state.pointShadowMap.length>0&&it.setValue(N,"pointShadowMap",ui.state.pointShadowMap,de)),z.isSkinnedMesh){it.setOptional(N,z,"bindMatrix"),it.setOptional(N,z,"bindMatrixInverse");let xt=z.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),it.setValue(N,"boneTexture",xt.boneTexture,de))}z.isBatchedMesh&&(it.setOptional(N,z,"batchingTexture"),it.setValue(N,"batchingTexture",z._matricesTexture,de),it.setOptional(N,z,"batchingIdTexture"),it.setValue(N,"batchingIdTexture",z._indirectTexture,de),it.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&it.setValue(N,"batchingColorTexture",z._colorsTexture,de));let ki=G.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&j.update(z,G,ii),(vn||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,it.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(Jt.envMapIntensity.value=D.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Zp()),vn){if(it.setValue(N,"toneMappingExposure",E.toneMappingExposure),Pe.needsLights&&am(Jt,Wn),_e&&O.fog===!0&&le.refreshFogUniforms(Jt,_e),le.refreshMaterialUniforms(Jt,O,fe,De,w.state.transmissionRenderTarget[y.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let xt=T,Wt=0;for(let nn of w.state.lightProbeGridArray)nn.texture!==null&&(xt.textures[Wt]=nn.texture,xt.min[Wt]=nn.boundingBox.min,xt.max[Wt]=nn.boundingBox.max,xt.resolution[Wt]=nn.resolution,Wt++);for(let nn in xt)xt[nn].length=Wt;Jt.probesSH.value=xt.textures,Jt.probesMin.value=xt.min,Jt.probesMax.value=xt.max,Jt.probesResolution.value=xt.resolution}Gn.upload(N,Lc(Pe),Jt,de)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Gn.upload(N,Lc(Pe),Jt,de),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&it.setValue(N,"center",z.center),it.setValue(N,"modelViewMatrix",z.modelViewMatrix),it.setValue(N,"normalMatrix",z.normalMatrix),it.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let xt=O.uniformsGroups;for(let Wt=0,nn=xt.length;Wt<nn;Wt++){let Uc=xt[Wt];Ue.update(Uc,ii),Ue.bind(Uc,ii)}}return ii}function am(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function lm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(y,D,G){let O=ne.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ne.get(y.texture).__webglTexture=D,ne.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let G=ne.get(y);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,G=0){se=y,Z=D,V=G;let O=null,z=!1,_e=!1;if(y){let xe=ne.get(y);if(xe.__useDefaultFramebuffer!==void 0){J.bindFramebuffer(N.FRAMEBUFFER,xe.__webglFramebuffer),te.copy(y.viewport),Ie.copy(y.scissor),Ve=y.scissorTest,J.viewport(te),J.scissor(Ie),J.setScissorTest(Ve),H=-1;return}else if(xe.__webglFramebuffer===void 0)de.setupRenderTarget(y);else if(xe.__hasExternalTextures)de.rebindTextures(y,ne.get(y.texture).__webglTexture,ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Xe=y.depthTexture;if(xe.__boundDepthTexture!==Xe){if(Xe!==null&&ne.has(Xe)&&(y.width!==Xe.image.width||y.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(y)}}let Te=y.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);let Le=ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?O=Le[D][G]:O=Le[D],z=!0):y.samples>0&&de.useMultisampledRTT(y)===!1?O=ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,te.copy(y.viewport),Ie.copy(y.scissor),Ve=y.scissorTest}else te.copy(Fe).multiplyScalar(fe).floor(),Ie.copy(rt).multiplyScalar(fe).floor(),Ve=et;if(G!==0&&(O=X),J.bindFramebuffer(N.FRAMEBUFFER,O)&&J.drawBuffers(y,O),J.viewport(te),J.scissor(Ie),J.setScissorTest(Ve),z){let xe=ne.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,G)}else if(_e){let xe=D;for(let Te=0;Te<y.textures.length;Te++){let Le=ne.get(y.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Le.__webglTexture,G,xe)}}else if(y!==null&&G!==0){let xe=ne.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,G)}H=-1};function Nc(y){let D=ne.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=ie.textureFormatReadable(y.format),D.__typeReadable=ie.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,G,O,z,_e,Re,xe=0){if(!(y&&y.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Te=Te[Re],Array.isArray(Te)&&(Te=Te[0])),Te){J.bindFramebuffer(N.FRAMEBUFFER,Te);try{let Le=y.textures[xe],Xe=Le.format,$e=Le.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let Ce=Nc(Le);if(Ce.__formatReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-O&&G>=0&&G<=y.height-z&&N.readPixels(D,G,O,z,ue.convert(Xe),ue.convert($e),_e)}finally{let Le=se!==null?ne.get(se).__webglFramebuffer:null;J.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(y,D,G,O,z,_e,Re,xe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Te=Te[Re],Array.isArray(Te)&&(Te=Te[0])),Te)if(D>=0&&D<=y.width-O&&G>=0&&G<=y.height-z){J.bindFramebuffer(N.FRAMEBUFFER,Te);let Le=y.textures[xe],Xe=Le.format,$e=Le.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let Ce=Nc(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(D,G,O,z,ue.convert(Xe),ue.convert($e),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Lt=se!==null?ne.get(se).__webglFramebuffer:null;J.bindFramebuffer(N.FRAMEBUFFER,Lt);let ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gh(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(je),N.deleteSync(ft),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,G=0){let O=Math.pow(2,-G),z=Math.floor(y.image.width*O),_e=Math.floor(y.image.height*O),Re=D!==null?D.x:0,xe=D!==null?D.y:0;de.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,Re,xe,z,_e),J.unbindTexture()},this.copyTextureToTexture=function(y,D,G=null,O=null,z=0,_e=0){let Re,xe,Te,Le,Xe,$e,Ce,je,Lt,ft=y.isCompressedTexture?y.mipmaps[_e]:y.image;if(G!==null)Re=G.max.x-G.min.x,xe=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Xe=G.min.y,$e=G.isBox3?G.min.z:0;else{let it=Math.pow(2,-z);Re=Math.floor(ft.width*it),xe=Math.floor(ft.height*it),y.isDataArrayTexture?Te=ft.depth:y.isData3DTexture?Te=Math.floor(ft.depth*it):Te=1,Le=0,Xe=0,$e=0}O!==null?(Ce=O.x,je=O.y,Lt=O.z):(Ce=0,je=0,Lt=0);let ht=ue.convert(D.format),ti=ue.convert(D.type),Pe;D.isData3DTexture?(de.setTexture3D(D,0),Pe=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(de.setTexture2DArray(D,0),Pe=N.TEXTURE_2D_ARRAY):(de.setTexture2D(D,0),Pe=N.TEXTURE_2D),J.activeTexture(N.TEXTURE0),J.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),J.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),J.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let ui=J.getParameter(N.UNPACK_ROW_LENGTH),st=J.getParameter(N.UNPACK_IMAGE_HEIGHT),Hn=J.getParameter(N.UNPACK_SKIP_PIXELS),ii=J.getParameter(N.UNPACK_SKIP_ROWS),Do=J.getParameter(N.UNPACK_SKIP_IMAGES);J.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),J.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),J.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),J.pixelStorei(N.UNPACK_SKIP_ROWS,Xe),J.pixelStorei(N.UNPACK_SKIP_IMAGES,$e);let vn=y.isDataArrayTexture||y.isData3DTexture,Wn=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let it=ne.get(y),Jt=ne.get(D),ki=ne.get(it.__renderTarget),xt=ne.get(Jt.__renderTarget);J.bindFramebuffer(N.READ_FRAMEBUFFER,ki.__webglFramebuffer),J.bindFramebuffer(N.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Wt=0;Wt<Te;Wt++)vn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(y).__webglTexture,z,$e+Wt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(D).__webglTexture,_e,Lt+Wt)),N.blitFramebuffer(Le,Xe,Le+Re,Xe+xe,Ce,je,Ce+Re,je+xe,N.DEPTH_BUFFER_BIT,N.NEAREST);J.bindFramebuffer(N.READ_FRAMEBUFFER,null),J.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||ne.has(y)){let it=ne.get(y),Jt=ne.get(D);J.bindFramebuffer(N.READ_FRAMEBUFFER,I),J.bindFramebuffer(N.DRAW_FRAMEBUFFER,k);for(let ki=0;ki<Te;ki++)vn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,it.__webglTexture,z,$e+ki):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,it.__webglTexture,z),Wn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jt.__webglTexture,_e,Lt+ki):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jt.__webglTexture,_e),z!==0?N.blitFramebuffer(Le,Xe,Le+Re,Xe+xe,Ce,je,Ce+Re,je+xe,N.COLOR_BUFFER_BIT,N.NEAREST):Wn?N.copyTexSubImage3D(Pe,_e,Ce,je,Lt+ki,Le,Xe,Re,xe):N.copyTexSubImage2D(Pe,_e,Ce,je,Le,Xe,Re,xe);J.bindFramebuffer(N.READ_FRAMEBUFFER,null),J.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Wn?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Pe,_e,Ce,je,Lt,Re,xe,Te,ht,ti,ft.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Pe,_e,Ce,je,Lt,Re,xe,Te,ht,ft.data):N.texSubImage3D(Pe,_e,Ce,je,Lt,Re,xe,Te,ht,ti,ft):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_e,Ce,je,Re,xe,ht,ti,ft.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_e,Ce,je,ft.width,ft.height,ht,ft.data):N.texSubImage2D(N.TEXTURE_2D,_e,Ce,je,Re,xe,ht,ti,ft);J.pixelStorei(N.UNPACK_ROW_LENGTH,ui),J.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st),J.pixelStorei(N.UNPACK_SKIP_PIXELS,Hn),J.pixelStorei(N.UNPACK_SKIP_ROWS,ii),J.pixelStorei(N.UNPACK_SKIP_IMAGES,Do),_e===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Pe),J.unbindTexture()},this.initRenderTarget=function(y){ne.get(y).__webglFramebuffer===void 0&&de.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?de.setTextureCube(y,0):y.isData3DTexture?de.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?de.setTexture2DArray(y,0):de.setTexture2D(y,0),J.unbindTexture()},this.resetState=function(){Z=0,V=0,se=null,J.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var Jp={type:"change"},Mc={type:"start"},$p={type:"end"},ja=new Ri,Kp=new oi,U0=Math.cos(70*xl.DEG2RAD),Gt=new R,vi=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vc=1e-6,Qa=class extends To{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new bt,this._lastTargetPosition=new R,this._quat=new bt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cs,this._sphericalDelta=new cs,this._scale=1,this._panOffset=new R,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new R,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O0.bind(this),this._onPointerDown=F0.bind(this),this._onPointerUp=B0.bind(this),this._onContextMenu=X0.bind(this),this._onMouseWheel=G0.bind(this),this._onKeyDown=V0.bind(this),this._onTouchStart=H0.bind(this),this._onTouchMove=W0.bind(this),this._onMouseDown=z0.bind(this),this._onMouseMove=k0.bind(this),this._interceptControlDown=q0.bind(this),this._interceptControlUp=Y0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ot.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jp),this.update(),this.state=ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=vi:i>Math.PI&&(i-=vi),r<-Math.PI?r+=vi:r>Math.PI&&(r-=vi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Gt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ja.origin.copy(this.object.position),ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ja.direction))<U0?this.object.lookAt(this.target):(Kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),ja.intersectPlane(Kp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>vc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vc||this._lastTargetPosition.distanceToSquared(this.target)>vc?(this.dispatchEvent(Jp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vi/60*this.autoRotateSpeed*e:vi/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Gt.copy(r).sub(this.target);let s=Gt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function F0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function O0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function B0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($p),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function z0(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case Xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case Xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Mc)}function k0(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function G0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(Mc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($p))}function V0(n){this.enabled!==!1&&this._handleKeyDown(n)}function H0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qn.ROTATE:if(this.enableRotate===!1){this.state=ot.NONE;break}this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case qn.PAN:if(this.enablePan===!1){this.state=ot.NONE;break}this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Mc)}function W0(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function X0(n){this.enabled!==!1&&n.preventDefault()}function q0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Io=[{k:"google",n:"Google, every product",d:"3.2 quadrillion tokens a month, May 2026",v:32e14/30},{k:"api",n:"Google\u2019s API alone",d:"Nearly 32 billion tokens a minute, Oct 2026",v:32e9*1440},{k:"billion",n:"A billion people, one answer each",d:"1,000 tokens apiece, every day. My scenario",v:1e12},{k:"agent",n:"One heavy coding agent",d:"50 million tokens a day. My scenario",v:5e7}],ds=[{k:"h100",n:"H100",sys:"DGX H100: 8 GPUs, 10.2 kW",kw:10.2/8,rack:32,rackNote:"4 servers a rack",thr:2e3,thrNote:"My estimate. NVIDIA puts B200 at more than 4\xD7 H200 on Llama 3.3 70B, and H100 is no faster than H200."},{k:"b200",n:"B200",sys:"DGX B200: 8 GPUs, about 14.3 kW",kw:14.3/8,rack:32,rackNote:"4 servers a rack",thr:1e4,thrNote:"NVIDIA, InferenceMAX: Llama 3.3 70B at 50 tokens a second per user."},{k:"gb200",n:"GB200 NVL72",sys:"72 GPUs in one rack, about 120 kW",kw:120/72,rack:72,rackNote:"72 GPUs a rack",thr:1e4,thrNote:"My estimate, from NVIDIA\u2019s 4\xD7 per-GPU throughput over H200."},{k:"gb300",n:"GB300 NVL72",sys:"72 GPUs in one rack, 132\u2013140 kW",kw:136/72,rack:72,rackNote:"72 GPUs a rack",thr:15e3,thrNote:"My estimate, from NVIDIA\u2019s 1.5\xD7 over GB200."}],Tc=[{k:"7ha",n:"Gas turbine",m:"GE Vernova 7HA.03",sing:"GE Vernova 7HA.03 gas turbine",plur:"GE Vernova 7HA.03 gas turbines",one:"turbine",many:"turbines",mw:430,shape:"turbine",link:["molecules","Molecules are easy. Machines are hard."]},{k:"lm6000",n:"Aeroderivative",m:"GE Vernova LM6000PF+",sing:"GE Vernova LM6000 turbine",plur:"GE Vernova LM6000 turbines",one:"turbine",many:"turbines",mw:56.9,shape:"aero",link:["molecules","Molecules are easy. Machines are hard."]},{k:"bloom",n:"Fuel cells",m:"Bloom Energy Server",sing:"Bloom Energy Server",plur:"Bloom Energy Servers",one:"Energy Server",many:"Energy Servers",mw:.325,shape:"cell",link:["bloom","The power plant that ships like a server."]},{k:"ap1000",n:"Reactor",m:"Westinghouse AP1000",sing:"Westinghouse AP1000 reactor",plur:"Westinghouse AP1000 reactors",one:"reactor",many:"reactors",mw:1117,shape:"reactor",probe:"Nuclear is the 2030s answer to a 2020s problem."}],Z0=[{v:2400,t:"H200 \xB7 Llama 70B"},{v:1e4,t:"B200 \xB7 Llama 70B"},{v:3e4,t:"B200 \xB7 gpt-oss"},{v:6e4,t:"B200 peak"}],J0=1200,Qp=6,em=17,el=Math.log10(500),Sc=5,xr=(n,e)=>n.find(t=>t.k===e)||n[0],tm={t:Io[0].v,chip:"gb200",thr:1e4,u:.5,pue:1.09,src:"7ha",preset:"google"};function K0(n){let e=xr(ds,n.chip),t=xr(Tc,n.src),i=n.t/86400,r=i/(n.thr*n.u),s=r/e.rack,o=r*e.kw/1e3,a=o*n.pue,c=a/t.mw,l=Math.max(1,Math.ceil(c-1e-9)),h=e.kw*1e3*n.pue/(n.thr*n.u);return{c:e,p:t,tps:i,chips:r,racks:s,itMW:o,facMW:a,units:c,build:l,jTok:h,whAnswer:h*1e3/3600,abilene:a/J0}}var $0=[[1e15,"quadrillion"],[1e12,"trillion"],[1e9,"billion"],[1e6,"million"],[1e3,"thousand"]],Vt=(n,e=3)=>{if(n===0)return"0";let t=Math.max(0,e-1-Math.floor(Math.log10(Math.abs(n)))),i=Math.min(t,Math.abs(n)<1?8:2);return(+n.toFixed(i)).toLocaleString("en-US",{maximumFractionDigits:i})},Po=(n,e=3)=>{for(let[t,i]of $0)if(n>=t*.9995&&(t>=1e6||n<1e6))return t===1e3?Math.round(n).toLocaleString("en-US"):`${Vt(n/t,e)} ${i}`;return Vt(n,e)},tl=n=>n>=1e6?Po(n):n>=10?Math.round(n).toLocaleString("en-US"):(n>=1,Vt(n,2)),gr=n=>n>=1e3?`${Vt(n/1e3)} GW`:n>=1?`${Vt(n)} MW`:n>=.001?`${Vt(n*1e3)} kW`:`${Vt(n*1e6)} W`,j0=n=>n>=1?`${Vt(n)} J`:`${Vt(n*1e3)} mJ`,Q0=n=>n>=1?`${Vt(n)} Wh`:`${Vt(n*1e3)} mWh`,jp=n=>`${Math.round(n*100)}%`,mr=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function e_(){let n=new URLSearchParams(location.search),e={...tm},t=(a,c,l)=>{let h=parseFloat(n.get(a));return isFinite(h)?Math.min(l,Math.max(c,h)):null},i=t("t",10**Qp,10**em);i&&(e.t=i,e.preset=(Io.find(a=>Math.abs(a.v-i)/a.v<.001)||{}).k||null),n.get("chip")&&ds.some(a=>a.k===n.get("chip"))&&(e.chip=n.get("chip"),e.thr=xr(ds,e.chip).thr);let r=t("thr",10**el,10**Sc);r&&(e.thr=r);let s=t("u",10,100);s&&(e.u=s/100);let o=t("pue",1.05,1.6);return o&&(e.pue=o),n.get("src")&&Tc.some(a=>a.k===n.get("src"))&&(e.src=n.get("src")),e}function t_(n){let e=new URLSearchParams({t:n.t.toPrecision(4).replace("e+","e"),chip:n.chip,thr:Math.round(n.thr),u:Math.round(n.u*100),pue:n.pue.toFixed(2),src:n.src});try{history.replaceState(null,"",`${location.pathname}?${e}`)}catch{}}var pt=(n,e=document)=>e.querySelector(n),fs=(n,e=document)=>[...e.querySelectorAll(n)],yt=e_(),im=pt("#panel");im.innerHTML=`
  <section class="ctl">
    <div class="ctl-h"><h2>Tokens served a day</h2><output id="oT"></output></div>
    <input type="range" id="rT" min="${Qp}" max="${em}" step="0.01" aria-label="Tokens served a day, on a log scale">
    <div class="scale"><span>1 million</span><span>1 trillion</span><span>100 quadrillion</span></div>
    <div class="presets" role="group" aria-label="Scenarios">${Io.map(n=>`<button type="button" data-k="${n.k}"><b>${n.n}</b><small>${n.d}</small></button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h2>Chip</h2><output id="oC"></output></div>
    <div class="seg" role="group" aria-label="Chip">${ds.map(n=>`<button type="button" data-k="${n.k}">${n.n}</button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h2>Tokens a second, per chip</h2><output id="oThr"></output></div>
    <div class="rail-wrap"><input type="range" id="rThr" min="${el}" max="${Sc}" step="0.005" aria-label="Tokens a second each chip serves">
      <div class="ticks" aria-hidden="true">${Z0.map((n,e)=>`<i class="${e%2?"lo":""}" style="left:${((Math.log10(n.v)-el)/(Sc-el)*100).toFixed(2)}%"><span>${n.t}</span></i>`).join("")}</div></div>
    <p class="note" id="nThr"></p>
  </section>
  <section class="ctl two">
    <div><div class="ctl-h"><h2>Average load</h2><output id="oU"></output></div>
      <input type="range" id="rU" min="10" max="100" step="1" aria-label="Average share of capacity in use">
      <p class="note">My assumption. Fleets are built for the peak, not the average.</p></div>
    <div><div class="ctl-h"><h2>Facility overhead (PUE)</h2><output id="oP"></output></div>
      <input type="range" id="rP" min="1.05" max="1.6" step="0.01" aria-label="Power usage effectiveness">
      <p class="note">Google\u2019s fleet averaged 1.09 in 2025. Newer liquid-cooled sites run 1.1 to 1.3.</p></div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h2>Power it with</h2></div>
    <div class="srcs" role="group" aria-label="Power source">${Tc.map(n=>`<button type="button" data-k="${n.k}"><b>${n.n}</b><small>${n.m} \xB7 ${gr(n.mw)}</small></button>`).join("")}</div>
    <p class="note" id="nSrc"></p>
  </section>
  <section class="bom" aria-labelledby="bomH">
    <h2 id="bomH">The bill of materials</h2>
    <ol id="bom"></ol>
  </section>
  <div class="acts"><button type="button" id="share">Copy a link to this scenario</button><button type="button" id="reset" class="quiet">Reset</button></div>`;var il=pt("#rT"),nl=pt("#rThr"),rl=pt("#rU"),sl=pt("#rP");function i_(){il.value=Math.log10(yt.t),nl.value=Math.log10(yt.thr),rl.value=Math.round(yt.u*100),sl.value=yt.pue,fs(".presets button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===yt.preset))),fs(".seg button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===yt.chip))),fs(".srcs button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.k===yt.src))),[il,nl,rl,sl].forEach(n=>n.style.setProperty("--f",`${((n.value-n.min)/(n.max-n.min)*100).toFixed(2)}%`))}function nm(){let n=K0(yt),e=n.c,t=n.p;pt("#oT").textContent=Po(yt.t),pt("#oC").textContent=e.sys,pt("#oThr").textContent=Math.round(yt.thr).toLocaleString("en-US");let i=Math.abs(yt.thr-e.thr)/e.thr<.01;pt("#nThr").innerHTML=i?mr(e.thrNote):`You\u2019ve set your own number. <button type="button" class="link" id="bench">Use the ${mr(e.n)} default (${e.thr.toLocaleString("en-US")})</button>`,pt("#oU").textContent=jp(yt.u),pt("#oP").textContent=yt.pue.toFixed(2),pt("#nSrc").innerHTML=t.link?`Ties to my thesis <a href="../#${t.link[0]}">${mr(t.link[1])}</a>`:`A thesis I\u2019m still testing: <em>${mr(t.probe)}</em>`;let r=n.units>=1;pt("#aBig").textContent=r?n.build.toLocaleString("en-US"):n.units>=.01?`${Math.round(n.units*100)}%`:`${Vt(n.units*100,2)}%`,pt("#aWhat").textContent=r?`${n.build===1?t.sing:t.plur} to build`:`of one ${t.sing}`,pt("#aSub").textContent=r?`${gr(n.facMW)} of load is ${Vt(n.units,3)} ${n.units===1?t.one:t.many} at full output, so you build ${n.build.toLocaleString("en-US")}.`:`${gr(n.facMW)} of load, running on ${e.n} chips.`;let s=[["Tokens a day",Po(yt.t),yt.preset?xr(Io,yt.preset).n:"Your number"],["Tokens a second",Po(n.tps),"\xF7 86,400 seconds"],["Chips",tl(n.chips),`\xF7 (${Math.round(yt.thr).toLocaleString("en-US")} a second \xD7 ${jp(yt.u)} load)`],["Racks",tl(n.racks),`\xF7 ${e.rack} GPUs a rack (${e.rackNote.replace(/ a rack$/,"")})`],["IT power",gr(n.itMW),`\xD7 ${Vt(e.kw,3)} kW a chip, with its share of the server`],["Facility power",gr(n.facMW),`\xD7 ${yt.pue.toFixed(2)} PUE for cooling and losses`],[t.many[0].toUpperCase()+t.many.slice(1),r?`${Vt(n.units,3)} \u2192 build ${n.build.toLocaleString("en-US")}`:`${Vt(n.units,2)} of one`,`\xF7 ${gr(t.mw)} each`],["Per token, at the wall",j0(n.jTok),`A 1,000-token answer: ${Q0(n.whAnswer)}. Google measured 0.24 Wh for its median prompt.`],["Against Abilene",n.abilene>=.01?`${Vt(n.abilene,2)}\xD7`:"under 1%","Stargate Abilene is planned at 1.2 GW"]];pt("#bom").innerHTML=s.map(([o,a,c],l)=>`<li style="--i:${l}"><span class="k">${mr(o)}</span><b>${mr(a)}</b><span class="n">${mr(c)}</span></li>`).join(""),i_(),t_(yt),bc&&bc.update(n,yt)}var _n=n=>{Object.assign(yt,n),nm()};il.addEventListener("input",()=>_n({t:10**+il.value,preset:null}));nl.addEventListener("input",()=>_n({thr:10**+nl.value}));rl.addEventListener("input",()=>_n({u:+rl.value/100}));sl.addEventListener("input",()=>_n({pue:+sl.value}));fs(".presets button").forEach(n=>n.addEventListener("click",()=>_n({t:xr(Io,n.dataset.k).v,preset:n.dataset.k})));fs(".seg button").forEach(n=>n.addEventListener("click",()=>_n({chip:n.dataset.k,thr:xr(ds,n.dataset.k).thr})));fs(".srcs button").forEach(n=>n.addEventListener("click",()=>_n({src:n.dataset.k})));im.addEventListener("click",n=>{n.target.closest("#bench")&&_n({thr:xr(ds,yt.chip).thr})});pt("#reset").addEventListener("click",()=>_n({...tm}));pt("#share").addEventListener("click",async()=>{let n=pt("#share");try{await navigator.clipboard.writeText(location.href),n.textContent="Link copied"}catch{n.textContent="Copy the address bar to share"}setTimeout(()=>{n.textContent="Copy a link to this scenario"},2200)});var Co=matchMedia("(prefers-reduced-motion: reduce)").matches,Zi=matchMedia("(max-width: 860px)").matches,bc=null;try{bc=n_()}catch{document.body.classList.add("no-gl")}nm();function n_(){let n=pt("#stage"),e=pt("#cv"),t=new Ro({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.outputColorSpace=Bt,t.toneMapping=vr,t.toneMappingExposure=1.05,t.shadowMap.enabled=!Zi,t.shadowMap.type=Mn;let i=462877,r=new Gr;r.fog=new kr(i,40,160);let s=new At(38,1,.1,2e3);s.position.set(34,26,40);let o=new Qa(s,e);o.enableDamping=!0,o.dampingFactor=.08,o.autoRotate=!Co,o.autoRotateSpeed=.45,o.maxPolarAngle=Math.PI*.47,o.minPolarAngle=Math.PI*.12,o.enablePan=!1,o.addEventListener("start",()=>{o.autoRotate=!1,n.classList.add("touched")}),r.add(new os(12374783,.22)),r.add(new ss(10273023,i,.55));let a=new pr(15003391,1.55);a.position.set(40,60,30),a.castShadow=!Zi,a.shadow.mapSize.set(2048,2048),a.shadow.bias=-8e-4,r.add(a,a.target);let c=new pr(4183752,.55);c.position.set(-50,30,-40),r.add(c);let l=new bo(600,150,2244700,1386557);l.material.transparent=!0,l.material.opacity=.55,r.add(l);let h=new lt(new Un(600,600),new mi({color:528927,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-.02,h.receiveShadow=!0,r.add(h);let p={slab:new mi({color:991283,roughness:.85,metalness:.1}),rack:new mi({color:1386815,roughness:.55,metalness:.45}),led:new Ci({color:4183752}),steel:new mi({color:9413559,roughness:.38,metalness:.7}),dark:new mi({color:2834261,roughness:.6,metalness:.5}),gen:new mi({color:2244700,roughness:.5,metalness:.4}),cell:new mi({color:13951984,roughness:.45,metalness:.15}),concrete:new mi({color:12175316,roughness:.8,metalness:.05}),glow:new Ci({color:16029562,transparent:!0,opacity:.85,blending:_r,depthWrite:!1})},f=(()=>{let re=document.createElement("canvas");re.width=re.height=128;let Me=re.getContext("2d");Me.fillStyle="#0f2033",Me.fillRect(0,0,128,128),Me.strokeStyle="rgba(63,214,200,.22)",Me.lineWidth=2,Me.strokeRect(1,1,126,126);let ie=new jr(re);return ie.wrapS=ie.wrapT=wn,ie.colorSpace=Bt,ie})(),u=(()=>{let re=document.createElement("canvas");re.width=re.height=64;let Me=re.getContext("2d"),ie=Me.createRadialGradient(32,32,0,32,32,32);return ie.addColorStop(0,"rgba(255,255,255,1)"),ie.addColorStop(.35,"rgba(190,250,244,.85)"),ie.addColorStop(1,"rgba(63,214,200,0)"),Me.fillStyle=ie,Me.fillRect(0,0,64,64),new jr(re)})(),g={rack:new jt(.7,2,1.1).translate(0,1,0),led:new jt(.5,.06,.02).translate(0,0,0),tBody:new Nn(1,1.15,4.4,20).rotateZ(Math.PI/2).translate(0,1.25,0),tGen:new jt(1.9,2,2).translate(3.3,1,0),tStack:new Nn(.55,.65,5.6,16).translate(-2.9,2.8,0),aBox:new jt(3.6,2.2,1.8).translate(0,1.1,0),aStack:new Nn(.34,.38,3.6,12).translate(-1.3,2.9,0),cBox:new jt(1.25,1.05,.7).translate(0,.525,0),cStripe:new jt(1.26,.08,.71).translate(0,.82,0),rCont:new Nn(2.3,2.3,3.6,28).translate(0,1.8,0),rDome:new ur(2.3,28,14,0,Math.PI*2,0,Math.PI/2).translate(0,3.6,0),rTower:new Ba([[3.2,0],[2.6,2.5],[2.05,5],[2,6.2],[2.2,7.6]].map(([re,Me])=>new oe(re,Me)),32),glow:new ur(.42,12,8),pulse:new ur(.2,10,8)},v={turbine:{foot:[9,4.4],cap:Zi?60:120,parts:[["tBody","steel"],["tGen","gen"],["tStack","dark"]],hot:[[-2.9,5.7,0]],top:5.6},aero:{foot:[5.2,3],cap:Zi?120:240,parts:[["aBox","steel"],["aStack","dark"]],hot:[[-1.3,4.75,0]],top:4.7},cell:{foot:[1.65,1.15],cap:Zi?400:900,parts:[["cBox","cell"],["cStripe","led"]],hot:[],top:1.1},reactor:{foot:[9,15],cap:Zi?24:48,parts:[["rCont","concrete"],["rDome","concrete"],["rTower","concrete",[0,0,6.6]]],hot:[],top:7.6,steam:[0,7.8,6.6]}},m=new Ai,d=new Ai,M=new Ai;r.add(m,d,M);let A=new Ye,T=re=>{re.children.slice().forEach(Me=>{re.remove(Me),Me.geometry&&!Object.values(g).includes(Me.geometry)&&Me.geometry.dispose()})},C=(re,Me)=>{let ie=1;for(;re/ie>Me;)ie*=10;return{k:ie,n:Math.max(1,Math.round(re/ie))}},w=(re,Me)=>{let ie=Math.max(1,Math.ceil(Math.sqrt(re*Me)));return{cols:ie,rows:Math.ceil(re/ie)}},x=1,b=0,L=null,E=null,F={};function B(re){T(m);let Me=C(re,Zi?500:900),{cols:ie,rows:J}=w(Me.n,1.5),we=1.05,ne=1.75,de=ie*we+2.4,S=J*ne+2.4,_=p.slab.clone();_.map=f.clone(),_.map.needsUpdate=!0,_.map.repeat.set(de/1.6,S/1.6);let U=new lt(new jt(de,.36,S).translate(0,.18,0),_);U.receiveShadow=!0,m.add(U);let ee=new pi(new Fa(U.geometry),new wt({color:4183752,transparent:!0,opacity:.35}));m.add(ee);let K=new Qi(g.rack,p.rack,Me.n),le=new Qi(g.led,p.led,Me.n*3);K.castShadow=!0,K.receiveShadow=!0,K.instanceMatrix.setUsage(to),le.instanceMatrix.setUsage(to);let ae=[];for(let W=0;W<Me.n;W++){let q=W%ie,ce=Math.floor(W/ie);ae.push([(q-(ie-1)/2)*we,.36,(ce-(J-1)/2)*ne])}return m.add(K,le),L={b:Me,w:de,d:S,body:K,led:le,spots:ae,top:2.4},L}function X(re,Me){T(d);let ie=v[Me],J=C(re,ie.cap),{cols:we,rows:ne}=w(J.n,ie.foot[1]/ie.foot[0]*1.4),de=we*ie.foot[0],S=ne*ie.foot[1],_=new lt(new jt(de+2,.12,S+2).translate(0,.06,0),new mi({color:727080,roughness:.95}));_.receiveShadow=!0,d.add(_);let U=ie.parts.map(([ae,W,q])=>{let ce=new Qi(g[ae],p[W],J.n);return ce.castShadow=!0,ce.receiveShadow=!0,ce.instanceMatrix.setUsage(to),ce.userData.off=q||[0,0,0],d.add(ce),ce}),ee=ie.hot.length?new Qi(g.glow,p.glow,J.n*ie.hot.length):null;ee&&d.add(ee);let K=[];for(let ae=0;ae<J.n;ae++){let W=ae%we,q=Math.floor(ae/we);K.push([(W-(we-1)/2)*ie.foot[0],.12,(q-(ne-1)/2)*ie.foot[1]-(Me==="reactor"?3.3:0)])}let le=null;if(ie.steam){let ae=Math.min(J.n,24)*14,W=new Float32Array(ae*3),q=new Be;q.setAttribute("position",new Tt(W,3)),le=new lr(q,new fn({size:2.6,map:u,color:14674419,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0})),le.userData.n=ae,d.add(le)}return E={b:J,w:de+2,d:S+2,meshes:U,hot:ee,spots:K,S:ie,shape:Me,steam:le,top:ie.top},E}let I=Zi?900:1800,k=new Float32Array(I*3),Z=new Float32Array(I),V=new Be;V.setAttribute("position",new Tt(k,3));let se=new lr(V,new fn({size:.32,map:u,color:9300191,transparent:!0,depthWrite:!1,blending:_r,sizeAttenuation:!0}));r.add(se);let H=[],Q=null,te=[];function Ie(){T(M),te.forEach(ie=>ie.geometry.dispose()),te=[],H=[];let re=Math.min(6,E.spots.length);Array.from({length:re},(ie,J)=>E.spots[Math.floor(J*E.spots.length/re)]).forEach((ie,J)=>{let we=new R(E.pos.x+ie[0]*E.sc,E.top*E.sc*.55,ie[2]*E.sc+E.pos.z),ne=(J/Math.max(1,re-1)-.5)*L.d*.7,de=new R(-L.w/2+.4,1.4,ne),S=we.clone().lerp(de,.5);S.y=Math.max(we.y,de.y)+Math.max(4,we.distanceTo(de)*.18);let _=new fo([we,S,de]);H.push(_);let U=new zi(new Be().setFromPoints(_.getPoints(48)),new wt({color:16029562,transparent:!0,opacity:.28}));M.add(U),te.push(U)}),Q=new Qi(g.pulse,p.glow,H.length*8),Q.instanceMatrix.setUsage(to),M.add(Q)}function Ve(){for(let re=0;re<I;re++)k[re*3]=(Math.random()-.5)*L.w*.92,k[re*3+1]=L.top+Math.random()*$(),k[re*3+2]=(Math.random()-.5)*L.d*.92,Z[re]=.6+Math.random()*.8;V.attributes.position.needsUpdate=!0}let $=()=>Math.max(10,Math.max(L.w,L.d)*.55),ve=pt("#labels");ve.innerHTML='<span class="lb" id="lbT"></span><span class="lb" id="lbH"></span><span class="lb" id="lbY"></span>';let Ae={T:pt("#lbT"),H:pt("#lbH"),Y:pt("#lbY")},De={T:new R,H:new R,Y:new R},fe=null;function We(){let re=E.pos.x-E.w*E.sc/2,Me=L.w/2,ie=(re+Me)/2,J=Math.max(Me-re,L.d,E.d*E.sc,E.top*E.sc*1.5),we=new R(ie,Math.min(6,J*.06),0),ne=J*(Zi?1.7:1.42)+16;fe={from:o.target.clone(),to:we,d0:s.position.distanceTo(o.target),d1:ne,t:0},r.fog.near=ne*.9,r.fog.far=ne*3.2,o.maxDistance=ne*3,o.minDistance=Math.min(8,ne*.2);let de=a.shadow.camera,S=J*.75+10;de.left=-S,de.right=S,de.top=S,de.bottom=-S,de.near=1,de.far=400,de.updateProjectionMatrix(),a.position.set(ie+40,70,34),a.target.position.set(ie,0,0)}function vt(re,Me){requestAnimationFrame(Mt);let ie=C(re.racks,Zi?500:900),J=C(re.units,v[re.p.shape].cap),we=!L||ie.k!==L.b.k||ie.n!==L.b.n,ne=!E||E.shape!==re.p.shape||J.k!==E.b.k||J.n!==E.b.n;if(we&&B(re.racks),ne||we){ne&&X(re.units,re.p.shape),E.sc=Math.min(1.6,Math.max(.3,Math.sqrt(10/L.b.k))),d.scale.setScalar(E.sc);let S=Math.max(5,L.w*.14);E.pos=new R(-(L.w/2+S+E.w*E.sc/2),0,0),d.position.copy(E.pos),Ie(),Ve(),We(),x=0,b=performance.now()}p.led.color.set(Me.chip==="h100"?6990079:Me.chip==="gb300"?9300191:4183752),Fe.rate=Math.min(1.6,.25+Math.max(0,Math.log10(re.tps))/9),Fe.power=Math.min(1.8,.3+Math.max(0,Math.log10(re.facMW*1e3+1))/5);let de=re.units>=1;Ae.T.innerHTML=`<b>${Po(re.tps)}</b> tokens a second`,Ae.H.innerHTML=`<b>${tl(re.racks)}</b> ${re.racks===1?"rack":"racks"} \xB7 ${tl(re.chips)} chips${L.b.k>1?`<small>each block is ${L.b.k.toLocaleString("en-US")} racks</small>`:re.racks<1?"<small>less than one rack</small>":""}`,Ae.Y.innerHTML=`<b>${de?re.build.toLocaleString("en-US"):Vt(re.units,2)}</b> ${de?re.build===1?re.p.one:re.p.many:"of one "+re.p.one} \xB7 ${gr(re.facMW)}${E.b.k>1?`<small>each unit drawn is ${E.b.k.toLocaleString("en-US")}</small>`:""}`,F={r:re,s:Me}}let Fe={rate:1,power:1};function rt(re){let Me=Math.min(1,(re-b)/900);x<1&&(x=Me);let ie=J=>1-Math.pow(1-Math.min(1,Math.max(0,J)),3);if(L){let J=L.b.n;for(let we=0;we<J;we++){let[ne,de,S]=L.spots[we],_=ie(x*1.6-we/J*.6);A.position.set(ne,de,S),A.scale.set(1,Math.max(.001,_),1),A.rotation.set(0,0,0),A.updateMatrix(),L.body.setMatrixAt(we,A.matrix);for(let U=0;U<3;U++)A.position.set(ne,de+(.5+U*.55)*_,S+.56),A.scale.set(1,1,_>.02?1:.001),A.updateMatrix(),L.led.setMatrixAt(we*3+U,A.matrix)}L.body.instanceMatrix.needsUpdate=!0,L.led.instanceMatrix.needsUpdate=!0}if(E){let J=E.b.n;if(E.meshes.forEach(we=>{let ne=we.userData.off;for(let de=0;de<J;de++){let[S,_,U]=E.spots[de],ee=ie(x*1.6-de/J*.6);A.position.set(S+ne[0],_+ne[1],U+ne[2]),A.scale.set(1,Math.max(.001,ee),1),A.updateMatrix(),we.setMatrixAt(de,A.matrix)}we.instanceMatrix.needsUpdate=!0}),E.hot){let we=0;for(let ne=0;ne<J;ne++)for(let de of E.S.hot){let[S,_,U]=E.spots[ne],ee=ie(x*1.6-ne/J*.6),K=Co?1:.8+.35*Math.sin(re/140+ne*1.7);A.position.set(S+de[0],_+de[1]*ee,U+de[2]),A.scale.setScalar(Math.max(.001,ee*K)),A.updateMatrix(),E.hot.setMatrixAt(we++,A.matrix)}E.hot.instanceMatrix.needsUpdate=!0}}}let et=new R;function Je(re,Me){et.copy(Me).project(s);let ie=Ae[re],J=et.z<1&&Math.abs(et.x)<1.15&&Math.abs(et.y)<1.15,we=(et.x+1)/2*St,ne=(1-et.y)/2*nt,de=ie.offsetWidth/2,S=ie.offsetHeight,_=It.some(U=>we+de>U.l&&we-de<U.r&&ne>U.t&&ne-S<U.b);ie.style.opacity=J?_?".1":"1":"0",ie.style.transform=`translate(-50%,-100%) translate(${we.toFixed(1)}px,${ne.toFixed(1)}px)`}let It=[],Mt=()=>{let re=n.getBoundingClientRect(),Me=document.createRange();It=[...gi.querySelectorAll("h1, #aBig, #aWhat, #aSub")].map(ie=>{Me.selectNodeContents(ie);let J=Me.getBoundingClientRect();return{l:J.left-re.left-6,r:J.right-re.left+6,t:J.top-re.top-4,b:J.bottom-re.top+4}}).filter(ie=>ie.r>ie.l)},St=1,nt=1,gi=pt(".head",n),Et=()=>{St=n.clientWidth,nt=n.clientHeight,t.setSize(St,nt,!1),s.aspect=St/nt;let re=gi.getBoundingClientRect(),Me=matchMedia("(max-width: 860px)").matches,ie=Me?0:Math.min(St*.12,re.width*.26),J=Me?Math.min(nt*.26,re.height*.6):nt*.06;s.setViewOffset(St,nt,-ie,-J,St,nt),s.updateProjectionMatrix(),Mt()},ci=new ResizeObserver(Et);ci.observe(n),ci.observe(gi),Et();let hi=!0,ei=performance.now();new IntersectionObserver(([re])=>{hi=re.isIntersecting}).observe(n);function N(re){if(requestAnimationFrame(N),!hi||document.hidden){ei=re;return}let Me=Math.min(.05,(re-ei)/1e3);if(ei=re,fe){fe.t=Math.min(1,fe.t+Me/1.1);let ie=1-Math.pow(1-fe.t,3);o.target.lerpVectors(fe.from,fe.to,ie);let J=s.position.clone().sub(o.target).normalize();s.position.copy(o.target).addScaledVector(J,fe.d0+(fe.d1-fe.d0)*ie),fe.t>=1&&(fe=null)}if(rt(re),L){let ie=L.top+$(),J=Co?0:Me*(4+14*Fe.rate);for(let we=0;we<I;we++){let ne=k[we*3+1]-J*Z[we];ne<L.top&&(ne=ie-Math.random()*2,k[we*3]=(Math.random()-.5)*L.w*.92,k[we*3+2]=(Math.random()-.5)*L.d*.92),k[we*3+1]=ne}V.attributes.position.needsUpdate=!0,se.material.opacity=.35+.55*Math.min(1,Fe.rate),De.T.set(0,L.top+$()*.92,0),De.H.set(0,L.top+.4,L.d/2),Je("T",De.T),Je("H",De.H)}if(E&&E.steam&&!Co){let ie=E.steam.geometry.attributes.position,J=E.steam.userData.n,we=Math.min(E.b.n,24);for(let ne=0;ne<J;ne++){let de=ne%we,S=E.spots[de],_=(re/2600+ne/J*7)%1;ie.array[ne*3]=S[0]+E.S.steam[0]+Math.sin(ne*12.9)*1.1*_,ie.array[ne*3+1]=S[1]+E.S.steam[1]+_*6,ie.array[ne*3+2]=S[2]+E.S.steam[2]+Math.cos(ne*7.3)*1.1*_}ie.needsUpdate=!0}if(E&&(De.Y.set(E.pos.x,(E.top+1.6)*E.sc,E.pos.z),Je("Y",De.Y)),Q&&H.length){let ie=0;for(let J=0;J<H.length;J++)for(let we=0;we<8;we++){let ne=Co?we/8:(re/1e3*.22*Fe.power+we/8+J*.13)%1;H[J].getPointAt(ne,A.position),A.scale.setScalar(.8+.5*Math.sin(ne*Math.PI)),A.updateMatrix(),Q.setMatrixAt(ie++,A.matrix)}Q.instanceMatrix.needsUpdate=!0}o.update(),t.render(r,s)}return requestAnimationFrame(N),{update:vt}}
