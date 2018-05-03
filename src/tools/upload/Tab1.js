import Files from './Files';
import Items from './Item';

class Tab1{
    constructor(){
        let _this = this;
        this.input = document.create('input');
        this.input.type = 'file';
        this.input.multiple = true;
        this.choser = null;
        this.upload = null;
        this.clear = null;
        this.list = null;
        this.handlers = {
            choser(){
                _this.input.value = '';
                document.body.appendChild(_this.input);
                _this.input.click();
                document.body.removeChild(_this.input);
            },
            upload(){
                console.log(Files.items);
            },
            clear(){
                Items.remove();
            },
            input(){
                let frag = document.frag(),
                    len = _this.input.files.length,
                    i = 0,
                    file,
                    id;
                for(; i<len; i++){
                    file = _this.input.files[i];
                    id = 're' + file.lastModified + file.size;
                    if(Files.add(id, file)) continue;
                    frag.appendChild(Items.create(id));
                }
                _this.list.appendChild(frag);
            }
        };
    }
    init(o){
        this.choser = document.getElementById(o.choser);
        this.upload = document.getElementById(o.upload);
        this.clear = document.getElementById(o.clear);
        this.list = document.getElementById(o.list);

        this.choser.on('click', this.handlers.choser);
        this.upload.on('click', this.handlers.upload);
        this.clear.on('click', this.handlers.clear);
        this.input.on('change', this.handlers.input);
    }
    destroy(){
        this.choser.off('click', this.handlers.choser);
        this.upload.off('click', this.handlers.upload);
        this.clear.off('click', this.handlers.clear);
        this.input.off('change', this.handlers.input);
    }
}

export default new Tab1();