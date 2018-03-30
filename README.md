# ArrayWriter
Simple JavaScript class that writes the contents of an array to a webpage.
## Documentation

<a name="ArrayWriter"></a>

### ArrayWriter
Class that writes the contents of an array to a webpage.

**Kind**: global class
**Author**: Michael Van Leeuwen <michaeljvanleeuwen@gmail.com>

* [ArrayWriter](#ArrayWriter)
    * [new ArrayWriter(list)](#new_ArrayWriter_new)
    * [.list](#ArrayWriter+list) ⇒ <code>Array</code>
    * [.list](#ArrayWriter+list)
    * [.writeArray()](#ArrayWriter+writeArray)
    * [.writeArray(startTag, endTag)](#ArrayWriter+writeArray)
    * [.writeArrayConditional(startTagTrue, endTagTrue, startTagFalse, endTagFalse, boolFunction)](#ArrayWriter+writeArrayConditional)

<a name="new_ArrayWriter_new"></a>

### new ArrayWriter(list)
Creates an instance of ArrayPrinter.


| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The desired array to fill the ArrayPrinter with. |

<a name="ArrayWriter+list"></a>

### arrayWriter.list ⇒ <code>Array</code>
Getter

**Kind**: instance property of [<code>ArrayWriter</code>](#ArrayWriter)
**Returns**: <code>Array</code> - The current array of this instance of ArrayWriter.
<a name="ArrayWriter+list"></a>

### arrayWriter.list
Setter

**Kind**: instance property of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The desired array to fill the ArrayPrinter with. |

<a name="ArrayWriter+writeArray"></a>

### arrayWriter.writeArray()
Writes the contents of _list to the document in a paragraph tag.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)
<a name="ArrayWriter+writeArray"></a>

### arrayWriter.writeArray(startTag, endTag)
Writes the contents of _list to the document between the entered tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| startTag | <code>String</code> | The desired start tag to write. |
| endTag | <code>String</code> | The desired end tag to write. |

<a name="ArrayWriter+writeArrayConditional"></a>

### arrayWriter.writeArrayConditional(startTagTrue, endTagTrue, startTagFalse, endTagFalse, boolFunction)
Writes the contents of _list to to the document between two sets of entered tags determined by the evaluation of the passed boolean function for each element.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| startTagTrue | <code>String</code> | The desired start tag to write if the condition is true for the element. |
| endTagTrue | <code>String</code> | The desired end tag to write if the condition is true for the element. |
| startTagFalse | <code>String</code> | The desired start tag to write if the condition is false for the element. |
| endTagFalse | <code>String</code> | The desired end tag to write if the condition is false for the element. |
| boolFunction | <code>function</code> | The desired boolean function to be evaluated for each element. |

## Installation 
`git clone https://github.com/MJVL/ArrayWriter.git `
## Usage
```JavaScript
<script src="arraywriter.js"></script> 
```
