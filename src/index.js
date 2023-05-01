/**
 * Build styles
 */
import './index.css';

export default class TOC {
  static get toolbox() {
      return {
          title: 'TOC',
          icon:   `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="4" width="16" height="16" rx="3" stroke="#000000" stroke-width="2"></rect> <path d="M16 10L8 10" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M16 14L8 14" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> 
                      </g></svg>`,
      };
  }

  constructor({data, api}){
      this.api = api;
      this.data = data;
      this.wrapper = undefined;
      this.data.items = data.items || [];
  }

  render(){
      this.wrapper = document.createElement('div');

      if (this.data.items.length < 1) {
          this._getHeadings();
      }
      
      this._createTOC();
      return this.wrapper;
  }
  
  static get isReadOnlySupported() {
    return true
  }

  _getHeadings() {
      this.data.items = [];

      var blocksCount = this.api.blocks.getBlocksCount();

      for (var i = 0; i < blocksCount; i++) {
          var data = this.api.blocks.getBlockByIndex(i);

          if (data.name == 'header') {
              if (data.holder.innerText) {

                  var level = data.holder.childNodes[0].childNodes[0].nodeName;
                  level = parseInt(level.replace('H', ''));

                  // create a new object
                  var newObj = {
                      // generate random string 10 characters long
                      id: Math.random().toString(36).substring(2, 12),
                      reference: data.id,
                      text: data.holder.innerText,
                      level: level
                  };

                  // push the new object to the array
                  this.data.items.push(newObj);
              }
          }
      }

      this._createTOC();
  }

  _createTOC() {

      const headings = this.data.items;

      var divElement = document.createElement('div');

      if (headings.length < 1) {
        var message = '<p>No headings found</p>';
        divElement.innerHTML = message;
      } else {
        for (const heading of headings) {

          // create paragraph element
          var p = document.createElement('p');
          p.classList.add('toc-paragraph');

          // add class to paragraph element
          p.classList.add('toc-l-' + heading.level);

          // add text to paragraph element
          p.innerHTML = heading.text;

          // create anchor element
          var a = document.createElement('a');

          // set href attribute
          a.setAttribute('href', '#' + heading.reference);

          // add paragraph element to anchor element
          a.appendChild(p);

          // add anchor element to toc
          divElement.appendChild(a);
        }
      }

      this.wrapper.innerHTML = '';
      this.wrapper.appendChild(divElement);
  }
  
  renderSettings() {
    return [
        {
          icon:   `<svg width="17" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.645 489.645">
                      <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3
                          c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5
                          c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8
                          c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2
                          C414.856,432.511,548.256,314.811,460.656,132.911z"/>
                  </svg>`

          ,
          name: 'refresh',
          label: this.api.i18n.t('Refresh'),
          toggle: 'toc', // <--- specify toggle group name
          onActivate: () => {
                // action
                this._getHeadings();
            }
        },
    ];
  }

  save(blockContent){
    return {
        items: this.data.items
    }
  }
};
