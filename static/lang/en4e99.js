var names = {
    lang:'en',
    firt_name: 'First Name',
    last_name: 'Last Name',
    company_logo: 'Company Logo',
    company_name: 'Company Name',
    company_information:'Company Information',
    company_province:'Company Province',
    company_city:'Company City',
    contact_information:"Contact Information",
    business_information:'Business Information',
    people_RFQs:'People in Charge of RFQs',
    company_qualifications:'Company Qualifications',
    user_name:'User Name',
    company_tel:'Company Tel',
    register_capital:'',
    company_contacts:"Company Contacts",
    country_region:'Country/Region',
    company_contacts_tel:"Company Contacts Tel.",
    company_location:'Company Location',
    People_charge_of_RFQs:'People in Charge of RFQs',
    request_fork:"Request For",
    main_products:'Main Products',
    establishing_in:'Establishing In',
    type_title:'the type',
    company_profile:'Company Profile',
    phone_verify_code:'Phone verification code',
    email_verify_code: 'Email verification code',
    email_verify: 'Email',
    username_or_email: 'Username or Email',
    job_title:'Job Title',
    certificate_name:'Certificate name',
    mobile_tel:'Mobile Phone',
    password: 'Password',
    services_name:'Name',
    Keyword:'Keyword',
    minimum:'minimum',
    minimumValue:'The minimum value cannot be greater than the maximum value',
    maximum:'maximum',
    computer_description:'Computer Description',
    title:'Title',
    request_type:'Request Type',
    order_volume:'Order Volume',
    order_time:'Order Time',
    valid_time:'Valid Time',
    payment_methods:'Payment Methods',
    contact_name:'Contact Name',
    area_code:'Area code',
    contact_tel:'Contact Tel',
    location:'Location',
    not_size:'Not more than 200m',
    delete_the_contact_persons:'Delete the Contact Persons',
    business_nature_place_holder:'Business Nature *',
    business_scope:'Business Scope',
    request_for:'Request For',
    main_picture:'Main Picture',
    service_picture:'Service Picture',
    expected_order_volume:'Expected Order Volume',
    product_requested:'Product Requested',
    picture_uploaded:'Picture uploaded',
    back_Homepage:'Back to Homepage',
    term_validity:'term of validity',
    product_name:'Product name',

    keyWords_title:'Key word repetition!',
    your_profile:'Your profile',
    business_nature:'Business Nature',
    country_or_region:'Country/Region',
    province_city:'City'
}

var tips = {
    checking: 'Checking...',
    user_name_warning: 'Your username must be at least 6 characters.',
    user_name_exists_warning: 'Your username already exists.',
    company_name_warning: 'Your company name must be at least 10 characters',
    password_lower_character_warning: 'Your password must include 1 lowercase.',
    password_upper_character_warning: 'Your password must include 1 uppercase.',
    password_number_warning: 'Your password must include 1 number.',
    confirm_password_warning: 'The two passwords you entered do not match.',
    email_warning: 'The format of your email address is incorrect.',
    email_exists_warning: 'Your email address already exists.',
    phone_warning: 'Your phone number is incorrect.',
    phone_exists_warning: 'The phone number exists already.',
    verification_code_warning: 'Email verification code can not be empty.',
    company_logon_warning: 'Please upload the company logo.',
    certificate_name_warning: 'Please upload the Certificate name.',
    slide_to_verify_tip: 'Please slide to verify',
    slide_verify_success_tip: 'Verified!',
    agree_policy_warning: 'You must agree to the Terms of Service and Private Policy of jiagle.com. ',
    subscrib_success: 'Subscrib Successfully!',
    subscrib_failed:'Subscribe failed!',
    reset_password_success:'Reset Password Successfully!',
    verification_successful:'Verification Successful!',
    product_requested:'Product Requested',
    collection_success:'Collection Successful',
    collection_supplier_already_exists:'Already added as your wishlist, please do not add again!',
    collection_supplier_not_found:'Supplier not found',
    collection_product_already_exists:'Already added as your wishlist, please do not add again!',
    collection_product_not_found:'Product not found',
    operate_success: 'Operate success！',

    non_empty_warning: function (value) {
        //输入框非空判断
        return value + ' can not be empty.'
    },
    non_select_warning: function (value) {
        //选择框 多选框 单选框判断
        return 'Please choose ' + value
    },
    //字符长度判断
    input_length_warning(name, num) {
        return 'Your ' + name + ' must be at least ' + num + ' characters.'
    }
}

let imgDomain = 'https://leimg.jiagle.com';
let fileDomain = 'https://leimg.jiagle.com';

var rfqs = {
    receive_list_title_1:'Product/Service Information',
    receive_list_title_2:'Content',
    receive_list_title_3:'Readed',
    receive_list_title_4:'From',
    receive_list_title_5:'Expired Time',
    receive_list_title_6:'Settings',

    send_list_title_1:'Product/Service Information',
    send_list_title_2:'Inquiry Content',
    send_list_title_3:'Expired Time',
    send_list_title_4:'Inquiry Time',
    send_list_title_5:'Settings',
    read_status:{
        readed:'Yes',
        unread:'No'
    },
    receive_list_long_term:'Long Term Effective',
    list_setting_look_up:'Look Up',
}

var basket = {
    list_title_1:'Product Information',
    list_title_2:'Reference Price',
    list_title_3:'Settings',
    settings:{
        send_request:'Send Request',
        delete:'Delete',
    },
    no_price_quoted:'No Price Quoted'
}

var products = {
    list_title_1:'Product Information',
    list_title_2:'Reference Price',
    list_title_3:'Status',
    list_title_4:'Tag',
    list_title_5:'Settings',
    list_title_7:'Services Information',
    settings:{
        preview:'Preview',
        edit:'Edit',
        delete:'Delete',
        set:'Set',
    },
    status:{
        verified:'Verified',
        pending:'Pending',
        refused:'Refused',
    },
    no_price_quoted:'No Price Quoted'
}

var ezbuy = {
    list_title_1:'Title',
    list_title_2:'Status',
    list_title_3:'Valid Time',
    list_title_4:'Settings',
    settings:{
        look_up:'Look up',
        delete:'Delete',
    },
    status:{
        approved:'Approved',
        pending:'Pending',
        refused:'Refused',
    },
    list_long_term:'Long Term Effective'
}
var wishlist = {
    list_title_1: 'Product Information',
    list_title_2: 'Reference Price',
    list_title_3: 'Settings',
    list_title_4:'Suppliers Information',
    price_quoted:'No Price Quoted',
    add_RFQs_basket:'Add to RFQs Basket',
    delete:"Delete"
}
var vidoUpload = {
    bucket:'imgexiu',
}
