get '/' do 
  redirect '/authenticate/login' unless session[:user_id]
  erb :welcome
end
