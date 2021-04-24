'use strict';
const _0x34b4 = [
  'classList',
  'getElementById',
  '901717EeplkT',
  'forEach',
  '1047482lHdRqs',
  'style',
  '7565wrryuF',
  'height',
  'remove',
  '1568610qECTbZ',
  '967958IsjVPB',
  'addEventListener',
  'add',
  'textContent',
  'remained',
  '212vkGnnN',
  '.cup-small',
  '19uAicad',
  '1645504LHSZVB',
  '92995lFzJoq',
];
const _0x2e77f0 = _0x40d8;
(function (_0x3c94a3, _0x3b23f1) {
  const _0x493d0a = _0x40d8;
  while (!![]) {
    try {
      const _0x2494af =
        -parseInt(_0x493d0a(0x140)) +
        parseInt(_0x493d0a(0x14e)) +
        -parseInt(_0x493d0a(0x13f)) +
        -parseInt(_0x493d0a(0x150)) * -parseInt(_0x493d0a(0x145)) +
        parseInt(_0x493d0a(0x14c)) +
        parseInt(_0x493d0a(0x148)) +
        -parseInt(_0x493d0a(0x147)) * parseInt(_0x493d0a(0x149));
      if (_0x2494af === _0x3b23f1) break;
      else _0x3c94a3['push'](_0x3c94a3['shift']());
    } catch (_0x255c21) {
      _0x3c94a3['push'](_0x3c94a3['shift']());
    }
  }
})(_0x34b4, 0xda822);
function _0x40d8(_0x445a5f, _0x11cfa8) {
  _0x445a5f = _0x445a5f - 0x13f;
  let _0x34b475 = _0x34b4[_0x445a5f];
  return _0x34b475;
}
const litersEl = document[_0x2e77f0(0x14b)]('liters'),
  percentageEl = document[_0x2e77f0(0x14b)]('percentage'),
  remainedEl = document[_0x2e77f0(0x14b)](_0x2e77f0(0x144)),
  cups = document['querySelectorAll'](_0x2e77f0(0x146));
function fillCups(_0x2cc186) {
  const _0x50a4b7 = _0x2e77f0;
  if (cups[_0x2cc186][_0x50a4b7(0x14a)]['contains']('full')) _0x2cc186--;
  cups[_0x50a4b7(0x14d)]((_0x290092, _0x9169a5) => {
    const _0x541cce = _0x50a4b7;
    _0x9169a5 <= _0x2cc186
      ? _0x290092['classList'][_0x541cce(0x142)]('full')
      : _0x290092[_0x541cce(0x14a)][_0x541cce(0x152)]('full');
  }),
    calcValue(_0x2cc186);
}
function calcValue(_0x48d08c) {
  const _0xe83dbd = _0x2e77f0;
  _0x48d08c = _0x48d08c + 0x1;
  const _0x54c70d = 12.5 * _0x48d08c;
  _0x54c70d === 0x64 && (remainedEl[_0xe83dbd(0x14f)][_0xe83dbd(0x151)] = 0x0),
    (litersEl[_0xe83dbd(0x143)] = (0x7d0 - 0xfa * _0x48d08c) / 0x3e8 + 'L'),
    (percentageEl[_0xe83dbd(0x14f)]['height'] = _0x54c70d + '%'),
    (percentageEl[_0xe83dbd(0x143)] = _0x54c70d + '%'),
    _0x54c70d === 0x0 && (percentageEl['textContent'] = '');
}
cups[_0x2e77f0(0x14d)]((_0x44a680, _0x54b851) =>
  _0x44a680[_0x2e77f0(0x141)]('click', () => fillCups(_0x54b851))
);
