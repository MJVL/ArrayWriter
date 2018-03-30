/**
 * Class that writes the contents of an array to a webpage.
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
    
    /** Writes the contents of _list to the document in paragraph tags. */
    writeArray() {
        this.writeArray('<p>','</p>')         
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
    
}
