#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, {adapter: "sqlite3", database: "pizza.db"}

class Product < ActiveRecord::Base
end
class Order < ActiveRecord::Base
end



get '/' do	
	@products = Product.all
	erb :index			
end

get'/about' do
	erb :about
end

get '/something' do
	erb :something
end

post "/cart" do
	@o = Order.new
	erb :cart
end

get '/order' do
	@o = Order.new
	erb
end
post '/order' do	
	@o = Order.new params[:order]
	@o.save
	erb "<h2><br />Thanks for ordering, we'll get in touch with you as soon as possible!</h2>"
end
