'use strict';

function estimate(input) {
  const price = Number(input.price) || 0;
  const hpp = Number(input.hpp) || 0;
  const shipping = Number(input.shipping) || 0;
  const packaging = Number(input.packaging) || 0;
  const feePct = Number(input.feePct) || 0;

  const fee = Math.round(price * (feePct / 100));
  const cost = hpp + shipping + packaging + fee;
  const margin = price - cost;
  const marginPct = price > 0 ? Math.round((margin / price) * 10000) / 100 : 0;

  return { fee: fee, cost: cost, margin: margin, marginPct: marginPct };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { estimate: estimate };
}
