function tab_select(t)
{
    if(t=='password_retrieval')
    {
        document.getElementById('date_1').disabled=false; 
        document.getElementById('monthSelect1').disabled=false; 
        document.getElementById('daySelect1').disabled=false; 
        document.getElementById('yearSelect1').disabled=false; 
        document.getElementById('pass_student').disabled=false; 
        document.getElementById('pass_staff').disabled=false; 
        document.getElementById('pass_parent').disabled=false; 
        document.getElementById('pass_email').disabled=false; 
        document.getElementById('password_stf_email').disabled=false; 
        document.getElementById('pass_type_form').disabled=false; 
        document.getElementById('pass_err_msg_email').innerHTML='';
        document.getElementById('pass_email').value=''; 
        document.getElementById('password_stf_email').value=''; 
        document.getElementById('uname').disabled=false; 
        document.getElementById('pass_stu_id').disabled=false; 
        document.getElementById('password_stn_id').value='';
        document.getElementById('password_stn_id').disabled=false; 
        document.getElementById(t).style.display='block';
        document.getElementById('username_retrieval').style.display='none';  
        document.getElementById('username_retrieval_link').className='tab2';
        document.getElementById('password_retrieval_link').className='tab1 active'; 
        document.getElementById('header_text').innerHTML='Forgot Password';  
        document.getElementById('uname_student').checked=true;
        document.getElementById('uname_staff').checked=false;
        document.getElementById('uname_parent').checked=false;
        document.getElementById('uname_stu_id').removeAttribute("style"); 
        document.getElementById('username_stn_id').value=''; 
        document.getElementById('err_msg').innerHTML='';
        document.getElementById('pass').value=''; 
        document.getElementById('monthSelect2').value=''; 
        document.getElementById('daySelect2').value=''; 
        document.getElementById('yearSelect2').value=''; 
        document.getElementById('date_2').value=''; 
        document.getElementById('divErr').innerHTML='';
        document.getElementById('date_2').disabled=true; 
        document.getElementById('monthSelect2').disabled=true; 
        document.getElementById('daySelect2').disabled=true; 
        document.getElementById('yearSelect2').disabled=true; 
        document.getElementById('uname_student').disabled=true; 
        document.getElementById('uname_staff').disabled=true; 
        document.getElementById('uname_parent').disabled=true; 
        document.getElementById('username_stn_id').disabled=true; 
        document.getElementById('pass').disabled=true; 
        document.getElementById('un_email').value=''; 
        document.getElementById('username_stf_email').value=''; 
        document.getElementById('username_stf_email').disabled=true; 
        document.getElementById('un_email').disabled=true; 
        document.getElementById('user_type_form').disabled=true;
        document.getElementById('uname_err_msg_email').innerHTML=''; 
        document.getElementById('uname_stf_email').style.display='none'; 
        document.getElementById('uname_stu_dob').removeAttribute("style");
        calendar.hideCalendar();
    }
    else
    {
        document.getElementById('un_email').value=''; 
        document.getElementById('username_stf_email').value=''; 
        document.getElementById('username_stf_email').disabled=false; 
        document.getElementById('user_type_form').disabled=false; 
        document.getElementById('un_email').disabled=false; 
        document.getElementById('uname_err_msg_email').innerHTML=''; 
        document.getElementById('date_2').disabled=false; 
        document.getElementById('monthSelect2').disabled=false; 
        document.getElementById('daySelect2').disabled=false; 
        document.getElementById('yearSelect2').disabled=false; 
        document.getElementById('uname_student').disabled=false; 
        document.getElementById('uname_staff').disabled=false; 
        document.getElementById('uname_parent').disabled=false; 
        document.getElementById('username_stn_id').disabled=false; 
        document.getElementById('pass').disabled=false; 
        document.getElementById(t).style.display='block';
        document.getElementById('password_retrieval').style.display='none';  
        document.getElementById('username_retrieval_link').className='tab2 active';
        document.getElementById('password_retrieval_link').className='tab1';  
        document.getElementById('header_text').innerHTML='Forgot Username';
        document.getElementById('pass_student').checked=true;
        document.getElementById('pass_staff').checked=false;
        document.getElementById('pass_parent').checked=false;
        document.getElementById('pass_stu_id').removeAttribute("style");  
        document.getElementById('password_stn_id').value='';
        document.getElementById('err_msg').innerHTML='';
        document.getElementById('divErr').innerHTML='';
        document.getElementById('uname').value=''; 
        document.getElementById('monthSelect1').value=''; 
        document.getElementById('daySelect1').value=''; 
        document.getElementById('yearSelect1').value=''; 
        document.getElementById('date_1').value=''; 
        document.getElementById('date_1').disabled=true; 
        document.getElementById('monthSelect1').disabled=true; 
        document.getElementById('daySelect1').disabled=true; 
        document.getElementById('yearSelect1').disabled=true; 
        document.getElementById('pass_student').disabled=true; 
        document.getElementById('pass_staff').disabled=true; 
        document.getElementById('pass_parent').disabled=true; 
        document.getElementById('uname').disabled=true; 
        document.getElementById('pass_stu_id').disabled=true; 
        document.getElementById('password_stn_id').disabled=true; 
        document.getElementById('pass_email').value=''; 
        document.getElementById('password_stf_email').value=''; 
        document.getElementById('pass_email').disabled=true; 
        document.getElementById('password_stf_email').disabled=true; 
        document.getElementById('pass_type_form').disabled=true; 
        document.getElementById('pass_stu_dob').removeAttribute("style"); 
        document.getElementById('pass_stf_email').style.display='none'; 
        document.getElementById('pass_err_msg_email').innerHTML=''; 
        calendar.hideCalendar();
    }
}

function show_fields(type)
{
    if(type!='student')
        {
        document.getElementById('pass_stu_id').style.display='none';
        document.getElementById('pass_stu_dob').style.display='none'; 
        document.getElementById('pass_stf_email').removeAttribute("style"); 
        }
    else
        {
        document.getElementById('pass_stu_id').removeAttribute("style");
         document.getElementById('pass_stu_dob').removeAttribute("style");
         document.getElementById('pass_stf_email').style.display='none'; 
        }
    document.getElementById('divErr').innerHTML='';
}
function uname_show_fields(type)
{
    if(type!='student')
        {
        document.getElementById('uname_stu_id').style.display='none'; 
        document.getElementById('uname_stu_dob').style.display='none'; 
        document.getElementById('uname_stf_email').removeAttribute("style");
        }
    else
        {
        document.getElementById('uname_stu_id').removeAttribute("style");
        document.getElementById('uname_stf_email').style.display='none'; 
        document.getElementById('uname_stu_dob').removeAttribute("style");
        }
    document.getElementById('divErr').innerHTML='';
}

function check_input_val(val,id)
{
    val=val.trim();
    if(isNaN(val)==true)
    {
        document.getElementById(id).value='';   
    }
}


