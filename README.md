# ArrayWriter
Simple JavaScript class that writes the contents of an array to a webpage between specified tags.
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
    * [.writeArray(startTag, endTag)](#ArrayWriter+writeArray)
    * [.writeArrayP()](#ArrayWriter+writeArrayP)
    * [.writeArrayClassP(eClass)](#ArrayWriter+writeArrayClassP)
    * [.writeArrayH(headerLevel)](#ArrayWriter+writeArrayH)
    * [.writeArrayClassH(headerLevel, eClass)](#ArrayWriter+writeArrayClassH)
    * [.writeArrayDiv()](#ArrayWriter+writeArrayDiv)
    * [.writeArrayClassDiv(eClass)](#ArrayWriter+writeArrayClassDiv)
    * [.writeArraySpan()](#ArrayWriter+writeArraySpan)
    * [.writeArrayClassSpan(eClass)](#ArrayWriter+writeArrayClassSpan)
    * [.writeArrayLI()](#ArrayWriter+writeArrayLI)
    * [.writeArrayClassLI(eClass)](#ArrayWriter+writeArrayClassLI)
    * [.writeArrayIDs(startTag, endTag, prefix)](#ArrayWriter+writeArrayIDs)
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

### arrayWriter.writeArray(startTag, endTag)
Writes the contents of _list to the document between the entered tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| startTag | <code>String</code> | The desired start tag to write. |
| endTag | <code>String</code> | The desired end tag to write. |

<a name="ArrayWriter+writeArrayP"></a>

### arrayWriter.writeArrayP()
Writes the contents of _list to the document in paragraph tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)
<a name="ArrayWriter+writeArrayClassP"></a>

### arrayWriter.writeArrayClassP(eClass)
Writes the contents of _list to the document in paragraph tags that are assigned to the specified class.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| eClass | <code>String</code> | The desired class to assign to all elements. |

<a name="ArrayWriter+writeArrayH"></a>

### arrayWriter.writeArrayH(headerLevel)
Writes the contents of _list to the document in header tags at a specified level.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| headerLevel | <code>Number</code> | The desired header level to write (1-6). |

<a name="ArrayWriter+writeArrayClassH"></a>

### arrayWriter.writeArrayClassH(headerLevel, eClass)
Writes the contents of _list to the document in header tags at a specified level that are assigned to the specified class.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| headerLevel | <code>Number</code> | The desired header level to write (1-6). |
| eClass | <code>String</code> | The desired class to assign to all elements. |

<a name="ArrayWriter+writeArrayDiv"></a>

### arrayWriter.writeArrayDiv()
Writes the contents of _list to the document in divider tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)
<a name="ArrayWriter+writeArrayClassDiv"></a>

### arrayWriter.writeArrayClassDiv(eClass)
Writes the contents of _list to the document in divider tags that are assigned to the specified class.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| eClass | <code>String</code> | The desired class to assign to all elements. |

<a name="ArrayWriter+writeArraySpan"></a>

### arrayWriter.writeArraySpan()
Writes the contents of _list to the document in span tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)
<a name="ArrayWriter+writeArrayClassSpan"></a>

### arrayWriter.writeArrayClassSpan(eClass)
Writes the contents of _list to the document in span tags that are assigned to the specified class.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| eClass | <code>String</code> | The desired class to assign to all elements. |

<a name="ArrayWriter+writeArrayLI"></a>

### arrayWriter.writeArrayLI()
Writes the contents of _list to the document in list item tags.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)
<a name="ArrayWriter+writeArrayClassLI"></a>

### arrayWriter.writeArrayClassLI(eClass)
Writes the contents of _list to the document in list item tags that are assigned to the specified class.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| eClass | <code>String</code> | The desired class to assign to all elements. |

<a name="ArrayWriter+writeArrayIDs"></a>

### arrayWriter.writeArrayIDs(startTag, endTag, prefix)
Writes the contents of _list to the document between the entered tags in addition to adding an incrementing id based on the prefix. Removes last character of startTag under the assumption it's '>' in order to insert the id.

**Kind**: instance method of [<code>ArrayWriter</code>](#ArrayWriter)

| Param | Type | Description |
| --- | --- | --- |
| startTag | <code>String</code> | The desired start tag to write. |
| endTag | <code>String</code> | The desired end tag to write. |
| prefix | <code>String</code> | The prefix for every element's id. |

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


## Cloning 
`git clone https://github.com/MJVL/ArrayWriter.git `
## Usage
```JavaScript
<script src="https://rawgit.com/MJVL/ArrayWriter/master/arraywriter.js"></script> 
```
