!(function (e) { const t = {}; function r(n) { if (t[n]) return t[n].exports; const o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports; }r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, r.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const n = Object.create(null); if (r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const o in e)r.d(n, o, ((t) => e[t]).bind(null, o)); return n; }, r.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, 'a', t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = '', r(r.s = 0); }([function (e, t, r) {
  r.r(t); const n = function (e) { return { username: e, turn: 0 }; }; const o = function (e, t) {
    const r = t; return {
      length: e, isSunk() { return r.length === 0; }, hit(e) { if (r.includes(e)) { const t = r.indexOf(e); return r.splice(t, 1), !0; } return !1; }, position: r,
    };
  }; function a(e) { return (function (e) { if (Array.isArray(e)) { for (var t = 0, r = new Array(e.length); t < e.length; t++)r[t] = e[t]; return r; } }(e)) || (function (e) { if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === '[object Arguments]') return Array.from(e); }(e)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance'); }()); } const i = function (e) {
    const t = []; const r = []; const n = []; const i = a(Array(100).keys()); function u(e) { const t = i.indexOf(e); i.splice(t, 1); } return (function () { for (let e = [[1, [55]], [1, [80]], [1, [10]], [1, [37]], [2, [3, 4]], [2, [76, 77]], [3, [9, 19, 29]], [3, [32, 33, 34]], [4, [53, 63, 73, 83]]], r = 0; r < e.length; r += 1)t.push(o(e[r][0], e[r][1])); }()), {
      player: e, shipsArr: t, winner() { for (let e = 0; e < t.length; e += 1) if (!t[e].isSunk()) return !1; return !0; }, hitsArr: n, missedArr: r, receiveAttack(e) { if (function (e) { return !!i.includes(e); }(e)) { for (let o = 0; o < t.length; o += 1) if (t[o].hit(e)) return n.push(e), u(e), 'hit'; return r.push(e), u(e), 'miss'; } return !1; }, emptyCells: i, reset() { a(Array(100).keys()); },
    };
  }; const u = document.querySelector('.main-section'); const c = { mainElement: u, renderBoard(e) { const t = document.createElement('table'); const r = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; t.setAttribute('id', ''.concat(e.player.username, '-board')); for (let n = 0; n <= 10; n += 1) { for (var o = document.createElement('tr'), a = 0; a <= 10; a += 1) { const i = document.createElement('td'); n !== 0 && a !== 0 ? (i.setAttribute('data-value', 10 * (n - 1) + (a - 1)), i.classList.add('cell'), i.setAttribute('id', 10 * (n - 1) + (a - 1))) : n === 0 && a > 0 ? i.textContent = a : n > 0 && a === 0 && (i.textContent = r[n - 1]), o.appendChild(i); }t.appendChild(o); }t.classList.add('board'), u.append(t); }, renderShips(e) { e.shipsArr.forEach(((t) => { t.position.forEach(((t) => { document.getElementById(''.concat(e.player.username, '-board')).querySelector('td[data-value="'.concat(t, '"]')).classList.add('ships'); })); })); } }; function l(e, t, r) { const n = t.receiveAttack(e); return !1 === n ? (alert('Select an empty cell'), !1) : n === 'hit' ? (r.classList.add('hit-cell'), !0) : n === 'miss' ? (r.classList.add('missed-cell'), !0) : void 0; }(function () { let e; let t; function r(r) { l(parseInt(r.target.dataset.value, 10), t, r.target) && (t.winner() && (alert(''.concat(e.player.username, ' is winner')), setTimeout((() => { location.reload(); }), 500)), setTimeout((() => { let r; let n; const o = (r = e.emptyCells, n = r.length, r[Math.floor(Math.random() * Math.floor(n))]); const a = (function (t) { for (let r = document.getElementById(''.concat(e.player.username, '-board')).querySelectorAll('.cell'), n = 0; n < r.length; n += 1) if (r[n].dataset.value === t.toString()) return r[n]; }(o)); l(o, e, a), e.winner() && (alert(''.concat(t.player.username, ' is winner')), setTimeout((() => { location.reload(); }), 500)); }), 500)); } let o; let a; o = n('player'), a = n('computer'), e = i(o), t = i(a), c.renderBoard(e), c.renderShips(e), c.renderBoard(t), o.turn = 1, document.getElementById('computer-board').addEventListener('click', r); }());
}]));