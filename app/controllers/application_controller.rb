class ApplicationController < ActionController::API

  
      def get_secret_key
        "123"
      end

      def generate_token(user_id)
        JWT.encode({user_id: user_id}, get_secret_key)
      end
  
      def decode_token(token)
        JWT.decode(token, get_secret_key)[0]["user_id"]
      end
end
