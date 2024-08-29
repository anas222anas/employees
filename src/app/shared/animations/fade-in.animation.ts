import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
export const animationFade_in = [
    trigger('animation_fade_in', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0) scale(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'scale(0)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'scale(0.5)',
            opacity: 0.5,
            offset: 0.5
          }),
          style({
            transform: 'scale(1)',
            opacity: 1,
            offset: 1
          })
        ]))
  
      ]),
    ])]