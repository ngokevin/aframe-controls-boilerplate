if (typeof AFRAME === 'undefined') {
  throw new Error('Controls component attempted to register before AFRAME was available.');
}

/**
 * Example controls for A-Frame.
 */
AFRAME.registerControls('example-controls', {
  schema: {},

  /**
   * Init handler. Called during scene initialization and is only run once.
   * Controls can use this to set initial state.
   */
  init: function () { /* no-op */ },

  /**
   * Update handler.
   * Called whenever component's data changes.
   * Also called on component initialization when the component receives initial data.
   */
  update: function () { /* no-op */ },

  /**
   * Tick handler.
   * Called on each tick of the scene render loop.
   * Affected by play and pause.
   *
   * @param {number} time - Scene tick time.
   * @param {number} timeDelta - Difference in current render time and previous render time.
   */
  tick: undefined,

  /**
   * Called to start any dynamic controls behavior.
   */
  play: function () { /* no-op */ },

  /**
   * Called to stop any dynamic controls behavior.
   */
  pause: function () { /* no-op */ },

  /**
   * Returns true if this control is actively in use for movement. For example, a connected gamepad
   * should return false unless the left joystick is tilted.
   * @returns {boolean}
   */
  isVelocityActive: undefined,

  /**
   * Returns a final THREE.Vector3 velocity.
   * @returns {THREE.Vector3}
   */
  getVelocity: undefined,

  /**
   * Returns an incremental THREE.Vector3 velocity change, with values on interval [-1,1]. In
   * general, this will affect the X and Z axes.
   * @returns {THREE.Vector3}
   */
  getVelocityDelta: undefined,

  /**
   * Returns true if the control is actively in use. For example, mouse controls would only return
   * true if the mouse is currently moving. HMD controls return true any time an HMD is detected.
   * @type {boolean}
   */
  isRotationActive: undefined,

  /**
   * Returns a final THREE.Vector3 (XYZ euler) world orientation, in degrees.
   * @returns {THREE.Vector3}
   */
  getRotation: undefined,

  /**
   * Returns an incremental THREE.Vector2 rotation change, with X and Y rotation values. To be
   * calibrated, values should be on the range [-1,1].
   * @returns {THREE.Vector2}
   */
  getRotationDelta: undefined
});
