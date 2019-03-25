module.exports = {
    ra: {
        action: {
            delete: '刪除',
            show: '查看',
            list: '列表',
            save: '保存',
            create: '新建',
            edit: '編輯',
            sort: '排序',
            cancel: '取消',
            undo: '恢復',
            refresh: '刷新',
            add: '增加',
            remove: '刪除',
            add_filter: '增加檢索',
            remove_filter: '移除檢索',
            back: '退回',
            bulk_actions: '選中%{smart_count}項',
            export: '輸出',
            search: '搜尋',
            show: '顯示',
            clone: '複製',
            confirm: '確認',
        },
        boolean: {
            true: '是',
            false: '否',
        },
        page: {
            list: '%{name} 列表',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '新建 %{name}',
            dashboard: '概覽',
            not_found: '未發現',
            loading: '加載中',
            error: '出現錯誤',
        },
        input: {
            file: {
                upload_several:
                    '將多文件拖至此上傳，或點擊選取所有需要上傳的文件',
                upload_single: '將文件拖至此上傳, 或點擊這裡選取文件',
            },
            image: {
                upload_several:
                    '將多圖片拖至此上傳，或點擊選取所有需要上傳的圖片',
                upload_single:
                    '將圖片拖至此上傳, 或點擊這裡選取圖片',
            },
            references: {
                all_missing: '未找到參考數據.',
                many_missing:
                    '至少有一條參考數據不再可用.',
                single_missing:
                    '關聯的參考數據不再可用.',
            },
        },
        message: {
            yes: '是',
            no: '否',
            are_you_sure: '您確定?',
            about: '關於',
            not_found:
                '您輸入了錯誤的網址或者錯誤的鏈接.',
            loading: '頁面讀取中, 請稍候',
            invalid_form: '表單輸入無效. 請檢查錯誤提示',
            details: '詳細',
            delete_title: '刪除 %{name} #%{id}',
            delete_content: '您確定要刪除該項目?',
            error:
                "網頁錯誤，您的請求無法完成",
            bulk_delete_title:
                '刪除 %{name} |||| 刪除 %{smart_count}項 %{name} ',
            bulk_delete_content:
                '您確定要刪除 %{name}? |||| 您確定要刪除 %{smart_count} 項?',
        },
        navigation: {
            no_results: '結果為空',
            no_more_results:
                '頁碼 %{page} 超出末頁. 試試上一頁.',
            page_out_of_boundaries: '頁碼 %{page} 超出末頁',
            page_out_from_end: '已到最末頁',
            page_out_from_begin: '已到最前頁',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: '每頁行數:',
            next: '向後',
            prev: '向前',
        },
        auth: {
            user_menu: '設置',
            username: '用戶名',
            password: '密碼',
            sign_in: '登錄',
            sign_in_error: '驗證失敗, 請重試',
            logout: '退出',
        },
        notification: {
            updated: '條目已更新 |||| %{smart_count} 項條目已更新',
            created: '條目已新建',
            deleted: '條目已刪除 |||| %{smart_count} 項條目已刪除',
            bad_item: '不正確的條目',
            item_doesnt_exist: '條目不存在',
            http_error: '與服務通信出錯',
            canceled: '取消動作',
            data_provider_error: 'dataProvider錯誤. 請檢查console的詳細信息.',
            canceled: '取消動作',
            logged_out: '已登出，請重新登入',
        },
        validation: {
            required: '必填',
            minLength: '最少 %{min} 個字',
            maxLength: '最多 %{max} 個字',
            minValue: '必須大於 %{min}',
            maxValue: '必須小於 %{max}',
            number: '必須為數字',
            email: '必須是有效的郵箱',
            oneOf: '必須為: %{options}其中一項',
            regex: '必須符合指定的格式 (regexp): %{pattern}',
        },
    },
};
