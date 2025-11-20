require 'faraday'
module RestClient
    REST_CLIENT = proc { |method, host, path, raw_params| 

    # convert `raw_params` into hash and store in `params` IF `raw_params` is not null
    params = {}
    if !raw_params.nil?
        params = Hash[raw_params.split('&').map { |kvpair| kvpair.split('=') }]
    end

    conn = Faraday.new(
        url: host,
        params: params,
        headers: {'Content-Type' => 'application/json'})

    # accepts only lowercase method names, so convert
    lowercase_method = method.downcase

    # passing the method dynamically here
    # e.g. conn.send("get") is the same as conn.get()
    response = conn.send(lowercase_method) do |req|
        req.url("/" + path)
        if (!params.empty?)
            params.each do |k,v|
                req.params[k] = v
                end
            end
        end
    response.body
    
    }.curry
end