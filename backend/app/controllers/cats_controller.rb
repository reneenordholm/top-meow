class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats.to_json(:except => [:created_at, :updated_at])
    end
end
