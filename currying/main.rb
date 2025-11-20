require_relative 'ruby_currying'

# take the user input
puts("Please, provide the input. The query parameters at the end can be omitted.")
puts("Here is an example (with spaces in between): GET https://jsonplaceholder.typicode.com users/ id=1&username=Bret")

input = gets


# method, host, path - store the first three space-separated tokens;
# the remaining part (the query paramateres) are stored in the *rest
method, host, path, *rest = input.split(" ")

# join back the space separated query params (in case of receiving a space separated param, like name=Leanne Graham)
raw_params = rest.join(" ")

rest_client = RestClient::REST_CLIENT

puts rest_client.call(method).call(host).call(path).call(raw_params)