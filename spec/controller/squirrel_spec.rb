require_relative '../spec_helper'

class SquirrelSpec 
  describe 'squirrels' do
    let(:squirrel) { Squirrel.create(name: 'Rockey', tree_mail: 'tree@mail.com', tail_length: 123)}

    before do
      squirrel
    end

    it 'should respond to /squirrels' do
      get '/squirrels' 
      expect(last_response).to be_ok
      expect(last_response.body).to include 'Rockey'
    end

    it 'should respond to /squirrles/new' do
      get '/squirrels/new'
      expect(last_response).to be_ok
      expect(last_response.body).to include 'add'
    end

    it 'should respond to /squirrels/:id' do
      get "/squirrels/#{squirrel.id}"
      expect(last_response).to be_ok
      expect(last_response.body).to include 'update'
      expect(last_response.body).to include 'Rockey'
    end

    it 'should respond to /squirrels/create' do
      post '/squirrels/create', params={ squirrel: {name: 'Scott Summers', tree_mail: 'cyclops@xmen.com', tail_length: 412}}
      expect(last_response).to be_redirect
      follow_redirect!
      expect( last_response.body).to include 'update'
      expect( last_response.body).to include 'Scott Summers'
    end
  end
end
