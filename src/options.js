const colors = ['#ffffff','#eeeeee','#aaaaaa','#000000','#445566','#4477cc','#5599dd','#aa0000','#cc0000','#ee7733','#ffcc00','#77aa44'];
export default {
    name: 'reditor',
    tools: {
        removeformat: '清除格式',
        upload: {
            title: '添加文件',
            params: true
        },
        zhconv: {
            icon: '简',
            title: '简繁体切换',
            params: './lib/zh_lib.js'
        },
        replace: {
            title: '查找替换',
            params: true
        },
        bold: '加粗',
        italic: '斜体',
        underline: '下划线',
        strikethrough: '删除线',
        subscript: '下标',
        superscript: '上标',
        fontname: {
            title: '字体',
            params: ['Helvetica','MicrosoftYaHei','Arial','SimHei','SimSum','FangSong','KaiTi','STKaiti','STSong','STFangSong']
        },
        fontsize: {
            title: '字号',
            params: [12,13,14,16,18,20,22,24,28,32,36,42,48,56,72]
        },
        linespacing: {
            title: '行距',
            params: [1,1.5,1.6,1.8,2,2.5,3,3.5,4,4.5,5]
        },
        forecolor: {
            title: '前景色',
            params: colors
        },
        backcolor: {
            title: '背景色',
            params: colors
        },
        justifyleft: {
            title: '左对齐',
            params: true
        },
        justifycenter: '居中对齐',
        justifyright: '右对齐',
        justifyfull: '两端对齐',
        indent: '段落缩进',
        outdent: '减去缩进',
        link: {
            title: '添加超链接',
            params: true
        },
        unlink: '删除超链接',
        code: {
            title: '插入代码',
            params: true
        }
    },
    upload: {
        field: 'file',
        type:{
            image: ['jpg','jpeg','gif','png','webp','ico','bmp'],
            video: ['mp4','ogg','webm','mkv'],
            audio: ['mp3'],
            other: ['pdf','txt']
        },
        size: {
            image: 1,
            video: 1024,
            audio: 12,
            other: 1024
        },
        thumb: {
            width: 480,
            height: 'auto'
        },
        logo: {
            path: './themes/logo.png',
            targetWidth: 600,
            width: 120,
            alpha: 65,
            position: 5
        },
        // path: 'http://news.wenweipo.com/test/test.php',
        path: 'http://localhost/demo/data.php',
        form: '<label class="re-label">缩略图(仅图片和视频)：<input class="re-checkbox-s" type="checkbox" name="thumb"></label>'
    }
};
