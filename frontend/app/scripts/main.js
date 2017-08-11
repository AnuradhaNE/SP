var latestScrollValue = 0;
$(document).ready(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $('#searchbutton').fadeIn('fast') : $('#searchbutton').fadeOut('fast')
    }),
    $('#dialog_open').click(function(e) {
        $('#dialog_menu').velocity({
            opacity: 1
        }, {
            display: 'block'
        })
    }),
    $('#searchbutton').click(function() {
        $('html, body').velocity('scroll', {
            duration: 600
        })
    }),
    $('#userbutton').click(function() {
        $('#user_menu').velocity({
            opacity: 1
        }, {
            display: 'block'
        })
    }),
    $('#categorybutton').click(function() {
        $('#category_menu').velocity({
            opacity: 1
        }, {
            display: 'block'
        })
    }),
    $('.overlay_menu').click(function(e) {
        e.preventDefault()
    }),
    $('.overlay_menu .closebutton ').click(function(e) {
        $('.overlay_menu').velocity({
            opacity: 0
        }, {
            display: 'none'
        })
    }),
    $('#db2').click(function(e) {
        $('#d2').toggleClass('show')
    }),
    $('.dropdown-menu.combo .item .option ').click(function(e) {
        $(this).closest('ul').prev('button').html(' ' + $(this).attr('value'))
    });
    var e = 0
      , t = 'p'
      , n = !1
      , r = ['0', 'null', 'null', 'null', 'null']
      , i = document.getElementById('s-behind');
    $('#searchtext').on('keypress', function(o) {
        var a = String.fromCharCode(o.which);
        console.log('Level  ' + e),
        '.' === a && n && (e += 1),
        t = a;
        var s = $(this).val().charAt(0);
        $(this).val().length <= 1 ? n = !1 : (n = ('@' === s || '#' === s || '!' === s || '$' === s) && $(this).val().length >= 4 || 'this' === $(this).val() || 'me' === $(this).val(),
        ('@' === s || '#' === s || '!' === s || '$' === s) && $(this).val().length >= 4 ? 1 == e && (r[e] = s,
        '@' != r[e] && '#' != r[e] || (console.log('@ : ' + r[e]),
        i.value = $('#searchtext').val() + '.posts')) : 'this' !== $(this).val() && 'me' !== $(this).val() || 1 == e && (r[e] = $(this).val()),
        console.log('Level ' + e + ' type' + r[e])),
        console.log('Is a Sp query:  ' + n + '  L ' + e);
    }),
    $('#searchtext').on('keyup', function(r) {
        var o = r.keyCode || r.charCode
          , a = $(this).val().charAt(0);
        if (n = !($(this).val().length <= 1) && (('@' === a || '#' === a || '!' === a || '$' === a) && $(this).val().length >= 4 || 'this' === $(this).val() || 'me' === $(this).val()),
        8 == o || 46 == o) {
            e > 0 && 8 == r.which && '.' === t && n && (e -= 1);
            var s = (t = $(this).val()).charAt(t.length - 1);
            t = s
        } else
            39 == o && (document.getElementById('searchtext').value = i.value,
            i.value = '')
    }),
    $('#searchtext').on('keydown', function(e) {
        if (190 == e.keyCode) {
            $(this).val().charAt(0);
            return n
        }
    }),
    $('#category_menu .menucontent .floating-button ').click(function(e) {
        $('#category_menu .title').html(' ' + $(this).attr('value'))
    }),
    $('#user_menu .menucontent .floating-button ').click(function(e) {
        $('#user_menu .title').html(' ' + $(this).attr('value'))
    })
});
var addDropBehaviour = function(e) {
    if (!e.target.classList.contains('dropdown-button')) {
        var t, n = document.getElementsByClassName('dropdown-menu');
        for (t = 0; t < n.length; t++) {
            var r = n[t];
            r.classList.contains('show') && r.classList.remove('show')
        }
    }
};
document.addEventListener('click', addRippleEffect, !1),
document.addEventListener('click', addDropBehaviour);
function getCurrDate(e) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][e.getMonth()] + '-' + e.getDate() + ' ' + e.getFullYear() + '  ' + e.getHours() + ':' + e.getMinutes() + ' ' + getAcr(e)
}
function getAcr(e) {
    return e.toString().replace(/.*[(](.*)[)].*/, '$1').match(/\b(\w)/g).join('')
}
function showS(e) {}
function vfout(e) {
    $(e).velocity({
        opacity: 0
    }, {
        display: 'none'
    })
}
function vfin(e) {
    $(e).velocity({
        opacity: 1
    }, {
        display: 'block'
    })
}
function addRippleEffect(e) {
    var t = e.target;
    if ('button' !== e.target.tagName.toLowerCase())
        return !1;
    var n = t.getBoundingClientRect()
      , r = t.querySelector('.ripple');
    r || ((r = document.createElement('span')).className = 'ripple',
    r.style.height = r.style.width = Math.max(n.width, n.height) + 'px',
    t.appendChild(r)),
    r.classList.remove('show');
    var i = e.pageY - n.top - r.offsetHeight / 2 - document.body.scrollTop
      , o = e.pageX - n.left - r.offsetWidth / 2 - document.body.scrollLeft;
    return r.style.top = i + 'px',
    r.style.left = o + 'px',
    r.classList.add('show'),
    !1
}
