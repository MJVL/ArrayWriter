# ArrayWriter
Simple JavaScript class that writes the contents of an array to a webpage.
## Documentation
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


### new ArrayWriter(list)
Creates an instance of ArrayPrinter.


| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The desired array to fill the ArrayPrinter with. |


### ArrayWriter.list ⇒ <code>Array</code>
Getter

**Kind**: instance property of [<code>ArrayWriter</code>](#ArrayWriter)
**Returns**: <code>Array</code> - The current array of this instance of ArrayWriter.


### ArrayWriter.list
Setter

**Kind**: instance property of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The desired array to fill the ArrayPrinter with. |

<a name="ArrayWriter+writeArray"></a>

### ArrayWriter.writeArray()
Writes the contents of _list to the document in paragraph tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

### ArrayWriter.writeArray(startTag, endTag)
Writes the contents of _list to the document between the entered tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| startTag | <code>String</code> | The desired start tag to write. |
| endTag | <code>String</code> | The desired end tag to write. |

## Installation 
`git clone https://github.com/MJVL/ArrayWriter.git `
## Usage
```JavaScript
<script src="arraywriter.js"></script> 
```
