PdfComponent = {
    formats: ['format_pdf'],
    factory: function(sandbox) {
        return new PdfViewer(sandbox);
    }
};

var PdfViewer = function(sandbox){
    this._initWindow(sandbox);
};

PdfViewer.prototype = {
    
    _container: null,
    
    _initWindow: function(sandbox) {
        this._container = '#' + sandbox.container;
        this.sandbox = sandbox;
        
        if (this.sandbox.link_addr) {           
            this.sandbox.getLinkContent(this.sandbox.link_addr, 
                                            $.proxy(this.receiveData, this),
                                            function () {});
        }
    },
    
    // ---- window interface -----
    receiveData: function(data) {
        $(this._container).empty();
        $(this._container).append('<iframe width="500" height="500" src="https://docs.google.com/viewer?url=' + data + '&embedded=true"></iframe>');
    },
};

SCWeb.core.ComponentManager.appendComponentInitialize(PdfComponent);
