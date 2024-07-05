//Fri Jul 05 2024 09:02:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function optimizedFunction(r, t) {
  var _SsZ = [2, '\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65', 1, 3, 5, 52, '\x6c\x65\x6e\x67\x74\x68', 2654435769, '\x66\x6c\x6f\x6f\x72', 34214, '\x63\x65\x69\x6c', '\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74', 6, 255, 8, 0, '\x6a\x6f\x69\x6e', 16, 24, 4];
  if (_SsZ[15] === r[_SsZ[6]]) {
    return '';
  }
  for (var e = Math[_SsZ[10]](r[_SsZ[6]] / _SsZ[19]), o = [], i = _SsZ[15]; i < e; i++) o[i] = (_SsZ[13] & r[_SsZ[11]](_SsZ[19] * i)) + ((_SsZ[13] & r[_SsZ[11]](_SsZ[19] * i + _SsZ[2])) << _SsZ[14]) + ((_SsZ[13] & r[_SsZ[11]](_SsZ[19] * i + _SsZ[0])) << _SsZ[17]) + ((_SsZ[13] & r[_SsZ[11]](_SsZ[19] * i + _SsZ[3])) << _SsZ[18]);
  var _O0oOQOOo = _SsZ[9];
  for (var n = Math[_SsZ[8]](_SsZ[12] + _SsZ[5] / e), a = o[_SsZ[15]], c = o[e - _SsZ[2]], d = _SsZ[15]; n-- > _SsZ[15];) for (var h = (d += _SsZ[7]) >>> _SsZ[0] & _SsZ[3], u = _SsZ[15]; u < e; u++) {
    a = o[(u + _SsZ[2]) % e];
    c = o[u] += (c >>> _SsZ[4] ^ a << _SsZ[0]) + (a >>> _SsZ[3] ^ c << _SsZ[19]) ^ (d ^ a) + (t[_SsZ[3] & u ^ h] ^ c);
  }
  for (var f = [], s = _SsZ[15]; s < e; s++) f[s] = String[_SsZ[1]](_SsZ[13] & o[s], o[s] >>> _SsZ[14] & _SsZ[13], o[s] >>> _SsZ[17] & _SsZ[13], o[s] >>> _SsZ[18] & _SsZ[13]);
  return f[_SsZ[16]]('');
}