get '/squirrels/:squirrel_id/nuts' do
  @squirrel = Squirrel.find(params[:squirrel_id])
  erb :list_nuts  
end
