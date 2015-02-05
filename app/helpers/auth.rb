def current_user
 redirect '/' unless session[:user_id]
 User.find(session[:user_id])
end
