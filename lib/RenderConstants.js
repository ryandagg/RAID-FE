
var RenderConstants = {};

Object.defineProperties(RenderConstants, {
    /* Score constants */
    SCORE_MAP_CLEAR: {value: 100, writeable: false},
    SCORE_ROUNDS_LEFT_MODIFIER: {value: 0.5, writeable: false},
    SCORE_HP_LEFT_MODIFIER: {value: 2, writeable: false},

    /* GameRunner constants */
    GAMERUNNER_ANIMATION_FRAME_CNT: {value: 24, writeable: false},

    /* Render Constants */
    RENDER_WITH_CANVAS: {value: true, writeable: false}
});


module.exports = RenderConstants;
