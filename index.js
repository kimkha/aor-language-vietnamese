module.exports = {
    aor: {
        action: {
            delete: 'Xoá',
            show: 'Hiển thị',
            list: 'Danh sách',
            save: 'Lưu',
            create: 'Tạo mới',
            edit: 'Sửa',
            cancel: 'Huỷ bỏ',
            refresh: 'Làm mới',
            add_filter: 'Thêm bộ lọc',
            remove_filter: 'Bỏ bộ lọc',
            back: 'Trở về',
        },
        boolean: {
            true: 'Đúng',
            false: 'Sai',
        },
        page: {
            list: 'Danh sách %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Tạo %{name}',
            delete: 'Xoá %{name} #%{id}',
            dashboard: 'Bảng điều khiển',
            not_found: 'Không tìm thấy'
        },
        input: {
            autocomplete: {
               none: 'Không'
            },
            file: {
               upload_several: 'Click để chọn một tệp tin hoặc kéo thả nhiều tệp tin để tải lên.',
               upload_single: 'Click để chọn một tệp tin hoặc kéo thả để tải lên.',
            },
            image: {
                upload_several: 'Click để chọn một bức ảnh hoặc kéo thả nhiều bức ảnh để tải lên.',
                upload_single: 'Click để chọn một bức ảnh hoặc kéo thả để tải lên.',
            },
            references: {
                all_missing: 'Không thể tìm thấy dữ liệu tham khảo.',
                many_missing:
                    'Ít nhất một tài liệu tham khảo liên quan không còn xuất hiện nữa',
                single_missing:
                    'Tài liệu tham khảo liên quan không còn tồn tại nữa',
            },
        },
        message: {
            yes: 'Có',
            no: 'Không',
            are_you_sure: 'Bạn có chắc không ?',
            about: 'Về',
            not_found: 'Bạn đã nhập một URL sai hoặc bạn đã làm theo một liên kết không đúng.',
        },
        navigation: {
            no_results: 'Không có kết quả nào',
            page_out_of_boundaries: 'Trang số %{page} đã vượt giới hạn',
            page_out_from_end: 'Không thể đi tiếp sau trang cuối',
            page_out_from_begin: 'Không thể trở lại trước trang 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} của %{total}',
            next: 'Tiếp',
            prev: 'Trước',
        },
        auth: {
            username: 'Tên đăng nhập',
            password: 'Mật khẩu',
            sign_in: 'Đăng nhập',
            sign_in_error: 'Đăng nhập thất bại, vui lòng thử lại',
            logout: 'Đăng xuất',
        },
        notification: {
            updated: 'Thành phần được cập nhật',
            created: 'Thành phần đã được tạo',
            deleted: 'Thành phần đã bị xoá',
            item_doesnt_exist: 'Thành phần không tồn tại',
            http_error : 'Lỗi giao tiếp với máy chủ',
            bad_item: 'Element không đúng.',
        },
        validation: {
            required: 'Bắt buộc',
            minLength: 'Ít nhất phải %{min} ký tự.',
            maxLength: 'Phải nhỏ hơn hoặc bằng %{max}.',
            minValue: 'Phải lớn hơn hoặc bằng %{min}',
            maxValue: 'Phải nhỏ hơn hoặc bằng %{max}',
            number: 'Phải là số',
            email: 'Email phải hợp lệ.',
        },
    },
};
