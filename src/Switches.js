import lzw36 from "./Hurricane.png";

export const CONFIG_PARAMETER = {
  COLOR: "color",
  BRIGHTNESS: "brightness",
  LED_EFFECT: "effect",
};

export default [
  {
    displayName: "Dimmer Switch",
    id: "dimmer",
    paddles: [
      {
        id: "up",
        pos: { top: "162px", left: "135px", width: "120px", height: "100px" },
      },
      {
        id: "down",
        pos: {
          bottom: "162px",
          left: "135px",
          width: "120px",
          height: "100px",
        },
      },
      {
        id: "config",
        pos: { top: "162px", right: "129px", width: "10px", height: "57px" },
      },
    ],
    images: [],
    defaultFirmware: "1.48",
    firmwares: {
      1.48: {
        leds: [
          {
            id: "led-0",
            name: "",
            pos: {
              height: "210px",
              bottom: "162px",
              right: "129px",
            },
            parameters: {
              [CONFIG_PARAMETER.COLOR]: 13,
              [CONFIG_PARAMETER.BRIGHTNESS]: 14,
              [CONFIG_PARAMETER.LED_EFFECT]: 16,
            },
            colorRange: [0, 255],
            brightnessRange: [1, 10],
            default: {
              level: 10,
              color: 170,
            },
            defaultNotification: {
              effect: 1,
              level: 10,
              color: 170,
              duration: 255,
            },
          },
        ],
        effects: [
          { name: "Off (Notification Cleared)", value: 0 },
          { name: "Solid", value: 1 },
          { name: "Chase", value: 2, styles: { height: "300px" } },
          { name: "Fast Blink", value: 3 },
          { name: "Slow Blink", value: 4 },
          { name: "Pulse", value: 5 },
        ],
        scenes: [
          {
            buttons: "1 x Up",
            taps: "1",
            paddle_id: "up",
            id: "2",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Pushed",
          },
          {
            buttons: "1 x Down",
            taps: "1",
            paddle_id: "down",
            id: "1",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Held",
          },
          {
            buttons: "2 x Up",
            taps: "2",
            paddle_id: "up",
            id: "2",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Pushed",
          },
          {
            buttons: "2 x Down",
            taps: "2",
            paddle_id: "down",
            id: "1",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Held",
          },
          {
            buttons: "3 x Up",
            taps: "3",
            paddle_id: "up",
            id: "2",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Push",
          },
          {
            buttons: "3 x Down",
            taps: "3",
            paddle_id: "down",
            id: "1",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Held",
          },
          {
            buttons: "4 x Up",
            taps: "4",
            paddle_id: "up",
            id: "2",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Pushed",
          },
          {
            buttons: "4 x Down",
            taps: "4",
            paddle_id: "down",
            id: "1",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Held",
          },
          {
            buttons: "5 x Up",
            taps: "5",
            paddle_id: "up",
            id: "2",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Pushed",
          },
          {
            buttons: "5 x Down",
            taps: "5",
            paddle_id: "down",
            id: "1",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Held",
          },
          {
            buttons: "1 x Config",
            taps: "1",
            paddle_id: "config",
            id: "3",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 7 Pushed",
          },
          {
            buttons: "Hold Up",
            taps: "0",
            paddle_id: "up",
            id: "2",
            data: "7800",
            disabled: true,
            scene_value_label: "Key Held down",
            button: "Button 6 Pushed",
          },
          {
            buttons: "Release Up",
            taps: "-1",
            paddle_id: "up",
            id: "2",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
          {
            buttons: "Hold Down",
            taps: "0",
            paddle_id: "down",
            id: "1",
            data: "7800",
            disabled: true,
            scene_value_label: "Key Held down",
            button: "Button 6 Held",
          },
          {
            buttons: "Release Down",
            taps: "-1",
            paddle_id: "down",
            id: "1",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
        ],
      },
      1.41: {
        leds: [
          {
            id: "led-0",
            name: "",
            pos: {
              height: "210px",
              bottom: "162px",
              right: "129px",
            },
            parameters: {
              [CONFIG_PARAMETER.COLOR]: 13,
              [CONFIG_PARAMETER.BRIGHTNESS]: 14,
              [CONFIG_PARAMETER.LED_EFFECT]: 16,
            },
            colorRange: [1, 255],
            brightnessRange: [1, 10],
            default: {
              level: 10,
              color: 170,
            },
            defaultNotification: {
              effect: 1,
              level: 10,
              color: 170,
              duration: 255,
            },
          },
        ],
        effects: [
          { name: "Off (Notification Cleared)", value: 0 },
          { name: "Solid", value: 1 },
          { name: "Chase", value: 2, styles: { height: "300px" } },
          { name: "Fast Blink", value: 3 },
          { name: "Slow Blink", value: 4 },
          { name: "Pulse", value: 5 },
        ],
        scenes: [
          {
            buttons: "1 x Up",
            taps: "1",
            paddle_id: "up",
            id: "2",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Pushed",
          },
          {
            buttons: "1 x Down",
            taps: "1",
            paddle_id: "down",
            id: "1",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Held",
          },
          {
            buttons: "2 x Up",
            taps: "2",
            paddle_id: "up",
            id: "2",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Pushed",
          },
          {
            buttons: "2 x Down",
            taps: "2",
            paddle_id: "down",
            id: "1",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Held",
          },
          {
            buttons: "3 x Up",
            taps: "3",
            paddle_id: "up",
            id: "2",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Push",
          },
          {
            buttons: "3 x Down",
            taps: "3",
            paddle_id: "down",
            id: "1",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Held",
          },
          {
            buttons: "4 x Up",
            taps: "4",
            paddle_id: "up",
            id: "2",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Pushed",
          },
          {
            buttons: "4 x Down",
            taps: "4",
            paddle_id: "down",
            id: "1",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Held",
          },
          {
            buttons: "5 x Up",
            taps: "5",
            paddle_id: "up",
            id: "2",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Pushed",
          },
          {
            buttons: "5 x Down",
            taps: "5",
            paddle_id: "down",
            id: "1",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Held",
          },
          {
            buttons: "1 x Config",
            taps: "1",
            paddle_id: "config",
            id: "3",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 7 Pushed",
          },
          {
            buttons: "Hold Up",
            taps: "0",
            paddle_id: "up",
            id: "2",
            data: "7800",
            disabled: true,
            scene_value_label: "Key Held down",
            button: "Button 6 Pushed",
          },
          {
            buttons: "Release Up",
            taps: "-1",
            paddle_id: "up",
            id: "2",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
          {
            buttons: "Hold Down",
            taps: "0",
            paddle_id: "down",
            id: "1",
            data: "7800",
            disabled: true,
            scene_value_label: "Key Held down",
            button: "Button 6 Held",
          },
          {
            buttons: "Release Down",
            taps: "-1",
            paddle_id: "down",
            id: "1",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
        ],
      },
    },

    byteOrder: ["color", "level", "duration", "effect"],
  },
  {
    id: "onoff",
    displayName: "On\\Off Switch",
    paddles: [
      {
        id: "up",
        pos: { top: "162px", left: "135px", width: "120px", height: "100px" },
      },
      {
        id: "down",
        pos: {
          bottom: "162px",
          left: "135px",
          width: "120px",
          height: "100px",
        },
      },
      {
        id: "config",
        pos: { top: "162px", right: "129px", width: "10px", height: "57px" },
      },
    ],
    images: [],
    defaultFirmware: "1.19",
    firmwares: {
      1.15: {
        leds: [
          {
            id: "led-0",
            name: "",
            pos: {
              height: "39px",
              bottom: "162px",
              right: "129px",
            },
            parameters: {
              [CONFIG_PARAMETER.COLOR]: 5,
              [CONFIG_PARAMETER.BRIGHTNESS]: 6,
              [CONFIG_PARAMETER.LED_EFFECT]: 8,
            },
            colorRange: [1, 255],
            brightnessRange: [1, 10],
            default: {
              level: 10,
              color: 170,
            },
            defaultNotification: {
              effect: 1,
              level: 10,
              color: 170,
              duration: 255,
            },
          },
        ],
        effects: [
          { name: "Off (Notification Cleared)", value: "0" },
          { name: "Solid", value: "1" },
          { name: "Fast Blink", value: "2" },
          { name: "Slow Blink", value: "3" },
          { name: "Pulse", value: "4" },
        ],
        scenes: [
          {
            buttons: "1 x Up",
            taps: "1",
            paddle_id: "up",
            id: "2",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Pushed",
          },
          {
            buttons: "1 x Down",
            taps: "1",
            paddle_id: "down",
            id: "1",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Held",
          },
          {
            buttons: "2 x Up",
            taps: "2",
            paddle_id: "up",
            id: "2",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Pushed",
          },
          {
            buttons: "2 x Down",
            taps: "2",
            paddle_id: "down",
            id: "1",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Held",
          },
          {
            buttons: "3 x Up",
            taps: "3",
            paddle_id: "up",
            id: "2",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Pushed",
          },
          {
            buttons: "3 x Down",
            taps: "3",
            paddle_id: "down",
            id: "1",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Held",
          },
          {
            buttons: "4 x Up",
            taps: "4",
            paddle_id: "up",
            id: "2",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Pushed",
          },
          {
            buttons: "4 x Down",
            taps: "4",
            paddle_id: "down",
            id: "1",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Held",
          },
          {
            buttons: "5 x Up",
            taps: "5",
            paddle_id: "up",
            id: "2",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Pushed",
          },
          {
            buttons: "5 x Down",
            taps: "5",
            paddle_id: "down",
            id: "1",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Pushed",
          },
          {
            buttons: "1 x Config",
            taps: "1",
            paddle_id: "config",
            id: "3",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 7 Pushed",
          },
          {
            buttons: "Hold Up",
            taps: "0",
            paddle_id: "up",
            id: "2",
            data: "7800",
            scene_value_label: "Key Held down",
            button: "Button 6 Pushed",
          },
          {
            buttons: "Release Up",
            taps: "-1",
            paddle_id: "up",
            id: "2",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
          {
            buttons: "Hold Down",
            taps: "0",
            paddle_id: "down",
            id: "1",
            data: "7800",
            disabled: true,
            scene_value_label: "Key Held down",
            button: "Button 6 Held",
          },
          {
            buttons: "Release Down",
            taps: "-1",
            paddle_id: "down",
            id: "1",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
        ],
      },
      1.19: {
        leds: [
          {
            id: "led-0",
            name: "",
            pos: {
              height: "39px",
              bottom: "162px",
              right: "129px",
            },
            parameters: {
              [CONFIG_PARAMETER.COLOR]: 5,
              [CONFIG_PARAMETER.BRIGHTNESS]: 6,
              [CONFIG_PARAMETER.LED_EFFECT]: 8,
            },
            colorRange: [0, 255],
            brightnessRange: [1, 10],
            default: {
              level: 10,
              color: 170,
            },
            defaultNotification: {
              effect: 1,
              level: 10,
              color: 170,
              duration: 255,
            },
          },
        ],
        effects: [
          { name: "Off (Notification Cleared)", value: "0" },
          { name: "Solid", value: "1" },
          { name: "Fast Blink", value: "2" },
          { name: "Slow Blink", value: "3" },
          { name: "Pulse", value: "4" },
        ],
        scenes: [
          {
            buttons: "1 x Up",
            taps: "1",
            paddle_id: "up",
            id: "2",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Pushed",
          },
          {
            buttons: "1 x Down",
            taps: "1",
            paddle_id: "down",
            id: "1",
            data: "7680",
            disabled: true,
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Held",
          },
          {
            buttons: "2 x Up",
            taps: "2",
            paddle_id: "up",
            id: "2",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Pushed",
          },
          {
            buttons: "2 x Down",
            taps: "2",
            paddle_id: "down",
            id: "1",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Held",
          },
          {
            buttons: "3 x Up",
            taps: "3",
            paddle_id: "up",
            id: "2",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Pushed",
          },
          {
            buttons: "3 x Down",
            taps: "3",
            paddle_id: "down",
            id: "1",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Held",
          },
          {
            buttons: "4 x Up",
            taps: "4",
            paddle_id: "up",
            id: "2",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Pushed",
          },
          {
            buttons: "4 x Down",
            taps: "4",
            paddle_id: "down",
            id: "1",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Held",
          },
          {
            buttons: "5 x Up",
            taps: "5",
            paddle_id: "up",
            id: "2",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Pushed",
          },
          {
            buttons: "5 x Down",
            taps: "5",
            paddle_id: "down",
            id: "1",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Pushed",
          },
          {
            buttons: "1 x Config",
            taps: "1",
            paddle_id: "config",
            id: "3",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 7 Pushed",
          },
          {
            buttons: "Hold Up",
            taps: "0",
            paddle_id: "up",
            id: "2",
            data: "7800",
            scene_value_label: "Key Held down",
            button: "Button 6 Pushed",
          },
          {
            buttons: "Release Up",
            taps: "-1",
            paddle_id: "up",
            id: "2",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
          {
            buttons: "Hold Down",
            taps: "0",
            paddle_id: "down",
            id: "1",
            data: "7800",
            disabled: true,
            scene_value_label: "Key Held down",
            button: "Button 6 Held",
          },
          {
            buttons: "Release Down",
            taps: "-1",
            paddle_id: "down",
            id: "1",
            data: "7740",
            disabled: true,
            scene_value_label: "Key Released",
            button: "N/A",
          },
        ],
      },
    },
    byteOrder: ["color", "level", "duration", "effect"],
  },
  {
    id: "fanlightcombo",
    displayName: "Fan\\Light Combo Dimmer",
    paddles: [
      {
        id: "light",
        pos: {
          top: "162px",
          left: "135px",
          width: "120px",
          height: "135px",
        },
      },
      {
        id: "fan",
        pos: {
          bottom: "162px",
          left: "135px",
          width: "120px",
          height: "135px",
        },
      },
      {
        id: "light_rocker_up",
        pos: {
          top: "182px",
          left: "115px",
          width: "14px",
          height: "47px",
        },
      },
      {
        id: "light_rocker_down",
        pos: {
          top: "229px",
          left: "115px",
          width: "14px",
          height: "47px",
        },
      },
      {
        id: "fan_rocker_up",
        pos: {
          top: "325px",
          left: "115px",
          width: "14px",
          height: "47px",
        },
      },
      {
        id: "fan_rocker_down",
        pos: {
          top: "372px",
          left: "115px",
          width: "14px",
          height: "47px",
        },
      },
    ],
    images: [
      {
        id: "lzw36-paddles",
        src: lzw36,
        pos: {
          left: "114px",
          width: "165px",
          top: "149px",
        },
      },
    ],
    defaultFirmware: "1.36",
    firmwares: {
      1.36: {
        leds: [
          {
            id: "led-0",
            name: "Light LED",
            pos: {
              top: "162px",
              right: "129px",
              height: "134px",
            },
            parameters: {
              [CONFIG_PARAMETER.COLOR]: 18,
              [CONFIG_PARAMETER.BRIGHTNESS]: 19,
              [CONFIG_PARAMETER.LED_EFFECT]: 24,
            },
            colorRange: [0, 255],
            brightnessRange: [0, 10],
            default: {
              level: 10,
              color: 170,
            },
            defaultNotification: {
              effect: 1,
              level: 10,
              color: 170,
              duration: 255,
            },
          },
          {
            id: "led-1",
            name: "Fan LED",
            pos: {
              bottom: "162px",
              right: "129px",
              height: "134px",
            },
            parameters: {
              [CONFIG_PARAMETER.COLOR]: 20,
              [CONFIG_PARAMETER.BRIGHTNESS]: 21,
              [CONFIG_PARAMETER.LED_EFFECT]: 25,
            },
            colorRange: [0, 255],
            brightnessRange: [0, 10],
            default: {
              level: 10,
              color: 170,
            },
            defaultNotification: {
              effect: 1,
              level: 10,
              color: 170,
              duration: 255,
            },
          },
        ],

        effects: [
          { name: "Off (Notification Cleared)", value: "0" },
          { name: "Solid", value: "1" },
          { name: "Slow Blink", value: "2" },
          { name: "Fast Blink", value: "3" },
          { name: "Chase", value: "4", style: { height: "150px" } }, //Chase
          { name: "Pulse", value: "5" },
        ],
        scenes: [
          {
            buttons: "1 x Light",
            taps: "1",
            paddle_id: "light",
            id: "2",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Pushed",
          },
          {
            buttons: "2 x Light",
            taps: "2",
            paddle_id: "light",
            id: "2",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Pushed",
          },
          {
            buttons: "3 x Light",
            taps: "3",
            paddle_id: "light",
            id: "2",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Pushed",
          },
          {
            buttons: "4 x Light",
            taps: "4",
            paddle_id: "light",
            id: "2",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Pushed",
          },
          {
            buttons: "5 x Light",
            taps: "5",
            paddle_id: "light",
            id: "2",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Pushed",
          },
          {
            buttons: "Light Hold",
            taps: "-1",
            paddle_id: "light",
            id: "2",
            data: "7800",
            scene_value_label: "Key Held down",
            button: "Button 8 Pushed",
          },
          {
            buttons: "Light Release",
            taps: "-1",
            paddle_id: "light",
            id: "2",
            data: "7740",
            scene_value_label: "Key Released",
            button: "Button 6 Pushed",
          },
          {
            buttons: "1 x Fan",
            taps: "1",
            paddle_id: "fan",
            id: "1",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 1 Held",
          },
          {
            buttons: "2 x Fan",
            taps: "2",
            paddle_id: "fan",
            id: "1",
            data: "7860",
            scene_value_label: "Pressed 2 Times",
            button: "Button 2 Held",
          },
          {
            buttons: "3 x Fan",
            taps: "3",
            paddle_id: "fan",
            id: "1",
            data: "7920",
            scene_value_label: "Pressed 3 Times",
            button: "Button 3 Held",
          },
          {
            buttons: "4 x Fan",
            taps: "4",
            paddle_id: "fan",
            id: "1",
            data: "7980",
            scene_value_label: "Pressed 4 Times",
            button: "Button 4 Held",
          },
          {
            buttons: "5 x Fan",
            taps: "5",
            paddle_id: "fan",
            id: "1",
            data: "8040",
            scene_value_label: "Pressed 5 Times",
            button: "Button 5 Held",
          },
          {
            buttons: "Fan Hold",
            taps: "-1",
            paddle_id: "fan",
            id: "1",
            data: "7800",
            scene_value_label: "Key Held down",
            button: "Button 8 Held",
          },
          {
            buttons: "Fan Release",
            taps: "-1",
            paddle_id: "fan",
            id: "1",
            data: "7740",
            scene_value_label: "Key Released",
            button: "Button 6 Held",
          },
          {
            buttons: "Light Rocker Up",
            taps: "1",
            paddle_id: "light_rocker_up",
            id: "3",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 7 Pushed",
          },
          {
            buttons: "Light Rocker Down",
            taps: "1",
            paddle_id: "light_rocker_down",
            id: "4",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 7 Held",
          },
          {
            buttons: "Fan Rocker Up",
            taps: "1",
            paddle_id: "fan_rocker_up",
            id: "5",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 9 Pushed",
          },
          {
            buttons: "Fan Rocker Down",
            taps: "1",
            paddle_id: "fan_rocker_down",
            id: "6",
            data: "7680",
            scene_value_label: "Pressed 1 Time",
            button: "Button 9 Held",
          },
        ],
      },
    },

    byteOrder: ["color", "level", "duration", "effect"],
  },
];
