import { keyframes } from '@emotion/react';

export const wobble = keyframes`
/* ----------------------------------------------
 * Generated by Animista on 2023-7-3 9:39:55
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation wobble-hor-bottom
 * ----------------------------------------
 */
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-15px) rotate(-6deg);
    }
    30% {
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      transform: translateX(-6px) rotate(-1.2deg);
    }
`;

export const wave = keyframes`
/*----------------------------------------------------------
 * Jake Jarvis - WAving Hand Emoji w/Pure CSS in CodePen
 * https://codepen.io/jakejarvis/pen/pBZWZw
 * -------------------------------------------------------*/
0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(16.0deg) } 
   20% { transform: rotate(-10.0deg) }
   30% { transform: rotate(16.0deg) }
   40% { transform: rotate(-8.0deg) }
   50% { transform: rotate(16.0deg) }
   60% { transform: rotate(0.0deg) }
  100% { transform: rotate( 0.0deg) }
`;

export const heartbeat = keyframes`
/* ----------------------------------------------
 * Generated by Animista on 2023-7-2 22:47:7
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

export const vibrate = keyframes`
 /* ----------------------------------------------
 * Generated by Animista on 2023-7-3 9:24:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

export const colorChange = keyframes`
/* ----------------------------------------------
 * Generated by Animista on 2023-7-3 9:29:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation color-change-2x
 * ----------------------------------------
 */
  0% {
    color: #FCD5D5;
    background: #ff3b14;
  }
  100% {
     color: #FCD5D5;
    background: #FFA113;
}
`;
