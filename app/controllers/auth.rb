get '/authenticate/login' do
 @error = "Username or Password Invalid" if params[:error]
 erb :login
end

get '/authenticate/signup' do
  @error = "Something Went Wrong" if params[:error]
  erb :signup
end

post '/authenticate/register_user' do
  user = User.new(params)
  redirect '/' if user.save!
  redirect '/authenticate/signup?error=true'
end

post '/authenticate/user' do
  user = User.find_by_name(params[:name])
  if user && user.authenticate(params[:password])
   session[:user_id] = user.id
   redirect '/'
  else
    redirect '/authenticate/login?error=true' 
  end
end

post '/authenticate/logout' do
  session[:user_id] = nil;
  redirect '/'
end


