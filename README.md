# @phigoro/editorjs-toc

Table of contents for [Editor.js](https://editorjs.io).

## Installation via NPM
Get the package

```bash
npm install --save-dev @phigoro/editorjs-toc
```

Include module at your application

```javascript
const TOC = require('@phigoro/editorjs-toc');
```

## Usage
Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  ...
  
  tools: {
    ...
    toc: class: TOC,
  }
  
  ...
});
```

## Output data
| Field | Type | Description |
| ----- | ---- | ----------- |
| id | `string` | TOC block id |
| type | `string` | `toc` |
| data | `object` | TOC data |

### TOC data
| Field | Type | Description |
| ----- | ---- | ----------- |
| items | `array` | TOC items |

### TOC item
| Field | Type | Description |
| ----- | ---- | ----------- |
| id | `string` | TOC item id |
| reference | `string` | TOC item reference |
| text | `string` | TOC item text |
| level | `number` | TOC item level |

## Example
```json
{
  "id": "PYMEXBjCit",
  "type": "toc",
  "data": {
    "items": [
      {
        "id": "vdqt7oqrtm",
        "reference": "Jx6gz2I-OZ",
        "text": "Installation via NPM",
        "level": 2
      },
      {
        "id": "puyms4j4mg",
        "reference": "VVJ-XzT0sn",
        "text": "Usage",
        "level": 2
      },
      {
        "id": "d4xqj4j4mg",
        "reference": "Kx6gz2I-OZ",
        "text": "Output data",
        "level": 2
      },
      {
        "id": "luyms4j4mg",
        "reference": "fVJ-XzT0sn",
        "text": "TOC data",
        "level": 3
      },
      {
        "id": "d4xqj4j4mg",
        "reference": "dVJ-XzT0sn",
        "text": "TOC item",
        "level": 3
      }
    ]
  }
}
```