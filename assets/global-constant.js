var pathparts = location.pathname.split("/");
if (location.host == "localhost") {
	var base_url = location.origin + "/" + pathparts[1].trim("/") + "/";
} else {
	var base_url = location.origin + "/" + pathparts[1].trim("/") + "/";
}


/* URL BACKEND CURL */
post_url = "api/IndexApi/post";
post_file_url = "api/IndexApi/post_file";
put_url = "api/IndexApi/put";
get_url = "api/IndexApi/get";

/* URL API */
add_user_url = "regissubmit";
login_user_url = "login";

// course
send_payment_url = "payconfirm";
read_course_url = "course";
create_course_url = "createcourse";
create_chapter_url = "createchapter";
create_chapter_url_vid = "createchapter_vid";

// multi-data
get_datatable_url = "datatable";

/* DICTIONARY */
course_dic = "course";
course_chapter_dic = "course_chapter";
mentor_dic = "mentor";


/*NON CURL*/
noncurl_api_url = "http://temporaryapi.rumahpeneleh.or.id/";
