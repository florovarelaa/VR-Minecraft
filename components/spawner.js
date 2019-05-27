    
/**
 * Spawn entity at the intersection point on click, given the properties passed.
 *
 * "<a-entity intersection-spawn="mixin: box; material.color: red">"" will spawn
 * "<a-entity mixin="box" material="color: red">"" at intersection point.
 */
AFRAME.registerComponent('intersection-spawn', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  }, 
  
  init: function () {
    const data = this.data;
    const el = this.el;
  
    el.addEventListener(data.event, evt => {
      //create element
      const spawnEl = document.createElement('a-entity');

      //snap intersection point to grid and offset from center
      spawnEl.setAttribute('position', evt.detail.intersection.point);

      //set components and properties
      Object.keys(data).forEach(name => {
        if (name === 'event') { return; }
        AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
      });

      //append to scene
      el.sceneEl.appendChild(spawnEl);
    })
  }
});