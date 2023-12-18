 const Settings= {
    container: ".paint",
    canvas:"",
    w: window.innerWidth,
    h: window.innerHeight,
    x: 0,
    y: 0,
    ui: {
      color: "rgba(0,0,0,1)",
      strokeColor: "rgba(0,0,0,0.8)",
      bgColor: "rgba(255,255,255,0.5)",
      offset: {
        x: 15,
        y: 25,
        w: 200,
        h: 140,
      },
      text: {
        info1: { title: "Pick a Color", w: 0, h: 14, family: "Georgia" },
        info2: { title: "Adjustment", w: 0, h: 14, family: "Georgia" },
        info3: { title: "Brush Info", w: 0, h: 14, family: "Georgia" },
      },
      tips: {
        header: {
          title: "Tips!",
          w: 0,
          h: 14,
          family: "Georgia",
        },
        w: 200,
        painting:
          "≫ Painting: Click Left button of the mouse and drag to paint",
        colorchange:
          "≫ Changing Color: Move mouse and hover to color palette (pick a color) and and click to select.",
        brushsize:
          "≫ Change Brush Size: Mouse wheel up to increase brush size and wheel down to decrease size.",
        erasor:
          "≫ Use erasor: Right click to enable erasor. To disable erasor, please right click again. You can increase or decrease erasor size by scrolling up/down.",
        clearAll: "≫ Clear Canvas: Click 'clear' button to clear the canvas.",
        saveImage:
          "≫ Save as Image: Click to 'save as image' button to save your work as .jpg file",
      },
      cursor: 10,
      icons: {
        pen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAS9QTFRFAAAAxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIpxjIp9a075YM1yToqxjIpxjIp9a079a079a073nEz9a079a079a0733Iy9a079a079a079a079a079a079a079a079a079a079a079a079a079a079aw79a079a079a079a079a07JTE9KTdGKjlIMDpFx5E79a079a079a07JzNALDxNL0FUMEJWL0BTW1ZI9a07Iyw3KzlJMEFVMUJVKTZFKjhHL0BTMEJWL0BTMEJWMEJWMEJWMEJWMEJWMEJWMEJWaHfoVAAAAGV0Uk5TAAiTKJCaGbTuIjTX30oBMMP3cQYyvP++Ekvz2DndYQLRpgrcjTPI/8gWErT//w+w9kEGePf4fAND6fqUB0j5cAMUz5B9q03L6cL9824JLdT////4YwWW/92zyv2t8/lSg+r+nAQ3COpYAAAAxUlEQVR4nGNgwAoYmbCLM7OwYhVnY+fgxCbOxc3Di0WYj19AUEgYi4SIqJi4BBZxSSkxaWwWyMiKScnJY3GPgpiYohKmOL+ymJgKFgtU1dTFNDQxxbW0dXSlZDDF9fR1dAwMMcWNjE10TM3MMSUsLHWsrG0wxW3tdEzsHTDFHZ10TJ31MMUZXHR0XLXQBd3cPTy9vH180cX9/AMCg4JDjNDFQ8PCAwMDIzAMj4yKBooHxmBIxAaAxOPiMSQSEoHiSckp6OIANQEb7CBcB1YAAAAASUVORK5CYII=",

        brush:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAfhQTFRFAAAArlIl3GMi0mAklEkm3WMj/HEl3WIibTgiyFsi+3Ur/Hcuy1simEgh7Gok/oNB93AmvFUhxFgh/Xcu52ookEgmhkEh4mUi/H03zmg0rVAg+XMr/4pL7m0ooVEozVwh/oA8/IVFxl0mfD4j42ck/oxP42opjEMgkkUe+3w39n48vFcicEExyVwj/YI/1WEkiUUlb0Ew32go7HAunEkgv1cjzlwjtFMjnEcdyV4m+Ho2zF0kcEQ2UXFut3JD+HQs83Yz8XMv/YA+/YRDyVsjJZGiFr3YUq2vvZJr9YlP/41R/4lK5WopnFArVktDGqnAEcvrKNTvQdTqXre7r5Z074dO/ohJ6HExw10oqG0UlphHPrOzQsrcQtHmSdzzQdfuTsTPj5+K6IFF52gkuVUiilIb1IoH8KIG8KUQsJ48a7GbSMTUQ83gNNr0GdLwGLzXZYJ2rVQplFgX86QG+KoI/a4L/awD55oGxJojc7KPL8fdFsLgELnWK4SSxoIT/bIW/bAQ/a0I/asB76EF/awE+KcCzpITeKRtNI2QTVZS3pMJ/bIV/a4K/awG+akC/KsH/awF96cC+qkE/KoCrW4Sy4UO35YL/a0H/asD5ZkIeUszbkE0yYUP5JoJ9qcI/asC+qoIyYMOeUgtyoYQ4pgJ5pwM6JwIkVoe0YeTcQAAAKh0Uk5TACXKcxDR/6QClv//kzj3//9ZpP/xHBj3/6Zo///8N7b//7AQ6f/qJ0D//ncBi//OCwXV8z5beikfbfyhAjj///rt//9ip////////8kXF+r/////////1VNv////////////7xYIx////////////94NLf3///////////5xkv///////////98Q1P///////////2xayf//2woGZ731//5jA069zNcMqSWYNAAAAPRJREFUeJxjYEACjEzMDNgACysbOzZxDk4ubh5sErx8/AKC2CSEhPlFRLGIi4nzS0hi0yAlLSMrh01CXkFRCZu4soqqmjo2CQ1NLW0dbBK6evoG2MQNjYxNMARNzcwtLK2sbdDFbe3sHRydnF0wNLi6uXt4enn7+KKJ+/kHBAYFh4SGhUegSkRGRcfExsUnJCYlpyCLp6alZ2RmZefk5uUXFCJLFBWXlJaVV1RWVdfUophUV9/Q2NTc0trW3tGJItHV3dPb1z9h4qTJU1DtnjptQlnZ9JYZjTNnoTl39py58+ZP712wEMODDIsWL1k6YdlyVEEASYg7IJvwkawAAAAASUVORK5CYII=",
        erasor:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYBQTFRFAAAAFYC3E4C2FIC2FYG2E4G2E4G2E4G2FIG2FYC1E4G2E4G2E4G2FoC2FYC1E4G2E4G2FYC2E4G2FIK2FYK3FYG2FIG2Hoe6GoW5E4G2FoG2FYK3HYa5G4W5FIG2FYC2FYG2H4e6GoS4E4G2//v6bLDRFIG2FIG2HIa5GYS4E4G27kY67k1C8ZyXebHPFIK3E4G27kY67kc87kg87ko+XajME4G2E4C27kg87kxA46inE4G2E4G27kY77kg87ktA8JuWeLDOFIG3E4G2FYC27kc870xB7KWiUKHIFYG3E4G2FYC37kc771BF71BEE4C27kg87kk971FG701B7LKwZqzPE4C2FIC27kk9709D7k9D66SiUKDIFYG2FIG2FIG37kg87kk9701C705D4qWlVaLJFIC27kU67kc87kg87ks/7kc87UQ37UY57kc88FVL8FpP7kg87kc870U57kY78FhO71FG7kc77kY77kc77Uc76Ug86Uc86Uc77Ec770Y6PPai+gAAAIB0Uk5TAAcsCxKc+LIgDcL/2Q0JqLUSnv/+IKH//8kJ////Egme///+CpD5////sQmn////+gSN////+475//99DAmn//7//3MCeP////+iA43//wyW//////+EAvP///7/+6IDjv7///t8DAed/v+VAgWI/v/7oQMFkv58CxOm/v//oQv0v99WAAABF0lEQVR4nGNgoBAwMjFjFWdhZWPnwCLOycXNzc3DiyHOx88NAgKC6OJCYHFhEQFRVHExiLi4BLekFKY50jKyINPk4OLyChD1ikogSlkA5jYVVTV1oIC6hqYwWIGyFkRcW0dXT1gfKKDJDQUGYHFDI2MTXVN1dW44MDMHqzeyMDa2tDJFSJhZ2wDFbe2MQcDewVHYCSru7AIyxxUsbuxm7+7hCdZk5uUNMsfHAizu6wc0DSxjZu0PsiAALBwYFAwyLSTUyYk7LBzsoohAkERkEJiKio6JjYuHeCEhESiUlAyxx9g+JTUN6uf0jMysrEBjGMjOgYdSbl5+gQlUuLCoGClcS0rLoDoKyytQYqKyqrqmFgTq6hGCAM2nPDTEuu7AAAAAAElFTkSuQmCC",
        paintCan:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbZQTFRFAAAAtNListHhtNLitNLiBoGvBHumT5y4tNLiBoGvBoGvBHumtNLi/gNitid6DH6tY6fBts3f/QRltNLitdPit9Tj2Obu+xhx/BFssTeDFoWyE4ezYqrHtdLi2G2l/gNk/gNk/gNktNLiwtvnyt7q55C66Iu35Yy4ibvUg77WwNrowdrnsdDh2Wuj/gNk/gNk/gNk/gNktNLis9Li2keNsyl7NJe9Rp/CCX2nUJy42meh/gNk/gNkLm2j6A5qtCl7AnaeT5y3tNHi6EKL+wNj9wNh/gNk/gNk6A5rA3igAXKXusHX+g5q6gJa/gNkBoGvQWOd8ApomjaCCX6rAXOZAXKXn8fZ9xdw8ANc+ANh8gNe/gNk/gNkBoGvQWOejS9yBXCWAXKY/gNk+gNi9gNg7QJb+QNh/gNkBoGvBoGv5wJY4wJWgjJy/gNk+QNi/gNkBoGv4wJW5AJX/gNkQGKb2whb/gNk/gNk/gNkBoCtAnSaOVaH1Qla/gNk/gNk/gNkBoCtBX+rBHymA3GX/gNk/gNk/gNkAXOYAXKX/gNk/gNkAXOZ/gNk/gNkAXOZAXOZ/gNk/gNkOvNUWwAAAJJ0Uk5TAFJF/4EBqf+Cp///DAGo//+ECHj9vRCo////////+NKRIrP/+vb//////////P/8rRkikOz///////7uT/////////////1i////////Po7//////9qIt////9EE3P///xlB/////0ka3f//2vf/oN7ZGN///9muVf///9rTdBPe//8ZHQkSG987vxvYehMQdTpgjpI8AAABJklEQVR4nGNgIB8w4hBnYmbBKs7Kxs7MgU2ck4sbQ4aHgYGXj5+Li1uAWVAISVxYRFRMXEJSSlpaRpZZTl5BESahpKyiqqampq6hqaWtw6yrp29gCJEwMjbRAwFTfjNzC0tmKz09axuovbZ2YBl7oD0Ojk7OLq5u7hD3cNl6wGQ8vdi9fXz19P0YGPy5gCAgECwTFBziFRoWHhEZFR3DEAuS4IoDy7jEJ4QmMiQlp6SmpTNkZHLB9LhkZeckMjDE5Oq55OUzMGQUQGWA4oVFIOcUAzUXA2monpJSqDhDWXmFnj6IAdZTWVVdAxFnqK2r19MDszIaGpuA7mmGhkVLaxtUgqG9w8sL6B4o6DSMKeuCsrs7EOIMPb1IYdzXj2BPmIglxggDALjHQULFhvHMAAAAAElFTkSuQmCC",
      },
    },
    erasor: {
      pick: false,
    },
    colorPicker: {
      pick: false,
      color: "#000000",
      bgColor: "#ffffff",
      brushType: "round",
      brushSize: { current: 1, max: 50, min: 1 },
    },
    tools: {
      pen: { boundary: {} },
      brush: { boundary: {} },
      erasor: { boundary: {} },
      brushRound: { boundary: {} },
      brushSquare: { boundary: {} },
      paintCan: { boundary: {} },
    },
    drawBox: { isDrawn: "false", coord: {}, boundary: {} },
    resetCanvas: { pick: false, boundary: {} },
    saveAs: { pick: false, boundary: {} },
  }
  export default Settings;