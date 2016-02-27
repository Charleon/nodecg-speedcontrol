'use strict';

// This file contains a lot of functions for animation of DOM elements and are mainly called from soeedcontrol.js
// If you ever want to add custom animations, add functions for it in this file and then call it from where
// you want to invoke the animation

// Transition to change html from current to nextHtml, with translation -70px..
function animation_setGameFieldAlternate($selector, nextHtml) {
    applyWillChange($selector);
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 0.5, {opacity: '0', transform: "translateY(-70px)",  ease: Quad.easeOut },'0.2');
    tm.to($selector, 0.5, {opacity: '1', transform: "translateY(0px)", onStart:updateSelectorText, onStartParams:[$selector, nextHtml], onComplete:removeWillChange, onCompleteParams:[$selector], ease: Quad.easeOut },'0.7');
    tm.play();
}

// Transition to change html from current to nextHtml, with translation -50px..
function animation_setGameField($selector, nextHtml) {
    applyWillChange($selector);
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 0.5, {opacity: '0', transform: "translateY(-50px)",  ease: Quad.easeOut },'0.2');
    tm.to($selector, 0.5, {opacity: '1', transform: "translateY(0px)", onStart:updateSelectorText, onComplete:removeWillChange, onCompleteParams:[$selector],  onStartParams:[$selector, nextHtml] ,ease: Quad.easeOut },'0.7');
    tm.play();
}

// Transition to change html from current to nextHtml, with translation -50px..
function animation_setGameFieldOpacityOnly($selector, nextHtml) {
    applyWillChange($selector);
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 0.5, {opacity: '0', ease: Quad.easeOut },'0.2');
    tm.to($selector, 0.5, {opacity: '1', onStart:updateSelectorText, onComplete:removeWillChange, onCompleteParams:[$selector],  onStartParams:[$selector, nextHtml] ,ease: Quad.easeOut },'0.7');
    tm.play();
}

// Function just sets the text of the DOM element, called by animation_setGameField and animation_setGameFieldAlternate
function updateSelectorText($textDivToUpdate, newHtml) {
    $textDivToUpdate.html(newHtml);
}

function animation_shrinkHeightRotateRevert($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 0.5, {transform: 'scaleY(0)',  ease: Quad.easeOut },'0.2');
    tm.to($selector, 0.5, {transform: 'scaleY(1)',  ease: Quad.easeOut },'0.7');
    tm.play();
}


function animation_fadeInOpacity($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 0.5, {opacity: '1',  ease: Quad.easeOut },'0');
    tm.play();
}

function animation_translateOutTop($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 1.0, {opacity: '0', transform: 'translate(0,-60px)', ease: Quad.easeOut },'0.2');
    tm.play();
}

function animation_translateBackInFromTop($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 1.0, {opacity: '1', transform: 'translate(0,0px)', ease: Quad.easeOut },'0.2');
    tm.play();
}

function animation_translateOutBottom($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 1.0, {opacity: '0', transform: 'translate(0,0px)', ease: Quad.easeOut },'0.2');
    tm.play();
}

function animation_translateInFromBottom($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 1.0, {opacity: '1', transform: 'translate(0,-59px)', ease: Quad.easeOut },'0.2');
    tm.play();
}

function animation_translateRevert($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 1.0, {opacity: '1', transform: 'translate(0,0px)', ease: Quad.easeOut },'0');
    tm.play();
}

// Not used at the moment
function animation_fadeOutOpacity($selector) {
    var tm = new TimelineMax({paused: true});
    tm.to($selector, 0.5, {opacity: '0',  ease: Quad.easeOut },'0');
    tm.play();
}

function animation_hideZoomOut($selector) {
    var tm = new TimelineMax({paused: true});
    $selector.show();
    tm.to($selector , 0.5, {opacity: '0', transform: "scale(0)", ease: Quad.easeOut}, '0');
    tm.play();
}

function animation_showZoomIn($selector) {
    var tm = new TimelineMax({paused: true});
    $selector.show();
    tm.to($selector, 0.5, {opacity: '1', transform: "scale(0.9)", ease: Quad.easeOut}, '0');
    tm.play();
}

// General functions ###
function removeWillChange($selector) {
    $selector.css('will-change','');
}

function applyWillChange($selector) {
    $selector.css('will-change', 'transform, opacity');
}
