/**
 * Class that writes the contents of an array to a webpage between specified tags.
 * @author Michael Van Leeuwen <michaeljvanleeuwen@gmail.com>
 */

class ArrayWriter {
    
    /**
     * Creates an instance of ArrayPrinter.
     * @constructor
     * @param {Array} list The desired array to fill the ArrayPrinter with. 
     */
    constructor(list) {
        this._list = list;
    }
    
    /**
     * Getter
     * @returns {Array} The current array of this instance of ArrayWriter.
     */
    get list() {
        return this._list;
    }
    
    /**
     * Setter
     * @param {Array} list The desired array to fill the ArrayPrinter with. 
     */
    set list(list) {
        this._list = list;
    }
    
    /**
     * Writes the contents of _list to the document between the entered tags.
     * @param {String} startTag The desired start tag to write.
     * @param {String} endTag   The desired end tag to write.
     */
    writeArray(startTag, endTag) {
        this._list.forEach(function(element) {
            document.write(startTag + element + endTag);
        }); 
    }
    
    /** Writes the contents of _list to the document in paragraph tags. */
    writeArrayP() {
        this.writeArray('<p>','</p>')        
    }
    
    /** 
     * Writes the contents of _list to the document in paragraph tags that are assigned to the specified class.
     * @param {String} eClass The desired class to assign to all elements.
     */
    writeArrayClassP(eClass) {
        this.writeArray('<p class=' + eClass + '>','</p>')        
    }
    
    /** 
     * Writes the contents of _list to the document in header tags at a specified level. 
     * @param {Number} headerLevel The desired header level to write (1-6).
     */
    writeArrayH(headerLevel) {
        this.writeArray('<h' + String(headerLevel) + '>','</h' + String(headerLevel) + '>')          
    }
    
    /** 
     * Writes the contents of _list to the document in header tags at a specified level that are assigned to the specified class.
     * @param {Number} headerLevel The desired header level to write (1-6).
     * @param {String} eClass The desired class to assign to all elements.
     */
    writeArrayClassH(headerLevel, eClass) {
        this.writeArray('<h' + String(headerLevel) + ' class=' + eClass + '>','</h' + String(headerLevel) + '>')          
    }
    
    /** Writes the contents of _list to the document in divider tags. */
    writeArrayDiv() {
        this.writeArray('<div>','</div>')        
    }
    
    /** 
     * Writes the contents of _list to the document in divider tags that are assigned to the specified class.
     * @param {String} eClass The desired class to assign to all elements.
     */
    writeArrayClassDiv(eClass) {
        this.writeArray('<div class=' + eClass + '>','</div>')        
    }
    
    /** Writes the contents of _list to the document in span tags. */
    writeArraySpan() {
        this.writeArray('<span>','</span>')        
    }
    
    /** 
     * Writes the contents of _list to the document in span tags that are assigned to the specified class.
     * @param {String} eClass The desired class to assign to all elements.
     */
    writeArrayClassSpan(eClass) {
        this.writeArray('<span class=' + eClass + '>','</span>')        
    }
    
    /** Writes the contents of _list to the document in list item tags. */
    writeArrayLI() {
        this.writeArray('<li>','</li>')        
    }
    
    /** 
     * Writes the contents of _list to the document in list item tags that are assigned to the specified class.
     * @param {String} eClass The desired class to assign to all elements.
     */
    writeArrayClassLI(eClass) {
        this.writeArray('<li class=' + eClass + '>','</li>')        
    }
    
    /**
     * Writes the contents of _list to the document between the entered tags in addition to adding an incrementing id based on the prefix.
     * Removes last character of startTag under the assumption it's '>' in order to insert the id.
     * @param {String} startTag The desired start tag to write.
     * @param {String} endTag   The desired end tag to write.
     * @param {String} prefix   The prefix for every element's id.
     */
    writeArrayIDs(startTag, endTag, prefix) {
        let eNum = 0;
        this._list.forEach(function(element) {
            eNum++;
            document.write(startTag.substring(0, startTag.length - 1) + ' id=' + prefix + String(eNum) + '>' + element + endTag);
        });  
    }
    
    /**
     * Writes the contents of _list to to the document between two sets of entered tags determined by the evaluation of the passed boolean function for each element.
     * @param {String}   startTagTrue  The desired start tag to write if the condition is true for the element.
     * @param {String}   endTagTrue    The desired end tag to write if the condition is true for the element.
     * @param {String}   startTagFalse The desired start tag to write if the condition is false for the element.
     * @param {String}   endTagFalse   The desired end tag to write if the condition is false for the element.
     * @param {Function} boolFunction  The desired boolean function to be evaluated for each element.
     */
    writeArrayConditional(startTagTrue, endTagTrue, startTagFalse, endTagFalse, boolFunction) {
        this._list.forEach(function(element) {
            if (boolFunction(element)) {
                document.write(startTagTrue + element + endTagTrue);
            }
            else {
                document.write(startTagFalse + element + endTagFalse);
            }
        }); 
    }
    
     /**
     * Writes the contents of _list to to the document between two sets of entered tags determined by the evaluation of the passed boolean function for each element.
     * Modifies element based on the passed mod functions depending on the condition result for the element.
     * @param {String}   startTagTrue  The desired start tag to write if the condition is true for the element.
     * @param {String}   endTagTrue    The desired end tag to write if the condition is true for the element.
     * @param {String}   startTagFalse The desired start tag to write if the condition is false for the element.
     * @param {String}   endTagFalse   The desired end tag to write if the condition is false for the element.
     * @param {Function} boolFunction  The desired boolean function to be evaluated for each element.
     * @param {Function} modFuncTrue   The desired function to modify element if the condition is true for the element.
     * @param {Function} modFuncFalse  The desired function to modify element if the condition is false for the element.
     */
    writeArrayConditionalModifiable(startTagTrue, endTagTrue, startTagFalse, endTagFalse, boolFunction, modFuncTrue, modFuncFalse) {
        this._list.forEach(function(element) {
            if (boolFunction(element)) {
                document.write(startTagTrue + modFuncTrue(element) + endTagTrue);
            }
            else {
                document.write(startTagFalse + modFuncFalse(element) + endTagFalse);
            }
        }); 
    }
    
}
