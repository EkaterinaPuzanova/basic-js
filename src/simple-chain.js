const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chainArray: [],
  getLength() {
    this.chainArray.length;
    return this;
  },
  addLink(value = ' ') {
    this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ((typeof position != 'number') || (!Number.isInteger(position)) || (position < 1) || (position > this.chainArray.length) || (position === undefined)) {
      this.chainArray = [];
      throw new Error(`You can't remove incorrect link!`);   
    }     
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chainArray.join('~~');
    this.chainArray = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
