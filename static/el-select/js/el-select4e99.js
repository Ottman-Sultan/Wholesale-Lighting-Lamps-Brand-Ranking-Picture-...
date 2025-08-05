// <div className="input-group">
//     <label className="input-label">Illumination area</label>
//     <div className="el-select-parent arrow-parent">
//         <input type="text"
//                className="input-box el-select-input el-select-placeholder"
//                data-toggle="#zsmj_type"
//                autoComplete="off"
//                readOnly=""
//                placeholder="- - - - - - SELECT - - - - - -  "
//                value="{{$product->zsmj_type_text}}"/>
//         <input type="hidden"
//                name="zsmj_type"
//                id="zsmj_type"
//                value="{{$product->zsmj_type}}"/>
//         <el-select className="el-select" data-func="要触发的函数名称">
//             @foreach($options['zsmj'] as $value => $label)
//             <el-option className="el-option"
//                        data-value="{{$value}}"
//             >{{$label}}</el-option>
//             @endforeach
//         </el-select>
//         <div className="arrow"></div>
//     </div>
// </div>


/***********************自定义select start **********************************/
$(document).ready(function () {

    // 点击输入框或右侧箭头时展开下拉框
    $(document).on('click', '.el-select-input,.arrow', function (e) {
        var el_select_input_val = $(this).val()

        // 遍历每个下拉选项，选中符合要求项
        $(this).siblings('.el-select').find('.el-option').each(function (index, element) {
            if (
                $(this).data('value') == el_select_input_val
                || $(this).text().trim() == el_select_input_val
                || $(this).attr('selected')
            ) {
                $(this).siblings().removeClass('el-option-on').removeAttr('selected');
                $(this).addClass('el-option-on').attr('selected', 'selected')
            } else {
                if (index === 0) {
                    // $(this).siblings().removeClass('el-option-on').removeAttr('selected');
                    $(this).addClass('el-option-on')
                }
            }
        });

        var el_select_input = $(this).parent().find('.el-select-input')
        var width = el_select_input.innerWidth();
        var height = el_select_input.height();
        var thatOffset = el_select_input.offset();

        var parentOffset = $(this).parent().offset();
        var left = thatOffset.left - parentOffset.left;
        var top = (thatOffset.top - parentOffset.top) + height;


        var el_select = $(this).parent().find('.el-select')
        var eTop = thatOffset.top;
        var scrollTop = $(window).height() - (eTop - $(window).scrollTop()) - height;

        if (scrollTop < el_select.height() && $(window).height() > el_select.height()) {
            var thaOuter = $(this).outerHeight(true) - height
            var el_selectOuter = el_select.outerHeight(true) - el_select.height()
            top = -(el_select.outerHeight(true) - (thaOuter - el_selectOuter))
        }

        el_select.css({
            left: left,
            width: width,
            top: top
        });

        // 显示下拉框
        selectToggleClass(el_select)
        e.stopPropagation();

    });

    $(document).on('mouseenter', '.el-option', function () {//绑定鼠标进入事件
        // $(this).addClass('hover');
        $(this).addClass('el-option-on').siblings().removeClass('el-option-on');
    });
    $(document).on('mouseleave', '.el-option', function () {//绑定鼠标划出事件
        // $(this).removeClass('hover');
    });


    $(document).on('click', '.el-option', function (e) {
        var value = $(this).data('value') || $(this).attr('value') || '';
        var name = $(this).data('name') || $(this).text().trim();
        var func = $(this).parent().data('func') || '';
        var select_input = $(this).parent().parent().find('.el-select-input');
        var el_select = $(this).parent();
        if (select_input[0].localName == 'input') {
            select_input.val(name);
        } else {
            select_input.html($(this).html());
        }
        if (typeof ($(select_input).attr("required")) != "undefined") {
            value = !value && name.indexOf('- - SELECT - -') > -1 ? 0 : (value || name)
            select_input.attr('required-val', value);
            if (changeFormDisabled && typeof (changeFormDisabled) == "function") {
                changeFormDisabled()
            }

        }

        var toggle = select_input.data('toggle');
        $(toggle).val(value).trigger("change");

        selectToggleClass(el_select)

        if (func && typeof (eval(func)) == "function") {
            var that = $(this)
            eval(func + "(that,value,name);");
        }

        e.stopPropagation();
    });

    function selectToggleClass(el_select) {
        $('.el-select').each(function (index, val) {
            if (index != $('.el-select').index(el_select)) {
                $(this).removeClass('el-select-on')
            }
        })
        el_select.toggleClass('el-select-on');
    }

    $(document).bind("contextmenu", function (e) {
        $('.el-select').removeClass('el-select-on');

    });
    $(document).click(function (event) {
        $('.el-select').removeClass('el-select-on');
    });
});
/***********************自定义select end **********************************/
