package xyz.yggdrazil.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by amo on 24/05/16.
 */
@RestController
@RequestMapping("/api/v1/test")
public class TestRestController {
    
    @RequestMapping(method = RequestMethod.GET)
    public String getHello() {
        return "hello";
    }
}
