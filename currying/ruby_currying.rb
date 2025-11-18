require 'faraday'

final = proc { |method, host, path, optional_params| 

# construct the URL
final_url = host + "/" + path

conn = Faraday.new(
    url: host,
    params: optional_params,
    headers: {'Content-Type' => 'application/json'})

# accepts only lowercase method names, so convert
lowercase_method = method.downcase

response = conn.send(lowercase_method) do |req|
    req.url("/" + path)

    # parse the params
    optional_params.each do |k,v|
        req.params[k] = v
        end
    end
 response.body
  
}.curry

puts final.call("GET").call("https://jsonplaceholder.typicode.com").call("users").call({id:1})
