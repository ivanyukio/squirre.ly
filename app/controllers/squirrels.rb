get '/squirrels' do
  @squirrels = Squirrel.all
  erb :list_squirrels
end

get '/squirrels/new' do
puts params
 erb :edit_squirrels
end 

get '/squirrels/:id' do
  begin
    @squirrels = Squirrel.find( params[:id] ) 
    erb :show_squirrel
  rescue
    404
  end
end

post '/squirrels/create' do
  new_squirrel = Squirrel.create(params[:squirrel])
  redirect "/squirrels/#{new_squirrel.id}"
end
