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
